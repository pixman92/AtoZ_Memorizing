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
        bringBack(); //function to repopulate abc(s)
    });

    //entered text - main page - to enter and parse text
    document.getElementById('make').addEventListener('click', ()=>{
        takeInString();
        bringBack();
        arrayOfDefined();
        HTMLme();

        async function main (num){
            try{
                let first = await one();
                let second = await two(first);        
                let third = await three(second);   
                let forth = await four(third);         
            }catch(e){
                console.log(e);
                throw e;
            }
        
        }
        
        async function one(){
            takeInString();
            console.log('first');
        }
        
        async function two(){
            bringBack();
            console.log('second');
        }
        async function three(){
            arrayOfDefined();
            console.log('third');
        }
        async function four(){
            HTMLme();
            console.log('forth');
        }


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
    mainString = mainString.toLowerCase();
    mainArray = mainString.split("");
    console.log('splitted    '+ mainArray);
}

var  pushedForLaterHTML = [];
function arrayOfDefined(){
    pushedForLaterHTML = [];
    for(var i=0; i<mainArray.length; i++){
        //if array of splitted letters equals foo
        //push phrase
        //TODO - send array to HTML
        if(mainArray[i]=="a"){
            pushedForLaterHTML.push(['a', alphabet[0]]);
        }
        if(mainArray[i]=="b"){
            pushedForLaterHTML.push(['b', alphabet[1]]);
        }
        if(mainArray[i]=="c"){
            pushedForLaterHTML.push(['c', alphabet[2]]);
        }
        if(mainArray[i]=="d"){
            pushedForLaterHTML.push(['d', alphabet[3]]);
        }
        if(mainArray[i]=="e"){
            pushedForLaterHTML.push(['e', alphabet[4]]);
        }
        if(mainArray[i]=="f"){
            pushedForLaterHTML.push(['f', alphabet[5]]);
        }
        if(mainArray[i]=="g"){
            pushedForLaterHTML.push(['g', alphabet[6]]);
        }
        if(mainArray[i]=="h"){
            pushedForLaterHTML.push(['h', alphabet[7]]);
        }
        if(mainArray[i]=="i"){
            pushedForLaterHTML.push(['i', alphabet[8]]);
        }
        if(mainArray[i]=="j"){
            pushedForLaterHTML.push(['j', alphabet[9]]);
        }
        if(mainArray[i]=="k"){
            pushedForLaterHTML.push(['k', alphabet[10]]);
        }
        if(mainArray[i]=="l"){
            pushedForLaterHTML.push(['l', alphabet[11]]);
        }
        if(mainArray[i]=="m"){
            pushedForLaterHTML.push(['m', alphabet[12]]);
        }
        if(mainArray[i]=="n"){
            pushedForLaterHTML.push(['n', alphabet[13]]);
        }
        if(mainArray[i]=="o"){
            pushedForLaterHTML.push(['o', alphabet[14]]);
        }
        if(mainArray[i]=="p"){
            pushedForLaterHTML.push(['p', alphabet[15]]);
        }
        if(mainArray[i]=="q"){
            pushedForLaterHTML.push(['q', alphabet[16]]);
        }
        if(mainArray[i]=="r"){
            pushedForLaterHTML.push(['r', alphabet[17]]);
        }
        if(mainArray[i]=="s"){
            pushedForLaterHTML.push(['s', alphabet[18]]);
        }
        if(mainArray[i]=="t"){
            pushedForLaterHTML.push(['t', alphabet[19]]);
        }
        if(mainArray[i]=="u"){
            pushedForLaterHTML.push(['u', alphabet[20]]);
        }
        if(mainArray[i]=="v"){
            pushedForLaterHTML.push(['v', alphabet[21]]);
        }
        if(mainArray[i]=="w"){
            pushedForLaterHTML.push(['w', alphabet[22]]);
        }
        if(mainArray[i]=="x"){
            pushedForLaterHTML.push(['x', alphabet[23]]);
        }
        if(mainArray[i]=="y"){
            pushedForLaterHTML.push(['y', alphabet[24]]);
        }        
        if(mainArray[i]=="z"){
            pushedForLaterHTML.push(['z', alphabet[25]]);
        }        
    }
    console.log('pushedForLaterHTML', pushedForLaterHTML);
}

//=========================================

function HTMLme(){
    var HTMLString = "";
    for(var i=0; i<pushedForLaterHTML.length; i++){
        HTMLString+="<div><div class='texts'>"+pushedForLaterHTML[i][0]+"</div><div class='text2'>"+pushedForLaterHTML[i][1]+"</div></div>";
    }

    document.getElementById('jsToHTML').innerHTML = HTMLString;
}
