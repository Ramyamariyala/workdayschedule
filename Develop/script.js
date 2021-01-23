
var d = new Date();
 var hours = d.getHours()
 
 
 var months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'],
     days = ['Sunday ','Monday','Tuesday','Wednesday','Thurusday','Friday','Saturday'];
    currentDateString = days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate();
    $("#currentDay").text(currentDateString);

   $(".saveBtn").on("click",function(event){
  
    var text = $(this).siblings(".description").val();
    
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text)
    
   })

   $("textarea").each(function(){
       var texthour =parseInt($(this).attr("value"));
       if(texthour === hours){
       $(this).addClass("present");
       }
       if (texthour < hours) {
           $(this).addClass("past");
       }
       if (texthour > hours){
           $(this).addClass("future");

       }
    
   })

   var keys = Object.keys(localStorage);
keys.forEach(displayEvents);

function displayEvents(item) {
    $(`*[data-hour="${item}"]`).val(JSON.parse(localStorage.getItem(`${item}`)));
};
