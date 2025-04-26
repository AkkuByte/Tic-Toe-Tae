let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno = true; // playerx , playero

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turno == true) {
      box.innerText = "0";
      box.style.color= "red";
      turno = false;
    } else {
      box.innerText = "X";
      box.style.color= "blue";
      turno = true;
    }
    box.disabled = true;
    checkwin();
  });
});

const resetgame = () => {
  msgContainer.classList.add("hide");
  enableboxes();
  turn0 = true;
};

const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    box.style.backgroundColor = "rgb(232, 240, 128)";
  }
};

const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations , Winner is ${winner}`;
  msgContainer.classList.remove("hide");
};

const checkwin = () => {
  for (let pattern of winPatterns) {
    console.log(
      boxes[pattern[0]].innerText,
      boxes[pattern[1]].innerText,
      boxes[pattern[2]].innerText
    );
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val == pos2val && pos2val == pos3val) {
        console.log("wins", pos1val);
        boxes[pattern[0]].style.backgroundColor = "green";
        boxes[pattern[1]].style.backgroundColor = "green";
        boxes[pattern[2]].style.backgroundColor = "green";
        disableboxes();
        showWinner(pos1val);
        // alert("Player " + pos1val + " wins!");
        return;
      }
    }
  }
};

newgamebtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);
