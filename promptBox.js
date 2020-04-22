const prompt = document.querySelector(`.prompt`);
const date = document.querySelector(`.date`);
const leftButton = document.querySelector(`.left`);
const rightButton = document.querySelector(`.right`);
const firstInput = document.querySelector(`.first__prompt`);
const secondInput = document.querySelector(`.second__prompt`);
const thirdInput = document.querySelector(`.third__prompt`);

console.log(firstInput, secondInput, thirdInput);

let title = [`밥버거`, `고추장`, `아이유`, `손흥민`, `하이루`, `키키키`];
let num = 0;
prompt.innerHTML = title[num];

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

function init() {
  leftButton.addEventListener("click", handleLeftClick);
  rightButton.addEventListener("click", handleRightClick);
}

init();
