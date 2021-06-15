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
