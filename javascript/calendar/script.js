// $(document).ready(function () {
const currentDate = $("#current-date"),
  days = $("#days"),
  icon = $(".fa-solid"),
  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

let today = new Date(),
  month = today.getMonth(),
  year = today.getFullYear();
currentDate.text(`${months[month]} ${year}`);

function renderCalendar() {
  days.empty();
  let firstDayOfMonth = new Date(year, month, 1).getDay(),
    lastDateOfMonth = new Date(year, month + 1, 0).getDate(),
    lastDateOfLastMonth = new Date(year, month, 0).getDate(),
    lastDayOfMonth = new Date(year, month, lastDateOfMonth).getDay();
  listItems = "";
  for (let i = firstDayOfMonth; i > 0; i--) {
    listItems += `<li class="inactive position-relative z-1 mt-2">${
      lastDateOfLastMonth - i + 1
    }</li>`;
  }
  for (let i = 1; i <= lastDateOfMonth; i++) {
    let isToday =
      i === today.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? "active"
        : "";
    listItems += `<li class="position-relative z-1 mt-2 ${isToday}">${i}</li>`;
  }
  for (let i = lastDayOfMonth; i < 6; i++) {
    listItems += `<li class="inactive position-relative z-1 mt-2">${
      i - lastDayOfMonth + 1
    }</li>`;
  }
  days.append(listItems);
}
renderCalendar();

icon.each(function () {
  $(this).on("click", function () {
    month += $(this).hasClass("fa-chevron-left") ? -1 : 1;
    if (month < 0 || month > 11) {
      today = new Date(year, month);
      year = today.getFullYear();
      month = today.getMonth();
    } else {
      today = new Date();
    }
    currentDate.text(`${months[month]} ${year}`);
    renderCalendar();
  });
});

// let monthIndex = month;
// let yearIndex = year;
// prevIcon.on("click", function () {
//   monthIndex--;
//   if (monthIndex < 0) {
//     monthIndex = months.length - 1;
//     yearIndex--;
//   }
//   monthChange(monthIndex, yearIndex);
// });
// nextIcon.on("click", function () {
//   monthIndex++;
//   if (monthIndex >= months.length) {
//     monthIndex = 0;
//     yearIndex++;
//   }
//   monthChange(monthIndex, yearIndex);
// });

// function monthChange(monthIndex, yearIndex) {
//   currentDate.text(`${months[monthIndex]} ${yearIndex}`);
//   days.empty();
//   let lastDateOfMonth = new Date(year, monthIndex + 1, 0).getDate();
//   let listItems = "";
//   for (let i = 1; i <= lastDateOfMonth; i++) {
//     listItems += `<li class="position-relative z-1 mt-2">${i}</li>`;
//   }
//   days.append(listItems);
// }
// });
