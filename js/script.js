$(document).ready(function() {

    var buttons = $(".cal-button");
    var result = $(".cal-answer");
    var clear = $(".clear");

    for (var i=0; i < buttons.length; i += 1) {

        $(buttons[i]).click(addValue(i));
    }

});



for (var i = 0; i < buttons.length; i += 1) {
   // It will loop through all the buttons to add onclick-event
   // If the inside of that button is NOT '=' --> we will
   // add the onclick-function: addValue(i).
   // If it is '=' --> add the onclick-function: calculate(i)

   if (buttons[i].innerHTML === '=') {
     buttons[i].addEventListener("click", calculate(i));
   } else {
     buttons[i].addEventListener("click", addValue(i));
   }
 }
