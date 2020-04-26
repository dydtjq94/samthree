const promptTitle = document.getElementsByClassName("prompt__title");
const promptSpell = document.getElementsByClassName("write__prompt");
const submit = document.querySelector(`.submit`);

console.log(promptSpell[0]);

let promptLength = promptTitle.length;

const promptSelected = `selected__prompt`;

function handleClick(event) {
  for (let i = 0; i < promptLength; i++) {
    promptTitle[i].classList.remove(promptSelected);
  }
  event.toElement.classList.add(promptSelected);
  promptSpell[0].innerHTML = event.target.innerText[0];
  promptSpell[1].innerHTML = event.target.innerText[1];
  promptSpell[2].innerHTML = event.target.innerText[2];
}

function handleSubmit(event) {
  location.href = "index.html";
}

function init() {
  for (let i = 0; i < promptLength; i++) {
    promptTitle[i].addEventListener("click", handleClick);
  }
  submit.addEventListener("click", handleSubmit);
}

init();
