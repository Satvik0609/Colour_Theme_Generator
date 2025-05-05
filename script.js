const generateBtn = document.getElementById("generateBtn");
const colorContainer = document.getElementById("colorContainer");

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function generateTheme() {
  colorContainer.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    const box = document.createElement("div");
    box.className = "color-box";
    box.style.backgroundColor = color;
    box.textContent = color;
    colorContainer.appendChild(box);
  }
}

generateBtn.addEventListener("click", generateTheme);

// Generate one theme on load
generateTheme();
