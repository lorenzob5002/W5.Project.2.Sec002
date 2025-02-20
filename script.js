import MusicTools from "./MusicTools.js";

document.getElementById("midiToFreq").addEventListener("click", () => {
  const midiPitch = parseFloat(document.getElementById("midiInput").value);
  if (!isNaN(midiPitch)) {
    document.getElementById("freqResult").textContent =
      MusicTools.midiPitchToFrequency(midiPitch).toFixed(2);
  } else {
    document.getElementById("freqResult").textContent = "Invalid Input";
  }
});

document.getElementById("freqToMidi").addEventListener("click", () => {
  const frequency = parseFloat(document.getElementById("freqInput").value);
  if (!isNaN(frequency) && frequency > 0) {
    document.getElementById("midiResult").textContent =
      MusicTools.frequencyToMidiPitch(frequency);
  } else {
    document.getElementById("midiResult").textContent = "Invalid Input";
  }
});

document.getElementById("dbfsToLinear").addEventListener("click", () => {
  const dbfs = parseFloat(document.getElementById("dbfsInput").value);
  if (!isNaN(dbfs)) {
    document.getElementById("linearResult").textContent =
      MusicTools.dbfsToLinearAmplitude(dbfs).toFixed(4);
  } else {
    document.getElementById("linearResult").textContent = "Invalid Input";
  }
});

document.getElementById("linearToDbfs").addEventListener("click", () => {
  const linear = parseFloat(document.getElementById("linearInput").value);
  if (!isNaN(linear) && linear > 0) {
    document.getElementById("dbfsResult").textContent =
      MusicTools.linearAmplitudeTodBFS(linear).toFixed(2);
  } else {
    document.getElementById("dbfsResult").textContent = "Invalid Input";
  }
});
