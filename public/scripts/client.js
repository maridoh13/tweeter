/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/


$(document).ready(() => {

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
    <p id="tweetText">${tweet.content.text}</p>
    <footer id="timeStamp">${moment(tweet['created_at']).fromNow()}</footer>
    </article>
    `
    return $tweet;

  };

  const loadTweets = () => {
    $.ajax('/tweets', { method: 'GET' })
    .then((db) => {
      console.log('in the db', db)
      renderTweets(db);
    })

  };

  loadTweets();
  


  const $form = $('form');

  $form.on('submit', function (event) {
    event.preventDefault();
    let text = $form.serialize();
    let size = text.length - 5;
    
    if (size > 140) {
      alert('Please reduce number of characters. Limit of 140.');
      return;

    } else {

      const newTweet =  {
        "user": {
          "name": "Someone Else",
          "avatars": "https://i.imgur.com/nlhLi3I.png",
          "handle": "@SE" },
        "content": {
          "text": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        },
        "created_at": new Date()
      }
      
      $.ajax('/tweets', { method: 'POST', data: $form.serialize()})
      .then(() => {
        data.push(newTweet);
      })
      .catch((xhr, status, error) => {
        var errorMessage = xhr.status + ': ' + xhr.statusText;
        alert('Error - ' + errorMessage + '. Please enter text.')
      })
      
    }

    const loadTweet = () => {
      // event.preventDefault();
      $.ajax('/tweets', { method: 'GET' })
      .then((db) => {
        renderTweet(db[db.length - 1]);
      })
  
    };

    loadTweet();
    
  });
  
  

  
})




