var API = { 
    url : "http://127.0.0.1:8080",

    fetchFromServer: function (url, httpVerb, requestBody){
        const playerToken ="";
        const options= {};
        options.method = httpVerb;
    
        options.headers = {};
        // options.headers["Content-Type"] = "Content-Type";
    
        
        // Don't forget to add data to the body when needed
        options.body = JSON.stringify(requestBody);
        return fetch(url, options)
            .then((response) => {
                if (!response.ok) {
                    console.error('%c%s','background-color: red;color: white','! An error occurred while calling the API');
                    console.table(response);
                }
                response = response.json();
               
                return response;
            })
            .then((jsonresponsetoparse) => {
                return jsonresponsetoparse;
            });
    },
    
    login: async function (loginData) {
        let versions;
        await this.fetchFromServer(`${this.url}/login`,'POST', loginData).then( function(response){
            checkForErrors(response);
            versions = response.sessionID;
            }
        );
        return versions;
    },
    register: async function (loginData) {
        let versions;
        await this.fetchFromServer(`${this.url}/register`,'POST', loginData).then( function(response){
            checkForErrors(response);
            versions = response.sessionID;
            }
        );
        return versions;
    },
    getGames: async function () {
        let versions;
        await this.fetchFromServer(`${this.url}/getGames`,'POST', authorise()).then( function(response){
            checkForErrors(response);
            versions = response;
            }
        );
        return versions;
    },
    getGame: async function (gameName) {
        let versions;
        console.log(selectGame(gameName))
        await this.fetchFromServer(`${this.url}/getGame`,'POST', selectGame(gameName)).then( function(response){
            checkForErrors(response);
            versions = response;
            }
        );
        console.log(versions)
        return versions;
    },
    createGame: async function(gameName) {
        let versions;
        console.log(getCreateGameBody(gameName));
        await this.fetchFromServer(`${this.url}/createGame`,'POST', getCreateGameBody(gameName)).then( function(response){
            checkForErrors(response);
            versions = response;
            }
        );
        return versions;
    }

    
}; 
function getCreateGameBody(gameName) {
    return {
        "sessionID": getFromLockalStorage("sessionID"),
        "gameName" : gameName
    }
}
function selectGame(gameName) {
    let game = authorise();
    game.gameName = gameName;
    return game;
}
function checkForErrors(response) {
    if (response.error !== undefined) {
        document.querySelector("#errors").insertAdjacentHTML("beforeend","<p>" + response.error + "</p>")
    }
}
function authorise() {
    let loginData = {};
    loginData.sessionID = getFromLockalStorage("sessionID");
    return loginData;
}