const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
document.body.appendChild(mainContainer);

const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');
mainContainer.appendChild(gridContainer);

for (let i = 1; i <= 16; i++) {
    let row = document.createElement('div');
    row.classList.add(`row${i}`);
    row.classList.add('row');
    for (let j = 1; j <= 16; j++) {
        let square = document.createElement('div');
        square.classList.add(`column${j}`);
        square.classList.add('square');
        square.id = `square${i}${j}`;
        row.appendChild(square);
    }
    gridContainer.appendChild(row);
}

const squareList = document.querySelectorAll('.square');

for (let i = 0; i < squareList.length; i++) {
    squareList[i].addEventListener('mouseenter', () => {
        squareList[i].style.backgroundColor = 'red';
    });
}

//Customising Button
const customiseGridBtn = document.createElement('button');
customiseGridBtn.id = 'custom-grid';
customiseGridBtn.textContent = 'Custom Grid';
customiseGridBtn.style.height = '100px';
mainContainer.appendChild(customiseGridBtn);

customiseGridBtn.addEventListener('click', () => {
    let gridSize = prompt('Enter Square Number!');
    customiseGrid(gridSize);
});

//Remove old grid and Add new grid
function customiseGrid(size) {
    let oldGrid = document.querySelectorAll('.row');

    for (let i = 0; i < oldGrid.length; i++) {
        oldGrid[i].remove();
    }

    for (let i = 1; i <= size; i++) {
        let row = document.createElement('div');
        row.classList.add(`row${i}`);
        row.classList.add('row');
        for (let j = 1; j <= size; j++) {
            let square = document.createElement('div');
            square.classList.add(`column${j}`);
            square.classList.add('square');
            square.id = `square${i}${j}`;
            row.appendChild(square);
        }
        gridContainer.appendChild(row);
    }

    updateGrid(size);
}

//Update size of the square to fit
function updateGrid(squares) {
    let squareWidth = 800 / squares;
    let newSquareList = document.querySelectorAll('.square');

    for (let i = 0; i < newSquareList.length; i++) {
        newSquareList[i].style.width = `${squareWidth}px`;
        newSquareList[i].style.height = `${squareWidth}px`;
    }

    for (let i = 0; i < newSquareList.length; i++) {
        newSquareList[i].addEventListener('mouseenter', () => {
            newSquareList[i].style.backgroundColor = 'red';
        });
    }
}