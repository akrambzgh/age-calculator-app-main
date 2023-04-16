"use strict";
// Calculation Button
const calculateButton = document.querySelector(".line");
// Inputs
const daysInputEl = document.getElementById("day-input");
const monthInputEl = document.getElementById("month-input");
const yearInputEl = document.getElementById("year-input");
// Number Span
const yearsSpan = document.querySelector(".year-num");
const monthsSpan = document.querySelector(".month-num");
const daysSpan = document.querySelector(".day-num");
// Error Elements
const errorEl = document.querySelector(".error");
// BirthDay Dates
let day = null;
let month = null;
let year = null;
// Now Date
const nowDate = new Date();
// Main Class
class EnterDate {
    constructor(dayInput, monthInput, yearInput, calcButton, dayNum, monthNum, yearNum, error) {
        this.dayInput = dayInput;
        this.monthInput = monthInput;
        this.yearInput = yearInput;
        this.calcButton = calcButton;
        this.dayNum = dayNum;
        this.monthNum = monthNum;
        this.yearNum = yearNum;
        this.error = error;
        this.calcButton.addEventListener("click", () => {
            this.checkNumber();
        });
    }
    // Calculation In Dates To Get The Correct Age
    getDates() {
        day = this.dayInput.value;
        month = this.monthInput.value;
        year = this.yearInput.value;
        const birthday = new Date(`${month} ${day}, ${year}`);
        let yearDiff = nowDate.getFullYear() - birthday.getFullYear();
        let monthDiff = nowDate.getMonth() - birthday.getMonth();
        let dayDiff = nowDate.getDate() - birthday.getDate();
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
    checkNumber() {
        if ((isNaN(parseInt(this.dayInput.value)) &&
            isNaN(parseInt(this.monthInput.value)) &&
            isNaN(parseInt(this.yearInput.value))) ||
            (this.dayInput.value === "" &&
                this.monthInput.value === "" &&
                this.yearInput.value === "")) {
            this.error.textContent = `An Invalid Input`;
        }
        else {
            this.getDates();
            this.error.textContent = ``;
        }
    }
    // Function To Empty The Inputs
    emptyInputs() {
        this.dayInput.value = "";
        this.monthInput.value = "";
        this.yearInput.value = "";
    }
}
const enterDates = new EnterDate(daysInputEl, monthInputEl, yearInputEl, calculateButton, daysSpan, monthsSpan, yearsSpan, errorEl);
// Click Calculation Button
if (calculateButton) {
    calculateButton.addEventListener("click", () => {
        enterDates.checkNumber();
        enterDates.emptyInputs();
    });
}
