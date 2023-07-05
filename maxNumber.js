window.addEventListener('load', onLoad);

function onLoad(){
    console.log('Max number is :' + maxNumber());
    secondMax();
}

let array = [1, 10, 20, 100];

function maxNumber(){
    let maxNumber = 0;
    let secondMax = maxNumber;

    for(let i=0; i<array.length; i++){
        if(array[i]>maxNumber){
            secondMax = maxNumber;
            maxNumber = array[i];
        }
    }
    return maxNumber;
}
