window.addEventListener('load', onLoad);
let array = [10, 2, 29, 20, 17, 65, 42];
function onLoad(){
    let sortedArray = sorter(array);
    console.log(sortedArray);
}

function swap(arr, i, j){
    let c = arr[i];
    arr[i] = arr[j];
    arr[j] = c;
}

function sorter(arr){
    let {length} = arr;
    let minIndex;
    for(let i=0; i<length-1; i++){
        minIndex = i;
        for(let j=i; j<length; j++){
            if(arr[minIndex]>arr[j]){
                minIndex = j;
            }
        }
        if(i!==minIndex){
            swap(arr, i, minIndex);
        }
    }
}