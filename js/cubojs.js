function actualizarReloj() {
    const fecha = new Date();
    const hora = fecha.getHours().toString().padStart(2, '0');
    const minuto = fecha.getMinutes().toString().padStart(2, '0');
    const segundo = fecha.getSeconds().toString().padStart(2, '0');

    document.getElementById('horaFrontal').innerText = hora;
    document.getElementById('minutoTrasera').innerText = minuto;
    document.getElementById('segundoSuperior').innerText = segundo;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();

const cubo = document.getElementById('cubo');
let isMouseDown = false;
let initialX, initialY;
let currentX = 0, currentY = 0;

function onMouseDown(event) {
    isMouseDown = true;
    initialX = event.clientX;
    initialY = event.clientY;
}

function onMouseUp() {
    isMouseDown = false;
}

function onMouseMove(event) {
    if (!isMouseDown) return;

    const moveX = event.clientX - initialX;
    const moveY = event.clientY - initialY;

    const sensitivity = 0.1;

    currentX += moveX * sensitivity;
    currentY -= moveY * sensitivity;

    cubo.style.transform = `rotateY(${currentX}deg) rotateX(${currentY}deg)`;
}

document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
document.addEventListener('mousemove', onMouseMove);
