// Game variables
let board = [];
let score = 0;
let gameOver = false;

// Constants
const SIZE = 4; // Size of the board (4x4 grid)
const WINNING_SCORE = 2048; // Score needed to win

// Initialize game
function startGame() {
    board = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
    score = 0;
    gameOver = false;
    document.getElementById('game-over-overlay').style.display = 'none';
    generateTile();
    generateTile();
    updateBoard();
    updateScore();
}

// Update board in UI
function updateBoard() {
    const gameContainer = document.querySelector('.game-container');
    gameContainer.innerHTML = '';

    board.forEach(row => {
        row.forEach(num => {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            if (num === 0) {
                tile.textContent = '';
            } else {
                tile.textContent = num;
                tile.classList.add(`level${num}`);
            }
            gameContainer.appendChild(tile);
        });
    });
}

// Generate a new tile (2 or 4)
function generateTile() {
    const emptyCells = [];
    board.forEach((row, i) => {
        row.forEach((cell, j) => {
            if (cell === 0) {
                emptyCells.push({ x: i, y: j });
            }
        });
    });

    if (emptyCells.length > 0) {
        const { x, y } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        board[x][y] = Math.random() < 0.9 ? 2 : 4;
    }

    checkGameOver();
}

// Check if game is over (no more valid moves)
function checkGameOver() {
    if (board.flat().includes(0)) return;
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            if (j < SIZE - 1 && board[i][j] === board[i][j + 1]) return;
            if (i < SIZE - 1 && board[i][j] === board[i + 1][j]) return;
        }
    }
    gameOver = true;
    document.getElementById('game-over-overlay').style.display = 'flex';
    document.getElementById('final-score').textContent = score;
}

// Handle key presses
document.addEventListener('keydown', function(event) {
    if (!gameOver) {
        switch (event.key) {
            case 'ArrowUp':
                moveTiles('up');
                break;
            case 'ArrowDown':
                moveTiles('down');
                break;
            case 'ArrowLeft':
                moveTiles('left');
                break;
            case 'ArrowRight':
                moveTiles('right');
                break;
        }
    }
});

// Move tiles based on direction
function moveTiles(direction) {
    let moved = false;

    switch (direction) {
        case 'up':
            for (let j = 0; j < SIZE; j++) {
                for (let i = 1; i < SIZE; i++) {
                    if (board[i][j] !== 0) {
                        let k = i;
                        while (k > 0 && board[k - 1][j] === 0) {
                            k--;
                        }
                        if (k > 0 && board[k - 1][j] === board[i][j]) {
                            board[k - 1][j] *= 2;
                            score += board[k - 1][j];
                            board[i][j] = 0;
                            moved = true;
                        } else if (k < i) {
                            board[k][j] = board[i][j];
                            board[i][j] = 0;
                            moved = true;
                        }
                    }
                }
            }
            break;
        case 'down':
            for (let j = 0; j < SIZE; j++) {
                for (let i = SIZE - 2; i >= 0; i--) {
                    if (board[i][j] !== 0) {
                        let k = i;
                        while (k < SIZE - 1 && board[k + 1][j] === 0) {
                            k++;
                        }
                        if (k < SIZE - 1 && board[k + 1][j] === board[i][j]) {
                            board[k + 1][j] *= 2;
                            score += board[k + 1][j];
                            board[i][j] = 0;
                            moved = true;
                        } else if (k > i) {
                            board[k][j] = board[i][j];
                            board[i][j] = 0;
                            moved = true;
                        }
                    }
                }
            }
            break;
        case 'left':
            for (let i = 0; i < SIZE; i++) {
                for (let j = 1; j < SIZE; j++) {
                    if (board[i][j] !== 0) {
                        let k = j;
                        while (k > 0 && board[i][k - 1] === 0) {
                            k--;
                        }
                        if (k > 0 && board[i][k - 1] === board[i][j]) {
                            board[i][k - 1] *= 2;
                            score += board[i][k - 1];
                            board[i][j] = 0;
                            moved = true;
                        } else if (k < j) {
                            board[i][k] = board[i][j];
                            board[i][j] = 0;
                            moved = true;
                        }
                    }
                }
            }
            break;
        case 'right':
            for (let i = 0; i < SIZE; i++) {
                for (let j = SIZE - 2; j >= 0; j--) {
                    if (board[i][j] !== 0) {
                        let k = j;
                        while (k < SIZE - 1 && board[i][k + 1] === 0) {
                            k++;
                        }
                        if (k < SIZE - 1 && board[i][k + 1] === board[i][j]) {
                            board[i][k + 1] *= 2;
                            score += board[i][k + 1];
                            board[i][j] = 0;
                            moved = true;
                        } else if (k > j) {
                            board[i][k] = board[i][j];
                            board[i][j] = 0;
                            moved = true;
                        }
                    }
                }
            }
            break;
    }

    if (moved) {
        generateTile();
        updateBoard();
        updateScore();
    }
}

// Update score in UI
function updateScore() {
    document.getElementById('score').textContent = `Score: ${score}`;
}

// Restart the game
function restartGame() {
    startGame();
}

// Start the game on page load
startGame();
