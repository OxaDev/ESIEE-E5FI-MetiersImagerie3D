class ArskanLib {

    constructor() {
        this._this = this;
        this.apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNlbGluZUBrcmFiYmkuZnIiLCJzaWxvIjoiNjIxNjVmOWFlZjAwZjAyZTEzYzc2ZDdjIiwiaWF0IjoxNjQ2OTA5MzExLCJpc3MiOiJodHRwczovL2FwaS5hcnNrYW4uY29tIn0.ENwjv5bwwtwxOWcGMxJ4CZ-GrhamEfDOMjPmm2Bpdac";
        this.profileToken = "5fd0a6c48568fc630e5be379"
    }

    /*
        Objects
    */

    getAllObjectFromSilo() {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + this.apiToken);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        return fetch("https://public-api.arskan.com/objects", requestOptions)
            .then(response => response.text())
            .then(result => { return JSON.parse(result); })
            .catch(error => { return JSON.parse(error); });


    }

    getEmbedUrlOfObjectFromSilo(objectIDString) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + this.apiToken);
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

        return fetch("https://public-api.arskan.com/objects/" + objectIDString + "/embed", requestOptions)
            .then(response => response.text())
            .then(result => { return JSON.parse(result); })
            .catch(error => { return JSON.parse(error); });
    }

    getOneObjectFromSilo(objectIDString) {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + this.apiToken);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        return fetch("https://public-api.arskan.com/objects/" + objectIDString, requestOptions)
            .then(response => response.text())
            .then(result => { return JSON.parse(result); })
            .catch(error => { return JSON.parse(error); });

    }

    /*
        Pointers
    */

    addPointerToObject(objectIDString, pointerDataJSON) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + this._this.apiToken);
        myHeaders.append("Content-Type", "application/json");

        /*var raw = JSON.stringify(
        {
            "title": "Pointeur test",
            "description": "Un test de pointeur",
            "camera": {
                "position": [
                -4.077664170818505,
                -4.847131772241993,
                5.502754761565836],
                "target": [
                4.34378771530249,
                -5.631050889679713,
                2.456711622775799]
            },
            "position": {
                "x": 4.34378771530249,
                "y": -5.631050889679713,
                "z": 2.456711622775799
            }
        }
        );*/

        console.log("0000000" , pointerDataJSON);
        var raw = JSON.stringify(pointerDataJSON);
        
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return fetch("https://public-api.arskan.com/objects/" + objectIDString + "/pointers", requestOptions)
            .then(response => response.text())
            .then(result => { return JSON.parse(result); })
            .catch(error => { return JSON.parse(error); });
    }

    deletePointerFromObject(pointerIDString) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + this.apiToken);

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        return fetch("https://public-api.arskan.com/pointers/" + pointerIDString, requestOptions)
            .then(response => response.text())
            .then(result => { return result; })
            .catch(error => { return JSON.parse(error); });
    }

    getAllPointersFromObject(objectIDString) {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + this.apiToken);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        return fetch("https://public-api.arskan.com/objects/" + objectIDString + "/pointers", requestOptions)
            .then(response => response.text())
            .then(result => { return JSON.parse(result); })
            .catch(error => { return JSON.parse(error); });


    }

    getOnePointerFromSilo(pointerIDString) {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + this.apiToken);
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        return fetch("https://public-api.arskan.com/pointers/" + pointerIDString, requestOptions)
            .then(response => response.text())
            .then(result => { return JSON.parse(result); })
            .catch(error => { return JSON.parse(error); });
    }

    updatePointerFromObject(pointerIDString, pointerDataJSON) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + this.apiToken);
        myHeaders.append("Content-Type", "application/json");

        /*var raw = JSON.stringify({
        "title": "Pointeur test changed",
        "description": "Un test de pointeur",
        "camera": {
            "position": [
            -4.077664170818505,
            -4.847131772241993,
            5.502754761565836
            ],
            "target": [
            4.34378771530249,
            -5.631050889679713,
            2.456711622775799
            ]
        },
        "position": {
            "x": 4.34378771530249,
            "y": -5.631050889679713,
            "z": 2.456711622775799
        }
        });*/

        var raw = JSON.stringify(pointerDataJSON);

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return fetch("https://public-api.arskan.com/pointers/" + pointerIDString, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    /*
        Silos
    */
    getCurrentSilo() {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + this.apiToken);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        return fetch("https://public-api.arskan.com/silos/current", requestOptions)
            .then(response => response.text())
            .then(result => { return JSON.parse(result); })
            .catch(error => { return JSON.parse(error); });

    }

    /*
        Profiles
    */

    getProfilesViewer() {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + this.apiToken);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        return fetch("https://public-api.arskan.com/profiles")
            .then(response => response.text())
            .then(result => { return JSON.parse(result); })
            .catch(error => { return JSON.parse(error); });

    }

}