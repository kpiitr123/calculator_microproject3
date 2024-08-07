function getInput(value){
    var userinput=value;
    var display=document.getElementsByClassName("display");
    var currentdisplay=display[0].innerText;
    if(currentdisplay==="ERROR"){
        display[0].innerText="";
        currentdisplay="";
    }
    if(userinput==="DEL"){
        deleteLastDigit(display[0]);
        return;
    }
    if(currentdisplay==="0" && isOperator(userinput)){
        display[0].innerText= currentdisplay + userinput;
        return;
    }
    if(userinput==="." && currentdisplay.includes('.')){
        return;
    }
    if(currentdisplay.slice(-1)==='.' && isOperator(userinput)){
        return;
    }

    if(currentdisplay==="0" && !isOperator(userinput) && userinput!=='.'){
        display[0].innerText=  userinput;
        return;
    }
    if(currentdisplay==="" && userinput==='0'){
        display[0].innerText=  userinput;
        return;
    }
    if(currentdisplay==="" && isOperator(userinput)){
        return;
    }

    if(currentdisplay.length<12){
        if(currentdisplay==="0" && isOperator(userinput)){
            return
        }
        else if(isOperator(userinput) && isOperator(currentdisplay.slice(-1))){
            display[0].innerText= currentdisplay.slice(0,-1)+userinput;
        }
        else if(isOperator(userinput) && currentdisplay.length>0 && !isOperator(currentdisplay.slice(-1))){
            display[0].innerText+=userinput;
        }
        else {
display[0].innerText+=userinput;

        }
    }


}

function isOperator(value){
    return value==='+'|| value==='-' || value==='/'|| value==='x';
}

function deleteLastDigit(display){
var display=document.getElementsByClassName("display");
var currentdisplay=display[0].innerText;
var newdisplay=currentdisplay.slice(0,-1);
if(newdisplay==="" || newdisplay==="-" ){
    display[0].innerText="0"
}
if(newdisplay==="ERROR"){
display[0].innerText="0"
}
else{
    display[0].innerText=newdisplay;
}

}


    // var display=document.getElementsByClassName("display")
    // var currentdisplay=display[0].innerText
    // if(!(currentdisplay.includes('.'))){
    //     display[0].innerText+='.';
    // }


function resetAll(value){
var display=document.getElementsByClassName("display")
display[0].innerText=value;

}

function result(){
    var display=document.getElementsByClassName("display")
    var expression=display[0].innerText
    var correctexpression=expression.replace(/x/g,"*")
    try{
        var result=eval(correctexpression);
        if(typeof result=== "number" && isFinite(result)){
            var formattedresult=parseFloat(result.toPrecision(12));
            display[0].innerText=formattedresult;
        }
        else{
            display[0].innerText="ERROR"
        }
    }
    catch(error){
        display[0].innerText="ERROR";

    }

}