/* eslint-disable no-unused-vars */
function startTimer() {
  intervalId = setInterval(function () {
    seconds++
    var $seconds = document.querySelector('.seconds')
    $seconds.textContent = timer(seconds)
  }, 1000)
}

function pauseTimer() {
  clearInterval(intervalId)
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
