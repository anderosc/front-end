const textBox = document.getElementById("textBox");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const result = document.getElementById("result");
let temp;

function convert(){
    if(toF.checked){
        result.textContent = "Sct a unssit"


    }
    else if(toC.checked){
        result.textContent = "Selsfaect anit"

        
    }
    else{
        result.textContent = "Select a unit"
    }
}