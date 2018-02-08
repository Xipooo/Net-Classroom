const addChild = () => {
    // let newElem = document.createElement("div");
    // newElem.innerHTML = "This is a new element!";
    // let container = document.getElementById("container");
    // container.appendChild(newElem);

    let newElem = document.createElement("div");
    newElem.innerHTML = "This is a new element!";
    document.getElementById("container").appendChild(newElem);
}
// addButton.onclick = addChild;
document.getElementById("addButton").addEventListener("click", addChild);