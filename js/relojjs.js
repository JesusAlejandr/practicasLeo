function actualizarRelojes() {
    const fecha = new Date();


    const relojDigital = document.getElementById('reloj-digital');
    const horaDigital = fecha.getHours().toString().padStart(2, '0');
    const minutoDigital = fecha.getMinutes().toString().padStart(2, '0');
    const segundoDigital = fecha.getSeconds().toString().padStart(2, '0');
    relojDigital.innerText = `${horaDigital}:${minutoDigital}:${segundoDigital}`;


    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();

    const gradosHora = (horas * 30) + (minutos / 2);
    const gradosMinuto = (minutos * 6) + (segundos / 10); 
    const gradosSegundo = segundos * 6; 

    const manecillaHoras = document.getElementById('horas');
    const manecillaMinutos = document.getElementById('minutos');
    const manecillaSegundos = document.getElementById('segundos');

    manecillaHoras.style.transform = `rotate(${gradosHora}deg)`;
    manecillaMinutos.style.transform = `rotate(${gradosMinuto}deg)`;
    manecillaSegundos.style.transform = `rotate(${gradosSegundo}deg)`;
}
setInterval(actualizarRelojes, 1000);
actualizarRelojes();
