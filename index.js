var numOfDrum = document.querySelectorAll(".drum").length;
var music;

for(i = 0; i < numOfDrum; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
     var thisBtnClass = this.classList[0];

    makeSound(thisBtnClass);
    buttonAnimation(thisBtnClass);
    
    });
}

document.addEventListener("keydown",function(event){
    makeSound(event.key)
    buttonAnimation(event.key);
});

function makeSound(key){

    switch (key) {
        case "w":
             music = new Audio("sounds/crash.mp3");
            break;
        case "a":
            music = new Audio("sounds/kick-bass.mp3");
            break;  
        case "s":
             music = new Audio("sounds/snare.mp3");
            break;
        case "d":
             music = new Audio("sounds/tom-1.mp3");
            break;
        case "j":
            music = new Audio("sounds/tom-2.mp3");
            break;
        case "k":
            music = new Audio("sounds/tom-3.mp3");
            break;
        case "l":
            music = new Audio("sounds/tom-4.mp3");
            break;
        default:
            break;
    }
    music.play();

}

function buttonAnimation(currentKey){
    var currentButton = document.querySelector("." + currentKey);
    currentButton.classList.add("pressed");
    setTimeout(function() { 
         currentButton.classList.remove("pressed");
        }, 100);
}
