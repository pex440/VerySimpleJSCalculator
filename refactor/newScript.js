const screen = document.getElementById("screen");
const clear_btn = document.getElementById("AC");
const change_sign_btn = document.getElementById("SIGN");
const back_btn = document.getElementById("BACK");
const equals_btn = document.getElementById("equalSign");

const printable_btns = document.querySelectorAll(".printable");//document.getElementsByClassName("printable");

printable_btns.forEach(btn=> btn.addEventListener('click',()=>{
    screen.innerText += btn.innerText
}))

clear_btn.addEventListener('click',()=>{
    screen.innerText = ""
});

back_btn.addEventListener('click', ()=>{
    str = screen.innerText
    screen.innerText = str.substring(0, str.length - 1);
});

equals_btn.addEventListener('click',()=>{
    try {
        screen.innerText = eval(screen.innerText).toString();    
    } catch (e) {
        if (e instanceof SyntaxError) {
            alert(e.message);
        }
    }
    
})

change_sign_btn.addEventListener('click',()=> {
    text = screen.innerText;
    if (text!=""){
        if (text.charAt(0)==="-")
            text = text.replace("-","");

        else if(text.charAt(0)==="+")
            text = text.replace("+","-");

        else text = "-"+text;
        

        screen.innerText = text;
    }

})