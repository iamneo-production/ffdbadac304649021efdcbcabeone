const { getTemplateInstallPackage } = require("create-react-app/createReactApp");
const { server } = require("karma");

npm getTemplateInstallPackage


let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const resultContainer = document.querySelector('.result');
const buttons = document.querySelectorAll('.btn');

function makeMove(row, col) {
    if (gameBoard[row * 3 + col] === '' && gameActive) {
        gameBoard[row * 3 + col] = currentPlayer;
        buttons[row * 3 + col].textContent = currentPlayer;
        checkWin();
        togglePlayer();
    }
}

function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    resultContainer.textContent = `Player ${currentPlayer}'s Turn`;
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            resultContainer.textContent = `Player ${currentPlayer} Wins!`;
            disableButtons();
            return;
        }
    }

    if (!gameBoard.includes('')) {
        gameActive = false;
        resultContainer.textContent = "It's a Draw!";
        disableButtons();
    }
}

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    resultContainer.textContent = `Player ${currentPlayer}'s Turn`;
    buttons.forEach(button => {
        button.textContent = '';
        button.disabled = false;
    });
}

// Initialize the game
resultContainer.textContent = `Player ${currentPlayer}'s Turn`;
