const prompt = document.querySelector(`.prompt`);
const date = document.querySelector(`.date`);
const leftButton = document.querySelector(`.left`);
const rightButton = document.querySelector(`.right`);
const firstInput = document.querySelector(`.first__prompt`);
const secondInput = document.querySelector(`.second__prompt`);
const thirdInput = document.querySelector(`.third__prompt`);
const inputButton = document.querySelector(`.write`);
const inputWrite = document.querySelector(`.write__input`);
const form = document.getElementsByClassName(`write__input__column`);
const input = document.getElementsByClassName(`input__value`);
const bestList = document.querySelector(`.selected`);
const newList = document.querySelector(`.unselected`);
const heart = document.querySelector(`.favorite`);
const heartImoticon = document.querySelector(`.fa-heart`);
const heartCount = document.getElementsByClassName(`favorite__count`);

const DISPLAY_NONE = `display__none`;
const SELECTED = `selected`;
const UNSELECTED = `unselected`;

let writeTrue = true;
let title = [`밥버거`, `고추장`, `아이유`, `손흥민`, `하이루`, `키키키`];
let num = 0;
prompt.innerHTML = title[num];

console.log(heartCount);

function handleLeftClick(event) {
  num = num - 1;
  if (num < 0) {
    num = 5;
  } else {
  }
  prompt.innerHTML = title[num];

  firstInput.innerHTML = `${prompt.innerHTML.split("")[0]}:`;
  secondInput.innerHTML = `${prompt.innerHTML.split("")[1]}:`;
  thirdInput.innerHTML = `${prompt.innerHTML.split("")[2]}:`;
}

function handleRightClick(event) {
  num = num + 1;
  if (num > 5) {
    num = 0;
  } else {
  }
  prompt.innerHTML = title[num];

  firstInput.innerHTML = `${prompt.innerHTML.split("")[0]}:`;
  secondInput.innerHTML = `${prompt.innerHTML.split("")[1]}:`;
  thirdInput.innerHTML = `${prompt.innerHTML.split("")[2]}:`;
}

function handleInputClick(event) {
  if (writeTrue) {
    inputButton.innerHTML = `내 삼행시 자랑하기!!!`;
    writeTrue = false;
    inputWrite.classList.remove(DISPLAY_NONE);
  } else {
    inputButton.innerHTML = `나도 삼행시 쓰기!`;
    writeTrue = true;
    inputWrite.classList.add(DISPLAY_NONE);
    handleSubmit(event);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const inputValue1 = input[0].value;
  const inputValue2 = input[1].value;
  const inputValue3 = input[2].value;
  console.log(inputValue1);
  console.log(inputValue2);
  console.log(inputValue3);
}

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

function handleFavoriteClick(event) {}

function init() {
  leftButton.addEventListener("click", handleLeftClick);
  rightButton.addEventListener("click", handleRightClick);
  inputButton.addEventListener("click", handleInputClick);
  form[0].addEventListener("submit", handleSubmit);
  form[1].addEventListener("submit", handleSubmit);
  form[2].addEventListener("submit", handleSubmit);
  bestList.addEventListener("click", handleMenuBest);
  newList.addEventListener("click", handleMenuNew);
  heart.addEventListener("click", handleFavoriteClick);
}

init();
