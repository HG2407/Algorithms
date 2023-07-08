window.addEventListener('load', onLoad);

function onLoad(){
    for(let i=0; i<array.length; i++){
        array[i];
    }
    objectPrinter(person);
    console.log(maxMarksFinder(person));
    fetchJson("data.json", function(data) {
        console.log(data.name, data.age);
    });

}


let person = {
    name : 'Harshit Goswami',
    age : 16,
    email : 'harshitgoswami@example.com',
    marks : [91, 91, 92, 93, 94]
}

// console.log(person.name);
// console.log(person.age);
// console.log(person.email);

// function objectPrinter(obj){
//     let keys = Object.keys(obj);
//     let i=0;
//     while(i<keys.length){
//         let key = keys[i];
//         let value = obj[key];
//         console.log(key + ' : ' + value);
//         i++;
//     }
// }

function maxMarksFinder(obj){
    let i = 0;
    let maxMarksIndex = i;

    while(i<obj.marks.length){
        for(let j=0; j<obj.marks.length; j++){
            if(obj.marks[maxMarksIndex]<obj.marks[j]){
                maxMarksIndex = j;
            }
        }
        i++;
    }

    return maxMarksIndex+1;
}

let book1 = {
    title : 'book1',
    author : 'authorOfBook1',
    year : 'yearOfPublication'
}

let book2 = {
    title : 'book2',
    author : 'authorOfBook2',
    year : 'yearOfPublication'
}

function objectPrinter(obj){
    let keys =  Object.keys(obj);
    let i = 0;

    while(i<keys.length){
        let key = keys[i];
        let value = obj[key];
        console.log(key + ' : ' + value);
        i++;
    }
}


let array = [objectPrinter(book1), objectPrinter(book2)];


// fetch('data.json')
//   .then(response => response.json())
//   .then(data => {
//     // Process the data here
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


function fetchJson(fileUrl, callback) {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', fileUrl, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        // Process the data here
        console.log(data);
        callback(data);
      } else if (xhr.readyState === 4) {
        console.error('Error:', xhr.status);
      }
    };
    xhr.send();

}

