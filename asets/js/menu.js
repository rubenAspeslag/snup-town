function setPageMenuListeners() {
    document.querySelectorAll("[data-moveTo]").forEach(element => element.addEventListener("click", switchPageEvent));
    startOrCreateGameListeners();
}

function startOrCreateGameListeners() {
    document.querySelector("#newGame").addEventListener("click",createGame )
}
function loadGames() {
    let games = API.getGames();
    console.log(games)
}