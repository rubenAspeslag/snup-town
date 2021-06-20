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
    
};
function checkForErrors(response) {
    if (response.error !== undefined) {
        document.querySelector("#errors").insertAdjacentHTML("beforeend","<p>" + response.error + "</p>")
    }
}