
function saveGame(game) {
    if(getGame(game.name) === null) {
        storeNewGame(game);
    } else {
        storeExistingGame(game);
    }
}

function storeNewGame(game) {
    let games = getGames();
    games.push(game);
   // putInLockalStorage("games", JSON.stringify(games));
}
function storeExistingGame(game) {
    //let games = getGames();
    game.savedAt =  new Date();
    games[getGameIndex(game.name)] = game; 
   // putInLockalStorage("games", JSON.stringify(games));
}

function getGames() {
   // return JSON.parse(getFromLockalStorage("games"));
}
function getGame(game) {
    getGames().forEach((currentGame => {
        if (game === currentGame.name) {
            return currentGame;
        }
    }));
    return null;
}
function getGameIndex(game) {
    let i = 0
    getGames().forEach((currentGame => {
        if (game === currentGame.name) {
            return i;
        }
        i++;
    }));
    return null;
}