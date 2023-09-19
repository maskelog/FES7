let timerInterval;

document.querySelector('.start').addEventListener('click', () => {
    let hours = 0, minutes = 0, seconds = 0;

    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        seconds++;

        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }

        document.querySelector('.HRS span').textContent = String(hours).padStart(2, '0');
        document.querySelector('.MIN span').textContent = String(minutes).padStart(2, '0');
        document.querySelector('.SEC span').textContent = String(seconds).padStart(2, '0');
    }, 1000);
});

document.querySelector('.pause').addEventListener('click', () => {
    clearInterval(timerInterval);
});

document.querySelector('.reset').addEventListener('click', () => {
    clearInterval(timerInterval);
    document.querySelector('.HRS span').textContent = "00";
    document.querySelector('.MIN span').textContent = "00";
    document.querySelector('.SEC span').textContent = "00";
});
