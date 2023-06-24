// Start Events Siction

let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.getElementById("minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById("seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (dateDiff === 0) {
    clearInterval(counter);
  }
}, 1000);

// End Events Siction

// Start Our Skills and Stats Sections

// Our Skills Siction var
let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");
// Stats Section var
let statsSection = document.querySelector("#stats");
let statsNumber = document.querySelectorAll("#stats .number");
let started = false;
// Skills Siction Scroll
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // Stats Section Scroll
  if (window.scrollY >= statsSection.offsetTop - 600) {
    if (!started) {
      statsNumber.forEach((num) => statsCounter(num));
    }
    started = true;
  }
};

// Stats Section function
function statsCounter(ele) {
  let goal = ele.dataset.goal;
  let count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(count);
    }
  }, 1500 / goal);
}
// End Our Skills and Stats Sections
