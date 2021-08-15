const screen = document.getElementById("screen");
const numbers = document.getElementsByClassName("number");
const operators = document.getElementsByClassName("operator");
const AC = document.getElementById("AC");
const BACK = document.getElementById("BACK");
const SIGN = document.getElementById("SIGN");
const EQUALS = document.getElementById("equalSign");


let prevOp = '';
let operation = undefined;

//adding all event listeners for button clicks
function eventListeners(){
    EQUALS.addEventListener('click',()=>{
        calculate()
    })

    SIGN.addEventListener('click',changeSign)

    BACK.addEventListener('click',removeLastNumber)

    AC.addEventListener("click",AllClear);

    //numbers
    for(let i=0;i<numbers.length;i++)
        numbers[i].addEventListener('click',function(){
            appendNumber(numbers[i].innerHTML);
        })

    //operators
    for(let i=0;i<operators.length;i++){
        operators[i].addEventListener('click',()=>{
            chooseOperation(operators[i].innerHTML);  
        })
    }
}
eventListeners();


//making the user choose the operation
function chooseOperation(operaz){
    if(screen.innerHTML=="")return;
    if(prevOp!="")calculate();
    operation = operaz;
    prevOp = screen.innerHTML; 
    screen.innerHTML = ""; //asking for the second operator
}

function calculate(){
    let res; 
    let prev = parseFloat(prevOp);
    let curr = parseFloat(screen.innerHTML);

    if (isNaN(prev)||isNaN(curr))return // stopping the function if any operator is NaN
    
    switch(operation){
        case '+':
            res = prev + curr;
            break;
        case '-':
            res = prev - curr;
            break;
        case 'x':
            res = prev * curr;
            break;
        case '÷':
            res = prev / curr;
            break;
        default:return;
    }
    curr = res;
    operation = undefined;
    prevOp = "";
    screen.innerHTML = curr.toString();
}


function AllClear(){ //AC click
    screen.innerHTML = "";
    prevOp = '';
    operation = undefined;
}

function appendNumber(number){ //NUMBER click
    if (!(number=="." && screen.innerHTML.includes("."))){
        screen.innerHTML += number.toString();        
    }
}

function removeLastNumber(){ //BACK click
    screen.innerHTML = screen.innerHTML.slice(0, -1);
    console.log(screen.innerHTML)
}

function changeSign(){ //change sign click
    if (screen.innerHTML != "")
        screen.innerHTML = -parseFloat(screen.innerHTML)
}