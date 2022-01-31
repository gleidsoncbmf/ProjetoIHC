function startTimer(duracao, display){
    var timer = duracao, hours, minutes, seconds;

    setInterval(function(){
        hours = parseInt(timer / 60, 10);
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        hours = hours > 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if(--timer < 0){
            timer = duracao;
        }
    },1000);
}

window.onload = function(){
    var duracao = 120 * 5;
    var display = document.querySelector("#timer");
    startTimer(duracao, display);
}