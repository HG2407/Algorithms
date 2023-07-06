window.addEventListener('load', onLoad);

let array = [12,16, 1, 10, 100];
function onLoad(){
    console.log(sorter(array));
}

//assuming left and right are already sorted
function merge(left, right){
    let sortedArray = [];

    let i=0;
    let j=0;

    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }

    if(i == left.length){

        return [...sortedArray, ...right.splice(j)];

    } else if(j == right.length){

        return [...sortedArray, ...left.splice(i)];
    }

}

function sorter(arr){
    if(arr.length>1){
        let mid = Math.floor(arr.length/2);
        let left = sorter(arr.slice(0, mid));
        let right = sorter(arr.slice(mid));
        return merge(left, right);
    } else {
        return arr;
    }
}