var countDownDate = new Date("may 21, 2023 16:00:00").getTime();


var myfunc = setInterval(function() {

    //  calculate the time difference (in milliseconds​) between our current date and end date.
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    //The following code replaces HTML elements, that have their own respective IDs, with the appropriate values.
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours; 
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;

    //The following code clears the values of days, hours, minutes, and seconds and displays a heading when the timer is up.
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
    }, 1000)

  
