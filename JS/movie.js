
// Lights on/off for the vide, taken from:  https://vm.tiktok.com/ZMFd1JpUd/
const buttonEL = document.querySelector('.lights-off');
const overlayEL = document.querySelector('.overlay');

const turnOn = () => {
  overlayEL.style.display = 'block'
}
buttonEL.addEventListener("click" , turnOn);

function turnOff(e) {
    if (e.target.matches('.overlay'))
        overlayEL.style.display = 'none';
}
window.addEventListener("click" , turnOff)