var btnArr = document.querySelectorAll(".drum");
for (var i = 0; i < btnArr.length; i++) {
  btnArr[i].addEventListener("click", function() {
    var select = this.innerHTML;
    makeSound(select);
    animationBtn(select);
  });


};

document.addEventListener("keypress", function(event) {
  var b = event.code;
  b = b.replace("Key", "");
  b = b.toLowerCase();
  makeSound(b);
  animationBtn(b);
});

function makeSound(select) {
  switch (select) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    default:


  }
}

function animationBtn(select) {
  var pushTheBtn = document.querySelector("." + select);
  pushTheBtn.classList.add("pressed");
  setTimeout(function() {
    pushTheBtn.classList.remove("pressed");

  }, 100);

}
