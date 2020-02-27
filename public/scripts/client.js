/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/


$(document).ready(() => {

  // function to avoid 'hacking' using <script> as part of text
  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  const data = [];

  const renderTweets = function(tweets) {
    // renders all tweets from DB
    for (let tweet of tweets) {
      let value = createTweetElement(tweet);
      $('#tweets-container').prepend(value);
    }
    
  };

  const renderTweet = function(tweet) {
    let value = createTweetElement(tweet);
    $('#tweets-container').prepend(value);
    
  };
  

  const createTweetElement = function(tweet) {
    const $tweet = `
    <article class="tweetBox">
    <img id="icon" src="${tweet.user.avatars}" alt="avatar icon"></img>
    <p id="nameOfUser">${tweet.user.name}</p>
    <p id="tweetUsername">${tweet.user.handle}</p>
    <p id="tweetText">${escape(tweet.content.text)}</p>
    <footer id="timeStamp">${moment(tweet['created_at']).fromNow()}</footer>
    </article>
    `
    return $tweet;

  };

  const loadTweet = () => {
    // event.preventDefault();
    $.ajax('/tweets', { method: 'GET' })
    .then((db) => {
      renderTweet(db[db.length - 1]);
    })

  };

  const loadTweets = () => {
    $.ajax('/tweets', { method: 'GET' })
    .then((db) => {
      renderTweets(db);
    })

  };

  loadTweets();
  
  // Submitting the tweets   //

  const $form = $('form');

  $form.on('submit', function (event) {
    $("#errorMsg").slideUp(300);
    event.preventDefault();
    let dataSer = $(this).serialize(); 
    let size = dataSer.length - 5;
    
    if (size > 140) {
      $('#errorMsg')
        .text( "DANGER ZONE: message too long." )
        .slideDown(300)
    } 
    else if (size < 1 || size === null) {
      $('#errorMsg')
        .text( "DANGER ZONE: please enter some text." )
        .slideDown(300)
    } 
    else {
      $.ajax('/tweets', { method: 'POST', data: dataSer})
      .then(() => {
        data.push(dataSer);
      })
      .then(() => {
        loadTweet();
      })
      // $('textarea')[0].value = ""
      
      // .catch((xhr, status, error) => {
      //   var errorMessage = xhr.status + ': ' + xhr.statusText;
      //   alert('Error - ' + errorMessage + '. Please enter text.')
      // })
      
    }

    
  });
  
  

  
})




