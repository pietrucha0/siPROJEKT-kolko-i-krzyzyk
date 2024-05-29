let currentPlayer = 'X'; 
const board = document.getElementById('board'); 
const cells = []; 

function initBoard() {
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div'); 
        cell.classList.add('cell'); 
        cell.addEventListener('click', handleCellClick); 
        board.appendChild(cell); 
        cells.push(cell); 
    }
}

function handleCellClick(event) {
    const cell = event.target; 
    if (cell.textContent === '') {
        cell.textContent = currentPlayer;
        if (checkWin(currentPlayer)) {
            alert(`${currentPlayer} wygrał!`); 
            resetBoard();
        } else if (cells.every(cell => cell.textContent !== '')) { 
            alert('Remis!');
            resetBoard(); 
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; 
        }
    }
}

function checkWin(player) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];
    return winPatterns.some(pattern => 
        pattern.every(index => cells[index].textContent === player)
    );
}

function resetBoard() {
    cells.forEach(cell => cell.textContent = ''); 
    currentPlayer = 'X';
}

initBoard();