


const soundw = new Audio("sounds/tom-1.mp3");
document.querySelector(".w.drum")
.addEventListener("click", function() {
    soundw.currentTime = 0;
    soundw.play().catch(function(error){
        console.log("Audio could not be played:", error);
    });
});

const sounda = new Audio("sounds/tom-2.mp3");
document.querySelector(".a.drum")
.addEventListener("click", function() {
    sounda.currentTime = 0;
    sounda.play().catch(function(error){
        console.log("Audio could not be played:", error);
    });
});

const sounds = new Audio("sounds/tom-3.mp3");
document.querySelector(".s.drum")
.addEventListener("click", function() {
    sounds.currentTime = 0;
    sounds.play().catch(function(error){
        console.log("Audio could not be played:", error);
    });
});

const soundd = new Audio("sounds/tom-4.mp3");
document.querySelector(".d.drum")
.addEventListener("click", function() {
    soundd.currentTime = 0;
    soundd.play().catch(function(error){
        console.log("Audio could not be played:", error);
    });
});

const soundj = new Audio("sounds/snare.mp3");
document.querySelector(".j.drum")
.addEventListener("click", function() {
    soundj.currentTime = 0;
    soundj.play().catch(function(error){
        console.log("Audio could not be played:", error);
    });
});

const soundk = new Audio("sounds/crash.mp3");
document.querySelector(".k.drum")
.addEventListener("click", function() {
    soundk.currentTime = 0;
    soundk.play().catch(function(error){
        console.log("Audio could not be played:", error);
    });
});

const soundl = new Audio("sounds/kick-bass.mp3");
document.querySelector(".l.drum")
.addEventListener("click", function() {
    soundl.currentTime = 0;
    soundl.play().catch(function(error){
        console.log("Audio could not be played:", error);
    });
});