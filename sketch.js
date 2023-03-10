let size = 16;

const removeElementsByClass = (className) => {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

const generateInitialGrid = (size) => {
    let grid;
    if (document.getElementById('container') === null) {
        grid = document.createElement('div');
        grid.className = 'grid';
        grid.id = 'container'
    }
    else grid = document.getElementById('container');

    if (document.getElementById('row') === null) {
        removeElementsByClass('row');
    }
    if (document.getElementById('column') === null) {
        removeElementsByClass('column');
    }

    for (let c = 0; c < size; ++c) {

        let column = document.createElement('div'); // create column
        column.className = 'column';
        for (let r = 0; r < size; ++r) {
            let row = document.createElement('div'); // create row
            row.className = 'row';
            let squareSize = 640 / size;
            row.id = c + '-' + r
            row.style = `width: ${squareSize}px; height: ${squareSize}px; background: whitesmoke; `
            row.addEventListener('mouseover', function (event) {
                row.style.backgroundColor = "black";
            });
            column.appendChild(row); // append row in column
        }
        grid.appendChild(column); // append column inside grid
    }
    document.body.appendChild(grid);
}

const generateGrid = (size) => {
    generateInitialGrid(size)
}


generateInitialGrid(size);

const changeSizeButton = document.getElementById("change-size");
changeSizeButton.addEventListener('click', function (event) {
    let gridSize = prompt("Choose size of grid (to 100px): ", 16);
    while (gridSize > 100 || gridSize <= 16) {
        console.log("while");
        gridSize = prompt("Choose size of grid (between 16 and 100): ", 16);
    }
    if (gridSize <= 100 && gridSize > 16) {
        generateGrid(gridSize);
    }
});