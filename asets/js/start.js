document.addEventListener("DOMContentLoaded", init);
function init()  {
    addEventListeners();
    showTitlescreen();
    initLocalStorage();
}

function addEventListeners() {
    setPageMenuListeners();
    setGameListeners();
}

function setGameListeners() {
    document.querySelector("#createGame").addEventListener("submit", saveNewGame);
}