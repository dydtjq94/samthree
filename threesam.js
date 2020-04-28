const promptTitle = document.getElementsByClassName("prompt__title");
const bestList = document.querySelector(`.selected`);
const newList = document.querySelector(`.unselected`);
const prompt = document.querySelector(`.prompt`);
const favorite = document.querySelectorAll(`.favorite`);
const heart = document.querySelectorAll(`.fa-heart`);
const scroll = document.querySelectorAll(".scroll");

let promptList = [
  `밥버거`,
  `밤하늘`,
  `참이슬`,
  `아이유`,
  `키키키`,
  `히히히`,
  `BMW`,
  `보름달`,
  `갈무리`,
];

let promptNum = Math.floor(Math.random() * promptList.length);
console.log(promptNum);

const PROMPT_LS = `prompt`;
let promptLength = promptTitle.length;
let listLength = favorite.length;

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

function handleHeart(event) {
  event.toElement.classList.add(`color__yellow`);
  const heartCount = event.target.parentNode.children[1];
  heartCount.innerText = parseInt(heartCount.innerText) + 1;
}

function scrollAppear(event) {
  event.style.transition = "all 1s ease-in-out";
  event.classList.add("gone");
  window.addEventListener("scroll", () => {
    let elPos = event.getBoundingClientRect().top,
      pos = window.innerHeight / 0.9;

    if (elPos < pos) {
      event.classList.add("appear");
    } else {
      event.classList.remove("appear");
    }
  });
}

function init() {
  bestList.addEventListener("click", handleMenuBest);
  newList.addEventListener("click", handleMenuNew);
  for (let i = 0; i < listLength; i++) {
    heart[i].addEventListener("click", handleHeart);
  }
  scroll.forEach((item) => {
    scrollAppear(item);
  });

  window.scrollTo(1, 1);
  prompt.innerText = promptList[promptNum];
  localStorage.setItem(PROMPT_LS, prompt.innerText);
}

init();
