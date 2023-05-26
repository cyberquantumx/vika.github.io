let CONFIG = {
    debug: true
}

function getTime(){

  const deadline = new Date(2023, 05, 01)
  let timerId = null;
  function countdownTimer() {
    const diff = deadline - new Date();
    console.log(diff);
    if (diff <= 0) {
      clearInterval(timerId);
      console.log(123)
      window.location.replace("index2.html");
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
  }

  const $days = document.querySelector('.timer__days');
  const $hours = document.querySelector('.timer__hours');
  const $minutes = document.querySelector('.timer__minutes');
  const $seconds = document.querySelector('.timer__seconds');
  countdownTimer();

  timerId = setInterval(countdownTimer, 1000);
}