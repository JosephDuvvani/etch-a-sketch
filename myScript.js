const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
document.body.appendChild(mainContainer);

const padContainer = document.createElement('div');
padContainer.classList.add('sketch-pad');
mainContainer.appendChild(padContainer);

const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');
padContainer.appendChild(gridContainer);

const header = document.createElement('h1');
header.id = 'title';
header.textContent = 'Etch-a-Sketch';
mainContainer.appendChild(header);
mainContainer.insertBefore(header, padContainer);

let currentColor = 'grey';
let gridSize = 16;

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
    updateGrid(16);
}

let squareList = document.querySelectorAll('.square');
setGreyColor(squareList);

//Color Setting Functions
function setGreyColor(squareList) {
    for (let i = 0; i < squareList.length; i++) {
        let opacity = 0;
        squareList[i].addEventListener('mouseenter', () => {
            if (opacity < 100) opacity += 10;
            squareList[i].style.backgroundColor = `rgb(0 0 0 / ${opacity}%)`;
        });
    }
}

function setRGBColor(squareList) {
    for (let i = 0; i < squareList.length; i++) {
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);

        let opacity = 0;

        squareList[i].addEventListener('mouseenter', () => {
            if (opacity < 100) opacity += 10;
            squareList[i].style.backgroundColor = `rgb(${red} ${green} ${blue} / ${opacity}%)`;
        });
    }
}


//Buttons
const buttons = document.createElement('div');
buttons.classList.add('buttons');
padContainer.appendChild(buttons);

const customiseGridBtn = document.createElement('button');
customiseGridBtn.classList.add('btn');
customiseGridBtn.id = 'custom-grid';
customiseGridBtn.textContent = 'Custom Grid';
customiseGridBtn.style.height = 'auto';
buttons.appendChild(customiseGridBtn);

customiseGridBtn.addEventListener('click', () => {
    let newgridSize = prompt('Enter number of squares! < 100');
    if (newgridSize <= 100) {
        customiseGrid(newgridSize);
        gridSize = newgridSize;
    } else customiseGrid(gridSize);

});

const greyColorBtn = document.createElement('button');
greyColorBtn.classList.add('btn');
greyColorBtn.id = 'grey-btn'
greyColorBtn.textContent = 'Grey';
buttons.appendChild(greyColorBtn);

greyColorBtn.addEventListener('click', () => {
    setGreyColor(squareList);
    currentColor = 'grey';
    updateGrid(gridSize);
});

const rgbColorBtn = document.createElement('button');
rgbColorBtn.classList.add('btn');
rgbColorBtn.id = 'rgb-btn';
rgbColorBtn.textContent = 'RGB';
buttons.appendChild(rgbColorBtn);

rgbColorBtn.addEventListener('click', () => {
    setRGBColor(squareList);
    currentColor = 'rgb';
    updateGrid(gridSize);
});

const eraseBtn = document.createElement('button');
eraseBtn.classList.add('btn');
eraseBtn.id = 'erase-btn';
eraseBtn.textContent = 'Erase';
buttons.appendChild(eraseBtn);
buttons.insertBefore(eraseBtn, greyColorBtn);

eraseBtn.addEventListener('click', () => {
    for (let i = 0; i < squareList.length; i++) {
        squareList[i].addEventListener('mouseenter', () => {
            squareList[i].style.backgroundColor = 'white';
        })
    }
});

const wipeBtn = document.createElement('button');
wipeBtn.classList.add('btn');
wipeBtn.id = 'wipe-btn';
wipeBtn.textContent = 'Wipe';
buttons.appendChild(wipeBtn);
buttons.insertBefore(wipeBtn, greyColorBtn);

wipeBtn.addEventListener('click', () => {
    customiseGrid(gridSize);
});

const colorsLabel = document.createElement('p');
colorsLabel.classList.add('btn-label');
colorsLabel.textContent = 'Pick-a-Color';
colorsLabel.style.color = 'white';
colorsLabel.style.fontSize = '22px';
colorsLabel.style.paddingBottom = '0px';
colorsLabel.style.borderBlockEnd = '3px solid white';
colorsLabel.style.textAlign = 'center';
buttons.appendChild(colorsLabel);
buttons.insertBefore(colorsLabel, greyColorBtn);

const btnList = document.querySelectorAll('.btn');
for (let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener('mouseenter', () => {
        btnList[i].style.backgroundColor = 'lightgrey';
    });
    btnList[i].addEventListener('mouseleave', () => {
        btnList[i].style.backgroundColor = 'rgb(61, 0, 48)';
    });
}


//Remove old grid and Add new grid
function customiseGrid(size) {
    let oldGridRow = document.querySelectorAll('.row');

    for (let i = 0; i < oldGridRow.length; i++) {
        oldGridRow[i].remove();
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
    let squareWidth = 600 / squares;
    let newSquareList = document.querySelectorAll('.square');

    for (let i = 0; i < newSquareList.length; i++) {
        newSquareList[i].style.width = `${squareWidth}px`;
        newSquareList[i].style.height = `${squareWidth}px`;
    }
    switch (currentColor) {
        case 'grey':
            setGreyColor(newSquareList);
            break;
        case 'rgb':
            setRGBColor(newSquareList);
            break;
    }
}