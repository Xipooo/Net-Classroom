$(document).ready(function () {
    function callback(xhttp) {
        let myObj = JSON.parse(xhttp.responseText);
        document.getElementById("result").innerHTML =
            "<strong>Name:</strong> " + myObj.name + " <strong>Age:</strong> " + myObj.age;
    }

    function loadDoc() {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                callback(this);
            }
        }
        xhttp.open("GET", "resources/person.json", true);
        xhttp.send();
    }

    let changeButton = document.getElementById("changeButton");
    changeButton.onclick = loadDoc;
});