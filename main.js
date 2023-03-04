const bottle = document.querySelector(".bottle");
const action = document.querySelector(".action");

const sideArr = [0, 45, 90, 135, 180, 225, 270];
const actionArr = ["Poem", "Song", "Dance", "Secret", "Draw", "Joke"];

bottle.addEventListener("click", () => {
  bottle.classList.add("bottle-turn");
  bottle.disabled = true;
  action.style.display = "none";
  const randomMove = getRandom(sideArr);
  bottle.style.transform = `translate(-50%, -50%) rotate(${randomMove}deg)`;
  setTimeout(() => {
    bottle.classList.remove("bottle-turn");
    const randomAction = getRandom(actionArr);
    action.textContent = randomAction;
    action.style.display = "block";
    bottle.disabled = false;
  }, 1000);
});

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
