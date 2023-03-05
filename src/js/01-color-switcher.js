const openBtn = document.querySelector('button[data-start]');
const closeBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let intervalid = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor(evt) {
  openBtn.setAttribute('disabled', true);
  intervalid = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

openBtn.addEventListener('click', changeColor);
closeBtn.addEventListener('click', () => {
  clearInterval(intervalid);
  openBtn.removeAttribute('disabled');
});
