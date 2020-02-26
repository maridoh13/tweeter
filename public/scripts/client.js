/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/
// var moment = require('moment');


$(document).ready(() => {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

 

    
  const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    for (let tweet of tweets) {
      let value = createTweetElement(tweet);
      $('#tweets-container').append(value);
    }
    
  }
  

  const createTweetElement = function(tweet) {
    // let $tweet = $('<article>').addClass('tweet');
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
  }
  
  renderTweets(data);


  

})