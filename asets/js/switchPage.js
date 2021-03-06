function switchPage(from, page) {   
    document.querySelector("#" + page).classList.toggle("invisable");
    document.querySelector("#" + from).classList.toggle("invisable");
}
function switchPageEvent(e) {
    from = getCurrentPage(e.currentTarget);
    switchPage(from.id, e.currentTarget.dataset.moveto)
}
function getCurrentPage(element) {
    if (element.nodeName === "ARTICLE") {
        return element;
    } else {
        return getCurrentPage(element.parentElement);
    }

}
function showLoginscreen() {
    document.querySelector("#setings").classList.toggle("invisable");
    document.querySelector("#titleScreen").classList.toggle("invisable");
    document.querySelector("#game").classList.toggle("invisable");
}
function showTitlescreen() {
    document.querySelector("#setings").classList.toggle("invisable");
    document.querySelector("#login").classList.toggle("invisable");
    document.querySelector("#game").classList.toggle("invisable");
}