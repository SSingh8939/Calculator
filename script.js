const input=document.getElementById("myInput");

const btns=document.getElementsByClassName("btn");

let buttons=Array.from(btns);
let value="";

const operator=document.getElementsByClassName('operator');
const operatorButton=Array.from(operator);

buttons.forEach(element=>{
    element.addEventListener("click",(e)=>{
       
        if(e.target.innerHTML=='=')
        {
            value=eval(input.value);
            input.value=value;
        }
        else if(e.target.innerText=='AC'){
            value="";
            input.value=value;
        }
        else if(e.target.innerText=='DEL'){
            value = value.substring(0, value.length-1);
            input.value=value;
        }else if(e.target.innerText=='%'){
            let test={};
            let firstNumber;
            let secondNumber;
            
            if(value.includes('-')){
                test=value.split("-");
                firstNumber=Number.parseInt(test[0]);
                secondNumber=Number.parseInt(test[1]);
                value=(firstNumber-(firstNumber*secondNumber)/100);
                input.value=value;
            }else if(value.includes("+")){
                test=value.split("+");
                firstNumber=Number.parseInt(test[0]);
                secondNumber=Number.parseInt(test[1]);
                value=(firstNumber+(firstNumber*secondNumber)/100);
                input.value=value;
            }else if (value.includes("*")){
                value=eval(value)/100;
                input.value=value;
            }else if(value.includes("/")){
                value=eval(value)*100;
                input.value=value;
            }
        }
        else{
            value+=e.target.innerHTML;
            input.value=value;
        }
    })
})
