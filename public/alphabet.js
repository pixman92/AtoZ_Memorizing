var alphabet = ['armoor - to protect', 'ballons to pop', 'cars that run smoothly'];


function storeMe(letter){
    //function to store letters, that is also for looped()
    try{
        if(document.getElementById(letter)!=undefined||document.getElementById(letter)!=""){
            localStorage.setItem(letter, document.getElementById(letter).value);
        }
    }catch(e){
        console.log('e', e);
        throw(e);
    }
}

function runThrougStore(){
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for(var i=0; i<letters.length; i++){
        storeMe(letters[i]);
    }
}
function bringBackPhrases(){
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    try{
        for(var i=0; i<letters.length; i++){
            if(localStorage.getItem(letters[i])!=undefined && localStorage.getItem(letters[i]) != ""){
                document.getElementById(letters[i]).value  = localStorage.getItem(letters[i]);
            }
        }

    }catch(e){
        throw(e);
    }


}

// document.getElementById('a').value  = localStorage.getItem('a');