window.addEventListener('load', onLoad);

let alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let stringArray = ['Harshit', 'Yajush', 'Tushar', 'Tushar', 'Jay', 'Jay', 'Harshit'];

function onLoad(){
    console.log(sorter(stringArray));
}

function swap(arr, i, j){
    let c = arr[i];
    arr[i] = arr[j];
    arr[j] = c;
}

function sorter(arr){

    //incase there are two same strings + it doesn't work if there are more than two same strings
    // for(let i=0; i<arr.length; i++){
    //     let currentValue = arr[i];
    //     for(let j=arr.length-1; j>i; j--){
    //         if(currentValue == arr[j]){
    //             let k=j;
    //             while(k>i){
    //                 arr[k] = arr[k-1];
    //                 k--
    //             }
    //             arr[k] = currentValue;
    //         }
    //     }
    // }


    let firstNameIndex;
    for(let i=0; i<arr.length-1; i++){
        firstNameIndex = i;
        for(let j=i+1; j<arr.length; j++){
            if(firstStringIsSmaller(arr[firstNameIndex], arr[j]) == false){
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

    firstString1 = firstString.toLowerCase();
    secondString1 = secondString.toLowerCase();
    
    let i=0;
    let j=0;

    while( i!==firstString1.length+1 && j!==secondString1.length+1 ){
        if (alphabetArray.indexOf(firstString1.charAt(i)) < alphabetArray.indexOf(secondString1.charAt(i))){
            return firstIsEarlier;
           
        } else if (alphabetArray.indexOf(firstString1.charAt(i)) > alphabetArray.indexOf(secondString1.charAt(i))){
            return firstIsEarlier = false;

        } else if(alphabetArray.indexOf(firstString1.charAt(i)) == alphabetArray.indexOf(secondString1.charAt(i))){

            if( i == firstString1.length || j == secondString1.length ){
                if(firstString1.length < secondString1.length){
                    return true;

                } else if (firstString1.length > secondString1.length){
                    return firstIsEarlier = false;
                    
                } else {
                    return firstIsEarlier = true;
                }
            }

            i++;
            j++;
        }
    }
}