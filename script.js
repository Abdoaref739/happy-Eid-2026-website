var celebrationButton = document.getElementById("celebration-button");
var donationButton = document.getElementById("donation-button");
var greetingButton = document.getElementById("greeting-cards-button");
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
var themesBtn = document.getElementById("themes-btn");
themesBtn.addEventListener("click", function(){
    location.href = "./themes.html";
});