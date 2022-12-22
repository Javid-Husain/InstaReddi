pfunction clearAll() {
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
  const memes = ['https://i.redd.it/kz0eicvapkm81.jpg',
  'https://i.redd.it/hppwlsr0tjg71.jpg',
  'https://i.redd.it/huo9mx7itoo81.png',
  'https://i.redd.it/lf2lstpys5481.png',
  'https://i.redd.it/5afwx1vnsrk81.jpg',
  'https://i.redd.it/z19wdklnarn81.jpg',
  'https://i.redd.it/esmmn276dnj81.jpg',
  'https://i.redd.it/27y7wxlfycl81.png',
  'https://i.redd.it/i967is7egfm81.jpg',
  'https://i.redd.it/fkod806vkcf71.jpg',
  'https://i.redd.it/bkwv6dt91ge81.jpg',
  'https://i.redd.it/r89ji0s0bba81.png',
  'https://i.redd.it/vvjf4dyyqqr81.png',
  'https://i.redd.it/89n9oyvmn3n81.jpg',
  'https://i.redd.it/mwszhbjdnbm81.png',
  'https://i.redd.it/hpby3cuyvtd81.jpg',
  'https://i.redd.it/guhc13ti84791.jpg',
  'https://i.redd.it/mmv8sa913oi91.jpg',
  'https://i.redd.it/foruz6xreso81.jpg',
  'https://i.redd.it/juymoaka7rc81.jpg',
  'https://i.redd.it/fv1b7vektyd91.jpg',
  'https://i.redd.it/qa6v9h4gb8p71.jpg',
  'https://i.redd.it/5iyfhkltrae71.jpg',
  'https://i.redd.it/ep9xg9qji2m81.jpg',
  'https://i.redd.it/yihqq07kcnb81.jpg',
  'https://i.redd.it/vcwlpwifv3c81.jpg',
  'https://i.redd.it/wpzi73agy1f81.jpg',
  'https://i.redd.it/ipy3w6vxdjj81.png',
  'https://i.redd.it/j47q7wne9sw71.png',
  'https://i.redd.it/yapnvdbp9xm81.jpg',
  'https://i.redd.it/0c7aadnco0f81.jpg',
  'https://i.redd.it/qzr2wgb5tto71.jpg',
  'https://i.redd.it/61yfb2twsue81.jpg',
  'https://i.redd.it/tcy7dituj1k91.jpg',
  'https://i.redd.it/3xirovxc51p91.jpg',
  'https://i.redd.it/tithgpfc7zc81.jpg',
  'https://i.redd.it/8om8jdtx2qf81.jpg',
  'https://i.redd.it/7dctxf51rid71.jpg',
  'https://i.redd.it/ye2r5wgfgni71.jpg',
  'https://i.redd.it/k1mnqlln0mz71.jpg',
  'https://i.redd.it/9k3ytqmezpb81.png',
  'https://i.redd.it/zgjd3esspxp81.jpg',
  'https://i.redd.it/jttra00thrb91.jpg',
  'https://i.redd.it/mvf7bm4ss24a1.jpg',
  'https://i.redd.it/r6kwtr2cf7z81.jpg',
  'https://i.redd.it/odvr9tg43vf81.jpg',
  'https://i.redd.it/017altq003v81.jpg',
  'https://i.redd.it/hidt8pu70ih81.png',
  'https://i.redd.it/o1t27i0c0u0a1.jpg',
  'https://i.redd.it/4zkwl2bqyeg81.jpg',
  'https://i.redd.it/5uj14bmh355a1.jpg',
  'https://i.redd.it/apa4xr1mwcj81.jpg',
  'https://i.redd.it/e4tag9o05uj81.jpg',
  'https://i.redd.it/2gw4e9ndlah81.jpg',
  'https://i.imgur.com/gDsYKBd.jpg',
  'https://i.redd.it/tmlxfzhq6mo91.jpg',
  'https://i.redd.it/1ya9ppfkl2i81.jpg',
  'https://i.redd.it/0kfn8vmul9h71.png',
  'https://i.redd.it/6b0mlztzlum81.jpg',
  'https://i.redd.it/mf9iw9nxye881.jpg',
  'https://i.imgur.com/y2sXKS8.jpg',
  'https://i.redd.it/mtonkxhix7s91.jpg',
  'https://i.redd.it/1ntc22n2l1k81.jpg',
  'https://i.redd.it/1g4isjozfrs81.png',
  'https://i.redd.it/nml4rq9ksxn91.jpg',
  'https://i.redd.it/utzeahuqjga81.jpg',
  'https://i.redd.it/2uneieqx3bk81.png',
  'https://i.redd.it/k7tmhun8sbn81.jpg',
  'https://i.redd.it/z2i1i6d28fs91.jpg',
  'https://i.redd.it/r5rqtpb1uo581.jpg',
  'https://i.redd.it/zkfrvroc7cs91.jpg',
  'https://i.redd.it/ofh31kfpqv171.jpg',
  'https://i.redd.it/eewjmjeqw5d81.jpg',
  'https://i.redd.it/0i42kpgf1zw71.jpg',
  'https://i.redd.it/8sqvqrpig3q91.jpg',
  'https://i.imgur.com/R7jnoCq.jpg',
  'https://i.redd.it/lm08dfdr8ag91.jpg',
  'https://i.redd.it/ock8p1u69jp81.jpg',
  'https://i.redd.it/7ebvmfq9uri71.jpg',
  'https://i.redd.it/z1jwck30ihf81.jpg',
  'https://i.redd.it/negkkdtnn8k71.jpg',
  'https://i.redd.it/t5erxv2uyja91.jpg',
  'https://i.redd.it/9lg2tszvtfd81.jpg',
  'https://i.redd.it/jblgbqqvznq81.jpg',
  'https://i.redd.it/9qxdwxwjci6a1.jpg',
  'https://i.redd.it/xg8sm2lqwnf91.png',
  'https://i.redd.it/gnqgkg46w2481.jpg',
  'https://i.redd.it/ukou06ubdev71.jpg',
  'https://i.redd.it/9ozels15w7h81.jpg',
  'https://i.redd.it/ar366wnh1r181.jpg',
  'https://i.redd.it/pmz43uw4yor91.jpg',
  'https://i.imgur.com/W2GTxbs.jpg',
  'https://i.redd.it/9rubdypke9g81.jpg',
  'https://i.redd.it/55uu1vu9bgi91.jpg',
  'https://i.redd.it/724bynz0aox61.jpg',
  'https://i.redd.it/4zq1wwnichr81.jpg',
  'https://i.redd.it/5sd3sy2bd7181.jpg',
  'https://i.redd.it/6tbngdxhqhp91.jpg',
  'https://i.redd.it/k5i24xbhwh6a1.png',
  'https://i.redd.it/xvj0y0ax8lr81.jpg',
  'https://i.redd.it/kd9hx08akah91.jpg',
  'https://i.redd.it/ns0t9tn1bpy71.jpg',
  'https://i.redd.it/32nxc1kwnpn81.png',
  'https://i.redd.it/4ndwr0fgdyh81.jpg',
  'https://i.redd.it/bc0re400k2g81.png',
  'https://i.redd.it/pilo7tlbj8x91.jpg',
  'https://i.redd.it/7ayrlkcgydk81.jpg',
  'https://i.redd.it/itseg59tzub71.png',
  'https://i.redd.it/26d6moc609d81.jpg',
  'https://i.redd.it/sykmv13cthf91.jpg',
  'https://i.redd.it/2jhe83as6i5a1.jpg',
  'https://i.redd.it/v18dz2x96f591.png',
  'https://i.redd.it/hld4zq044ds91.jpg',
  'https://i.redd.it/adtckaelnld81.png',
  'https://i.redd.it/vpbbspfa3mf91.jpg',
  'https://i.redd.it/ao6wqiehtjy91.jpg',
  'https://i.redd.it/4m5o3q0dteb81.jpg',
  'https://i.redd.it/gpu1k6493bt81.jpg',
  'https://i.redd.it/bsjzao790p771.jpg',
  'https://i.redd.it/a4zhibsvnw3a1.png',
  'https://i.redd.it/kq12bosv0xw91.png',
  'https://i.redd.it/v4yv37dzlz081.jpg',
  'https://i.redd.it/mhlc3xk3byt81.jpg',
  'https://i.redd.it/6gt1t5z5dzh81.jpg',
  'https://i.redd.it/hzasrd2v4i891.png',
  'https://i.redd.it/8fgi8j7r49s81.jpg',
  'https://i.redd.it/m47zi9n7wgl81.jpg',
  'https://i.redd.it/ar2fiukm9jh71.jpg',
  'https://i.redd.it/wpcvcj1p0a381.jpg',
  'https://i.redd.it/oc8v4jsk48f81.png',
  'https://i.redd.it/lntpii74agh71.jpg',
  'https://i.redd.it/jfgmeu7t3cu81.jpg',
  'https://i.redd.it/xf645u1oxee81.png',
  'https://i.redd.it/gt020bzs0ju91.jpg',
  'https://i.redd.it/n53w6daqyx5a1.jpg',
  'https://i.redd.it/cl4h8jz5gfd71.jpg',
  'https://i.redd.it/ijrmd1cvpd5a1.jpg',
  'https://i.redd.it/uq33rroab63a1.jpg',
  'https://i.redd.it/gsaqx866e9t71.jpg',
  'https://i.redd.it/ersg6gn3iwo71.png',
  'https://i.redd.it/9fkhocoz8dr81.jpg',
  'https://i.redd.it/etwg88zkqrq91.jpg',
  'https://i.redd.it/mjnt0uw4vec81.jpg',
  'https://i.redd.it/twqqvit7vyx71.jpg',
  'https://i.redd.it/u0rq1ha50xv71.jpg',
  'https://i.redd.it/kc9rfjztbmp91.jpg',
  'https://i.redd.it/6wsqcm5unw3a1.png',
  'https://i.redd.it/nxpbue0qjdm91.jpg',
  'https://i.redd.it/p6gtmy1j46p81.jpg',
  'https://i.redd.it/1hiiurcqkv371.png',
  'https://i.redd.it/8vjboqoz3wk71.jpg',
  'https://i.redd.it/ikoocjye1sx91.jpg',
  'https://i.redd.it/gmocb2abo9q91.jpg',
  'https://i.redd.it/xyyjk1miu6l81.jpg',
  'https://i.redd.it/gxynibmzgk791.jpg',
  'https://i.redd.it/6u8ta790hhv61.jpg',
  'https://i.redd.it/9aenfgnqy6p91.jpg',
  'https://i.redd.it/es2esod8sa891.png',
  'https://i.redd.it/gkjmfvxybks81.png',
  'https://i.redd.it/t8lqlw3xqa281.png',
  'https://i.redd.it/338sqb9ml5j81.jpg',
  'https://i.redd.it/2gaf22z15te81.jpg',
  'https://i.redd.it/r0rzj84kkev81.jpg',
  'https://i.redd.it/ylmp3wsgii181.jpg',
  'https://i.redd.it/ip4ki0dvs6e81.png',
  'https://i.redd.it/j563na0so5681.jpg',
  'https://i.redd.it/ck1j239s7qc91.jpg',
  'https://i.redd.it/06bn3vjps4381.png',
  'https://i.redd.it/nt8asqhcgmn91.jpg',
  'https://i.redd.it/wr7php3dnz381.jpg',
  'https://i.redd.it/fgbkmpr1w7k81.png',
  'https://i.redd.it/ywe2kdbmtxy91.jpg',
  'https://i.redd.it/n89ksdm8um2a1.jpg',
  'https://i.redd.it/olc5qh2ecup91.jpg',
  'https://i.redd.it/4hyklf1h0n971.png',
  'https://i.redd.it/bxwkdol48wl91.jpg',
  'https://i.redd.it/gzabb6h0tq381.jpg',
  'https://i.redd.it/xrwvxfzhnqg81.jpg',
  'https://i.redd.it/yqy8kiymxsr71.png',
  'https://i.redd.it/mq404xwx2dy71.jpg',
  'https://i.redd.it/ax2o36cr8sv91.jpg',
  'https://i.redd.it/8b7pfdi50tj81.jpg',
  'https://i.redd.it/19b978qhgmd71.jpg',
  'https://i.redd.it/idxfs0pv56v81.jpg',
  'https://i.redd.it/csd798tofgn71.jpg',
  'https://i.redd.it/p4gpu7d9dhi91.jpg',
  'https://i.redd.it/ytb0exrvrve71.jpg',
  'https://i.redd.it/xrva7z7ei5l81.jpg',
  'https://i.redd.it/imf3w5jo0d571.jpg',
  'https://i.redd.it/w933k4lm716a1.png',
  'https://i.redd.it/d6ugtpjpm1h91.jpg',
  'https://i.redd.it/tjjd7sx543d81.jpg',
  'https://i.redd.it/5vux8ffwro881.jpg',
  'https://i.redd.it/u3hq463f4rj81.jpg',
  'https://i.redd.it/tm3plrole9171.jpg']
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