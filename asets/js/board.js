function loadBoard(boardSetup) {
    boardSetup.forEach(row => {
        currentRow = document.createElement('div');
    row.forEach(field => {
        currentField = document.createElement('div');
        currentRow.appendChild(currentRow);
    });
    document.querySelector("board").appendChild(currentRow);
});
}