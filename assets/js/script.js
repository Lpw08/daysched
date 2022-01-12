function updateTime() {
    var x;
    var prefix = "time"
    function openForm() {
        document.getElementById("myForm").style.display = "block";
    }

    function closeForm() {
        document.getElementById("eventSlot").append(Event);
        document.getElementById("myForm").style.display = "none";
    }

    //this checks to see if its past or present
    for (var i = 0; x = document.getElementById(prefix + i); i++) {
        if (x != "") {
            moment().isAfter(datetime);
            class {"past"};
            moment().isSame(datetime);
            class { "present"};
            moment().isBefore(datetime);
            class  {future};
        }
    }
}
//update the time every 60 seconds
setInterval(function () {
    updateTime();
}, 60000);