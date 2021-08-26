var rightNow = moment().format("ddd MMMM D, YYYY");
var timeNow = moment().format('hh:mm:ss a');
var hours = moment().hours();

var CurrentDay = $('#currentDay');
var Container = $('.container');
var Nine = $('#9am');
var Ten = $('#10am');
var Eleven = $('#11am');
var Twelve = $('#12am');
var Thirteen = $('#13pm');
var Fourteen = $('#14pm');
var Fifteen = $('15pm');
var Sixteen = $('16pm');
var Seventeen = $('17pm');
var Eighteen = $('18pm');
var Nineteen = $('19pm');

function displayTime() {
    CurrentDay.html(rightNow);
};

function init(){
    var Base9 = JSON.parse(localStorage.getItem("9am"));
    var Base10 = JSON.parse(localStorage.getItem("10am"));
    var Base11 = JSON.parse(localStorage.getItem("11am"));
    var Base12 = JSON.parse(localStorage.getItem("12am"));
    var Base1 = JSON.parse(localStorage.getItem("1pm"));
    var Base2 = JSON.parse(localStorage.getItem("2pm"));
    var Base3 = JSON.parse(localStorage.getItem("3pm"));
    var Base4 = JSON.parse(localStorage.getItem("4pm"));
    var Base5 = JSON.parse(localStorage.getItem("5pm"));
    var Base6 = JSON.parse(localStorage.getItem("6pm"));
    var Base7 = JSON.parse(localStorage.getItem("7pm"));

    Nine.val(Base9);
    Ten.val(Base10);
    Eleven.val(Base11);
    Twelve.val(Base12);
    Thirteen.val(Base1);
    Fourteen.val(Base2);
    Fifteen.val(Base3);
    Sixteen.val(Base4);
    Seventeen.val(Base5);
    Eighteen.val(Base6);
    Nineteen.val(Base7);
};

function Color(){
    $('.timer').each(function(){
        var Verify = parseInt($(this).attr("id"));
        var Timing = parseInt(hours);

        if (Verify > Timing){
            $(this).addClass('past');
        }
        else if (Verify < Timing){
            $(this).addClass('present');
        }
        else{
            $(this).addClass('future');
        }

    });
};

$(document).ready(function(){
    init();
    Color();

    $(".Save").on("click", function(){
        Input = $(this).siblings(".timer").val().trim();
        console.log(Input);
        Timing = $(this).siblings(".title").text().trim();
        localStorage.setItem(Timing, JSON.stringify(Input));
      });
});



setInterval(displayTime, 1000);