window.addEventListener('load', onLoad);

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
        stringLengthFinder(input.value);
    })
}

function stringLengthFinder(sentence){
    let individualWords = sentence.split(' ');
    let longestWord = getLongestWord(individualWords);
    console.log('Longest word is :' + longestWord);
    console.log('Number of letters in the Longest Word :' + longestWord.length)
}

function getLongestWord(words){
    let maxLength = 0;
    let largestWord = '';
    for(let i=0; i<words.length; i++){
        if(words[i].length>maxLength){
            maxLength = words[i].length;
            largestWord = words[i];
        }
    }
    return largestWord;
}