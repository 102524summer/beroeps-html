let score = 0;
let gameInterval;
let ballDirection = 2; // 2 pixels per frame
const court = document.getElementById("court");
const ball = document.getElementById("ball");
const player = document.getElementById("player");
const startButton = document.getElementById("start-button");
const scoreDisplay = document.getElementById("score");

function startGame() {
    ball.style.top = '0px';
    ball.style.left = `${Math.random() * 390}px`;
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    gameInterval = setInterval(moveBall, 20);
}

function moveBall() {
    const ballTop = parseInt(ball.style.top);
    const ballLeft = parseInt(ball.style.left);
    if (ballTop >= 290) {
        // Ball hits the ground
        clearInterval(gameInterval);
        alert('Game Over! Je score is: ' + score);
    } else {
        ball.style.top = `${ballTop + ballDirection}px`;
        if (ballTop >= 270 && ballLeft > parseInt(player.style.left) - 30 && ballLeft < parseInt(player.style.left) + 30) {
            // Ball hits the player
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
            ball.style.top = '0px';
            ball.style.left = `${Math.random() * 390}px`;
        }
    }
}

document.addEventListener('mousemove', (event) => {
    const courtRect = court.getBoundingClientRect();
    const mouseX = event.clientX - courtRect.left;
    player.style.left = `${Math.min(Math.max(mouseX, 30), 370)}px`; // Keep player within bounds
});

startButton.addEventListener('click', startGame);