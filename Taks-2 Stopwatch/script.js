var startTime;
var elapsedTime = 0;
var timerInterval;
var display = document.getElementById("display");
var lapTimes = [];

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateDisplay, 10);
}

function stop() {
    clearInterval(timerInterval);
    elapsedTime = Date.now() - startTime;
}

function reset() {
    stop();
    elapsedTime = 0;
    display.textContent = "00:00:00";
    lapTimes = [];
    updateLapTimes();
}

function recordLap() {
    var lapTime = elapsedTime;
    lapTimes.push(lapTime);
    updateLapTimes();
}

function updateLapTimes() {
    var lapTimesContainer = document.getElementById("lapTimes");
    lapTimesContainer.innerHTML = "";
    for (var i = 0; i < lapTimes.length; i++) {
        var lapTime = lapTimes[i];
        var lapTimeString = formatTime(lapTime);
        var lapElement = document.createElement("div");
        lapElement.textContent = "Lap " + (i + 1) + ": " + lapTimeString;
        lapTimesContainer.appendChild(lapElement);
    }
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    var elapsedTimeString = formatTime(elapsedTime);
    display.textContent = elapsedTimeString;
}

function formatTime(time) {
    var date = new Date(time);
    var minutes = date.getUTCMinutes();
    var seconds = date.getUTCSeconds();
    var milliseconds = Math.floor(date.getUTCMilliseconds() / 10);

    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    return minutes + ":" + seconds + ":" + milliseconds;
}