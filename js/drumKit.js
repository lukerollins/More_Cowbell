// This particular part of the code came from a fork of a similiar JS Drumkit project I found on 
// codepen.io from Josh Tucholski (https://codepen.io/josh-tucholski/pen/YLEzPx).

document.querySelector('#button-rock_cowbell_1').onclick = playCowbellOne;
document.querySelector('#button-rock_cowbell_2').onclick = playCowbellTwo;
document.querySelector('#button-rock_cowbell_1_reverb').onclick = playCowbellOneReverb;
document.querySelector('#button-rock_cowbell_2_reverb').onclick = playCowbellTwoReverb;
document.querySelector('#button-rock_cowbell_1_really_reverby').onclick = playReallyReverby;
document.querySelector('#button-rock_cowbell_1_reversed').onclick = playCowbellReversed;
document.querySelector('#button-lower_latin_cowbell_1').onclick = playLatinCowbell;
document.querySelector('#button-latin_cowbell_four_strikes_1').onclick = playFourStrikes;
document.querySelector('#button-boogie_cowbell_1').onclick = playBoogieCowbell;
document.querySelector('#button-boogie_cowbell_1_reverb').onclick = playBoogie1Reverb;
document.querySelector('#button-cowbell-808').onclick= playCowbell808;

document.querySelector('body').onkeypress = keyPress;



function keyPress(e) { 

  // If the user presses 's', call playCowbellTwo()
  if (e.key === 'a') {
    playCowbellOne();
  } else if (e.key === 's') {
    playCowbellTwo();
  } else if (e.key === 'd') {
    playCowbellOneReverb();
  } else if (e.key === 'f') {
    playCowbellTwoReverb();
  } else if (e.key === 'g') {
    playReallyReverby();
  } else if (e.key === 'h') {
    playCowbellReversed();
  } else if (e.key === 'j') {
    playLatinCowbell();
  } else if (e.key === 'k') {
    playFourStrikes();
  } else if (e.key === 'l') {
    playBoogieCowbell();
  } else if (e.key === 't') {
    playBoogie1Reverb();
  } else if (e.key === 'y') {
    playCowbell808();
  }
}
 
function playCowbellOne() {
  // Find the rock_cowbell_1 audio file
  const audio = document.querySelector('#rock_cowbell_1');

   // Find the #button-rock_cowbell_1
   const button = document.querySelector('#button-rock_cowbell_1');
  
  // Rewind to the beginning
  audio.currentTime = 0;
  
  // Play the audio file that we find
  audio.play();
  
  // Add the playing class to it
  button.classList.add('playing');
}


function playCowbellTwo() {
  // Find the rock_cowbell_2 audio file
  const audio = document.querySelector('#rock_cowbell_2');
 
  // Find the #button-rock_cowbell_2 box
  const button = document.querySelector('#button-rock_cowbell_2');
  
  // Rewind to the beginning
  audio.currentTime = 0;
  
  
  // Play the audio file that we find
  audio.play();
  
  // Add the playing class to it
  button.classList.add('playing');
}


function playCowbellOneReverb() {
  // Find the rock_cowbell_1_reverb audio file
  const audio = document.querySelector('#rock_cowbell_1_reverb');
  
  // Rewind to the beginning
  audio.currentTime = 0;
  
  
  // Play the audio file that we find
  audio.play();
  
  // Find the ##button-rock_cowbell_1_reverb box
  const button = document.querySelector('#button-rock_cowbell_1_reverb');
  
  // Add the playing class to it
  button.classList.add('playing');
}


function playCowbellTwoReverb() {
  // Find the rock_cowbell_2_reverb audio file
  const audio = document.querySelector('#rock_cowbell_2_reverb');
  
  // Find the #button-rock_cowbell_2_reverb box
  const button = document.querySelector('#button-rock_cowbell_2_reverb');

  // Rewind to the beginning
  audio.currentTime = 0;
  
  // Play the audio file that we find
  audio.play();
  
  // Add the playing class to it
  button.classList.add('playing');
}
//I'm certain everyone has an idea of how everything is going to work 
//by now...

function playReallyReverby() {
  const audio = document.querySelector('#rock_cowbell_1_really_reverby');
  const button = document.querySelector('#button-rock_cowbell_1_really_reverby');
  audio.currentTime = 0; 
  audio.play();
  button.classList.add('playing');
}


function playCowbellReversed() {
  const audio = document.querySelector('#rock_cowbell_1_reversed');
  const button = document.querySelector('#button-rock_cowbell_1_reversed');
  audio.currentTime = 0;
  audio.play();
  button.classList.add('playing');
}


function playLatinCowbell() {
  const audio = document.querySelector('#lower_latin_cowbell_1');
  const button = document.querySelector('#button-lower_latin_cowbell_1');
  audio.currentTime = 0;
  audio.play();
  button.classList.add('playing');
}


function playFourStrikes() {
  const audio = document.querySelector('#latin_cowbell_four_strikes_1');
  const button = document.querySelector('#button-latin_cowbell_four_strikes_1');
  audio.currentTime = 0;
  audio.play();
  button.classList.add('playing');
}


function playBoogieCowbell() {
  const audio = document.querySelector('#boogie_cowbell_1');
  const button = document.querySelector('#button-boogie_cowbell_1');
  audio.currentTime = 0;
  audio.play(); 
  button.classList.add('playing');
}


function playBoogie1Reverb() {
  const audio = document.querySelector('#boogie_cowbell_1_reverb');
  const button = document.querySelector('#button-boogie_cowbell_1_reverb');
  audio.currentTime = 0;
  audio.play();
  button.classList.add('playing');
}

function playCowbell808() {
  const audio = document.querySelector('#cowbell-808');
  const button = document.querySelector('#button-cowbell-808');
  audio.currentTime = 0;
  audio.play();
  button.classList.add('playing');
}

// FORKED CODE STOPS HERE!!!

//And now some functions to make those buttons pop...so to speak
function removeTransition(e) {
  if (e.propertyName !== "transform") return; 
  e.target.classList.remove("playing");
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(farell => 
  farell.addEventListener("transitionend", removeTransition)
  );

 
//When in mobile, you will not see the 'cowbells' until you click
//on the bar marked 'Click'
  const moo = document.querySelector(".doot");
  const bells = document.querySelector(".cowbell");
  moo.addEventListener("click", () => {
    bells.classList.toggle("open");
  });



 


