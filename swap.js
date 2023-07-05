window.addEventListener('load', onLoad);
function onLoad(){
    arrayReversal();
}
// take input sentence
function arrayReversal(){
    let input = document.createElement('input');
    input.placeholder = 'Type a sentence';
    document.body.appendChild(input);
    let button = document.createElement('button');
    button.innerText = 'Enter';
    document.body.appendChild(button);

    button.addEventListener('click', function(){
        sentenceBreaker(input.value.trim());
    })
}
//split the sentence into words
function sentenceBreaker(sentence){
    let individualWords = sentence.split(' ');
    let newSentence = "";
    for(let i=0; i<individualWords.length; i++){
        newSentence += characterSwapper(individualWords[i]) + " ";
    }
    console.log(newSentence);
}
//take each character from 0 to n/2 and swap there places by assigning new values
function characterSwapper(word){
    let c;
    let characterSplit = word.split(''); // splits the word into an array, [h, e, l, l, o];
    for(let i=0; i<characterSplit.length/2; i++){
        c = characterSplit[i];
        characterSplit[i] = characterSplit[characterSplit.length-1-i];
        characterSplit[characterSplit.length-1-i] = c;
    }
    return characterSplit.join('');
}
