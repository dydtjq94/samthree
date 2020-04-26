const promptTitle = document.getElementsByClassName("prompt__title");
const bestList = document.querySelector(`.selected`);
const newList = document.querySelector(`.unselected`);
const prompt = document.querySelector(`.prompt`);

let promptLength = promptTitle.length;

const SELECTED = `selected`;
const UNSELECTED = `unselected`;
const promptSelected = `selected__prompt`;

function handleMenuBest(event) {
  if (bestList.classList === SELECTED) {
  } else {
    bestList.classList = SELECTED;
    newList.classList = UNSELECTED;
  }
}

function handleMenuNew(event) {
  if (newList.classList === SELECTED) {
  } else {
    newList.classList = SELECTED;
    bestList.classList = UNSELECTED;
  }
}

function handleClick(event) {
  for (let i = 0; i < promptLength; i++) {
    promptTitle[i].classList.remove(promptSelected);
  }
  event.toElement.classList.add(promptSelected);
  prompt.innerText = event.target.innerText;
}

function init() {
  for (let i = 0; i < promptLength; i++) {
    promptTitle[i].addEventListener("click", handleClick);
  }
  bestList.addEventListener("click", handleMenuBest);
  newList.addEventListener("click", handleMenuNew);
}

init();
