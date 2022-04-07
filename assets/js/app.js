// Global selectiona and variables
const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const sliders = document.querySelectorAll('.input[type="range"]');
const currentHexs = document.querySelectorAll(".color h2");
let initialColors;

// Functions
function generateHex() {
  const hexColor = chroma.random();
  return hexColor;
}
// Color Generator

function randomColors() {
  colorDivs.forEach((div, index) => {
    const hexText = div.children[0];
    const randomColor = generateHex();

    // Add the color to the background
    div.style.backgroundColor = randomColor;
    hexText.innerText = randomColor;
  });
}

randomColors();
