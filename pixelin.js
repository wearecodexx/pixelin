$(function() {                       //run when the DOM is ready
  $('#round').click(function() {  //use a class, since your ID gets mangled
    $('#controllers .control').removeClass('active')
    $(this).addClass('active');      //add the class to the clicked element
    $('#canvas span').addClass('round');
  });

  $('#square').click(function() {  //use a class, since your ID gets mangled
    $('#controllers .control').removeClass('active')
    $(this).addClass('active');      //add the class to the clicked element
    $('#canvas span').removeClass('round');
  });
});
