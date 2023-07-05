import { Person } from "./practise3.js";

window.addEventListener('load', onLoad);
window.addEventListener('resize', onResize);
let ctx, canvas;

function onLoad(){
    let date1 = [29, 6, 2023];
    let date2 = [15, 6, 2023];

    totalDaysBetweenDates(date1, date2);
    console.log(window.innerWidth, window.innerHeight);
    canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext('2d');
    drawRect(50, 50, 100, 200, 'green');
    let screenCentreX = 0.5*(window.innerWidth);
    let screenCentreY = 0.5*(window.innerHeight);
    drawRectFromCentre(screenCentreX, screenCentreY, 100, 100, 'blue');
    drawCircle(screenCentreX, screenCentreY, 50, 'red');
    drawImage('images/myimage.jpg', screenCentreX, screenCentreY, window.innerWidth, window.innerHeight);
}

function totalDaysBetweenDates(date1, date2){
 

    if(date1[1]>date2[1]){
        firstDate = date2;
        secondDate = date1;
        console.log(differentMonths(firstDate, secondDate));

    } else if(date1[1]<date2[1]){
        firstDate = date1;
        secondDate = date2;
        console.log(differentMonths(firstDate,secondDate));

    } else if(date1[1]==date2[1]){

        if(date2[0]>date1[0]){
            firstDate = date1;
            secondDate = date2;
        } else {
            firstDate = date2;
            secondDate = date1;
        }
        console.log(sameMonths(firstDate,secondDate));
    }
}

function differentMonths(firstDate, secondDate){
    let daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let totalDays = 0;
    let startingMonth = firstDate[1];
    for(let i=startingMonth; i<secondDate[1]-1;i++){
        totalDays += daysInMonths[i];
    }
    
    let daysInInitialMonth = daysInMonths[firstDate[1]-1] - firstDate[0];
    let daysInFinalMonth = secondDate[0];
    totalDays += daysInFinalMonth + daysInInitialMonth;
    return totalDays;
}

function sameMonths(firstDate, secondDate){
    let totalDays = secondDate[0] - firstDate[0];
    return totalDays;
}
 function drawRect(x, y, width, height, color = 'yellow'){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);

 }

 function drawRectFromCentre(cx, cy, width, height, color){
    let x = cx - width/2;
    let y = cy - height/2;
    drawRect(x, y, width, height, color);
 }

 function onResize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawRect(50, 50, 100, 200, 'green');
    let screenCentreX = 0.5*(window.innerWidth);
    let screenCentreY = 0.5*(window.innerHeight);
    drawRectFromCentre(screenCentreX, screenCentreY, 100, 100, 'blue');
    drawCircle(screenCentreX, screenCentreY, 50);
    drawImage('images/myimage.jpg', screenCentreX, screenCentreY, window.innerWidth, window.innerHeight);
 }

 function drawCircle(x, y, radius, color = 'yellow'){
    // Set the fill color of the circle
    ctx.fillStyle = color;

    // Draw a circle with a specified position (x, y) and radius
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI); // x: 100, y: 100, radius: 50, startAngle: 0, endAngle: 2 * PI
    ctx.closePath();
    ctx.fill();
 }

 function drawImage(url, cx, cy, width, height){
    let image = new Image();
    image.src = url;
    let x = cx - width/2;
    let y = cy - height/2; 
    // let width = window.innerWidth;
    // let height = window.innerHeight;
    image.addEventListener('load', function(){
        ctx.drawImage(image, x, y, width, height);

    })
 }

 let person = new Person('Harshit', 'Goswami', '24/07/2006');
 let fullName = person.getfullName();
 console.log(fullName);