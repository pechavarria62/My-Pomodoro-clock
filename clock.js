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

function toggleOnOff() {
    let min = document.getElementById("minutes");
    let sec = document.getElementById("seconds");
    let bMin = document.getElementById("break-length");
    let session = document.getElementById("timer-label"); 

    minutes = parseFloat(min.innerHTML);
    bMinutes = parseFloat(bMin.innerHTML);
    seconds = 59;


    let minutes_intervals = setInterval(minutesTimer, 60000);
    let seconds_intervals = setInterval(secondsTimer, 1000);

    function minutesTimer() {
        minutes--;
        min.innerHTML = minutes;
        
    }
    
    function secondsTimer() {
        seconds--;

        sec.innerHTML = seconds;
        if(seconds <= 0 ){
            if(minutes <= 0){
                session.innerHTML = "Break";
                minutes = parseFloat(bMin.innerHTML);
                
                
                
                
            }
            
        seconds = 60
        }
        
    }
    

}
    
function resetBtn() {
    console.log("fuck")

        // reset app state to default
}
