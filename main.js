const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const howToPlay = document.querySelector("#howToPlay");

let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// EVENTOS

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", pressEnterToReset)

// FUNÇÕES

function handleTryClick(e) {
  e.preventDefault();
  const inputNumber = document.querySelector("#inputNumber");
  howToPlay.classList.add("hide")

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    document
      .querySelector("#attempts")
      .innerText = `Acertou em ${xAttempts} vezes`;
  }

  if(inputNumber.value >= 0 && inputNumber.value <= 10) {
    inputNumber.value = ""
    xAttempts++;
  }else{
    howToPlay.classList.remove("hide")
  }

}

function handleResetClick(e) {
  toggleScreen()

  randomNumber = Math.round(Math.random() * 10);
  document.querySelector("#inputNumber").value = "";
  xAttempts = 1;
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function pressEnterToReset(e) {
  if(e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick()
  }
}

