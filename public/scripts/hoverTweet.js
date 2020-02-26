$(document).ready(() => {

  
  $('.tweetBox').mouseover(() => {
    $('#tweetUsername').addClass('textWhenHover');
  });
  $('.tweetBox').mouseout(() => {
    $('#tweetUsername').removeClass('textWhenHover');
  });

  $('.tweetBox').mouseover(() => {
    $('article').addClass('boxWhenHover');
  })

  $('.tweetBox').mouseout(() => {
    $('article').removeClass('boxWhenHover');
  })


})
