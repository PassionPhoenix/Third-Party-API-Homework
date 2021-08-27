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
var Fifteen = $('#15pm');
var Sixteen = $('#16pm');
var Seventeen = $('#17pm');
var Eighteen = $('#18pm');
var Nineteen = $('#19pm');
var Twenty = $('#20pm')

var Input;
var LocalTiming;

function displayTime() {
    CurrentDay.html(rightNow);
};

function init(){
    var Base9 = JSON.parse(localStorage.getItem("09:00AM"));
    var Base10 = JSON.parse(localStorage.getItem("10:00AM"));
    var Base11 = JSON.parse(localStorage.getItem("11:00AM"));
    var Base12 = JSON.parse(localStorage.getItem("12:00AM"));
    var Base1 = JSON.parse(localStorage.getItem("01:00PM"));
    var Base2 = JSON.parse(localStorage.getItem("02:00PM"));
    var Base3 = JSON.parse(localStorage.getItem("03:00PM"));
    var Base4 = JSON.parse(localStorage.getItem("04:00PM"));
    var Base5 = JSON.parse(localStorage.getItem("05:00PM"));
    var Base6 = JSON.parse(localStorage.getItem("06:00PM"));
    var Base7 = JSON.parse(localStorage.getItem("07:00PM"));
    var Base8 = JSON.parse(localStorage.getItem("08:00PM"));

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
    Twenty.val(Base8)
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
        console.log(Input)
        LocalTiming = $(this).siblings(".title").text().trim();
        localStorage.setItem(LocalTiming, JSON.stringify(Input));
      });
});



setInterval(displayTime, 1000);