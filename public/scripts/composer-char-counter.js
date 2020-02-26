$(document).ready(() => {

  $("textarea").keyup(() => {
    const stringSize = $('textarea')[0].value.length;
    const charactersLeft = 140 - stringSize;
    
    $('.counter')[0].innerText = charactersLeft;
    
    if (charactersLeft < 0) {
      $('.counter').addClass('fontRed');
    } else {
      $('.counter').removeClass('fontRed');
    }
    
  })
  
})
