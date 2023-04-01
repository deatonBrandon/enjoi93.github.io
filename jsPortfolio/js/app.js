"use strict";

$( () => {

// Begin typewriter animation
var typeAnimation = document.getElementById('testTyper');

  var typewriter = new Typewriter(typeAnimation, {
    loop: true,
  });

  typewriter
  .pauseFor(2500)
  .typeString('UX/UI Web & App Designer')
  .pauseFor(2000)
  .deleteChars(6)
  .typeString('veloper')
  .pauseFor(2000)
  .deleteAll()
  .pauseFor(500)
  .typeString('\'Full-Stack\' education from CWI')
  .pauseFor(2000)
  .deleteAll()
  .pauseFor(500)
  .typeString('Powered by: ')
  .typeString('C#')
  .pauseFor(2000)
  .deleteChars(2)
  .typeString('JavaScript')
  .pauseFor(2000)
  .deleteChars(10)
  .typeString('HTML5')
  .pauseFor(2000)
  .deleteChars(5)
  .typeString('CSS3')
  .pauseFor(2000) 
  .start();

// this function toggles the 'projects' accordion menu
  $(function(){
    $("dt").hover(function(){
      $(this).toggleClass("open");
      if($(this).hasClass("open"))
        $("dt").not(this).removeClass("open");
    });
  });

  // calendar function in form
  $( function() {
    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "1970:2023"
    });
  });

  $("#form_btn").click( (evt) => {
    // get values user entered in textboxes
    const firstName = $("#first_name").val().trim();
    const email1 = $("#email_1").val().trim();
    const email2 = $("#email_2").val().trim();
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

    // create a Boolean variable to keep track of invalid entries
    let isValid = true;

    // check user entries - adds text to <span> asterisk if invalid
    if (firstName == "") {
      $("#first_name").next().text("First name is required.");
      isValid = false;
    } else {
      $("#first_name").next().text("");
    }

    if (email1 == "") {
      $("#email_1").next().text("This field is required.");
      isValid = false;
    } else if (!emailPattern.test(email1)) {
      $("#email_1").next().text("Email must be a valid address.");
      isValid = false;
    } else {
      $("#email_1").next().text("");
    }

    if (email2 == "") {
      $("#email_2").next().text("This field is required.");
      isValid = false;
    } else {
      $("#email_2").next().text("");
    }

    if (email1 != email2) {
      $("#email_2").next().text("Email addresses must match.");
      isValid = false;
    }

    // submit the form if all entries are valid
    if (isValid == false) {
      evt.preventDefault();
    }
  });
});