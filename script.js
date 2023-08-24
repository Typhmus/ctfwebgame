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

  const ballCenterX = ballRect.left + ballRect.width / 2;
  const ballCenterY = ballRect.top + ballRect.height / 2;

  if (
    ballCenterX >= flagRect.left &&
    ballCenterX <= flagRect.right &&
    ballCenterY >= flagRect.top &&
    ballCenterY <= flagRect.bottom
  ) {
    winMessage.style.display = 'block';
    new Audio('win-sound.mp3?v=1').play();
    resetGame();
  }
}

function resetGame() {
  // Reset the ball's position to the original position
  ball.style.left = '0px';
  ball.style.top = '0px';

  // Hide the win message
  winMessage.style.display = 'none';
}
