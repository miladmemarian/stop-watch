/* eslint-disable no-unused-vars */
var seconds = 0;
var $start = document.querySelector(".start");

$start.addEventListener("click", startTimer);

function startTimer() {
  setInterval(function() {
    seconds++;
    var $seconds = document.querySelector(".seconds");
    $seconds.textContent = timer(seconds);
  }, 1000);
}

function timer(seconds) {
  var minutes = Math.floor(seconds / 60);
  var seconds = seconds % 60;
  var timer = minutes + ":" + seconds;
  return timer;
}
