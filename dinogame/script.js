const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let isjumping = false;
let jumpHeight = 0;
let score = 0;
let gameOver = false;

// Load images for dino, cactus, and bird
const dinoImage = new Image();
dinoImage.src = "dino.png";

const cactusImage = new Image();
cactusImage.src = "cactus.webp";

const birdImage = new Image();
birdImage.src = "bird.png";

const dino = { x: 50, y: canvas.height - 40, width: 40, height: 40 };
const cactus = { x: canvas.width, y: canvas.height - 35, width: 30, height: 40 };
const bird = { x: canvas.width * 1.5, y: 100, width: 50, height: 30 };

const drawDino = () => {
    ctx.drawImage(dinoImage, dino.x, dino.y - jumpHeight, dino.width, dino.height);
};

const drawCactus = () => {
    ctx.drawImage(cactusImage, cactus.x, cactus.y, cactus.width, cactus.height);
};

const drawBird = () => {
    ctx.drawImage(birdImage, bird.x, bird.y, bird.width, bird.height);
};

document.addEventListener("keydown", e => {
    if (e.code === "Space" && !isjumping) {
        isjumping = true;
        let jumpInterval = setInterval(() => {
            if (jumpHeight < 70) {
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
    cactus.x -= 5;
    if (cactus.x < -cactus.width) {
        cactus.x = canvas.width;
        score++;
    }
};

const moveBird = () => {
    bird.x -= 5;
    if (bird.x < -cactus.width) {
        bird.x = canvas.width;
        bird.y = 100;
        score++;
    }
};

const checkCollision = () => {
    // Collision with cactus
    if (
        cactus.x < dino.x + dino.width &&
        cactus.x + cactus.width > dino.x &&
        cactus.y < dino.y + dino.height &&
        cactus.y + cactus.height > dino.y + jumpHeight
    ) {
        gameOver = true;
        alert("Game over! Your score: " + score);
        document.location.reload();
        gameOver = false;
    }

    // Collision with bird
    if (
        bird.x < dino.x + dino.width &&
        bird.x + bird.width > dino.x &&
        bird.y < dino.y + dino.height &&
        bird.y + bird.height >= dino.y - jumpHeight
    ) {
        gameOver = true;
        alert("Game over! Your score: " + score);
        document.location.reload();
        gameOver = false;
    }
};

const gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawDino();
    drawCactus();
    drawBird();
    moveCactus();
    moveBird();
    checkCollision();

    document.getElementById("score").textContent = `Score: ${score}`;

    if (!gameOver) {
        requestAnimationFrame(gameLoop);
    }
};

// Start the game loop after the images are loaded
dinoImage.onload = () => {
    cactusImage.onload = () => {
        gameLoop();
    };
};
