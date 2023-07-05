window.addEventListener('load', onLoad);

let array = [1, 10, 9, 8, 3, 2, 4, 6, 5, 7];
function onLoad(){
   console.log(sorter(array));
}

function swap(arr, i, j){
    let c = arr[i];
    arr[i] = arr[j];
    arr[j] = c;
}

function sorter(arr){
    let {length} = arr;
    for(let i=0; i<length; i++){//to cover all the indexes
        for(let j=0; j<length-1-i; j++){//to compare the individual index with the other indexes
            if(arr[j]>arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }
    return arr;
}