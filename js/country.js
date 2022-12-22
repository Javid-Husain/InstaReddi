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
  const memes = ['https://i.redd.it/11wfdzny9zl41.jpg',
  'https://i.redd.it/jvwd3c9hazl41.jpg',
  'https://i.redd.it/yujhz8px6he61.jpg',
  'https://i.redd.it/jte1h297a8b61.png',
  'https://i.redd.it/nloi4g1x4o181.jpg',
  'https://i.redd.it/7gf2jmb22rk51.png',
  'https://i.redd.it/nm8e2ajnqi471.png',
  'https://i.redd.it/4dpol4to0r851.png',
  'https://i.redd.it/0c2s3ad72a251.png',
  'https://i.redd.it/46dxgendazl41.jpg',
  'https://i.redd.it/1u3p4f1c9zl41.jpg',
  'https://i.redd.it/9rg0gvpwro361.jpg',
  'https://i.redd.it/gdrym74fvde61.jpg',
  'https://i.redd.it/pf805dg5e3981.jpg',
  'https://i.redd.it/8hatd7tyqh361.jpg',
  'https://i.redd.it/fi18akmkflo41.jpg',
  'https://i.redd.it/iumsp0osd2451.jpg',
  'https://i.redd.it/l8asm67jziy71.png',
  'https://i.redd.it/afxzoze2rdw71.jpg',
  'https://i.redd.it/nxadt6i2e8171.jpg',
  'https://i.redd.it/09aewpudaht61.png',
  'https://i.redd.it/ry6hmks6bts61.jpg',
  'https://i.redd.it/2uo9zqctozp61.jpg',
  'https://i.redd.it/s9u3tmy2cv861.jpg',
  'https://i.redd.it/u39rcxzu31561.jpg',
  'https://i.redd.it/s1pf7l64c4061.jpg',
  'https://i.redd.it/skj2jj044qo51.jpg',
  'https://i.redd.it/493guzz1gkn51.png',
  'https://i.redd.it/n14t8yttt5r71.jpg',
  'https://i.redd.it/ttta7x84gzd71.jpg',
  'https://i.redd.it/qj1uxtxmnwa51.png',
  'https://i.redd.it/nb6otgy8yym81.jpg',
  'https://i.redd.it/s3awxhzkuaj81.jpg',
  'https://i.redd.it/mpnc3h50hsf81.jpg',
  'https://i.redd.it/g2ezbz99h8561.jpg',
  'https://i.redd.it/4yuayn2ym6n91.jpg',
  'https://i.redd.it/k43ayqhdc0h81.jpg',
  'https://i.redd.it/ul6c2hdbcci71.jpg',
  'https://i.redd.it/mo9ilz7mo4z61.jpg',
  'https://i.redd.it/xyy5ft2y6ad61.jpg',
  'https://i.redd.it/57o7zxt7lkc91.jpg',
  'https://i.redd.it/owuemm8ldof81.png',
  'https://i.redd.it/w9xqwyzldec71.jpg',
  'https://i.redd.it/pibxw7nslw371.png',
  'https://i.redd.it/4ew1zde9hw0a1.png',
  'https://i.redd.it/3h1qbvpnbif91.jpg',
  'https://i.redd.it/vgyw8f14djd91.jpg',
  'https://i.redd.it/ptgvyler7x991.jpg',
  'https://i.redd.it/r490f5lx33991.png',
  'https://i.redd.it/5x6mczne8vm81.png',
  'https://i.redd.it/uwv8s924d8g81.jpg',
  'https://i.redd.it/q1hkhv8qaci71.jpg',
  'https://i.redd.it/izxk3mu2qaa71.jpg',
  'https://i.redd.it/q3mr7xyolj971.jpg',
  'https://i.redd.it/zhcyyllucwq51.jpg',
  'https://i.redd.it/onmj8eze5d691.jpg',
  'https://i.redd.it/ouj1idpk6ax81.jpg',
  'https://i.redd.it/l5i8blu93rq91.jpg',
  'https://i.redd.it/q2oy0ri4qdf91.jpg',
  'https://i.redd.it/76tmzysdwqd91.jpg',
  'https://i.redd.it/m7wcm6ky0xf81.jpg',
  'https://i.redd.it/z1ji2asndal91.jpg',
  'https://i.redd.it/yxupclebeei91.jpg',
  'https://i.redd.it/lxndj6hddk591.jpg',
  'https://i.redd.it/gqryc9upn1491.jpg',
  'https://i.redd.it/6237kpi9v6v81.png',
  'https://i.redd.it/93mc733pvhg81.jpg',
  'https://i.redd.it/q6p25xiglc971.jpg',
  'https://i.redd.it/hrcxqasvzj4a1.jpg',
  'https://i.redd.it/0ia8w6nexkl91.png',
  'https://i.redd.it/r1tec9txdtk91.png',
  'https://i.redd.it/pc4wymvulgh91.jpg',
  'https://i.redd.it/x8aph7806tf91.jpg',
  'https://i.redd.it/yxbui18get991.jpg',
  'https://i.redd.it/d20e18d8j9w81.jpg',
  'https://i.redd.it/qrnhdw6nveb71.jpg',
  'https://i.redd.it/p7l9kw1tjlf91.png',
  'https://i.redd.it/a3obuj4zzb991.jpg',
  'https://i.redd.it/czwizqyszb991.jpg',
  'https://i.redd.it/4gfg4jnkbi791.png',
  'https://i.redd.it/737b04syig491.png',
  'https://i.redd.it/3xywjgt9xsp91.jpg',
  'https://i.redd.it/44je5tcj3cc91.png',
  'https://i.redd.it/s2630e3udr391.jpg',
  'https://i.redd.it/1e3n6f7mzg291.png']

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