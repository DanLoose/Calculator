let display = document.getElementById("display");
let buttons = document.getElementsByClassName("button");

buttons[0].addEventListener("click", changeDisplay);
buttons[1].addEventListener("click", changeDisplay);
buttons[2].addEventListener("click", changeDisplay);
buttons[3].addEventListener("click", changeDisplay);
buttons[4].addEventListener("click", changeDisplay);
buttons[5].addEventListener("click", changeDisplay);
buttons[6].addEventListener("click", changeDisplay);
buttons[7].addEventListener("click", changeDisplay);
buttons[8].addEventListener("click", changeDisplay);
buttons[9].addEventListener("click", changeDisplay);
buttons[10].addEventListener("click", changeDisplay);
buttons[11].addEventListener("click", changeDisplay);
buttons[12].addEventListener("click", changeDisplay);
buttons[13].addEventListener("click", changeDisplay);
buttons[14].addEventListener("click", changeDisplay);
buttons[15].addEventListener("click", changeDisplay);

buttons.addEventListener("click", changeDisplay);

function changeDisplay(){
    if(this.innerText == "="){
        display.innerHTML = eval(display.textContent);
    }else if(this.innerText == "C"){
        display.innerHTML = "";
    }else{
        display.innerHTML += this.innerText;
    }
}
