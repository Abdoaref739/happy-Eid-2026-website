var celebrationButton = document.getElementById("celebration-button");
var donationButton = document.getElementById("donation-button");
var cheersAudio = new Audio("audios/cheers.mp3")
celebrationButton.addEventListener("click", confettiRespawn);
function confettiRespawn(){
    cheersAudio.play();
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
        confettiColors: [
            '#fcc138', '#006363'
        ],
    });
}
var donationSection = document.getElementById("donation-section");
donationButton.addEventListener("click", function(){
    donationSection.style.display = "flex";
});
