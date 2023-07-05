// window.addEventListener("load", onLoad);

// function onLoad(){
//     // let image = addElement('img', document.body);
//     // image.src = 'images/myimage.jpg';

//     let div = addElement('div', document.body);

//     let button = addElement('button', div);
//     button.addEventListener('click', onButtonClick);
//     button.innerText = 'Click me!';

//     let heading1 = addElement('h1', div);
//     heading1.innerText = "Hello, World!";
//     heading1.addEventListener('click', onHeading1Click);

//     details("Tanmay Goswami", "Harshit Goswami", "24/07/06");

// }

// function addElement(elementTag, parent){
//     let element = document.createElement(elementTag);
//         parent.appendChild(element);
//     return element;
// }

// function onButtonClick(){
//     console.log('you have clicked the button!');
// }

// function onHeading1Click(){
//     let heading2 = addElement('h2', document.body);
//         heading2.innerText = "Hello!";
//     return heading2.innerText;
// }

// function details(NameofFather, NameofPerson, dateOfBirth){
//     let fatherName = NameofFather;
//     let MynName = NameofPerson;
//     let dob = dateOfBirth;

//     console.log(fatherName, MynName, dob);

// }


// window.addEventListener("load", onLoad);
// function onLoad() {
//     let imgElement = addElement('img', document.body);
//     imgElement.src = 'images/myimage.jpg';
//     imgElement.width = 1277;
//     imgElement.height = 601;

//     let divElement = addElement('div', document.body);
    
//     let h1Element = addElement("h1", divElement);
//     h1Element.innerText = "Welcome!";

//     let buttonElement = addElement('button', divElement);
//     buttonElement.innerText = "Click me!";
//     buttonElement.id = "myButton";

//     buttonElement.addEventListener("click", onButtonClick);
// }

// function onButtonClick() {
//     console.log("mouse clicked the button");
// }

// function addElement(elementTag, parent) {
//     let element = document.createElement(elementTag);
//     parent.appendChild(element);

//     return element;

// }

window.addEventListener('load', onLoad);
window.addEventListener('resize', onResize);
let ctx, canvas;
function onLoad(){
    
    canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    ctx = canvas.getContext('2d');
    let screenCentreX = 0.5*(window.innerWidth);
    let screenCentreY = 0.5*(window.innerHeight);
    drawCircle(screenCentreX, screenCentreY, 50, 'red');
    console.log(factorial(100));
    // countDownRecursion(5);
    // countDown(7);
    // console.log(fibonacci(1));
    console.log(factorialRecursion(10));
    arrayReversal();
    // console.log(arrayReversalRecursion);
    countDown(10);

}

function onResize(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    let screenCentreX = 0.5*(window.innerWidth);
    let screenCentreY = 0.5*(window.innerHeight);
    drawCircle(screenCentreX, screenCentreY, 50, 'red');
}
function drawCircle(x, y, radius, color = 'yellow'){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2* Math.PI);
    ctx.closePath();
    ctx.fill();

}

// function factorial(num){
//     if(num>0){
//         return num*factorial(num-1);
//     } 
//     return 1;
    
// }

// function factorial(num){
//      let result = 1;
//     for(let i=num; i>0; i--){
//      result *= i;
//     }
//     return result;
// }

// function fibonacci(num){
//     let result = 0;
//     if (num<55){
//         return result += fibonacci(num+fibonacci(num-1));
//     }
//     return result;
// }


// function factorial(num){
//     let result = 1;
//     for(let i=num; i>0; i--){
//         result *= i;
//     }
//     return result;
// }

function factorial(num){
    let result = 1;
    if (num>0){
        return result *= num*factorial(num-1);
    }
    return 1;
}

// function countDown(num){
//     // let countDownArray =[];
//     let sentence = "";
    
//     for(let i=num; i>=0; i--){
//         sentence += " " + i + " ";
//     }
//     console.log('[' + sentence + ']');
// }

// function countDownRecursion(num){
//     let sentence = "";
//     sentence = num;
    
//     if (num>=0){
//         console.log(sentence);
//         countDownRecursion(num-1);
//     } 
// }

function countDown(num){
    sentence = "";
    for(let i=num; i>=0; i--) {
        if( i>1){
        sentence +=" " + i + ",";
    } else if(i==1){
        sentence += " " + i;
    }
    // } else if(i==0){
    //     sentence += i + ".";
    // }
}
    console.log('[' + sentence + ']')
}

// let factorial(num) {
//     let result = 1;
//     for(let i=num; i>0; i--){
//         return result *= i;
//     }
//     return result;
// }

function factorialRecursion(num){
    let i=num;
    if (i>0){
    return num*factorialRecursion(num-1);
    }
    return 1;
}

function arrayReversal(){
    let string = ['hello', 'world!', 'how', 'do', 'you', 'do'];
    let sentence = "";
    for(let i=string.length-1; i>=0; i--){
        if(i>0){
        sentence += string[i] + " ";
    } else if(i==0){
        sentence += string[i] + ".";
    }
    }
    console.log(sentence);

}

// function arrayReversalRecursion(){
//     let string = ['hello', 'world!', 'how', 'do', 'you', 'do'];
//     let sentence = "";
//     let i;
//     if( i>0){
//     sentence += string[i] + " "; 
//         arrayReversalRecursion();
//     } else if(i==0){
//     sentence += string[i] + ".";
//     }
//     return sentence;
// }

