/* eslint-disable no-unused-vars */
function startTimer() {
  setInterval(function () {
    seconds++
    var $seconds = document.querySelector('.seconds')
    $seconds.textContent = timer(seconds)
  }, 1000)
  return intervalId
}

function pauseTimer() {
  for (var i = 0; i < 1000000; i++) {
    clearInterval(i)
  }
}

function timer(seconds) {
  var minutes = Math.floor(seconds / 60)
  var secs = seconds % 60
  var timer = minutes + ':' + secs
  return timer
}

var intervalId = 0
var seconds = 0
var $start = document.querySelector('.start')
var $pause = document.querySelector('.pause')

$start.addEventListener('click', startTimer)
$pause.addEventListener('click', pauseTimer)
