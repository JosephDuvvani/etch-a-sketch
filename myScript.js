const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

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
    container.appendChild(row);
}

const squareList = document.querySelectorAll('.square');

for (let i = 0; i < squareList.length; i++) {
    squareList[i].addEventListener('mouseenter', () => {
        squareList[i].style.backgroundColor = 'red';
    });
}