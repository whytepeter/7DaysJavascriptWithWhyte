// get the elements
let counter = document.querySelector(".counter");
let add = document.querySelector(".btn-add");
let subtract = document.querySelector(".btn-subtract");
let clear = document.querySelector(".btn-clear");

// Add event listeners to the button
let count = 0; // the initial count value

// function that determines which button was click and increment, decrement or clear the counter
// function(btn) === btn is an paramenter of the function click
function click(btn) {
  // if button clicked  is add
  if (btn === add) {
    count += 1;
    counter.innerHTML = count;

    // if button clicked is subtract
  } else if (btn === subtract) {
    count -= 1;
    counter.innerHTML = count;

    // if button clicked is clear
  } else if (btn === clear) {
    count = 0;
    counter.innerHTML = count;
  }
}

add.addEventListener("click", () => {
  click(add); // btn === add
});

subtract.addEventListener("click", () => {
  click(subtract); // btn === subtract
});

clear.addEventListener("click", () => {
  click(clear); // btn === cler
});
