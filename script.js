// Get elements
let boxes = document.querySelectorAll(".box");
let patterns = [
  [0, 1, 2],  // Change from [1,2,3] to [0,1,2] to match 0-based indexing
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let message=document.getElementById("message")
let turn0 = true;

// logic
boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerHTML = "O";
      turn0 = false;
    } else {
      box.innerHTML = "X";
      turn0 = true;
    }
    box.disabled = true;

    let checkWin = () => {
      patterns.forEach((value) => {
        let value1 = boxes[value[0]].innerHTML; // Use boxes instead of box
        let value2 = boxes[value[1]].innerHTML;
        let value3 = boxes[value[2]].innerHTML;

        // Check if all three values are the same (not empty)
        if(value1!=="" && value2!=="" && value3!==""){
            if (value1 === value2 && value2 === value3) {
                message.innerText=`Congratulations! Player ${value1} won`
                
                // disable all boxes of nodelist
                boxes.forEach((box) => {
                    box.disabled = true;
                });
              }
        }
      });
    };
    
    checkWin();
  });
});
