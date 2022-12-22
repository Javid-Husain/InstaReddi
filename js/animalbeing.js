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
  const memes = ['https://i.redd.it/yb2irlfh10761.jpg',
  'https://i.redd.it/gpce5tn2gfn31.jpg',
  'https://i.redd.it/91kn7day5vb51.png',
  'https://i.redd.it/ozr622j96wa31.jpg',
  'https://i.redd.it/by7cw0mfle361.jpg',
  'https://i.redd.it/s8lx6699kkuz.jpg',
  'https://i.redd.it/5ebzhpir7mz01.jpg',
  'https://gfycat.com/plushveneratedegg',
  'https://i.redd.it/1due59bc0j231.jpg',
  'https://i.imgur.com/pP6yEis.jpg',
  'https://i.redd.it/bkv1yr7k0kh51.jpg',
  'https://i.redd.it/f2fumowyxnu51.jpg',
  'https://i.redd.it/l4og4gccoer41.jpg',
  'https://i.redd.it/qaly927v8fm11.png',
  'https://gfycat.com/biodegradablemistybullfrog',
  'https://i.redd.it/vixsvwejvhs41.jpg',
  'https://i.redd.it/f2e2yyh6t4f31.jpg',
  'https://i.redd.it/6i9e4pjnetm41.jpg',
  'https://i.redd.it/pttgnywj1zs61.jpg',
  'https://i.redd.it/b0iof4kvsh911.jpg',
  'https://i.redd.it/uejbvl94wf271.jpg',
  'https://i.redd.it/c2t19oalu5d11.jpg',
  'https://i.redd.it/4qarib67oeh31.jpg',
  'https://i.imgur.com/OVfUwDw.jpg',
  'https://gfycat.com/nearplushicelandicsheepdog',
  'https://i.redd.it/m0nsg6ro9so41.jpg',
  'https://i.redd.it/d4w0p6csrpa61.jpg',
  'https://i.redd.it/cc1s88txdag31.jpg',
  'https://i.redd.it/g9wark2v9dw41.jpg',
  'https://i.redd.it/35tcjjjb8eiz.jpg',
  'https://i.redd.it/e8kbduinoc251.jpg',
  'https://i.redd.it/y0z7t045lnyz.jpg',
  'https://i.imgur.com/Eb7T3Nq.jpg',
  'https://i.redd.it/136200y6js841.jpg',
  'https://i.redd.it/5zx411sd40l61.jpg',
  'https://i.redd.it/d5b9qh5o3t641.jpg',
  'https://i.redd.it/bca21hdjhuc11.jpg',
  'https://i.redd.it/8gkbandr6r861.jpg',
  'https://i.redd.it/r69cp3c6oea51.jpg',
  'https://i.redd.it/4erqm3nhloo21.jpg',
  'https://i.redd.it/sk6p89jpg8f51.jpg',
  'https://i.redd.it/ewbnt168xt371.jpg',
  'http://i.imgur.com/s0TXxZZ.jpg',
  'https://i.redd.it/pnxh1lr0i0061.jpg',
  'https://i.redd.it/tg8m39bjpmc21.jpg',
  'https://i.redd.it/r8wosmnj5y541.jpg',
  'https://i.redd.it/17ds9hdy7e111.jpg',
  'https://i.redd.it/w5pj5yet17t31.jpg',
  'https://i.redd.it/dazy7bt4kiz51.jpg',
  'https://i.redd.it/oidufmuyukl11.jpg',
  'https://i.redd.it/fkbnr4zdr1uz.jpg',
  'https://i.redd.it/ml70hs9tpuf21.jpg',
  'https://i.imgur.com/wLBFtMN.jpg',
  'https://i.redd.it/54yxzkr364241.jpg',
  'https://i.redd.it/nkk8mq3sdev11.jpg',
  'https://i.redd.it/1zlhyanlh03z.jpg',
  'https://i.redd.it/ypo32wb5ksg31.jpg',
  'https://i.redd.it/d75ksz7h87v41.jpg',
  'https://i.imgur.com/iqjF3UQ.jpg',
  'https://i.redd.it/82mq29qa50w61.jpg',
  'https://i.imgur.com/MWKYMe5.jpg',
  'https://i.redd.it/etqary6i0hq51.jpg',
  'https://i.redd.it/fitijpaxwgt21.jpg',
  'https://i.redd.it/cb4i31efz8k41.jpg',
  'https://i.redd.it/o0ptb7deydgz.jpg',
  'https://i.imgur.com/E0Vk6li.jpg',
  'https://i.redd.it/f322t7u6sih41.jpg',
  'https://i.redd.it/wxd7sj5414n21.jpg',
  'https://i.redd.it/g3fggluvgz161.jpg',
  'https://i.redd.it/o9qv74sqxj551.jpg',
  'https://i.redd.it/klxmzcuesyv31.png',
  'https://i.redd.it/ppl4aj3hwus41.jpg',
  'https://i.redd.it/kxtcbld9jh461.png',
  'https://i.redd.it/r7dz4r4ya6v51.jpg',
  'https://i.redd.it/inbmdvzl8mm01.jpg',
  'https://i.redd.it/a78q3epk72v51.jpg',
  'https://i.imgur.com/JgKp7g6.jpg',
  'https://i.redd.it/vlbi2rhw3y261.jpg',
  'https://i.redd.it/64vfwxog1pe51.jpg',
  'https://i.imgur.com/dw7eEAr.png',
  'https://i.redd.it/ljspbuo4oe921.jpg',
  'https://i.redd.it/tjw76577w6y41.jpg',
  'http://imgur.com/njcvtKk.jpg',
  'https://i.redd.it/gvemuay3u3851.jpg',
  'https://i.redd.it/dpx6uiyv6wq41.jpg',
  'https://i.redd.it/3lfgth36vc761.jpg',
  'https://i.redd.it/sryyl10a74p01.jpg',
  'https://i.imgur.com/7KG0xqs.jpg',
  'https://i.redd.it/4cyp6fan1v931.jpg',
  'https://i.redd.it/bs8q227gu9c51.jpg',
  'https://i.redd.it/lh1o55mq5dy41.jpg',
  'https://i.redd.it/bhshvzgucbf31.jpg',
  'https://i.redd.it/1elastt0hlq31.jpg',
  'https://i.imgur.com/243brHV.jpg',
  'https://i.redd.it/u2wk3e5yu6x11.jpg',
  'https://i.redd.it/j6yiwew59xo61.jpg',
  'https://i.redd.it/tb2b133aa1z21.jpg',
  'https://i.redd.it/0klhom5aqo251.jpg',
  'https://gfycat.com/personalshockedcapeghostfrog',
  'https://i.redd.it/7oriemky9vt51.jpg',
  'https://i.redd.it/pwl7v8teoj761.jpg']
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