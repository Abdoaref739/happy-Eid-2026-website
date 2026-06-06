var celebrationButton = document.getElementById("celebration-button");
var donationButton = document.getElementById("donation-button");
var greetingButton = document.getElementById("greeting-cards-button");
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
var greetingSection = document.getElementById("greeting-section");
donationButton.addEventListener("click", function(){
    donationSection.style.display = "flex";
    greetingSection.style.display = "none";
});

greetingButton.addEventListener("click", function(){
    greetingSection.style.display = "flex";
    donationSection.style.display = "none";
})