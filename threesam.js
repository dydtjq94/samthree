const promptTitle = document.getElementsByClassName("prompt__title");
const bestList = document.querySelector(`.selected`);
const newList = document.querySelector(`.unselected`);
const prompt = document.querySelector(`.prompt`);
const favorite = document.querySelector(`.favorite`);
const heart = document.querySelector(`.fa-heart`);
const heartCount = document.querySelector(`.favorite__count`);

let promptLength = promptTitle.length;

console.log(heart);

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

function handleHeart(event) {
  favorite.classList.add(`color__yellow`);
  heartCount.innerText = parseInt(heartCount.innerText) + 1;
}

function init() {
  for (let i = 0; i < promptLength; i++) {
    promptTitle[i].addEventListener("click", handleClick);
  }
  bestList.addEventListener("click", handleMenuBest);
  newList.addEventListener("click", handleMenuNew);
  favorite.addEventListener("click", handleHeart);
}

init();
