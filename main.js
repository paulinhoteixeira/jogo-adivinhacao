const randomNumber = Math.round(Math.random() * 10);

let xAttempts = 1;

function handleClick(event) {
  event.preventDefault();
  const inputNumber = document.querySelector("#inputNumber").value;

  if (Number(inputNumber) == randomNumber) {
    document.querySelector(".screen1").classList.add("hide");
    document.querySelector(".screen2").classList.remove("hide");
    document.querySelector(
      "#attempts"
    ).innerText = `Acertou em ${xAttempts} vezes`;
  }

  xAttempts++;

  console.log(xAttempts);
}
