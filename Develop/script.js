
var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    // ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'],
    days = ['Sunday ','Monday','Tuesday','Wednesday','Thurusday','Friday','Saturday'];
    currentDateString = days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+"EST";
    $("#currentDay").text(currentDateString);

