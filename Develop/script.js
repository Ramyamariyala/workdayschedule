

// function GetDateTimeFunction(){
//     var todayDate = new Date(); 
//     $("#currentDay").html(todayDate);
// }
//   $(document).ready(function (){
//     setInterval(GetDateTimeFunction(),1000);
// })
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", 
                "July", "August", "September", "October", "November", "December"];
var currentDate = ""; // string for holding date index to timeEntries
var currentDateString = ""; // string for holding today's date for display
GetDateTime ();
function GetDateTime() {
    var today = new Date(); // gets current date
    var day = today.getDate();
    var dayEnd = "th"; // 1st, 2nd, 3rd, 4th, etc.

    currentHour = today.getHours(); // current hour, in military format

    // pad with zero if day is less than 10 for sorting purposes
    if (day < 10) {
        currentDate = today.getFullYear() + months[today.getMonth()] + "0" + day; 
    }
    else {
        currentDate = today.getFullYear() + months[today.getMonth()] + day;
    }

    // Add correct ending to day; default to initialized value of "th"
    if ((day === 1) || (day === 21) || (day === 31)) {
        dayEnd = "st";
    }
    else if ((day === 2) || (day === 22)) {
        dayEnd = "nd";
    }
    else if ((day === 3) || (day === 23)) {
        dayEnd = "rd";
    }

    currentDateString = days[today.getDay()] + ", " + months[today.getMonth()] + " " + 
        day + dayEnd + ", " + today.getFullYear(); // date string to display in header
    $("#currentDay").text(currentDateString); // set header date
}