const cBtn = document.getElementById("c4-btn");
const dBtn = document.getElementById("d4-btn");
const eBtn = document.getElementById("e4-btn");
const fBtn = document.getElementById("f4-btn");
const gBtn = document.getElementById("g4-btn");
const aBtn = document.getElementById("a4-btn");
const bBtn = document.getElementById("b4-btn");
const c5Btn = document.getElementById("c5-btn")

const synth = new Tone.PolySynth();
const reverb = new Tone.Reverb();
synth.connect(reverb);
reverb.toDestination();


cBtn.addEventListener("mousedown", () => {
  if (Tone.context.state != "running") {
    Tone.start();
   
  }
  synth.triggerAttackRelease(["c4", "e4", "g4"], "8n");
 
});

dBtn.addEventListener("mousedown", () => {
  if (Tone.context.state != "running") {
    Tone.start();
  }
  synth.triggerAttackRelease(["d4", "f4", "a4"],  "8n");
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

c5Btn.addEventListener("mousedown", () => {
  if (Tone.context.state != "running") {
    Tone.start();
  }
  synth.triggerAttackRelease("c5", "8n");
});



// const synth = new Tone.Synth().toDestination();

// const createEventListener = (note) => {
//   return () => {
//     if (Tone.context.state != "running") {
//       Tone.start();
//     }
//     synth.triggerAttackRelease(note, "8n");
//   }
// }

// const notes = ['c4', 'd4', 'e4', 'f4', 'g4', 'a4', 'b4', 'c5'];
// const buttons = notes.map(note => document.getElementById(`${note}-btn`));

// buttons.forEach((button, index) => {
//   if (button) {
//     button.addEventListener("mousedown", createEventListener(notes[index]));
//   }
// });
