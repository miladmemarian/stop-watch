/* eslint-disable no-unused-vars */
function startTimer() {
  setInterval(function () {
    seconds++
    var $seconds = document.querySelector('.seconds')
    $seconds.textContent = timer(seconds)
  }, 1000)
}

function timer(seconds) {
  var minutes = Math.floor(seconds / 60)
  var secs = seconds % 60
  var timer = minutes + ':' + secs
  return timer
}

var seconds = 0
var $start = document.querySelector('.start')

$start.addEventListener('click', startTimer)
