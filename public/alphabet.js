var alphabet = ['armoor - to protect', 'ballons to pop', 'cars that run smoothly'];


function storeMe(letter){
    localStorage.setItem(letter, document.getElementById(letter).value);
}

function runThrougStore(){
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for(var i=0; i<letters; i++){
        storeMe(letters);
    }
}
function bringBackPhrases(){
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    for(var i=0; i<)
    document.getElementById(letters[i]).value  = localStorage.getItem(letters[i]);


}

// document.getElementById('a').value  = localStorage.getItem('a');