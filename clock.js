


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
var secondsLeft = 60;
var minutesLeft = document.getElementById("minutes");
function toggleOnOff(){
        var Timer = setInterval(function 
            function1(){ 
        document.getElementById("seconds").innerHTML = secondsLeft;
        
        secondsLeft -= 1;
        if(secondsLeft <= 0){
            clearInterval(Timer);
            var Timer2 = setInterval(function
                function2() {
                document.getElementById("minutes").innerHTML = minutesLeft;

                minutesLeft -= 1;
                if (minutesLeft <= 0){
                    clearInterval(Timer2);
                }
                },1000)
        }
        }, 1000);
        
            console.log(countdown);
        

}

function resetClock(){
    console.log("coñaso")
}