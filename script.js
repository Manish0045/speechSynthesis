function press() {
  let txt = 'Welcome to the game of "Sparky".';

  // Create a new SpeechSynthesisUtterance object.
  let utterance = new SpeechSynthesisUtterance(txt);
  utterance.pitch = 0.9;

  window.speechSynthesis.speak(utterance);

}