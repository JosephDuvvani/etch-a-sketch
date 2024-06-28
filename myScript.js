const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

for (let i = 1; i <= 16; i++) {
    let row = document.createElement('div');
    row.classList.add(`row${i}`);
    row.classList.add('row');
    for (let j = 1; j <= 16; j++) {
        let column = document.createElement('div');
        column.classList.add(`column${j}`);
        column.classList.add('square');
        row.appendChild(column);
    }
    container.appendChild(row);
}