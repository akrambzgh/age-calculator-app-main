// Calculation Button
const calculateButton = document.querySelector(".line") as HTMLButtonElement;

// Inputs
const daysInputEl = document.getElementById("day-input") as HTMLInputElement;
const monthInputEl = document.getElementById("month-input") as HTMLInputElement;
const yearInputEl = document.getElementById("year-input") as HTMLInputElement;

// Number Span
const yearsSpan = document.querySelector(".year-num") as HTMLSpanElement;
const monthsSpan = document.querySelector(".month-num") as HTMLSpanElement;
const daysSpan = document.querySelector(".day-num") as HTMLSpanElement;

// Error Elements
const errorEl = document.querySelector(".error") as HTMLDivElement;

// BirthDay Dates
let day: string | null = null;
let month: string | null = null;
let year: string | null = null;

// Now Date
const nowDate = new Date();

// Main Class
class EnterDate {
  constructor(
    private dayInput: HTMLInputElement,
    private monthInput: HTMLInputElement,
    private yearInput: HTMLInputElement,
    private calcButton: HTMLButtonElement,
    private dayNum: HTMLSpanElement,
    private monthNum: HTMLSpanElement,
    private yearNum: HTMLSpanElement,
    private error: HTMLDivElement
  ) {
    this.calcButton.addEventListener("click", () => {
      this.checkNumber();
    });
  }

  // Calculation In Dates To Get The Correct Age
  private getDates(): void {
    day = this.dayInput.value;
    month = this.monthInput.value;
    year = this.yearInput.value;

    const birthday = new Date(`${month} ${day}, ${year}`);

    let yearDiff: any = nowDate.getFullYear() - birthday.getFullYear();
    let monthDiff: any = nowDate.getMonth() - birthday.getMonth();
    let dayDiff: any = nowDate.getDate() - birthday.getDate();

    if (monthDiff === 0) {
      monthDiff = 0;
      dayDiff += 30;
    }
    if (monthDiff < 0) {
      monthDiff += 12;
    }
    if (dayDiff < 0) {
      dayDiff += 30;
    }

    if (dayDiff < 10) {
      dayDiff = `0${dayDiff}`;
    }
    if (monthDiff < 10) {
      monthDiff = `0${monthDiff}`;
    }
    if (yearDiff < 10) {
      yearDiff = `0${yearDiff}`;
    }
    if (isNaN(dayDiff)) {
      dayDiff = null;
    }
    if (isNaN(monthDiff)) {
      monthDiff = null;
    }
    if (isNaN(yearDiff)) {
      yearDiff = null;
    }

    this.dayNum.textContent = dayDiff;
    this.monthNum.textContent = monthDiff;
    this.yearNum.textContent = yearDiff;

    if (yearDiff < 0) {
      this.dayNum.textContent = "";
      this.monthNum.textContent = "";
      this.yearNum.textContent = "";
    }
  }

  // Check The Value Of The Inputs
  public checkNumber(): void {
    if (
      (isNaN(parseInt(this.dayInput.value)) &&
        isNaN(parseInt(this.monthInput.value)) &&
        isNaN(parseInt(this.yearInput.value))) ||
      (this.dayInput.value === "" &&
        this.monthInput.value === "" &&
        this.yearInput.value === "")
    ) {
      this.error.textContent = `An Invalid Input`;
    } else {
      this.getDates();
      this.error.textContent = ``;
    }
  }

  // Function To Empty The Inputs
  public emptyInputs(): void {
    this.dayInput.value = "";
    this.monthInput.value = "";
    this.yearInput.value = "";
  }
}

const enterDates = new EnterDate(
  daysInputEl,
  monthInputEl,
  yearInputEl,
  calculateButton,
  daysSpan,
  monthsSpan,
  yearsSpan,
  errorEl
);

// Click Calculation Button
if (calculateButton) {
  calculateButton.addEventListener("click", () => {
    enterDates.checkNumber();
    enterDates.emptyInputs();
  });
}
