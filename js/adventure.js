function clearAll() {
    const meme = document.querySelector(".meme-content");
    const joke = document.querySelector(".joke-content");
    const quote = document.querySelector(".quote-content");
    const riddle = document.querySelector(".riddle-content");
  
    meme.innerHTML = "";
    joke.innerHTML = "";
    quote.innerHTML = "";
    riddle.innerHTML = "";
  }
  
  function showMeme() {
    // Value should be a string representing image URL
    const randomMemeUrl = getRandomData("memes");
  
    const memeContainer = document.querySelector(".meme-content");
    const newMeme = document.createElement("img");
    newMeme.setAttribute("src", randomMemeUrl);
  
    clearAll();
  
    // Add the new img to the document
    memeContainer.appendChild(newMeme);
  }
  
  function showJoke() {
    // Value should be a string representing the joke
    const randomJokeText = getRandomData("jokes");
  
    const jokeContainer = document.querySelector(".joke-content");
    const newJoke = document.createElement("p");
    newJoke.textContent = randomJokeText;
  
    clearAll();
  
    // Add the new img to the document
    jokeContainer.appendChild(newJoke);
  }
  
  function showQuote() {
    // Value should be in format: { quote: '', author: '' }
    const randomQuote = getRandomData("quotes");
  
    const quoteContainer = document.querySelector(".quote-content");
  
    const newQuoteText = document.createElement("p");
    const newQuoteAuthor = document.createElement("p");
    newQuoteText.textContent = randomQuote.quote;
    newQuoteAuthor.textContent = "- " + randomQuote.author;
  
    clearAll();
  
    quoteContainer.appendChild(newQuoteText);
    quoteContainer.appendChild(newQuoteAuthor);
  }
  
  function showRiddle() {
    // Value should be in format: { question: '', answer: '' }
    const randomRiddle = getRandomData("riddles");
  
    const riddleContainer = document.querySelector(".riddle-content");
  
    const newRiddleText = document.createElement("p");
    const newRiddleAnswer = document.createElement("p");
  
    newRiddleText.textContent = randomRiddle.question;
    newRiddleAnswer.textContent = "- " + randomRiddle.answer;
    newRiddleAnswer.setAttribute("id", "riddle-answer");
  
    clearAll();
  
    newRiddleAnswer.hidden = true;
  
    riddleContainer.appendChild(newRiddleText);
    riddleContainer.appendChild(newRiddleAnswer);
  }
  
  function revealAnswers() {
    const riddleContent = document.querySelector(".riddle-content");
    const riddle = riddleContent.querySelector("p");
    const riddleAnswer = document.querySelector("#riddle-answer");
  
    if (riddle && riddleAnswer.hidden) {
      riddleAnswer.hidden = false;
    } else if (riddle && riddleAnswer) {
      alert("The riddle answer is already exposed!");
    } else {
      alert("There is no riddle to show the answer for!");
    }
  }
  
  /**
   * This function is used to get random data
   * Valid arguments:
   *
   * 'memes', 'jokes', 'quotes', 'riddles'
   *
   * Return values:
   *
   * For meme data:
   * A string representing an image url
   *
   * For joke data:
   * A string representing the joke
   *
   * For quote data:
   * An object - { quote: '', author: '' }
   *
   * For riddle data:
   * An object - { question: '', answer: '' }
   *
   * Example usage: getRandomData('quotes');
   */
  function getRandomData(type) {
    return data[type][rn(data[type].length)];
  }
  
  // ----------------------------------------------------
  // IGNORE EVERYTHING BELOW - Used for random data
  // ----------------------------------------------------
  
  // Everything below is pre-generated so that you don't have to go find your own memes, jokes, quotes, and math problems.
  // -----------------------------------------------
  
  // Source: https://www.thecoderpedia.com/blog/programming-memes/, Reddit
  const memes = ['http://i.imgur.com/qP0mk.png',
  'https://i.chzbgr.com/completestore/12/11/15/f4RauvogR0SFEjTfgK70Pw2.png',
  'http://i.imgur.com/kRSiu.jpg',
  'http://i.imgur.com/b4vAg.jpg',
  'http://i.imgur.com/eNLGV.jpg',
  'http://25.media.tumblr.com/tumblr_mefx4y0Sbg1rcsafno1_500.jpg',
  'http://i.imgur.com/EnbRv.jpg',
  'http://i.imgur.com/xBeBFxI.jpg',
  'http://i.imgur.com/RVt6E.jpg',
  'http://i.imgur.com/r0JDc.jpg',
  'http://i.imgur.com/nffCl.jpg',
  'http://i.imgur.com/LEMFI.jpg',
  'http://i.imgur.com/foGpN.png',
  'http://i.imgur.com/hLjQr.jpg',
  'http://i.imgur.com/qRkba.jpg',
  'http://i.imgur.com/58Kkt.jpg',
  'http://cdn.memegenerator.net/instances/400x/28867679.jpg',
  'http://i.imgur.com/c6Yah.jpg',
  'http://qkme.me/3tbkpg',
  'https://i.imgur.com/BxAJO2A.png',
  'https://i.redd.it/ujcvdu318fq81.jpg',
  'https://i.redd.it/z5abecqkrvm81.jpg',
  'https://i.redd.it/ioght5jbdu081.jpg',
  'https://i.redd.it/p1flui6nnjb11.jpg',
  'https://i.redd.it/sr9sv6jlci091.jpg',
  'https://i.redd.it/931ibnrm2mm51.jpg',
  'https://i.redd.it/hq6jjckwtnn11.jpg',
  'https://i.redd.it/5cgrhkueu7991.jpg',
  'https://i.redd.it/b8ev9aiqiu691.jpg',
  'https://i.redd.it/hhzm2vts44t71.jpg']
  // Sourced from: http://www.devtopics.com/best-programming-jokes/
  const jokes = [];
  
  // source: https://www.goodreads.com/quotes/tag/programming
  const quotes = [];
  
  // Source: https://www.rd.com/list/challenging-riddles/
  const riddles = [];
  
  function rn(len) {
    return Math.floor(Math.random() * len);
  }
  
  const data = {
    memes,
    jokes,
    quotes,
    riddles,
  };