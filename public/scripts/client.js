/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

$(document).ready(() => {

  let data = [
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

  // function createTweetElement(tweetObj) {

  //   return tweetObj
  // }

  const tweetData = {
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
  }

  const tweet = `
  <img id="icon" src="${tweetData.user.avatars}" alt="avatar icon"></img>
  <p id="nameOfUser">${tweetData.user.name}</p>
  <p id="tweetUsername">${tweetData.user.handle}</p>
  <p id="tweetText">${tweetData.content.text}</textarea>
  <footer id="timeStamp">${tweetData.created_at}</footer>
  `
  $('#tweets-container').append(tweet);



})