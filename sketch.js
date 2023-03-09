let columns = 16;
let rows = 16;

const grid = document.createElement('div');
grid.className = 'grid';
for (let c = 0; c < columns; ++c) {
    let column = document.createElement('div'); // create column
    column.className = 'column';
    for (let r = 0; r < rows; ++r) {
        let row = document.createElement('div'); // create row
        row.className = 'row';
        row.addEventListener('click', function (event) {
            row.style.backgroundColor = "black";
        });
        row.addEventListener('mouseover', function (event) {
            row.style.backgroundColor = "black";
        });
        column.appendChild(row); // append row in column
    }
    grid.appendChild(column); // append column inside grid
}
document.body.appendChild(grid);


// for (let column = 1; column < 17; column++) {

//     let columnDiv = document.createElement("div");
//     columnDiv.setAttribute("id", column);
//     columnDiv.setAttribute("class", "column" + column);
//     columnDiv.setAttribute("style", "height: 40px; width: 40px; float: left; background-color: #000000");
//     appContainer.appendChild(columnDiv);

//     for (let row = 1; row < 17; row++) {

//         let rowDiv = document.createElement("div");
//         rowDiv.setAttribute("id", row + column);
//         rowDiv.setAttribute("class", "row" + column);
//         columnDiv.setAttribute("style", "height: 40px; width: 40px; float: left; background-color: #ff0000");
//         appContainer.appendChild(rowDiv);
//     }
// }
