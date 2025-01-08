const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('resetButton');
const newGameButton = document.getElementById('newGameButton');
const resultScreen = document.getElementById('resultScreen');
const resultMessage = document.getElementById('resultMessage');
const boardContainer = document.getElementById('board');
let currentPlayer = 'X';
let gameActive = true;
let board = ['', '', '', '', '', '', '', '', ''];

const handleCellClick = (e) => {
    const cellIndex = Array.from(cells).indexOf(e.target);
    if (board[cellIndex] !== '' || !gameActive) return;

    board[cellIndex] = currentPlayer;
    e.target.textContent = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

const checkWinner = () => {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const condition of winningCombinations) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            showResult(`${board[a]} wins!`);
            return;
        }
    }

    if (!board.includes('')) {
        gameActive = false;
        showResult('Draw!');
    }
}

const showResult = (message) => {
    resultMessage.textContent = message;
    resultScreen.classList.remove('hidden');
    boardContainer.classList.add('hidden');
}

const resetGame = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    cells.forEach(cell => cell.textContent = '');
    resultScreen.classList.add('hidden');
    boardContainer.classList.remove('hidden');
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);
newGameButton.addEventListener('click', resetGame);
