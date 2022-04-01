
function fillDropdownSillos(){
	var dropdownSillos=document.getElementById("dropdownObjects");

	libArksan = new ArskanLib();
    // id chappelle : 62278c9ecd78795d5ce9b451
    // Profile id : 5fd0a6c48568fc630e5be379
    libArksan.getAllObjectFromSilo().then(function (result) {
    	console.log("results: ",results);
    } );





}

