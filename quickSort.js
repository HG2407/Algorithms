window.addEventListener('load', onLoad);

let array = [1, 23, 466, 5432, -12253, -13294834, -90, 535683, 74, 125, 7890];
function onLoad(){
    console.log(sorter(array));
}

function partition(arr, start, end){
    let pivotValue = arr[start];
    let swapIndex = start;

    for(let i=start+1; i<=end; i++){
        if(pivotValue > arr[i]){
            swapIndex++; // if there is a number smaller than the pivot swapIndex is increased by one
            if(swapIndex !== i){ // if swapIndex not equal to the element's index then the values are swapped;
                let c = arr[swapIndex];
                arr[swapIndex] = arr[i];
                arr[i] = c;
            }
        }
    }
    if(swapIndex !== start){ // if the swapIndex is increased (meaning there are any smaller numbers) then the pivot is swapped with swapIndex;
        let c = arr[start];
        arr[start] = arr[swapIndex];
        arr[swapIndex] = c;
    }

    return swapIndex;
}

function sorter(arr, start = 0, end = arr.length-1){
    if(start>=end){
        return;
    } else{
    let pivotIndex = partition(arr, start, end);
    //left
    sorter(arr, start, pivotIndex-1);
    //right
    sorter(arr, pivotIndex+1, end);
}
return arr;
}