const container = document.querySelector('.container');
const resetButton = document.querySelector('#reset');

// Function to create the grid
function createGrid(size) {
    // Clear the existing grid
    container.innerHTML = '';

    // Calculate the size of each square
    const squareSize = 960 / size;

    // Create the squares
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }
}

// Event listener for the reset button
resetButton.addEventListener('click', () => {
    let newSize = parseInt(prompt('Enter the number of squares per side (maximum 100):', 16));

    // Validate user input
    if (newSize && newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert('Please enter a number between 1 and 100.');
    }
});

// Create the initial grid
createGrid(16);
