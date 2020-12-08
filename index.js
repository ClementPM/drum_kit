// Select all the drums buttons
const numberOfDrumbButton = document.querySelectorAll('.drum').length;

 // Loop over them all
for (i = 0; i<numberOfDrumbButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    // this is the content of the anonymous function

  let buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "q":
        let tom1 = new Audio ('sounds/tom-1.mp3');
        tom1.play();
        break;

        case "s":
          let tom2 = new Audio ('sounds/tom-2.mp3');
          tom2.play();
          break;

          case "d":
            let tome3 = new Audio('sounds/tom-3.mp3');
            tome3.play();
          break;
          
          case "f":
            let tome4 = new Audio('sounds/tom-4.mp3');
            tome4.play();
          break;
          
          case "j":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
          break;
          
          case "k":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
          break;
          
          case "l":
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
          break;

      default: console.log(buttonInnerHTML);
    }
  });
}
