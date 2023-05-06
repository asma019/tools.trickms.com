const textInput = document.getElementById("text-input");
const playBtn = document.getElementById("play-btn");
const audioOutput = document.getElementById("audio-output");
const synth = window.speechSynthesis;

playBtn.addEventListener("click", () => {
  if (textInput.value !== "") {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    synth.speak(utterance);
    audioOutput.src = URL.createObjectURL(new Blob([textInput.value], {type: "text/plain"}));
    audioOutput.play();
  }
});
