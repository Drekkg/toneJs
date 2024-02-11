// const cBtn = document.getElementById("c4-btn");
// const dBtn = document.getElementById("d4-btn");
// const eBtn = document.getElementById("e4-btn");
// const fBtn = document.getElementById("f4-btn");
// const gBtn = document.getElementById("g4-btn");
// const aBtn = document.getElementById("a4-btn");
// const bBtn = document.getElementById("b4-btn");
// const c5Btn = document.getElementById("c5-btn")



// cBtn.addEventListener("mousedown", () => {
//   if (Tone.context.state != "running") {
//     Tone.start();
   
//   }
//   synth.triggerAttackRelease(["c4", "e4", "g4"], "8n");
 
// });

// dBtn.addEventListener("mousedown", () => {
//   if (Tone.context.state != "running") {
//     Tone.start();
//   }
//   synth.triggerAttackRelease(["d4", "f4", "a4"],  "8n");
// });

// eBtn.addEventListener("mousedown", () => {
//   if (Tone.context.state != "running") {
//     Tone.start();
//   }
//   synth.triggerAttackRelease("e4", "8n");
// });

// fBtn.addEventListener("mousedown", () => {
//   if (Tone.context.state != "running") {
//     Tone.start();
//   }
//   synth.triggerAttackRelease("f4", "8n");
// });

// gBtn.addEventListener("mousedown", () => {
//   if (Tone.context.state != "running") {
//     Tone.start();
//   }
//   synth.triggerAttackRelease("g4", "8n");
// });

// aBtn.addEventListener("mousedown", () => {
//   if (Tone.context.state != "running") {
//     Tone.start();
//   }
//   synth.triggerAttackRelease("a4", "8n");
// });

// bBtn.addEventListener("mousedown", () => {
//   if (Tone.context.state != "running") {
//     Tone.start();
//   }
//   synth.triggerAttackRelease("b4", "8n");
// });

// c5Btn.addEventListener("mousedown", () => {
//   if (Tone.context.state != "running") {
//     Tone.start();
//   }
//   synth.triggerAttackRelease("c5", "8n");
// });

const synth = new Tone.PolySynth();
const reverb = new Tone.Reverb();
synth.connect(reverb);
reverb.toDestination();


// const synth = new Tone.Synth().toDestination();

const triggerNote = (note) => {
  return () => {
    if (Tone.context.state != "running") {
      Tone.start();
    }
    console.log(note);
    synth.triggerAttackRelease(note, "8n");
    
  }
}

const c = ['c4', 'c#4', 'd4', 'd#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5'];
const cSharpnotes = ['c4', 'c#4', 'd4', 'd#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5'];
const d = ['d4', 'd#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5', 'd5'];
const dSharpnotes = ['c4', 'c#4', 'd4', 'd#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5'];
const e = ['e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5', 'e5'];
const f = ['f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5', 'e5', 'f5'];
const fSharpnotes = ['c4', 'c#4', 'd4', 'd#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5'];
const gnotes = ['c4', 'c#4', 'd4', 'd#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5'];
const gSharpnotes = ['c4', 'c#4', 'd4', 'd#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5'];
const anotes = ['c4', 'c#4', 'd4', 'd#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5'];
const aSharp4notes = ['c4', 'c#4', 'd4', 'd#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5'];
const bnotes = ['c4', 'c#4', 'd4', 'd#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5'];
const bSharpnotes = ['c4', 'c#4', 'd4', 'd#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5'];


 
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  let chord = button.innerHTML[0].toLowerCase();
  console.log(chord)
  if(chord === "c"){
    chord = c;
  } else if(chord == "d") {
    chord = d;
  }
  else if(chord == "e") {
    chord = e;
  }
  else if(chord == "f") {
    chord = f;
  }
  const maj = [0, 4, 7].map(noteMaj=> chord[noteMaj]);

  button.addEventListener("click", triggerNote(maj)); 
  
});




// const cmaj = document.querySelectorAll('button');
// let chord = cmaj.innerText;
// if(chord === "c"){
//   chord = c;
// }
// console.log(chord)


// const maj = [0, 4, 7].map(noteMaj=> note[noteMaj]);


// cmaj.addEventListener("click", 
//   triggerNote(maj));


// buttons.map((button, index) => {
//   if (button) {
//     button.addEventListener("mousedown", triggerNote(notes[index]));
   
//   }
// });
