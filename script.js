let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-Btn");
let newGamebtn = document.querySelector("#start-Btn");
let msgContainer = document.querySelector(".max-container");
let msg = document.querySelector("#win");
let turnO = true;
// 2D array
const winPatterns = [
  // 8 patterns for winning
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enalbedBoxes();
  msgContainer.classList.add("hidden");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("clicked");
    if (turnO) {
      //player O
      box.innerText = "O";
      turnO = false;
    } else {
      //player X
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
//..........disabled boxes..............
const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
//..........enabled boxes..............
const enalbedBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  win.innerText = `Congralution! Player ${winner} won the game`;
  msgContainer.classList.remove("hidden");
  disabledBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        //alert(`Congralution! Player ${pos1Val} won the game`);
        showWinner(pos1Val);
      }
    }
  }
};

newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
