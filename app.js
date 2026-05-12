const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const title = document.querySelector(".container > h1");
img1.src = "./images/dice6.png";
img2.src = "./images/dice6.png";

title.addEventListener("click", diceGame);

function diceGame() {
  let resultNum1 = setDice();
  let resultNum2 = setDice();
  changeDice(img1, resultNum1);
  changeDice(img2, resultNum2);

  if (resultNum1 > resultNum2) {
    title.innerText = "player 1 win!🥇";
  } else if (resultNum1 < resultNum2) {
    title.innerText = "player 2 win!🥇";
  } else {
    title.innerText = "Draw!";
  }
}

// ` `은 문자열 들어가는곳에 다 사용 가능
function changeDice(res, diceNum) {
  res.src = `./images/dice${diceNum}.png`;
}
function setDice() {
  return Math.floor(Math.random() * 6) + 1;
}
