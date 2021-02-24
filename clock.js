function incrementBreak() {
    var breakLength = document.getElementById("break-length");
    if (parseFloat(breakLength.innerText) < 60) {
        breakLength.innerText = parseFloat(breakLength.innerText) + 1;

    }
    
}
function decrementBreak() {
    var breakLength = document.getElementById("break-length");
    if (parseFloat(breakLength.innerText) > 1) {
        breakLength.innerText = parseFloat(breakLength.innerText) - 1;

    }

}
function incrementSession(){
    var sessionLength = document.getElementById("session-length");
    if (parseFloat(sessionLength.innerText) < 60) {
        var incrementedSessionValue = parseFloat(sessionLength.innerText) + 1;
        sessionLength.innerText = incrementedSessionValue;
        document.getElementById("minutes").innerText = incrementedSessionValue;
    }
}
function decrementSession() {
    var sessionLength = document.getElementById("session-length");
    if (parseFloat(sessionLength.innerText) > 1) {
        var decrementedSessionValue = parseFloat(sessionLength.innerText) - 1;
        sessionLength.innerText = decrementedSessionValue;
        document.getElementById("minutes").innerText = decrementedSessionValue;
    }
    
}

var minutes_intervals;
var seconds_intervals;
var rContext = "start";


function toggleOnOff() {
    
    // var audio = new Audio('audio_file.mp3');
        
    var min = document.getElementById('minutes');
    var sec = document.getElementById('seconds');

        
        
    sec.innerHTML = "59";
    
    

    var bMin = document.getElementById("break-length");
    var session = document.getElementById("timer-label"); 
    minutes = parseFloat(min.innerHTML);
    bMinutes = parseFloat(bMin.innerHTML);
    seconds = parseFloat(sec.innerHTML);
    
    minutes_intervals = setInterval(minutesTimer, 60000);
    seconds_intervals = setInterval(secondsTimer, 1000);
    
    
    function minutesTimer() {
        minutes--;
        
        min.innerHTML = minutes;
        
    }
    
    function secondsTimer() {
        seconds--;
        
        sec.innerHTML = seconds;
        if(seconds == "0" ){
            if(min.innerHTML === "0"){
                session.innerHTML = "Break";
                document.getElementById('beep').play();
                minutes = bMinutes
                if (seconds <= "0" && bMinutes <= "0"){
                
                    document.getElementById('beep').play();
                    window.clearInterval(minutes_intervals);
                    window.clearInterval(seconds_intervals);
                    document.getElementById('minutes').innerHTML = '25';
                    document.getElementById('seconds').innerHTML = '00';
                    document.getElementById("session-length").innerHTML = "25";
                    document.getElementById("break-length").innerHTML = "5";
            
                };
                
            }
            
            
            seconds = "60"
        }
        
    }
    
    i

}
    
        // reset app state to default
function resetBtn() {

    window.clearInterval(minutes_intervals);
    window.clearInterval(seconds_intervals);
    document.getElementById('minutes').innerHTML = '25';
    document.getElementById('seconds').innerHTML = '00';
    document.getElementById("session-length").innerHTML = "25";
    document.getElementById("break-length").innerHTML = "5";
    
}
