window.onload = ()=>{
    hide();
    show('enterTextPage');
    // show('footer');


    //FOOTER stuff
    document.getElementById('enterTextPageDivButton').addEventListener('click', ()=>{
        hide();
        show('enterTextPage');
        // show('footer');
    });
    document.getElementById('alphabetDataPageDivButton').addEventListener('click', ()=>{
        hide();
        show('alphabetDataPage');   //shows alphabet page
        // show('footer');
        bringBackPhrases(); //function to repopulate abc(s)
    });

    //entered text - main page, functions
    document.getElementById('make').addEventListener('click', ()=>{
        takeInString();
        arrayOfDefined();
    });


    document.getElementById('savePhrasesButton').addEventListener('click', ()=>{
        runThrougStore();
        alert("Saved!");
    });

}

//=========================================


var arrayMe = ["enterTextPage", "alphabetDataPage"];
function hide(){
        for (var i = 0; i < arrayMe.length; i++) {
            document.getElementById(arrayMe[i]).style.display='none';
        }

}

function show(id){
    document.getElementById(id).style.display='block';
}



//=========================================
var mainString = "";
var mainArray = [];
function takeInString(){
    if(document.getElementById('enteredTextValue').value==""){

    }else{
        mainString = document.getElementById('enteredTextValue').value;
    }
    
    mainArray = mainString.split("");
    console.log('splitted    '+ mainArray);
}

function arrayOfDefined(){
    var  pushedForLaterHTML = [];
    for(var i=0; i<mainArray.length; i++){
        //if array of splitted letters equals foo
        //push phrase
        //TODO - send array to HTML
        if(mainArray[i]=="a"){
            pushedForLaterHTML.push(alphabet[0]);
        }
        if(mainArray[i]=="b"){
            pushedForLaterHTML.push(alphabet[1]);
        }
        if(mainArray[i]=="c"){
            pushedForLaterHTML.push(alphabet[2]);
        }
    }
    console.log('pushedForLaterHTML', pushedForLaterHTML);
}
