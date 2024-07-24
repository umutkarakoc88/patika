// clock.js

// Prompt the user for their name and display it
let userName = prompt("Adınızı girin:");
document.getElementById("myName").textContent = userName;

// Function to format time with leading zeros
function addLeadingZero(number) {
  return number < 10 ? `0${number}` : number;
}

// Function to show the current time and day
function showTime() {
  const now = new Date();
  const hours = addLeadingZero(now.getHours());
  const minutes = addLeadingZero(now.getMinutes());
  const seconds = addLeadingZero(now.getSeconds());

  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"
  ];
  const day = days[now.getDay()];

  const timeString = `${hours}:${minutes}:${seconds} ${day}`;

  document.getElementById("myClock").textContent = timeString;
}

// Update the time every second
setInterval(showTime, 1000);

// Initial call to display the time immediately
showTime();
