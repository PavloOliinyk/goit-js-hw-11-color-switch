import colors from './js/colors';

let timerId = null;

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
stopBtn.disabled = true;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBodyColor() {
  document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
}

function onStartChangeBodyColor(event) {
  event.target.disabled = true;
  stopBtn.disabled = false;

  timerId = setInterval(changeBodyColor, 1000);
}

function onStopClick(event) {
  event.target.disabled = true;
  startBtn.disabled = false;

  document.body.style.backgroundColor = 'white';

  clearInterval(timerId);
}

startBtn.addEventListener('click', onStartChangeBodyColor);
stopBtn.addEventListener('click', onStopClick);
