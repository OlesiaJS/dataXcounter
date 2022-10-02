
let userDate;
function getuserDate() {
    userDate = prompt('Напиши дату Х?', '2022, 11, 1');
    return userDate;
}

getuserDate();

const gameover = document.querySelector('svg');
const error = document.querySelector('.error');
const deadline = new Date(userDate);
console.log(!isNaN(deadline));
if (userDate != 'undefined' && !isNaN(deadline)) {
    playData();
}
else {
    console.log('we here');
    error.innerHTML = `data is not matches!`;
    error.classList.add('error');
    error.style.display = error.style.display === 'none' ? 'block' : 'none';
    setTimeout(() => getuserDate(), 2500);
}


function playData() {
    document.addEventListener('DOMContentLoaded', function () {
        // const deadline = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 01);
        let timerId = null;
        // склонение числительных
        function declensionNum(num, words) {
            return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
        }
        diff = deadline - new Date();
        function countdownTimer() { //different bitween dates
            diff = deadline - new Date();
            if (diff <= 0) {
                return gameover.style.display = gameover.style.display === 'none' ? 'block' : 'none';
            }
            const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
            const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
            const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
            const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
            $days.textContent = days < 10 ? '0' + days : days;
            $hours.textContent = hours < 10 ? '0' + hours : hours;
            $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
            $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
            $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
            $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
            $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
            $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
        }
        // получаем элементы, содержащие компоненты даты
        const $days = document.querySelector('.timer__days');
        const $hours = document.querySelector('.timer__hours');
        const $minutes = document.querySelector('.timer__minutes');
        const $seconds = document.querySelector('.timer__seconds');
        // вызываем функцию countdownTimer
        countdownTimer();
        if (diff > 0) {
            timerId = setInterval(countdownTimer, 1000);// вызываем функцию countdownTimer каждую секунду
        }
    });
}
