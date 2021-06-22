function loadBoard(boardSetup) {
    boardSetup.forEach(row => {
        currentRow = document.createElement('div');
        row.forEach(field => {
            currentField = document.createElement('div');
            currentRow.appendChild(currentField);
        });
    document.querySelector("#fields").appendChild(currentRow);
});
}