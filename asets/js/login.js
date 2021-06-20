function setLoginListener() {
    document.querySelector("#loginForm").addEventListener("submit", login);
}
async function login(e) {
    console.log("aaaaaad")
    e.preventDefault();
    let loginData = getLoginData();
    let sessionID = await getSessionID(loginData);
    console.log(sessionID);
    putInLockalStorage("sessionID",sessionID);
    switchPage("titleScreen", "titleScreen")
}
function getLoginData() {
    username = document.querySelector("#username").value;
    password = document.querySelector("#password").value;
    return {"username": username, "password": password}
}

async function getSessionID(loginData) {
    if(document.querySelector("#authoriseMethod").value === "signIn") {
        return await API.login(loginData)
    } else {
        return await API.register(loginData)
    }
}