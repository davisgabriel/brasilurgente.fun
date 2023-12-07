// JavaScript para o timer
let timer = 70;  
const progressBar = document.getElementById("progress");

const updateTimer = () => {
  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;
  document.getElementById("timer").textContent = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  progressBar.style.right = ((70 - timer) / 70 * 100) + "%";
  if (timer === 0) return;
  timer--;
  setTimeout(updateTimer, 1000);
};

setTimeout(function() {
  document.getElementById('buttonText').innerHTML = 'Duração do <b>protocolo</b>: <span id="timer">01:10</span>';
  document.getElementById('loading').style.display = 'none';
  updateTimer();  // Inicie o timer aqui
}, 3000);


$(document).ready(function(){
    $('#consular').on('click', function () {
        $('.esconder').css("display", "none")
        $('.aparecer').css("display", "block")
    })

});




