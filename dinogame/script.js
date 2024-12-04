const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let isjumping = false;
let jumpHeight = 0;
let score = 0;
let cactusX = canvas.width;
let birdX = canvas.width * 1.5;
let gameOver = false;

const dino = { x: 50, y: canvas.height, width: 30, height: 30 };
const drawDino = () => {
    ctx.fillStyle = "green";
    ctx.fillRect(dino.x, dino.y - dino.height - jumpHeight, dino.width, dino.height);
}
const drawCactus = () => {
    ctx.fillStyle = "brown";
    ctx.fillRect(cactusX, canvas.height - 30, 20, 30);
}
const drawBird = () => {
    ctx.fillStyle = "blue";
    ctx.fillRect(birdX, canvas.height - 90, 20, 30);
}

document.addEventListener("keydown", e => {
    if (e.code === "Space" && !isjumping) {
        isjumping = true;
        let jumpInterval = setInterval(() => {
            if (jumpHeight < 60) {
                jumpHeight += 3;
            } else {
                clearInterval(jumpInterval);
                let fallInterval = setInterval(() => {
                    if (jumpHeight > 0) {
                        jumpHeight -= 3;
                    } else {
                        clearInterval(fallInterval);
                        isjumping = false;
                    }
                }, 20);
            }
        }, 20);
    }
});

const moveCactus = () => {
    cactusX -= 5;
    if (cactusX < -20) {
        cactusX = canvas.width;
        score++;
    }
}

const moveBird = () => {
    birdX -= 5;
    if (birdX < -20) {
        birdX = canvas.width;
        score++;
    }
}

const checkCollsion = () => {
    if (
        cactusX < dino.x + dino.width &&
        cactusX + 20 > dino.x &&
        canvas.height - 30 < dino.y - jumpHeight
    ) {

        gameOver = true;
        alert("game over your score: " + score);
        document.location.reload();
    }

    if (
        birdX < dino.x + dino.width &&
        birdX + 20 > dino.x &&
        canvas.height - 30 > dino.y - jumpHeight
    ) {
        gameOver = true;
        alert("game over your score: " + score);
        document.location.reload();
    }
}

const gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawDino();
    drawCactus();
    drawBird();
    if (gameOver) return;
    moveBird();
    moveCactus();
    checkCollsion();

    document.getElementById("score").textContent = `Score ${score}`;

    requestAnimationFrame(gameLoop);
}

gameLoop();