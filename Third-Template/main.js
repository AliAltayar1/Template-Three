// First Change
// Create ContDown For One Year

let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();
// console.log(countDownDate)

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // console.log(dateDiff / (1000 * 60 * 60 * 24))
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let Minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let Seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  // console.log(days)
  // console.log(hours)
  // console.log(Minutes)
  // console.log(Seconds)


  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    Minutes < 10 ? `0${Minutes}` : Minutes;
  document.querySelector(".seconds").innerHTML =
    Seconds < 10 ? `0${Seconds}` : Seconds;

  if ((dateDiff = 0)) {
    clearInterval(counter);
  }
}, 1000);

// Second Change

// Create Animated Width On Scroll
let ourSkills = document.querySelector(".our-skills .skills");
let spans = document.querySelectorAll(".our-skills .skills .skill div span");

window.onscroll = function () {
  if (window.scrollY >= ourSkills.offsetTop - 400) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  } else {
    spans.forEach((span) => {
      span.style.width = 0;
    });
  }
};

// Create A Clickable Menu
let menu = document.getElementById("other-link");

menu.onclick = function () {
  document.querySelector("#show").classList.toggle("show");
};

// window.onclick = function (event) {
//   if (!event.target.matches(".other-link")) {
//     document.querySelector("#show").classList.toggle("show");
//   }
// };
