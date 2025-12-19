const CELL_SIZE = 22.9;

document.addEventListener("DOMContentLoaded", () => {
  const xLen = Math.floor(window.innerWidth / CELL_SIZE);
  const yLen = Math.floor(window.innerHeight / CELL_SIZE);

  for (let y = 0; y < yLen; y++) {
    for (let x = 0; x < xLen; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.left = `${x * CELL_SIZE}px`;
      cell.style.top = `${y * CELL_SIZE}px`;
      cell.style.position = "absolute";
      cell.style.height = `${CELL_SIZE}px`;
      cell.style.width = `${CELL_SIZE}px`;
      document.body.appendChild(cell);
    }
  }
});
