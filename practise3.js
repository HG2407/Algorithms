// import {Person} from "./javascript/person.js";

window.addEventListener('load', onLoad);
window.addEventListener('resize', onResize);
let canvas, ctx;
function onLoad(){
    canvas = addElement('canvas', document.body);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext('2d');
    let screenCentreX = 0.5*(window.innerWidth);
    let screenCentreY = 0.5*(window.innerHeight);
    drawRect(screenCentreX, screenCentreY, 100, 200, 'magenta');
    drawRectFromCentre(screenCentreX, screenCentreY, 100, 100)
}

function onResize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let screenCentreX = 0.5*(window.innerWidth);
    let screenCentreY = 0.5*(window.innerHeight);
    drawRect(screenCentreX, screenCentreY, 100, 200, 'magenta');
    drawRectFromCentre(screenCentreX, screenCentreY, 100, 100);

}

function addElement(elementTag, parent){
    let element = document.createElement(elementTag);
    parent.appendChild(element);
    return element;
}

function drawRect(x, y, width, height, color = 'red'){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function drawRectFromCentre(cx, cy, width, height, color = 'yellow'){
    let x = cx - width/2;
    let y = cy - height/2;
    drawRect(x, y, width, height, color);
}

// let Person = new Person('Me', 'you', '28/10/2040');
// let fullName = Person.getFullName();
// console.log(fullName);

class Person{
    constructor(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    }
    getfirstName(){
        return this.firstName;
    }
    getlastName(){
        return this.lastName;
    }
    getfullName(){
        return this.firstName + " " + this.lastName;
    }
    getdob(){
        return this.dob;
    }
}

export {Person};

function drawImage(url, cx, cy, width, height){
    let image = new Image();
    image.src = url;
    let x = cx - width/2;
    let y = cy - height/2;

    image.addEventListener('load', function(){
        ctx.drawImage(image, x, y, width, height);
    }) ;
}

// function swap(arr, i, j){
//     let c = arr[i];
//     arr[i] = arr[j];
//     arr[j] = arr[i];
// }

// function defaultCompare(a, b){
//     let lessThan = -1;
//     let greaterThan = 1;
//     if(a==b){
//         return 0;
//     } else if(a>b){
//         return greaterThan;
//     } else {
//         return lessThan;
//     }
// }

// function sorter(arr, compare = defaultCompare){
//     let {length} = arr;
//     for(let i=0; i<length; i++){
//         for(let j=0; j<length-1-i; j++){
//             if(compare(arr[j], arr[j+1]) == defaultCompare.greaterThan){
//                 swap(arr, j, j+1);
//             }
//         }
//     }
//     return arr;
// }