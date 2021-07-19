const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
stopBtn.disabled = true;

function changeBodyColor() {
  console.log('Работает setInterval');
  document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
}

function onStartClick(event) {
  event.target.disabled = true;
  stopBtn.disabled = false;
      timerId = setInterval(changeBodyColor, 1000 );
  }

function onStopClick(event) {
  event.target.disabled = false;
  document.body.style.backgroundColor = 'white';
  startBtn.disabled = false;
  console.log('Работа таймера прекращена');
 clearInterval(timerId);
}
  
startBtn.addEventListener('click', onStartClick);
  stopBtn.addEventListener('click', onStopClick);
