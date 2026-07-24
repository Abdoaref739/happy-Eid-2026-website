var celebrationButton = document.getElementById("celebration-button");
var cheersAudio = new Audio("audios/music.mp3")
celebrationButton.addEventListener("click", confettiRespawn);
function confettiRespawn(){
    cheersAudio.play();
    let confetti = setInterval(() =>{
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
        confettiColors: [
            '#fcc138', '#006363'
        ],
    });
    time += 1;
    }, 1000);
    cheersAudio.addEventListener("ended", function(){
        clearInterval(confetti);
    });
}
