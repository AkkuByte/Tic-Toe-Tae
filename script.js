let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("#reset-btn");
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

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if (turno == true){
            box.innerText = "0";
            turno = false;
        }else{
            box.innerText = "X";
            turno = true;
        }
        box.disabled=true;
    })
})