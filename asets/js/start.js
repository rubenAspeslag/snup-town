document.addEventListener("DOMContentLoaded", init);
function init()  {
    addEventListeners();
    initScreen();
}

function addEventListeners() {
    setPageMenuListeners();
    setLoginListener();
    setGameListeners();
}

function setGameListeners() {
    document.querySelector("#createGame").addEventListener("submit", saveNewGame);
}
function initScreen() {
    if (getFromLockalStorage("sessionID") === null) {
        showLoginscreen()
    } else {
        showTitlescreen();
        loadGames();
    }
}