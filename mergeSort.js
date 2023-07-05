window.addEventListener('load', onLoad);

let array = [1, 2, 8, 67, 45, 267, 8910932, -1494, 0, 2345];
function onLoad(){
   console.log(sorter(array));
}

function sorter(arr){
    if(arr.length>1){
        let mid = Math.floor(arr.length/2);// finds the middle point
        let left = sorter(arr.slice(0, mid));// repeats the sorter function until array with only one index is formed, then on recall of sorter it returns the array and keeps on merging it
        let right = sorter(arr.slice(mid));
        return merge(left, right);
    } else {
        return arr;
    }
}


//assuming left and right are already sorted
function merge(left, right){
    let sortedArray = [];

    while(right.length && left.length){
        if(left[0]>right[0]){
            sortedArray.push(right.shift());//if the right[0] is smaller then push right[0]
        } else {
            sortedArray.push(left.shift());// if the left[0] is smaller then push left[0]
        }
    }

    return [...sortedArray, ...left, ...right];//add the remaining values to the final array
}