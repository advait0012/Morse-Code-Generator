const textInputEl = document.querySelector(".textInput");
const morseInput = document.querySelector(".morseInput");

const code = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
};

textInputEl.addEventListener("keydown", (e) => {
  if (code[e.key]) {
    morseInput.value += code[e.key] + " ";
  } else if (e.key === " ") {
    morseInput.value += " ";
  }
});

textInputEl.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    let morseInputNew = morseInput.value.trim().split(" ");
    morseInputNew.pop();
    morseInputNew = morseInputNew.join(" ");
    morseInput.value = morseInputNew;
  }
});
