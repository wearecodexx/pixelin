  $(function() {                       //run when the DOM is ready
  $('#round').click(function() {  //use a class, since your ID gets mangled
    $('#controllers .control').removeClass('active')
    $(this).addClass('active');      //add the class to the clicked element
    $('.canvas span').addClass('round');
  });

  $('#square').click(function() {  //use a class, since your ID gets mangled
    $('#controllers .control').removeClass('active')
    $(this).addClass('active');      //add the class to the clicked element
    $('.canvas span').removeClass('round');
  });
});



function update(jscolor) {
      document.getElementById('canvas').style.backgroundColor = '#' + jscolor
}
function updateF2F2F2(jscolor) {
    $('.canvas span.F2F2F2').css('background', '#' + jscolor)
}

function updateAD57FF(jscolor) {
    $('.canvas span.AD57FF').css('background', '#' + jscolor)
}

function updatec4F0B89(jscolor) {
    $('.canvas span.c4F0B89').css('background', '#' + jscolor)
}

function updateFFA9FB(jscolor) {
    $('.canvas span.FFA9FB').css('background', '#' + jscolor)
}
