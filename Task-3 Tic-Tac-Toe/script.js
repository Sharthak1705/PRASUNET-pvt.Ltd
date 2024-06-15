document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const resetButton = document.getElementById('resetButton');
    let cells;
    let currentPlayer = 'X';
    let gameActive = true;
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function initializeGame() {
        board.innerHTML = '';
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('data-index', i);
            cell.addEventListener('click', handleCellClick);
            board.appendChild(cell);
        }
        cells = document.querySelectorAll('.cell');
    }

    function handleCellClick(event) {
        const cell = event.target;
        const index = cell.getAttribute('data-index');

        if (cell.textContent || !gameActive) return;

        cell.textContent = currentPlayer;
        cell.classList.add(`player${currentPlayer}`);

        if (checkWin()) {
            gameActive = false;
            setTimeout(() => alert(`${currentPlayer} wins!`), 100);
        } else if (isDraw()) {
            gameActive = false;
            setTimeout(() => alert('Draw!'), 100);
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    function checkWin() {
        return winningConditions.some(condition => {
            return condition.every(index => {
                return cells[index].textContent === currentPlayer;
            });
        });
    }

    function isDraw() {
        return Array.from(cells).every(cell => cell.textContent);
    }

    resetButton.addEventListener('click', () => {
        currentPlayer = 'X';
        gameActive = true;
        initializeGame();
    });

    initializeGame();
});