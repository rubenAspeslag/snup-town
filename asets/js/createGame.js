function createGame() {
    document.querySelector("#playField").classList.toggle("invisable");
}

async function saveNewGame(e) {
    e.preventDefault();
    gameName = document.querySelector("#nameGame").value;
    console.log(gameName);
    await API.createGame(gameName);
    setCurrentGame(gameName);
    await loadGame(gameName);
}
async function loadGame(gameName) {
    game = await API.getGame(gameName);
    document.querySelector("#playField").classList.toggle("invisable");
    document.querySelector("#createGame").classList.toggle("invisable");
    loadBoard(JSON.parse(game.setup) );
}


