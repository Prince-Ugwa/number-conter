let count = 0;
const countValue = document.querySelector(".counter-value");
const buttons = document.querySelectorAll(".btn");
// console.log(buttons);
buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const targets = e.currentTarget.classList;
    // console.log(targets);
    if (targets.contains("decrease")) {
      count--;
    } else if (targets.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count < 0) {
      countValue.style.color = "crimson";
    }
    if (count > 0) {
      countValue.style.color = " green";
    }
    if (count === 0) {
      countValue.style.color = " black";
    }
    countValue.textContent = count;
  });
});
