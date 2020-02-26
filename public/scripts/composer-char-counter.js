$(document).ready(() => {

  $("textarea").keyup(() => {
    let stringSize = $('textarea')[0].value.length;
    $('.counter')[0].innerText = 140 - stringSize;
    
    let charactersLeft = 140 - stringSize;
    if (charactersLeft < 0) {
      $('.counter').addClass('fontRed');
    } else {
      $('.counter').removeClass('fontRed');
    }
    
  })
  

})