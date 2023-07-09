window.addEventListener('load', onLoad);

// if we want to await a function then that function should always return a promise
//the sole purpose of this function is to pass the given amount of time but since we had to use it with await(for which we need to return promises) we have made it into a new function
function asyncSetTimeOut(time) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, time*1000);
    });
}

function onLoad(){

    init();
    console.log("after init");

}

async function init() {
    console.log('init started');
    let data;

    try{
        data =  await fetchJson('data.json');
        console.log(data.name, data.age);
    } catch(e) {
        console.log(e);
    }
    if(!data) {
        return;
    }
    for(let i=0; i<data.timeouts.length; i++){
        await asyncSetTimeOut(data.timeouts[i]);
        console.log(data.timeouts[i]);
        // setTimeout(function() {
        //     console.log(data.timeouts[i])
        // }, data.timeouts[i]);
    }
}

function seqTimeouts( arr, i ) {
    if(i < arr.length) {
        setTimeout(()=> {
            console.log(arr[i]);
            i++;
            seqTimeouts(arr, i);
        }, arr[i]*1000);
    }
}


let person = {
    name : 'Harshit Goswami',
    age : 16,
    email : 'harshitgoswami@example.com',
    marks : [91, 91, 92, 93, 94]
}

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

function objectPrinter(obj){
    try {
        let keys =  Object.keys(obj);
        let i = 0;
    
        while(i<keys.length){
            let key = keys[i];
            let value = obj[key];
            console.log(key + ' : ' + value);
            i++;
        }
    } catch(e) {
        console.log(e);
    }
    
}


// let array = [objectPrinter(book1), objectPrinter(book2)];


// fetch('data.json')
//   .then(response => response.json())
//   .then(data => {
//     // Process the data here
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


function fetchJson(fileUrl) {

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', fileUrl, true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            // Process the data here
            resolve(data);
          } else if (xhr.readyState === 4) {
            console.error('Error:', xhr.status);
            reject('error');
          }
        };
        xhr.send();
    })

}