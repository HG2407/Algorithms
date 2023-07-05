window.addEventListener('load', onLoad);

function onLoad(){
    arrayReversal();
}

function arrayReversal(){
    let c;
    let array = ['wow', 'what', 'a', 'weather !'];
    for(let i=0; i<array.length/2; i++){
        c = array[i];
        array[i] = array[array.length-1-i];
        array[array.length-1-i] = c;
    }
    console.log(array);
}