window.addEventListener("load", onLoad);
function onLoad() {
    let imgElement = addElement('img');
    imgElement.src = 'images/myimage.jpg';
    imgElement.width = 1277;
    imgElement.height = 601;

    let divElement = addElement('div');
    
    let h1Element = addElement("h1");
    h1Element.innerText = "Welcome!";
    divElement.appendChild(h1Element);

    let buttonElement = addElement('button');
    buttonElement.innerText = "Click me!";
    buttonElement.id = "myButton";

    buttonElement.addEventListener("click", onButtonClick);
    divElement.appendChild(buttonElement);
}

function onButtonClick() {
    console.log("mouse clicked in button");
}

function addElement(elementTag) {
    let element = document.createElement(elementTag);
    document.body.appendChild(element);

    return element;

}