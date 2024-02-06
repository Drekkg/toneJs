const playBtn = document.getElementById("play-btn");
const synth = new Tone.Synth().toDestination();

synth.triggerAttackRelease("c4", "2n");

playBtn.addEventListener("click", () => {
  if (Tone.context.state != "running") {
    Tone.start();
}
synth.triggerAttackRelease("c4", "8n");
console.log("in func")
})