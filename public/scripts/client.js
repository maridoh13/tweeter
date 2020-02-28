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
    // const $tweet = `
    // <article class="tweetBox">
    // <img id="icon" src="${tweet.user.avatars}" alt="avatar icon"></img>
    // <p id="nameOfUser">${tweet.user.name}</p>
    // <div id="tweetUsername">
    // <span>${tweet.user.handle}</span>
    // </div>
    // <p id="tweetText">${escape(tweet.content.text)}</p>
    // <footer id="timeStamp">${moment(tweet['created_at']).fromNow()}</footer>
    // <div id="icons">
    // <i class="fa fa-flag"></i>
    // <i class="fa fa-retweet"></i>
    // <i class="fa fa-heart"></i>
    // </div>
    // </article>
    // `

    const $tweet = `
    <article class="tweetBox">
      <header id="headerTweet">
        <div class="userInfo">
          <img id="icon" src="${tweet.user.avatars}" alt="avatar icon"></img>
          <div id="nameOfUser">${tweet.user.name}</div>
        </div>
        <div>
        <p id="tweetUsername">${tweet.user.handle}</p>
        </div>
      </header>
      <p id="tweetText">${escape(tweet.content.text)}</p>
      <footer id="timeStamp">
        <div>${moment(tweet['created_at']).fromNow()}</div>
        <div id="icons">
        <i class="fa fa-flag"></i>
        <i class="fa fa-retweet"></i>
        <i class="fa fa-heart"></i>
        </div>
      </footer>
    </article>
    `
    return $tweet;

  };

  const loadTweet = () => {
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
        $('textarea')[0].value = ""
        $('.counter')[0].innerHTML = 140;
      })
      .then(() => {
        loadTweet();
      })
      
    }
    
  });
  
})




