function incrementBreak() {
    let breakLength = document.getElementById("break-length");
    if (parseFloat(breakLength.innerText) < 60) {
        breakLength.innerText = parseFloat(breakLength.innerText) + 1;

    }
    
}
function decrementBreak() {
    let breakLength = document.getElementById("break-length");
    if (parseFloat(breakLength.innerText) > 0) {
        breakLength.innerText = parseFloat(breakLength.innerText) - 1;

    }

}
function incrementSession(){
    let sessionLength = document.getElementById("session-length");
    if (parseFloat(sessionLength.innerText) < 60) {
        let incrementedSessionValue = parseFloat(sessionLength.innerText) + 1;
        sessionLength.innerText = incrementedSessionValue;
        document.getElementById("minutes").innerText = incrementedSessionValue;
    }
}
function decrementSession() {
    let sessionLength = document.getElementById("session-length");
    if (parseFloat(sessionLength.innerText) > 0) {
        let decrementedSessionValue = parseFloat(sessionLength.innerText) - 1;
        sessionLength.innerText = decrementedSessionValue;
        document.getElementById("minutes").innerText = decrementedSessionValue;
    }
}
var clockCount = document.getElementById('start-stop').addEventListener('click', timerOn);
function timeCounter(arg1, arg2) {
    var sessionTime = arg1;
    var breakTime = arg2;
    var interval = setInterval(function() {
        arg1 -= 1000;
        var getDate = new Date();
        getDate.setTime(arg1);
        var timer = parseFloat(document.getElementById("minutes").innerHTML);
        timer.innerHTML = ('0' + getDate.getMinutes()).slice(-2) + ":" + ('0' + getDate.getSeconds()).slice(-2);

        if (arg1 === 0) {
        var snd = new Audio("Audio-1.0mp4");
        snd.play();
        var whatIsCounted = document.getElementById("timer-label");
        whatIsCounted.textContent = whatIsCounted.textContent == "session" ? whatIsCounted.textContent = "break" : whatIsCounted.textContent = "session";
        clearInterval(interval);
        timeCounter(breakTime, sessionTime);
        }
    }, 1000);

    // ------ reset button 
    var resetBttn = document.getElementById('reset').addEventListener('click', resetTimer);
    function resetTimer() {
        window.clearInterval(interval);
        document.getElementById("timer-label").textContent = "session";
        document.getElementById("minutes").textContent = "25:00";
    }
}

function timerOn() {
    var userBreakTime = Number(document.getElementById('break-length').innerText) * 60000;
    var userSessionTime = Number(document.getElementById('minutes').innerText) * 60000;
    document.getElementById("timer-label").textContent = "session";
    timeCounter(userSessionTime, userBreakTime);
}
