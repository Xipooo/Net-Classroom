// function callback(xhttp){
//     document.getElementById("result").innerHTML = xhttp.responseText;
// }

// function loadDoc(){
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200){
//             callback(this);
//         }
//     }
//     xhttp.open("GET", "resources/_info.html", true);
//     xhttp.send();
// }

// let changeButton = document.getElementById("changeButton");
// changeButton.onclick = loadDoc;

$(document).ready(function() {
    $("#changeButton").click(function(){
        $("#result").load("resources/_info.html");
    });
});