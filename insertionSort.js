window.addEventListener('load', onLoad);

let array = [1, 67, 45, 56];

function onLoad(){
    console.log(sorter(array));
}

function sorter(arr){
    for(let i=1; i<arr.length; i++){
        let currentValue = arr[i];
        let j;
        for( j=i-1; j>=0 && arr[j]>currentValue; j--){
            arr[j+1] = arr[j];
        }

        arr[j+1] = currentValue;
    }

    return arr;
}