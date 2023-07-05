window.addEventListener('load', onLoad);

let array = [1, 2484, 5893, 1239];

function onLoad(){
  console.log(sorter(array));
}

function sorter(arr, bucketSize = 5){

    if(arr.length !== 0){
    let minValue = arr[0];
    let maxValue = arr[0];

    //find the min and max value of the array
    for(let i=1; i<arr.length; i++){
        if(arr[i]>maxValue){
            maxValue = arr[i];
        } else if(arr[i]<minValue) {
            minValue = arr[i];
        }
    }
    //this snippet creates an array(buckets) which takes arrays as its elements and the values are inserted inside the array which are inside the buckets
    let bucketCount = Math.floor((maxValue-minValue) / bucketSize) + 1;// total buckets that should be created with the given bucketSize
    let buckets = new Array(bucketCount); // creates an array with bucketCount number of places, these places are undefined 
    for(let i=0; i<arr.length; i++){
        let bucketIndex = Math.floor((arr[i]-minValue)/bucketSize);//finds the place where the value should be inserted
        if(!buckets[bucketIndex]){
            buckets[bucketIndex] = [];//since inside bucket array, at bucketIndex, is undefined. so it's inverse is true, it enters the condition and adds an empty array as it's element, so the updated element is empty array instead of undefined
        }
        buckets[bucketIndex].push(arr[i]);//pushes the value in the empty array
    }
    
    let sortedArray = [];
    for(let i=0; i<buckets.length; i++){
        if(buckets[i]){
            insertionSort(buckets[i]);//used to sort the elements inside the individual arrays
            sortedArray.push(...buckets[i]);
        }
    }

    return sortedArray;
    } else {
        return arr;
    }
}

function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let currentValue = arr[i];
        let j;

        for(let j=i-1; j>=0 && arr[j]>currentValue; j--){
            arr[j+1] = arr[j];
        }

        arr[j+1] = currentValue;
    }
    return arr;
}