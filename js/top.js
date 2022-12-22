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
  const memes = ['https://i.redd.it/xmvo04g9smg61.jpg',
  'https://i.redd.it/1r52kpvumau91.jpg',
  'https://i.redd.it/wl2kw46pt7j91.png',
  'https://i.redd.it/c51s9tk41kp91.jpg',
  'https://i.redd.it/90iohev6box91.jpg',
  'https://i.redd.it/t1cv4zi9q4t91.jpg',
  'https://i.redd.it/aeik4ez4aac91.jpg',
  'https://i.redd.it/d9fqpda94jc91.jpg',
  'https://i.redd.it/zl72xz3zzir91.jpg',
  'https://i.redd.it/vdn9qc73gis91.jpg',
  'https://i.redd.it/pg7acopsgfq51.png',
  'https://i.redd.it/oscmmsuqs21a1.jpg',
  'https://i.redd.it/rbq6ojj2jsl91.jpg',
  'https://i.redd.it/ftn6ksbyu5g71.jpg',
  'https://i.redd.it/vfmzbja6qbx91.jpg',
  'https://i.imgur.com/YAgm6eM.jpg',
  'https://i.redd.it/kllkijq8qpg91.jpg',
  'https://i.imgur.com/MAg68KC.jpg',
  'https://i.imgur.com/neuqL8G.jpg',
  'https://i.redd.it/3urpf8np1vz91.jpg',
  'https://i.redd.it/ps8cy3driv391.jpg',
  'https://i.redd.it/kc71pyidcsf61.jpg',
  'https://i.imgur.com/YcD7TxR.jpg',
  'https://i.redd.it/ii615hi44ow91.jpg',
  'https://i.redd.it/736rnx7aa90a1.jpg',
  'https://i.redd.it/66sc7eghz3b91.jpg',
  'https://i.redd.it/jmq1md75mlr91.jpg',
  'https://i.redd.it/pf6d87obbnk91.jpg',
  'https://i.imgur.com/nKoaCag.jpg',
  'https://i.redd.it/gn67z3mj1wi91.jpg',
  'https://i.redd.it/adedkw96j0t51.jpg',
  'https://i.redd.it/tope0zin4yc91.jpg',
  'https://i.redd.it/nu9fu8mpx1f61.jpg',
  'https://i.redd.it/riiz51sbuov91.png',
  'https://i.redd.it/2oz2unv2udj61.png',
  'https://i.redd.it/6jtr0dvupwa91.jpg',
  'https://i.redd.it/y604btd34vy91.jpg',
  'https://i.redd.it/3pfth5ikewn71.jpg',
  'https://i.redd.it/eg1z1s8itzn91.jpg',
  'https://i.redd.it/f4zytiyta4o81.jpg',
  'https://i.redd.it/26hyh2k83pa91.jpg',
  'https://i.redd.it/cl2ssuttj8h91.jpg',
  'https://i.redd.it/ti1pgh8z67t51.jpg',
  'https://i.redd.it/nbwejnf99gw61.jpg',
  'https://i.redd.it/fyckvz8iah1a1.jpg',
  'https://i.redd.it/y0lstrrepyb91.jpg',
  'https://i.imgur.com/A6DKIq8.jpg',
  'https://i.redd.it/h8k1qh73vuj91.jpg',
  'https://i.redd.it/63kiplh2zgt91.jpg',
  'https://i.redd.it/qxromsvrd32a1.jpg',
  'https://i.redd.it/8rpiw3t02h0a1.jpg',
  'https://i.redd.it/8em1l3k0nxz91.jpg',
  'https://i.redd.it/2vopjh1z6yy91.jpg',
  'https://i.redd.it/tpinejhqt2d91.png',
  'https://i.redd.it/w3laix179wb61.jpg',
  'https://i.redd.it/1kmt0gc000h91.png',
  'https://i.redd.it/de439d2wiix61.png',
  'https://i.redd.it/33wm6har83q81.jpg',
  'https://i.redd.it/gy8je7u4duv61.jpg',
  'https://i.redd.it/ljgmrj1u35u91.jpg',
  'https://i.redd.it/jqxj683xwdn91.jpg',
  'https://i.imgur.com/6QucJ2P.jpg',
  'https://i.redd.it/0vvj7fas47e81.jpg',
  'https://i.redd.it/r3qgk1ltcdi61.jpg',
  'https://i.redd.it/p9aozylf9vs81.jpg',
  'https://i.redd.it/wotffp22czg61.jpg',
  'https://i.redd.it/4va6kv6u5ql61.jpg',
  'https://i.redd.it/ooekx5t5c3o91.png',
  'https://i.redd.it/j8rdxc875rs91.jpg',
  'https://i.redd.it/qayykplpqn4a1.png',
  'https://i.redd.it/o8f3s1gyrol81.jpg',
  'https://i.redd.it/bc08oleupa2a1.jpg',
  'https://i.redd.it/jzear6puz1i91.jpg',
  'https://i.redd.it/mm559euww1z91.jpg',
  'https://i.redd.it/nfjoqab8q0o91.jpg',
  'https://i.redd.it/gp2a5rnyd4w91.jpg',
  'https://i.imgur.com/yceXAjw.jpg',
  'https://i.redd.it/ook0x8ih7ki61.jpg',
  'https://i.redd.it/sdvtqer3i5t71.jpg',
  'https://i.redd.it/x95puqlcqjv71.jpg',
  'https://i.redd.it/x108wc5c9pj51.jpg',
  'https://i.redd.it/gscg5xqom9w91.jpg',
  'https://i.redd.it/77mbd4cbw14a1.png',
  'https://i.redd.it/ivkuce35jrr91.jpg',
  'https://i.redd.it/0vw31gxdfw3a1.jpg',
  'https://i.redd.it/glbzy2emdf2a1.jpg',
  'https://i.redd.it/9f3sxwhrx5q91.png',
  'https://i.redd.it/9rr05cw3crr71.jpg',
  'https://i.redd.it/b93wafjz7gr51.jpg',
  'https://i.redd.it/nuw7vriurp491.png',
  'https://i.redd.it/esseuua5th3a1.png',
  'https://i.imgur.com/Rbch6aY.jpg',
  'https://i.redd.it/xa1fuo631n981.png',
  'https://i.redd.it/w3otuc9wzeo91.jpg',
  'https://i.redd.it/czpn2ssm3tm91.png',
  'https://i.redd.it/hqgbynjgeik81.png',
  'https://i.redd.it/dma81q6mj6e61.jpg',
  'https://i.redd.it/l1rw4p8k7bv91.png',
  'https://i.redd.it/0hsax9bf9sd81.png',
  'https://i.redd.it/zpxgw0fron0a1.jpg',
  'https://i.redd.it/3xtpqoal5ev51.png',
  'https://i.imgur.com/MPZyD9d.jpg',
  'https://i.imgur.com/cmoHz6p.jpg',
  'https://i.redd.it/mq0p9ftkvyt91.jpg',
  'https://i.redd.it/j4ybhhuuqqo81.jpg',
  'https://i.redd.it/8eiugy2fh5891.jpg',
  'https://i.redd.it/ahcb1mr6mmo91.jpg',
  'https://i.redd.it/xssbfvf0pww91.jpg',
  'https://i.redd.it/e5pa5hirb4p51.jpg',
  'https://i.imgur.com/ZGYR3BB.jpg',
  'https://i.imgur.com/rMw6C1c.jpg',
  'https://i.redd.it/ui8ubzvrkhm91.jpg',
  'https://i.redd.it/r7cdwpy685791.jpg',
  'https://i.redd.it/kwpht0cv05w91.jpg',
  'https://i.redd.it/owz68f06g23a1.jpg',
  'https://i.redd.it/3fnrgxlgf8i91.jpg',
  'https://i.redd.it/dkbe4nslkpx71.jpg',
  'https://i.redd.it/prd8zy83hsv91.jpg',
  'https://i.redd.it/jl0sy8u1vpq91.jpg',
  'https://i.redd.it/efdewt7o5y091.jpg',
  'https://i.redd.it/lkgy6i3qmxv91.jpg',
  'https://i.redd.it/uttvst8f8xe91.jpg',
  'https://i.redd.it/t6nghv2l56l91.png',
  'https://i.redd.it/5z5tpk5blei91.jpg',
  'https://i.redd.it/xzaxrl7tpj461.jpg',
  'https://i.redd.it/1t6ln65rquh71.png',
  'https://i.redd.it/0wm2ocba76t61.jpg',
  'https://i.redd.it/x8dnlpe6j2881.jpg',
  'https://i.redd.it/a7oq95wiws271.jpg',
  'https://i.redd.it/hduyp16rv9r51.jpg',
  'https://i.redd.it/l30lylmje5991.jpg',
  'https://i.redd.it/sp3l29q672v61.jpg',
  'https://i.redd.it/yz2cwomz7bw61.jpg',
  'https://i.imgur.com/ZPYZERl.jpg',
  'https://i.imgur.com/wzUyYZD.jpg',
  'https://i.redd.it/abyjqjiq9cz91.jpg',
  'https://i.redd.it/9ekp0acqbbt91.jpg',
  'https://i.redd.it/6on9034j04z61.jpg',
  'https://i.redd.it/07wkzg0ossp91.jpg',
  'https://i.redd.it/hftp93gvtnh91.jpg',
  'https://i.redd.it/z5ssiithzy271.jpg',
  'https://i.redd.it/9u7ooim8hit91.jpg',
  'https://i.redd.it/qkpa9ru3ml181.jpg',
  'https://i.redd.it/j53gg9mrjfz61.jpg',
  'https://i.redd.it/7ozfixo3ogo91.jpg',
  'https://i.redd.it/5fozothmer471.jpg',
  'https://i.redd.it/phv1bvimep1a1.jpg',
  'https://i.redd.it/f59r7wqicv171.jpg',
  'https://i.redd.it/2vzi47r6wrl91.jpg',
  'https://i.redd.it/bq8oypaa4hz81.jpg',
  'https://i.redd.it/g3r2ng40v6w71.jpg',
  'https://i.redd.it/gnoru17h82b61.png',
  'https://i.imgur.com/tArHrBp.jpg',
  'https://i.redd.it/lk5c5q5q2a3a1.jpg',
  'https://i.redd.it/uv7i4e3zrb1a1.jpg',
  'https://i.redd.it/sjrzg4sxaub81.jpg',
  'https://i.redd.it/go95j9ax5h071.jpg',
  'https://i.redd.it/vwvqfh4560p91.jpg',
  'https://i.redd.it/f6w92oe514u91.jpg',
  'https://i.redd.it/f7oti31013j71.png',
  'https://i.redd.it/eq52cfcqtg371.jpg',
  'https://i.redd.it/jgo6oab0f5061.jpg',
  'https://i.redd.it/nuim5t79jnx61.png',
  'https://i.redd.it/1pb24knfkyj61.jpg',
  'https://i.redd.it/xse3nnon31q51.jpg',
  'https://i.redd.it/qcig180r3on91.jpg',
  'https://i.redd.it/inaposjzbah91.jpg',
  'https://i.imgur.com/wdnnpxX.jpeg',
  'https://i.redd.it/lad8xi4p14y41.jpg',
  'https://i.redd.it/i4dtdg516eu51.png',
  'https://i.redd.it/hyd8s2jw5p171.png',
  'https://i.redd.it/5awl5q3zcrj61.jpg',
  'https://i.imgur.com/4U5XNkk.jpg',
  'https://i.redd.it/r3pposqnpfq91.jpg',
  'https://i.imgur.com/YoJEahZ.jpg',
  'https://i.redd.it/ormffdeow3651.jpg',
  'https://i.imgur.com/VV3tWP3.jpg',
  'https://i.redd.it/vdrt8a5r3wm81.png',
  'https://i.redd.it/6gjv78vim2571.jpg',
  'https://i.redd.it/oh312ij6b32a1.jpg',
  'https://i.redd.it/8lt8mvd5fhs81.jpg',
  'https://i.redd.it/2opyvy02s1l51.jpg'];

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