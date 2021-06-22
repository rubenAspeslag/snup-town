
function putInLockalStorage(key, value) {
    try {
        localStorage.setItem(key,value)
    } catch {
        alert("your lockalstorage is full <br> please make it empty <br> this is probably becose you have to many saved games <br> you can always save the value of the lockalstorage var \"games\" in a file on your computer to acces it again later<br> ")
    }
}

function getFromLockalStorage(key) {
    return localStorage.getItem(key);
}

function getCurrentGame() {
    return localStorage.getItem("currentGame");
}
function setCurrentGame(gameName) {
    localStorage.setItem("currentGame" , gameName);
}