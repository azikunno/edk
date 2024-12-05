const azi = document.querySelector('.azi');
const maze = document.getElementById('maze');

// Define the maze grid
const gridSize = 15; // 15x15 grid

// Initialize Azi's starting position
let aziPosition = { x: 230, y: 230 }; // Start position

// Maze generation function (simple grid with walls and open paths)
function generateMaze() {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = '40px';
            cell.style.height = '40px';
            cell.style.float = 'left';
            cell.style.border = '1px solid #fff';
            maze.appendChild(cell);
        }
    }
}

// Update Azi's position
function updateAziPosition() {
    azi.style.top = `${aziPosition.y}px`;
    azi.style.left = `${aziPosition.x}px`;
}

// Move Azi function
function moveAzi(direction) {
    const step = 40; // Step size for movement
    switch (direction) {
        case 'up':
            if (aziPosition.y > 0) aziPosition.y -= step;
            break;
        case 'down':
            if (aziPosition.y < maze.offsetHeight - 40) aziPosition.y += step;
            break;
        case 'left':
            if (aziPosition.x > 0) aziPosition.x -= step;
            break;
        case 'right':
            if (aziPosition.x < maze.offsetWidth - 40) aziPosition.x += step;
            break;
    }
    updateAziPosition();
}

// Initialize the game
generateMaze();
updateAziPosition();