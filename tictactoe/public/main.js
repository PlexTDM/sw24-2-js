const socket = io('http://192.168.88.42:8081');


const modal1 = document.getElementById("createModal");
const modal2 = document.getElementById("joinModal");
const btn = document.getElementById("createBtn");
const btn2 = document.getElementById("joinBtn");

const close1 = document.getElementsByClassName("close")[0];
const close2 = document.getElementsByClassName("close")[1];

const createName = document.getElementById('createName');

const activeRooms = document.getElementById('activeRooms');

const toast = Toastify({
    text: "Added to Cart",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: () => toast.hideToast()
})

// create Modal
btn.onclick = () => {
    modal1.style.display = "flex";
}
close1.onclick = () => {
    modal1.style.display = "none";
}
window.onclick = (event) => {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
// join Modal
btn2.onmouseup = () => {
    modal2.style.display = "flex";
}
close2.onclick = () => {
    modal2.style.display = "none";
}
window.onclick = (event) => {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

socket.on('message', message => {
    toast.showToast(message);
});


socket.on('getRooms', rooms => {
    console.log(rooms)
    activeRooms.innerHTML = ''
    rooms.forEach(room => {
        activeRooms.innerHTML += `
        <span> ${room}</span>
    `
    });
})


const createRoom = () => {
    socket.emit('createRoom', createName.value);
};

const showRoom = () => {
    console.log('req sent')
    socket.emit('getRooms')
}