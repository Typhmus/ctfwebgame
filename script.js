const ball = document.getElementById('ball');
const flag = document.getElementById('flag');
const winMessage = document.getElementById('win-message');

let isDragging = false;

ball.addEventListener('mousedown', () => {
  isDragging = true;
  ball.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (event) => {
  if (!isDragging) return;
  const x = event.clientX;
  const y = event.clientY;
  ball.style.left = `${x - ball.offsetWidth / 2}px`;
  ball.style.top = `${y - ball.offsetHeight / 2}px`;
});

document.addEventListener('mouseup', () => {
  if (!isDragging) return;
  isDragging = false;
  ball.style.cursor = 'grab';
  checkWin();
});

function checkWin() {
  const ballRect = ball.getBoundingClientRect();
  const flagRect = flag.getBoundingClientRect();
  if (ballRect.right >= flagRect.left) {
    winMessage.style.display = 'block';
    new Audio('win-sound.mp3').play();
  }
}