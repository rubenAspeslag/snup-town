function initLocalStorage() {
    if (getFromLockalStorage("games")=== null) {
        putInLockalStorage("games", "[]");
    }
}
function putInLockalStorage(key, value) {
    localStorage.setItem(key,value)
}

function getFromLockalStorage(key) {
    return localStorage.getItem(key);
}

function saveGame(game) {
    console.log(getGames())
    let games = getGames();
    games.push(game)
    putInLockalStorage("games", JSON.stringify(games))
}
function getGames() {
    return JSON.parse(getFromLockalStorage("games"));
}