var today = dayjs();

$('#currentDay').text(today.format("dddd, MMMM D"));

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    var hour9 = $('#hour-9');
    var hour10 = $('#hour-10');
    var hour11 = $('#hour-11');
    var hour12 = $('#hour-12');
    var hour1 = $('#hour-1');
    var hour2 = $('#hour-2');
    var hour3 = $('#hour-3');
    var hour4 = $('#hour-4');
    var hour5 = $('#hour-5');

    if (dayjs().format('HH') === '09') {
      hour9.addClass('present');
    } else if (dayjs().format('HH') === '10' || '11' || '12' || '13' || '14' || '15'|| '16' || '17') {
      hour9.addClass('past');
    } else {
      hour9.addclass('past');
    }

    if (dayjs().format('HH') === '10') {
      hour10.addClass('present');
    } else if (dayjs().format('HH') === '11' || '12' || '13' || '14' || '15'|| '16' || '17') {
      hour10.addClass('past');
    } else if (dayjs().format('HH') === '09') {
      hour10.addClass('future');
    } else {
      hour10.addclass('past');
    }

    if (dayjs().format('HH') === '11') {
      hour11.addClass('present');
    } else if (dayjs().format('HH') === '12' || '13' || '14' || '15'|| '16' || '17') {
      hour11.addClass('past');
    } else if (dayjs().format('HH') === '09' || '10') {
      hour11.addClass('future');
    } else {
      hour11.addclass('past');
    }

    if (dayjs().format('HH') === '12') {
      hour12.addClass('present');
    } else if (dayjs().format('HH') === '13' || '14' || '15'|| '16' || '17') {
      hour12.addClass('past');
    } else if (dayjs().format('HH') === '09' || '10' || '11') {
      hour12.addClass('future');
    } else {
      hour12.addclass('past');
    }

    if (dayjs().format('HH') === '13') {
      hour1.addClass('present');
    } else if (dayjs().format('HH') === '14' || '15'|| '16' || '17') {
      hour1.addClass('past');
    } else if (dayjs().format('HH') === '09' || '10' || '11' || '12') {
      hour1.addClass('future');
    } else {
      hour1.addclass('past');
    }

    if (dayjs().format('HH') === '14') {
      hour2.addClass('present');
    } else if (dayjs().format('HH') === '15'|| '16' || '17') {
      hour2.addClass('past');
    } else if (dayjs().format('HH') === '09' || '10' || '11' || '12' || '13') {
      hour2.addClass('future');
    } else {
      hour2.addclass('past');
    }

    if (dayjs().format('HH') === '15') {
      hour3.addClass('present');
    } else if (dayjs().format('HH') === '16' || '17') {
      hour3.addClass('past');
    } else if (dayjs().format('HH') === '09' || '10' || '11' || '12' || '13' || '14') {
      hour3.addClass('future');
    } else {
      hour3.addclass('past');
    }

    if (dayjs().format('HH') === '16') {
      hour4.addClass('present');
    } else if (dayjs().format('HH') === '17') {
      hour4.addClass('past');
    } else if (dayjs().format('HH') === '09' || '10' || '11' || '12' || '13' || '14' || '15') {
      hour4.addClass('future');
    } else {
      hour4.addclass('past');
    }

    if (dayjs().format('HH') === '17') {
      hour5.addClass('present');
    } else if (dayjs().format('HH') === '09' || '10' || '11' || '12' || '13' || '14' || '15' || '16') {
      hour5.addClass('future');
    } else {
      hour5.addclass('past');
    }

    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  