//this code malfunctions if there are two exactly same names(strings)

window.addEventListener('load', onLoad);

let alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let stringArray = ['Harshit', 'Yajush', 'Tushar', 'Jay'];

function onLoad(){
    console.log(sorter(stringArray));
}

function swap(arr, i, j){
    let c = arr[i];
    arr[i] = arr[j];
    arr[j] = c;
}

function sorter(arr){
    let firstNameIndex;
    for(let i=0; i<arr.length-1; i++){
        firstNameIndex = i;
        for(let j=i+1; j<arr.length; j++){
            if(!firstStringIsSmaller(arr[firstNameIndex], arr[j])){
                firstNameIndex = i;
            } else {
                firstNameIndex = j
            }
        }

        if(firstNameIndex !== i){
            swap(arr, firstNameIndex, i);
        }
    }
    return arr;
}


function firstStringIsSmaller(firstString, secondString){
    let firstIsEarlier = true;
    // let sortedArray = [];
    firstString1 = firstString.toLowerCase();
    secondString1 = secondString.toLowerCase();
    let i=0;
    let j=0;

    while( i!==firstString1.length+1 && j!==secondString1.length+1 ){
        if (alphabetArray.indexOf(firstString1.charAt(i)) < alphabetArray.indexOf(secondString1.charAt(i))){
            return firstIsEarlier;
            // sortedArray.push(secondString);
            // return sortedArray;
        } else if (alphabetArray.indexOf(firstString1.charAt(i)) > alphabetArray.indexOf(secondString1.charAt(i))){
            return firstIsEarlier = false;
            // sortedArray.push(firstString);
            // return sortedArray;
        } else if(alphabetArray.indexOf(firstString1.charAt(i)) == alphabetArray.indexOf(secondString1.charAt(i))){
            i++;
            j++;

            if( i == firstString1.length || j == secondString1.length ){
                if(firstString1.length < secondString1.length){
                    return true;
                    // sortedArray.push(secondString);
                    // return sortedArray;
                } else {
                    return firstIsEarlier = false;
                    // sortedArray.push(firstString);
                    // return sortedArray;
                }
            }
        }
    }
}