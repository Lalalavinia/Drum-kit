// Detect button click
 let buttonArray = document.querySelectorAll(".drum");
 for (var i = 0; i < buttonArray.length; i++) {
   buttonArray[i].addEventListener("click", function(){
       makeSound(this.textContent);
       addAnimation(this.textContent);
   })
   }

 // Detect keyboard press
 document.addEventListener("keydown", function(event){
    makeSound(event.key);
    addAnimation(event.key);
 });

 function makeSound(key){
    let tune;
    switch (key) {
        case "w":
            tune = new Audio("sounds/snare.mp3", "snare");
            break;
        case "a":
            tune = new Audio("sounds/crash.mp3", "crash");
            break;
        case "s":
            tune = new Audio("sounds/kick-bass.mp3", "kick-bass");
            break;
        case "d":
            tune = new Audio("sounds/tom-1.mp3", "tom1");
            break;
        case "j":
            tune = new Audio("sounds/tom-2.mp3", "tom2");
            break;
        case "k":
            tune = new Audio("sounds/tom-3.mp3", "tom3");
            break;
        case "l":
            tune = new Audio("sounds/tom-4.mp3", "tom4");
            break;
        default:
           console.log(this.textContent);
    }
    tune.play();
} 

function addAnimation(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("pressed");
    }, 100);

}
