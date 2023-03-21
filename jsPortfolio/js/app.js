"use strict";

document.addEventListener('DOMContentLoaded', (event) => {

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
  .typeString('Self-taught and educated in: ')
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

  $(function(){
    $("dt").click(function(){
      $(this).toggleClass("open");
      if($(this).hasClass("open"))
        $("dt").not(this).removeClass("open");
    })
  })
});