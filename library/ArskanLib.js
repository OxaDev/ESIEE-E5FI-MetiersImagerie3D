class ArskanLib{

    constructor(){
        this._this = this;
        this.apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNlbGluZUBrcmFiYmkuZnIiLCJzaWxvIjoiNjIxNjVmOWFlZjAwZjAyZTEzYzc2ZDdjIiwiaWF0IjoxNjQ2OTA5MzExLCJpc3MiOiJodHRwczovL2FwaS5hcnNrYW4uY29tIn0.ENwjv5bwwtwxOWcGMxJ4CZ-GrhamEfDOMjPmm2Bpdac";
        this.profileToken = "5fd0a6c48568fc630e5be379"
    }

    /*
        Objects
    */
    addObjectToSilo(){
        
    }

    getAllObjectFromSilo(){
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer "+ this.apiToken);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        return fetch("https://public-api.arskan.com/objects", requestOptions)
        .then(response => response.text())
        .then(result => {return JSON.parse(result);})
        .catch(error => {return JSON.parse(error); });

        
    }

    getEmbedUrlOfObjectFromSilo(objectIDString){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+this.apiToken);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "profile": this.profileToken,
        "name": "lien"
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        return fetch("https://public-api.arskan.com/objects/"+objectIDString+"/embed", requestOptions)
        .then(response => response.text())
        .then(result => {return JSON.parse(result);})
        .catch(error => {return JSON.parse(error); });
    }

    getOneObjectFromSilo(objectIDString){
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer "+ this.apiToken);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        return fetch("https://public-api.arskan.com/objects/"+objectIDString, requestOptions)
        .then(response => response.text())
        .then(result => {return JSON.parse(result);} )
        .catch(error => {return JSON.parse(error); });

    }
    
    /*
        Pointers
    */

    addPointerToObject(){

    }

    deletePointerFromObject(){

    }

    getAllPointersFromObject(objectIDString){
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer "+ this.apiToken);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        return fetch("https://public-api.arskan.com/objects/"+objectIDString+"/pointers", requestOptions)
        .then(response => response.text())
        .then(result => {return JSON.parse(result);})
        .catch(error => {return JSON.parse(error); });


    }

    getOnePointerFromSilo(pointerIDString){
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer "+ this.apiToken);
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        
        return fetch("https://public-api.arskan.com/pointers/"+pointerIDString, requestOptions)
        .then(response => response.text())
        .then(result => {return JSON.parse(result);})
        .catch(error => {return JSON.parse(error); });
    }

    updatePointerFromObject(){

    }

    /*
        Silos
    */
    getCurrentSilo(){
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer "+ this.apiToken);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        return fetch("https://public-api.arskan.com/silos/current", requestOptions)
        .then(response => response.text())
        .then(result => {return JSON.parse(result);})
        .catch(error => {return JSON.parse(error); });

    }

    /*
        Profiles
    */

    getProfilesViewer(){
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer "+ this.apiToken);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        return fetch("https://public-api.arskan.com/profiles")
        .then(response => response.text())
        .then(result => {return JSON.parse(result);})
        .catch(error => {return JSON.parse(error); });

    }

}