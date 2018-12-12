// Add zero in front of numbers < 10
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  var dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ]

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var dayIndex = date.getDay();

  let abbrMonth = monthNames[monthIndex].substring(0, 3);
  let abbrDayOfWeek = dayNames[dayIndex].substring(0, 3);
  
  return `${abbrDayOfWeek} ${abbrMonth} ${zeroPad(day)}`;
}
