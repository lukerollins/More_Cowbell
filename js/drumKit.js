// This particular code came from a fork of a similiar JS Drumkit project I found on 
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

  // If the user presses 'c', call playClap()
  if (e.key === 'a') {
    playCowbellOne(console.log('ugh'));
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
  } else if (e.key === 'o') {
    playBoogie1Reverb();
  } else if (e.key === 'p') {
    playCowbell808();
  }
}
 
function playCowbellOne() {
  // Find the clap audio file
  const audio = document.querySelector('#rock_cowbell_1');
  
  // Rewind to the beginning
  audio.currentTime = 0;
  
  
  // Play the audio file that we find
  audio.play();
  
  // Find the #button-clap box
  const button = document.querySelector('#button-rock_cowbell_1');
  
  // Add the playing class to it
  button.classList.add('playing');
}


function playCowbellTwo() {
  // Find the clap audio file
  const audio = document.querySelector('#rock_cowbell_2');
  
  // Rewind to the beginning
  audio.currentTime = 0;
  
  
  // Play the audio file that we find
  audio.play();
  
  // Find the #button-clap box
  const button = document.querySelector('#button-rock_cowbell_2');
  
  // Add the playing class to it
  button.classList.add('playing');
}


function playCowbellOneReverb() {
  // Find the clap audio file
  const audio = document.querySelector('#rock_cowbell_1_reverb');
  
  // Rewind to the beginning
  audio.currentTime = 0;
  
  
  // Play the audio file that we find
  audio.play();
  
  // Find the #button-clap box
  const button = document.querySelector('#button-rock_cowbell_1_reverb');
  
  // Add the playing class to it
  button.classList.add('playing');
}
function playCowbellTwoReverb() {
  // Find the clap audio file
  const audio = document.querySelector('#rock_cowbell_2_reverb');
  
  // Rewind to the beginning
  audio.currentTime = 0;
  
  
  // Play the audio file that we find
  audio.play();
  
  // Find the #button-clap box
  const button = document.querySelector('#button-rock_cowbell_2_reverb');
  
  // Add the playing class to it
  button.classList.add('playing');
}
function playReallyReverby() {
  // Find the clap audio file
  const audio = document.querySelector('#rock_cowbell_1_really_reverby');
  
  // Rewind to the beginning
  audio.currentTime = 0;
  
  
  // Play the audio file that we find
  audio.play();
  
  // Find the #button-clap box
  const button = document.querySelector('#button-rock_cowbell_1_really_reverby');
  
  // Add the playing class to it
  button.classList.add('playing');
}


function playCowbellReversed() {
  // Find the clap audio file
  const audio = document.querySelector('#rock_cowbell_1_reversed');
  
  // Rewind to the beginning
  audio.currentTime = 0;
  
  
  // Play the audio file that we find
  audio.play();
  
  // Find the #button-clap box
  const button = document.querySelector('#button-rock_cowbell_1_reversed');
  
  // Add the playing class to it
  button.classList.add('playing');
}


function playLatinCowbell() {
  // Find the clap audio file
  const audio = document.querySelector('#lower_latin_cowbell_1');
  
  // Rewind to the beginning
  audio.currentTime = 0;
  
  
  // Play the audio file that we find
  audio.play();
  
  // Find the #button-clap box
  const button = document.querySelector('#button-lower_latin_cowbell_1');
  
  // Add the playing class to it
  button.classList.add('playing');
}


function playFourStrikes() {
  // Find the clap audio file
  const audio = document.querySelector('#latin_cowbell_four_strikes_1');
  
  // Rewind to the beginning
  audio.currentTime = 0;
  
  
  // Play the audio file that we find
  audio.play();
  
  // Find the #button-clap box
  const button = document.querySelector('#latin_cowbell_four_strikes_1');
  
  // Add the playing class to it
  button.classList.add('playing');
}


function playBoogieCowbell() {
  // Find the clap audio file
  const audio = document.querySelector('#boogie_cowbell_1');
  
  // Rewind to the beginning
  audio.currentTime = 0;
  
  
  // Play the audio file that we find
  audio.play();
  
  // Find the #button-clap box
  const button = document.querySelector('#button-boogie_cowbell_1');
  
  // Add the playing class to it
  button.classList.add('playing');
}


function playBoogie1Reverb() {
  // Find the clap audio file
  const audio = document.querySelector('#boogie_cowbell_1_reverb');
  
  // Rewind to the beginning
  audio.currentTime = 0;
  
  
  // Play the audio file that we find
  audio.play();
  
  // Find the #button-clap box
  const button = document.querySelector('#button-boogie_cowbell_1_reverb');
  
  // Add the playing class to it
  button.classList.add('playing');
}

function playCowbell808() {
  // Find the clap audio file
  const audio = document.querySelector('#cowbell-808');
  
  // Rewind to the beginning
  audio.currentTime = 0;
  
  
  // Play the audio file that we find
  audio.play();
  
  // Find the #button-clap box
  const button = document.querySelector('#button-cowbell-808');
  
  // Add the playing class to it
  button.classList.add('playing');
}

// ---- CODE STOPS HERE ----

function removeTransition(e) {
  if (e.propertyName !== "transform") return; 
  e.target.classList.remove("playing");
}

var keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(walken => 
  walken.addEventListener("transitionend", removeTransition)
  );


