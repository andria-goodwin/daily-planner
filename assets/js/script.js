$(function () {

    // Event listener for saveBtn click
    $('.saveBtn').on('click', function () {
      // get values of the description in jQuery
      var inputValue = $(this).siblings('.description').val();
      // get the id attribute of the parent div element
      var hourKey = $(this).parent().attr('id');

      // save in local storage
      localStorage.setItem(hourKey, inputValue);
    });
    
    //local variables for past/present/future color coding
    var hour9 = $('#hour-9');
    var hour10 = $('#hour-10');
    var hour11 = $('#hour-11');
    var hour12 = $('#hour-12');
    var hour1 = $('#hour-1');
    var hour2 = $('#hour-2');
    var hour3 = $('#hour-3');
    var hour4 = $('#hour-4');
    var hour5 = $('#hour-5');
    var currentHour = Number(dayjs().format("H"));

    // used to test different times
    // var currentHour = 24;

    // if statements to compare the current hour (24hr time)
    // adds classes to each element as appropriate
    if (currentHour === 9) {
      hour9.addClass('present');
    } else if (currentHour > 9 && currentHour < 18) {
      hour9.addClass('past');
    }

    if (currentHour === 10) {
      hour10.addClass('present');
    } else if (currentHour > 10 && currentHour < 18) {
      hour10.addClass('past');
    } else if (currentHour < 10 && currentHour > 8) {
      hour10.addClass('future');
    }

    if (currentHour === 11) {
      hour11.addClass('present');
    } else if (currentHour > 11 && currentHour < 18) {
      hour11.addClass('past');
    } else if (currentHour < 11 && currentHour > 8) {
      hour11.addClass('future');
    }

    if (currentHour === 12) {
      hour12.addClass('present');
    } else if (currentHour > 12 && currentHour < 18) {
      hour12.addClass('past');
    } else if (currentHour < 12 && currentHour > 8) {
      hour12.addClass('future');
    }

    if (currentHour === 13) {
      hour1.addClass('present');
    } else if (currentHour > 13 && currentHour < 18) {
      hour1.addClass('past');
    } else if (currentHour < 13 && currentHour > 8) {
      hour1.addClass('future');
    }

    if (currentHour === 14) {
      hour2.addClass('present');
    } else if (currentHour > 14 && currentHour < 18) {
      hour2.addClass('past');
    } else if (currentHour < 14 && currentHour > 8) {
      hour2.addClass('future');
    }

    if (currentHour === 15) {
      hour3.addClass('present');
    } else if (currentHour > 15 && currentHour < 18) {
      hour3.addClass('past');
    } else if (currentHour < 15 && currentHour > 8) {
      hour3.addClass('future');
    }

    if (currentHour === 16) {
      hour4.addClass('present');
    } else if (currentHour > 16 && currentHour < 18) {
      hour4.addClass('past');
    } else if (currentHour < 16 && currentHour > 8) {
      hour4.addClass('future');
    }

    if (currentHour === 17) {
      hour5.addClass('present');
    } else if (currentHour < 17 && currentHour > 8) {
      hour5.addClass('future');
    }

    // add a class to all hours outside of 9-5
    if (currentHour === 1 ||
      currentHour === 2 ||
      currentHour === 3 ||
      currentHour === 4 ||
      currentHour === 5 ||
      currentHour === 6 ||
      currentHour === 7 ||
      currentHour === 8 ||
      currentHour === 18 ||
      currentHour === 19 ||
      currentHour === 20 ||
      currentHour === 21 ||
      currentHour === 22 ||
      currentHour === 23 ||
      currentHour === 24) {
      hour9.addClass('after-hours');
      hour10.addClass('after-hours');
      hour11.addClass('after-hours');
      hour12.addClass('after-hours');
      hour1.addClass('after-hours');
      hour2.addClass('after-hours');
      hour3.addClass('after-hours');
      hour4.addClass('after-hours');
      hour5.addClass('after-hours');
    }
    
    // Get input values from local storage
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-1 .description').val(localStorage.getItem('hour-1'));
    $('#hour-2 .description').val(localStorage.getItem('hour-2'));
    $('#hour-3 .description').val(localStorage.getItem('hour-3'));
    $('#hour-4 .description').val(localStorage.getItem('hour-4'));
    $('#hour-5 .description').val(localStorage.getItem('hour-5'));

    // added date and time to the top of the page
    // used setInterval to display a live clock with ticking seconds
    setInterval(function() {
      var currentDate = dayjs().format('dddd, MMMM D | hh:mm:ss A');
      $('#currentDay').text(currentDate);
    }, 1000);

  });
  