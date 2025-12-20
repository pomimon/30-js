let value = 0;

const count = document.getElementById("count");
const buttons = document.querySelectorAll("button");

const colors = ["red", "gray", "green"];

function updateCount() {
  count.textContent = value;
  count.style.color = colors[Math.sign(value) + 1];
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "increase") value++;
    if (button.id === "decrease") value--;
    if (button.id === "reset") value = 0;

    updateCount();
  });
});
