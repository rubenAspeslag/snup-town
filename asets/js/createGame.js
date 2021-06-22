function createGame() {
    document.querySelector("#playField").classList.toggle("invisable");
}

function saveNewGame(e) {
    e.preventDefault();
    API.createGame(document.querySelector("#nameGame").Value);
    document.querySelector("#playField").classList.toggle("invisable");
    document.querySelector("#createGame").classList.toggle("invisable");
    loadBoard(game.setup);
}