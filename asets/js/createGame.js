function createGame() {
    document.querySelector("#playField").classList.toggle("invisable");
}

function saveNewGame(e) {
    e.preventDefault();
    game = createGameObject();
    console.log(game);
    saveGame(game);
    document.querySelector("#playField").classList.toggle("invisable");
    document.querySelector("#createGame").classList.toggle("invisable");
    return game.name;
}
function createGameObject() {
    setup =  {
        name: document.querySelector("#nameGame").value,
        setup: Array.from(Array(500), () => new Array(500))
       } 
       return setup;
}