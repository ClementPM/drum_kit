// Select all the drums buttons
const numberOfDrumbButton = document.querySelectorAll('.drum').length;

 // Loop over them all
for (i = 0; i<numberOfDrumbButton; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", event => {
  
 
let audio = new Audio("sounds/tom-1.mp3")
audio.play();
  
});
}

function HouseKeeper (yearOfExperience, name, cleaningRepertoire) {
  this.yearOfExperience = yearOfExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire; 
}



//   switch (buttonClick) {
//     case "q":
//       new Audio('./sounds/tom-1.mp3').play();
//       break;

//     case "s":
//         const tom2 = new Audio('./sounds/tom-2.mp3').play();
//       break;

//       case "d":
//         const tome3 = new Audio('./sounds/tom-3.mp3')
//         tome3.play();
//       break;

//       case "f":
//         const tome4 = new Audio('./sounds/tom-4.mp3')
//         tome4.play();
//       break;

//       case "j":
//         const snare = new Audio('./sounds/snare.mp3')
//         snare.play();
//       break;

//       case "k":
//         const crash = new Audio('./sounds/crash.mp3')
//         crash.play();
//       break;

//       case "l":
//         const kick = new Audio('./sounds/kick-bass.mp3')
//         kick.play();
//       break;

//     default:
//     break;
//   };
// });




