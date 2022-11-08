// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDayEl = $("#currentDay");
var currentDateEl = $("#currentDate")
var timeBlockEl = $(".time-block");
var saveBtn = $(".saveBtn")
var description = $(".description")
var dayJS = dayjs().format('DD/MM/YYYY');
var currentHour = dayjs().hour();
var today = dayjs().day();

//Display date
currentDateEl.text(dayJS)

//Display current day
if (today === 1) {
  currentDayEl.text("Today is Monday!")
} else if (today === 2) {
  currentDayEl.text("Today is Tuesday!")
} else if (today === 3) {
  currentDayEl.text("Today is Wednesday!")
} else if (today === 4) {
  currentDayEl.text("Today is Thursday!")
} else if (today === 5) {
  currentDayEl.text("Today is Friday!")
} else if (today === 6) {
  currentDayEl.text("Today is Saturday!")
} else {
  currentDayEl.text("Today is Sunday!")
}

//Display textValue for local storage in corresponding time-block
//pull from local storage
for (var i = 9; i <= 18; i++) {
  var descriptionInStorage = localStorage.getItem(i);
  $("#hour-" + i).children("textarea").text(descriptionInStorage);
}

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  saveBtn.on("click", function(event) {
    event.preventDefault();
    var textValue = $(this).siblings("textarea").val();
    var timeID = $(this).parent().attr("data-hour");
    //How do I use this to store data for specific time block
    localStorage.setItem(timeID , textValue);
  })
  
  // Applys past, present, future colors to associated time blocks
  timeBlockEl.each(function() {
    var specificBlock = $(this).attr("data-hour");
    if (specificBlock < currentHour) {
      $(this).addClass("past")
    } else if (specificBlock == currentHour) {
      $(this).addClass("present")
    } else {
      $(this).addClass("future")
    }
  })

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // TODO: Add code to display the current date in the header of the page.
});
