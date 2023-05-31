function updateCountdown(minutes) {
    if (minutes < 0 || typeof (minutes) === "string") {
        alert('Invalid input');
        return
    }

    var totalSeconds = minutes * 60;

    var countdownInterval = setInterval(() => {
        var days = Math.floor(totalSeconds / (60 * 60 * 24));
        var hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
        var mins = Math.floor((totalSeconds % (60 * 60)) / 60);
        var secs = Math.floor(totalSeconds % 60);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = mins;
        document.getElementById("seconds").textContent = secs;

        if (totalSeconds <= 0) {
            clearInterval(countdownInterval);
        }

        totalSeconds--;
    }, 1000);
}

updateCountdown(-10);


