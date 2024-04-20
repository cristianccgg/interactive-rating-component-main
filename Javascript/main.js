let submitBtn = document.getElementById("submit-btn");
let mainContainer = document.getElementById("main-container");
let mainContainer2 = document.getElementById("main-container2");
let ratingText = document.getElementById("rating");
const numbers = document.querySelectorAll(".number");

submitBtn.addEventListener("click", (e) => {
  let isSelected = false;
  numbers.forEach((number) => {
    if (number.classList.contains("orange")) {
      isSelected = true;
    }
  });

  if (!isSelected) {
    alert("Please select a number");
    return;
  }

  mainContainer2.classList.toggle("active");
  mainContainer.classList.toggle("active");
});

numbers.forEach((number, index) => {
  number.addEventListener("click", () => {
    updateRating(index + 1);
  });
});

function updateRating(selectedRating) {
  ratingText.textContent = `You selected ${selectedRating} out of 5`;

  numbers.forEach((number) => {
    number.classList.remove("orange");
  });

  numbers[selectedRating - 1].classList.add("orange");
}
