let calculatButton = document.querySelector(".line");
let daysInputEl = document.getElementById("day-input");
let monthInputEl = document.getElementById("month-input");
let yearInputEl = document.getElementById("year-input");
let daysSpan = document.querySelector(".day-num");

class EnterDate {
  constructor(dayInput, monthInput, yearInput, calcButton) {
    this.dayInput = dayInput;
    this.monthInput = monthInput;
    this.yearInput = yearInput;
    this.calcButton = calcButton;
  }

  getDates() {
    let dateOfBirth = `Day Is ${this.dayInput.value} Month Is ${this.monthInput.value} Year Is ${this.yearInput.value}`;
    console.log(dateOfBirth);
    if (isNaN(parseInt(this.dayInput)) == false) {
      if (Number(this.dayInput) <= 31) {
        const dayBirth = Number(this.dayInput);
        console.log(dayBirth);
      }
    }
  }
}

const enterDates = new EnterDate(
  daysInputEl,
  monthInputEl,
  yearInputEl,
  calculatButton
);

// calculatButton.addEventListener("click", () => {
//   if (isNaN(Number(daysInput.value)) == false) {
//     if (Number(daysInput.value) <= 31) {
//       daysSpan.textContent = daysInput.value;
//     } else {
//     }
//   }
// });

calculatButton.addEventListener("click", () => {
  enterDates.getDates();
});
