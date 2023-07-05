window.addEventListener('load', onLoad)

function onLoad(){
    arrayReversal();
}   

function arrayReversal(){
    let input = document.createElement('input');
    input.placeholder = 'Type a sentence';
    document.body.appendChild(input);
    let button = document.createElement('button');
    button.innerText = 'Enter';
    document.body.appendChild(button);
    
    button.addEventListener('click', function(){
        palindromeChecker(input.value.trim());
    })
    
}

function palindromeChecker(sentence){
    let noOfPalindrome = 0;
    let individualWord = sentence.split(' ');
    for(let i=0; i<individualWord.length; i++){
        if(isPalindrome(individualWord[i]) == true) {
            noOfPalindrome++;
            console.log(individualWord[i]);
        }
    }
    if(noOfPalindrome==0){
        console.log('No palindrome in the sentence');
    }
    console.log(noOfPalindrome);
    }

function isPalindrome(word){
    let bPalindrome = true;
    for(let i=0; i<word.length/2; i++){
        let firstLetter = word.charAt(i);
        let lastLetter = word.charAt(word.length-1-i);
        if(firstLetter !== lastLetter ){
            bPalindrome = false;
            break;
        }
    }
    return bPalindrome;
}