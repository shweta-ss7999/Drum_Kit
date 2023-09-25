var drums = document.querySelectorAll(".drum");

for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {

    var buttonInnerHTML =this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress",function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key) {
  switch (key) {
    case "w":
      var soundFile = "sound/tom-1.mp3";
      var tom1 = new Audio(soundFile);
      tom1.play();
    break;

    case "a":
      var soundFile = "sound/tom-2.mp3";
      var tom2 = new Audio(soundFile);
      tom2.play();
    break;

    case "s":
      var soundFile = "sound/tom-3.mp3";
      var tom3 = new Audio(soundFile);
      tom3.play();
    break;

    case "d":
      var soundFile = "sound/tom-4.mp3";
      var tom4 = new Audio(soundFile);
      tom4.play();
    break;

    case "j":
      var soundFile = "sound/snare.mp3";
      var snare = new Audio(soundFile);
      snare.play();
    break;

    case "k":
      var soundFile = "sound/crash.mp3";
      var crash = new Audio(soundFile);
      crash.play();
    break;

    case "l":
      var soundFile = "sound/kick-bass.mp3";
      var kick = new Audio(soundFile);
      kick.play();
    break;

    default:console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey){
  var activeButton= document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}