var button = document.getElementById("button");
var distance = 1000 * 60 * 25 - 1000;

button.addEventListener("click", timer);

function timer(){

    setInterval(function(){
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        document.getElementById("timer").innerText = minutes + ":"+  seconds;
        distance -= 1000;
    }, 1000);
    
}