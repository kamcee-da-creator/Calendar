// the Constant And Variable
const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dayNumber = document.getElementById("day-number");
const yearEl = document.getElementById("year");

// Get Local Date
const date = new Date();
const month = date.getMonth();

// get month name
monthName.innerHTML = date.toLocaleString("en", {
  month: "long",
});
// get day name
dayName.innerHTML = date.toLocaleString("en", {
  weekday: "long",
});

dayNumber.textContent = date.getDate();

yearEl.textContent = date.getFullYear();
