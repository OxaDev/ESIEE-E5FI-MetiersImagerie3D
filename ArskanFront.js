initPage();
function initPage() {
    libArksan = new ArskanLib();
    var dropdownObjects = document.getElementById("dropdownObjects");

    /// DROPDOWN SELECT MODELS
    libArksan.getAllObjectFromSilo().then(function (result) {
        for (var i = 0; i < Object.keys(result).length; ++i) {
            var newOption = document.createElement("option");
            newOption.value = result[i]._id;
            newOption.text = result[i].name;
            dropdownObjects.add(newOption);
        }

        dropdownObjects.selectedIndex = 6;

        loadNewModel();

    });

}

function loadNewModel() {
    var dropdownObjects = document.getElementById("dropdownObjects");
    var objectIDString = dropdownObjects.options[dropdownObjects.selectedIndex].value;

    var iframe_element = document.getElementById("viewer")
    var libArksan = new ArskanLib();
    libArksan.getEmbedUrlOfObjectFromSilo(objectIDString).then(function (result) {
        iframe_element.src = "https://viewer.arskan.com" + result.url + "?lang=fr";
        loadPointer();
    });
}

function deletePointer(id) {
    libArksan = new ArskanLib();
    var idSPlit = id.split("_");
    var goodId = idSPlit[1];
    libArksan.deletePointerFromObject(goodId).then(function (result) {
        loadNewModel();
    });
}

function editPointer(id) {
    libArksan = new ArskanLib();
    var idSPlit = id.split("_");
    var goodId = idSPlit[1];
    libArksan.getOnePointerFromSilo(goodId).then(function (result) {
        console.log(result);

        document.getElementById("idModalEdit").value = result.id;
        document.getElementById("titleModalEdit").value = result.title;
        document.getElementById("descModalEdit").value = result.description;
        document.getElementById("cameraPosXModalEdit").value = result.camera.position[0];
        document.getElementById("cameraPosYModalEdit").value = result.camera.position[1];
        document.getElementById("cameraPosZModalEdit").value = result.camera.position[2];
        document.getElementById("cameraTargetXModalEdit").value = result.camera.target[0];
        document.getElementById("cameraTargetYModalEdit").value = result.camera.target[1];
        document.getElementById("cameraTargetZModalEdit").value = result.camera.target[2];
        document.getElementById("posXModalEdit").value = result.position.x;
        document.getElementById("posYModalEdit").value = result.position.y;
        document.getElementById("posZModalEdit").value = result.position.z;

    });
}

function saveEditPointer() {
    var id = document.getElementById("idModalEdit").value;

    var title = document.getElementById("titleModalEdit");
    var desc = document.getElementById("descModalEdit");
    var cameraPosX = document.getElementById("cameraPosXModalEdit");
    var cameraPosY = document.getElementById("cameraPosYModalEdit");
    var cameraPosZ = document.getElementById("cameraPosZModalEdit");
    var cameraTargetX = document.getElementById("cameraTargetXModalEdit");
    var cameraTargetY = document.getElementById("cameraTargetYModalEdit");
    var cameraTargetZ = document.getElementById("cameraTargetZModalEdit");
    var posX = document.getElementById("posXModalEdit");
    var posY = document.getElementById("posYModalEdit");
    var posZ = document.getElementById("posZModalEdit");

    var pointerDataJSON = {
        "title": title.value,
        "description": desc.value,
        "camera": {
            "position": [
                parseFloat(cameraPosX.value),
                parseFloat(cameraPosY.value),
                parseFloat(cameraPosZ.value)
            ],
            "target": [
                parseFloat(cameraTargetX),
                parseFloat(cameraTargetY),
                parseFloat(cameraTargetZ)
            ]
        },
        "position": {
            "x": parseFloat(posX.value),
            "y": parseFloat(posY.value),
            "z": parseFloat(posZ.value)
        }
    }


    libArksan = new ArskanLib();
    libArksan.updatePointerFromObject(id, pointerDataJSON).then(function (result) {
        loadNewModel();
    });

    $('#editPointerModal').modal('hide');
}

function loadPointer() {
    libArksan = new ArskanLib();
    var listPointer = document.getElementById("tableBody");
    listPointer.innerHTML = "";

    var dropdownObjects = document.getElementById("dropdownObjects");
    var objectIDString = dropdownObjects.options[dropdownObjects.selectedIndex].value;

    // libArksan.getAllPointersFromObject("62278c9ecd78795d5ce9b451").then(function (result) {
    libArksan.getAllPointersFromObject(objectIDString).then(function (result) {
        for (var i = 0; i < Object.keys(result).length; ++i) {
            var tr = generateLine(i + 1, result[i].id, result[i].title);
            listPointer.appendChild(tr);
        }
    });
}

function generateLine(i, id, title) {
    var newTR = document.createElement("tr");

    var newTD0 = document.createElement("td");
    newTD0.appendChild(document.createTextNode(i));
    newTR.appendChild(newTD0);

    var newTD1 = document.createElement("td");
    newTD1.appendChild(document.createTextNode(title));
    newTD1.setAttribute('id', id);
    newTR.appendChild(newTD1);


    var newTD2 = document.createElement("td");
    newTD2.classList.add("text-center");
    newTR.appendChild(newTD2);

    var aEdit = document.createElement("a");
    // aEdit.classList.add("add"); A VOIR A LA FIN
    aEdit.setAttribute("data-toggle", "tooltip");
    newTD2.appendChild(aEdit);

    var bEdit = document.createElement("button");
    bEdit.classList.add("btn");
    bEdit.classList.add("btn-warning");
    bEdit.classList.add("mr-3");
    bEdit.setAttribute("data-toggle", "modal");
    bEdit.setAttribute("data-target", "#editPointerModal");
    bEdit.setAttribute("id", "buttonUpdate_" + id);
    bEdit.setAttribute("onclick", "editPointer(this.id)");

    var iEdit = document.createElement("i");
    iEdit.classList.add("fa");
    iEdit.classList.add("fa-pencil");

    bEdit.append(iEdit);
    aEdit.appendChild(bEdit);

    var aDelete = document.createElement("a");
    // aDelete.classList.add("add"); A VOIR A LA FIN
    aDelete.setAttribute("data-toggle", "tooltip");
    newTD2.appendChild(aDelete);


    var bDelete = document.createElement("button");
    bDelete.classList.add("btn");
    bDelete.classList.add("btn-danger");
    bDelete.setAttribute("id", "buttonDelete_" + id),
        bDelete.setAttribute("onclick", "deletePointer(this.id)");

    var iDelete = document.createElement("i");
    iDelete.classList.add("fa");
    iDelete.classList.add("fa-trash");

    bDelete.append(iDelete);
    aDelete.appendChild(bDelete);
    return newTR;
}

function addPointer() {
    var libArksan = new ArskanLib();

    var title = document.getElementById("titleModal");
    var desc = document.getElementById("descModal");
    var cameraPosX = document.getElementById("cameraPosXModal");
    var cameraPosY = document.getElementById("cameraPosYModal");
    var cameraPosZ = document.getElementById("cameraPosZModal");
    var cameraTargetX = document.getElementById("cameraTargetXModal");
    var cameraTargetY = document.getElementById("cameraTargetYModal");
    var cameraTargetZ = document.getElementById("cameraTargetZModal");
    var posX = document.getElementById("posXModal");
    var posY = document.getElementById("posYModal");
    var posZ = document.getElementById("posZModal");

    var dropdownObjects = document.getElementById("dropdownObjects");
    var objectIDString = dropdownObjects.options[dropdownObjects.selectedIndex].value;

    var pointerDataJSON = {
        "title": title.value,
        "description": desc.value,
        "camera": {
            "position": [
                parseFloat(cameraPosX.value),
                parseFloat(cameraPosY.value),
                parseFloat(cameraPosZ.value)
            ],
            "target": [
                parseFloat(cameraTargetX.value),
                parseFloat(cameraTargetY.value),
                parseFloat(cameraTargetZ.value)
            ]
        },
        "position": {
            "x": parseFloat(posX.value),
            "y": parseFloat(posY.value),
            "z": parseFloat(posZ.value)
        }
    }

    libArksan.addPointerToObject(objectIDString, pointerDataJSON).then(function (result) {
        loadNewModel();
    });


    $('#addPointerModal').modal('hide');
}