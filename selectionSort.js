window.addEventListener('load', onLoad);
// let array = ['1', 2, 2, 45, 45, 1, 0];
let array = ['Hitesh', 'Jayshree', 'Yajush', 'Neema', 'Harshit', 'Harsh'];
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
        for(let j=i+1; j<length; j++){
            if(compareString(arr[minIndex], arr[j])){//returns true if the firstString is greater than the secondString
                minIndex = j;//assigns the smallerString as the minIndex
            }
        }
        if(i!==minIndex){
            swap(arr, i, minIndex);
        }
    }
    return arr;
}

function compare(a, b){
    return a > b;
}

function compareString(firstString, secondString){
    let length = firstString.length > secondString.length ? secondString.length : firstString.length;
    let i=0;
    while(i<length+1){
        let a  = firstString.charAt(i);
        let b = secondString.charAt(i);

        if(a==b){
            i++;
        } else {
            let result = a > b;
            return result;
        }

    }
    
    return firstString.length > secondString.length;

   
}