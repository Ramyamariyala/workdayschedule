
var d = new Date();
var hours = d.getHours()
 
 var months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'],
     days = ['Sunday ','Monday','Tuesday','Wednesday','Thurusday','Friday','Saturday'];
    currentDateString = days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+ ' ' +d.getFullYear();
    $("#currentDay").text(currentDateString);


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
  
   getScheduleFromLS();
   

    //load schedule from LS
    function getScheduleFromLS() {
        var schedule;
        if (localStorage.getItem("schedule") === null) {
            schedule = [];
        } else {
            schedule = JSON.parse(localStorage.getItem("schedule"));
        }
        $.each(schedule, function (index, item) {
            //populate each slot.
            $('#' + item.time).children('.description').append(item.plan);
            //get clear btns for populated time slots. 
            if (item.plan !== '') {
                clearPlan($('#' + item.time).children('.hour'));
            }
        });
    }

    //store schedule in LS
    function storeScheduleInLS(plan) {
        var newSchedule;
        if (localStorage.getItem("schedule") === null) {
            //add new item to the schedule
            newSchedule = [plan];
        } else {
            newSchedule = JSON.parse(localStorage.getItem("schedule"));

            //check for and remove existing text from LS before replacing it. 
            for (var i = 0; i < newSchedule.length; i++) {
                if (newSchedule[i].time === plan.time) {
                    newSchedule.splice(i, 1);
                }
            }
            newSchedule.push(plan);
        }
        //set back in LS
        localStorage.setItem("schedule", JSON.stringify(newSchedule));
    }

        function clearPlan(domElement) {
        //clear any existing btn
        $(domElement).children('.clear').remove();

        //create element
        var clearBtn = $('<button>');
        clearBtn.addClass('clear');
        clearBtn.text('Done');
        domElement.append(clearBtn);

        //add event listener
        $('.clear').on('click', function (event) {
            $(this).parent('.hour').siblings('.description').empty();
            $(this).parent('.hour').siblings('.saveBtn').click(); //re-save
            event.preventDefault();
            location.reload();                                   
        });
    }
    $('.saveBtn').on('click', function () {
        var scheduleItem = {
            plan: $(this).siblings('.description').val().trim(),
            time: $(this).parent().attr('id') //this is the hour itself
        };
        var container = $(this).siblings('.hour');

        storeScheduleInLS(scheduleItem);
        // clearPlan(container);
    });
