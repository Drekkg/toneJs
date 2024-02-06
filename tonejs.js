const cBtn = document.getElementById("c-btn");
const dBtn = document.getElementById("d-btn");
const eBtn = document.getElementById("e-btn");
const fBtn = document.getElementById("f-btn");
const gBtn = document.getElementById("g-btn");
const aBtn = document.getElementById("a-btn");
const bBtn = document.getElementById("b-btn");
const synth = new Tone.Synth().toDestination();

cBtn.addEventListener("mousedown", () => {
  if (Tone.context.state != "running") {
    Tone.start();
  }
  synth.triggerAttackRelease("c4", "8n");
});

dBtn.addEventListener("mousedown", () => {
  if (Tone.context.state != "running") {
    Tone.start();
  }
  synth.triggerAttackRelease("d4", "8n");
});

eBtn.addEventListener("mousedown", () => {
  if (Tone.context.state != "running") {
    Tone.start();
  }
  synth.triggerAttackRelease("e4", "8n");
});

fBtn.addEventListener("mousedown", () => {
  if (Tone.context.state != "running") {
    Tone.start();
  }
  synth.triggerAttackRelease("f4", "8n");
});

gBtn.addEventListener("mousedown", () => {
  if (Tone.context.state != "running") {
    Tone.start();
  }
  synth.triggerAttackRelease("g4", "8n");
});

aBtn.addEventListener("mousedown", () => {
  if (Tone.context.state != "running") {
    Tone.start();
  }
  synth.triggerAttackRelease("a4", "8n");
});

bBtn.addEventListener("mousedown", () => {
  if (Tone.context.state != "running") {
    Tone.start();
  }
  synth.triggerAttackRelease("b4", "8n");
});


