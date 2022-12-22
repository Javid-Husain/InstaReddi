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
  const memes = ['https://i.redd.it/o31t0cyn8t541.jpg',
  'https://i.redd.it/9uacirjmae131.jpg',
  'https://i.redd.it/5b766nyj6rv41.jpg',
  'https://i.redd.it/tv5fwxwokck41.jpg',
  'https://i.redd.it/abxs8e8gaes41.jpg',
  'https://i.redd.it/annxjx4ffss31.jpg',
  'https://i.redd.it/tgi6p9i86is41.jpg',
  'https://i.redd.it/k2bhjkx0yzm31.jpg',
  'https://i.redd.it/2l231v9tm1041.jpg',
  'https://i.redd.it/rmclku26j9h31.jpg',
  'https://i.redd.it/4lmi0swawut41.jpg',
  'https://i.redd.it/wklmaeo54u131.jpg',
  'https://i.redd.it/yo3vudux2om41.jpg',
  'https://i.redd.it/mwlw1e8mi4e31.jpg',
  'https://i.redd.it/3d1uhzdse9g41.jpg',
  'https://i.redd.it/7mireftysn841.jpg',
  'https://i.redd.it/e74gcl92n5n41.jpg',
  'https://i.redd.it/ltz6ra3e4au31.jpg',
  'https://i.redd.it/l4nebfr7myg41.png',
  'https://i.redd.it/64k77abq1m041.jpg',
  'https://i.redd.it/lw6dmym7rzv31.jpg',
  'https://i.redd.it/the3ggfx9sf71.jpg',
  'https://i.redd.it/d0xsqen81rh41.jpg',
  'https://i.redd.it/ar6pnaeshba31.png',
  'https://i.redd.it/a79ehdsdd4031.jpg',
  'https://i.redd.it/nin88j8tlbr41.jpg',
  'https://i.redd.it/3wbutm61gvk41.jpg',
  'https://i.redd.it/gj6fzv5qffn41.jpg',
  'https://i.redd.it/hs9e6kzvkie41.jpg',
  'https://i.redd.it/nb9nb2ma6rn71.jpg',
  'https://i.redd.it/dazmsralpog41.jpg',
  'https://i.redd.it/mljbvirciq541.jpg',
  'https://i.redd.it/tk56kwl0gb241.png',
  'https://i.redd.it/58g38546bug41.jpg',
  'https://i.redd.it/dg6ul94z9ud41.jpg',
  'https://i.redd.it/m2nw54laiko31.jpg',
  'https://i.redd.it/p2m7rnakvqb41.jpg',
  'https://i.redd.it/fs33m6kyqbb31.png',
  'https://i.redd.it/gxl54t7tb0q21.jpg',
  'https://i.redd.it/8rq4ddwt7hg81.jpg',
  'https://i.redd.it/f40cxgc3yon41.jpg',
  'https://i.redd.it/jevokwod56741.jpg',
  'https://i.redd.it/x0v8b709xhr41.png',
  'https://i.redd.it/c4lbr1cuqhp21.jpg',
  'https://i.redd.it/xkho12j6szc81.jpg',
  'https://i.redd.it/3fdbjorzobv71.jpg',
  'https://i.redd.it/35dewaslugh31.jpg',
  'https://i.redd.it/q7bclgvi5qq41.jpg',
  'https://i.redd.it/wznvg490ol141.jpg',
  'https://i.redd.it/5rjiiy7ostg31.jpg',
  'https://i.redd.it/8zc3wl0bld831.jpg',
  'https://i.redd.it/751qq2s5csp21.jpg',
  'https://i.redd.it/tfj9n0v3ps891.jpg',
  'https://i.redd.it/qjde1dv6ox741.jpg',
  'https://i.redd.it/emlpoptykbt91.jpg',
  'https://i.redd.it/riivz0cut4p31.jpg',
  'https://i.redd.it/4fyq5m4x30x21.png',
  'https://i.redd.it/29ysmhc2fqq41.jpg',
  'https://i.redd.it/dl8tbu797r541.jpg',
  'https://i.redd.it/ynf7wz6adoh81.jpg',
  'https://i.redd.it/5wx7h3kzccm41.jpg',
  'https://i.redd.it/r3zla0wzsjw31.png',
  'https://i.redd.it/ogulj2zjtqv31.png',
  'https://i.redd.it/qfrqtrpobcs41.jpg',
  'https://i.redd.it/unjartcee4d31.jpg',
  'https://i.redd.it/yiqjcux5u8k81.jpg',
  'https://i.redd.it/gh041p80l4u31.png',
  'https://i.redd.it/h448sl1sdby71.jpg',
  'https://i.redd.it/sddgpzf6y9k41.jpg',
  'https://i.redd.it/shbil79xazj31.png',
  'https://i.redd.it/h0equ8tl3px71.jpg',
  'https://i.redd.it/ubqeoq3zsoh71.jpg',
  'https://i.redd.it/xgezq428y2q41.jpg',
  'https://i.redd.it/jm53r5ooaof41.png',
  'https://i.redd.it/6nlt2s1qig141.jpg',
  'https://i.redd.it/s90wzy6o0nq31.jpg',
  'https://i.redd.it/erq07em9izo31.jpg',
  'https://i.redd.it/5h5n5u83muj31.jpg',
  'https://i.redd.it/kcb8j7a8zqc21.jpg',
  'https://i.redd.it/am93uk5nweu91.jpg',
  'https://i.redd.it/hdyo84b2qcf91.jpg',
  'https://i.redd.it/ixobbit4key71.jpg',
  'https://i.redd.it/xqavqg19wcc91.jpg',
  'https://i.redd.it/x1dj5u0oftf71.jpg',
  'https://i.redd.it/3if4mic3nwb31.jpg',
  'https://i.redd.it/1ugbbh9d88131.jpg',
  'https://i.redd.it/sfbyv7jw3zp91.jpg',
  'https://i.redd.it/5i8fyeweybe91.jpg',
  'https://i.redd.it/jegk2prdd8g81.jpg',
  'https://i.redd.it/8ff4dhoxc6a41.jpg',
  'https://i.redd.it/hp3xoch3g3b31.jpg',
  'https://i.redd.it/lcol0elz3vt21.png',
  'https://i.redd.it/18sjvjfstf291.jpg',
  'https://i.redd.it/v4rhwrk9owx81.jpg',
  'https://i.redd.it/ej8fbxecr8k81.jpg',
  'https://i.redd.it/0vf7af79a9u41.png',
  'https://i.redd.it/vlhvk3khkok41.jpg',
  'https://i.redd.it/m92m988j0aj41.jpg',
  'https://i.redd.it/tzqrfdh7ny241.jpg',
  'https://i.redd.it/myz24pli92431.jpg',
  'https://i.redd.it/qghczcsuzvq91.jpg',
  'https://i.redd.it/9gqgwbm35p781.jpg',
  'https://i.redd.it/w7owoopfhso71.jpg',
  'https://i.redd.it/d25k7gbtles31.jpg',
  'https://i.redd.it/cd5dfw6sz2m31.jpg',
  'https://i.redd.it/107x26p0p3c31.png',
  'https://i.redd.it/q1fy9u25wwg21.jpg',
  'https://i.redd.it/rt4mo32qxeu91.jpg',
  'https://i.redd.it/l6llh15ltv191.jpg',
  'https://i.redd.it/qv19xppy6tu81.jpg',
  'https://i.redd.it/2pl691b5ebr71.jpg',
  'https://i.redd.it/0u3uo4qil4r41.jpg',
  'https://i.redd.it/n9mlagl40wm41.jpg',
  'https://i.redd.it/hunz84uswgh31.png',
  'https://i.redd.it/hff30bx6ul991.jpg',
  'https://i.redd.it/vn2p032s4pt81.jpg',
  'https://i.redd.it/whotmwwujrp71.jpg',
  'https://i.redd.it/qbufkgvmj6m41.jpg',
  'https://i.redd.it/7ux7e647y7b41.jpg',
  'https://i.redd.it/s9e4y5uxmo141.jpg',
  'https://i.redd.it/zzpc7u053jj31.jpg',
  'https://i.redd.it/j034t6xhwv4a1.png',
  'https://i.redd.it/llnz7d8py3991.jpg',
  'https://i.redd.it/bl2mb9uyxp791.jpg',
  'https://i.redd.it/liwfdxwmdyv81.png',
  'https://i.redd.it/ot19bf6xgni81.jpg',
  'https://i.redd.it/sdbumfnajxu71.jpg',
  'https://i.redd.it/g91edn099v541.jpg',
  'https://i.redd.it/ekgf15pwi2l21.jpg',
  'https://i.redd.it/ksg20k0e5jb91.jpg',
  'https://i.redd.it/2nys501rq6a91.jpg',
  'https://i.redd.it/94gr223ltu291.jpg',
  'https://i.redd.it/b9q8krn612481.jpg',
  'https://i.redd.it/p1zgu25pw9s41.jpg',
  'https://i.redd.it/nuidw2bqgu041.jpg',
  'https://i.redd.it/8avmaicwr8s31.jpg',
  'https://i.redd.it/3numuz743dr21.png',
  'https://i.redd.it/wh0dwjd4c63a1.png',
  'https://i.redd.it/qwxn35egx1031.jpg',
  'https://i.redd.it/fqk82605r8j21.jpg',
  'https://i.redd.it/w666wooxr6h21.jpg',
  'https://i.redd.it/vwrigj0iiba91.jpg',
  'https://i.redd.it/rvd73e44hb891.jpg',
  'https://i.redd.it/l2nknbhbvsx81.png',
  'https://i.imgur.com/en1cFTt.jpg',
  'https://i.redd.it/ttkmw6uoqwk31.jpg',
  'https://i.redd.it/e4d8dqik71u21.jpg',
  'https://i.redd.it/u2t3itrw79c21.jpg',
  'https://i.redd.it/msoe8fjepd121.jpg',
  'https://i.redd.it/qqhkbbt90uz91.jpg',
  'https://i.imgur.com/vrCNlJN.jpg',
  'https://i.redd.it/ptcw8obm61x91.jpg',
  'https://i.redd.it/syymq1nbaht91.jpg',
  'https://i.redd.it/h473bd5e83u81.jpg',
  'https://i.redd.it/36hz9dy4z1x31.png',
  'https://i.redd.it/xzrgvl0wfh4a1.png',
  'https://i.redd.it/r3wt50bp0hw91.jpg',
  'https://i.redd.it/nw7rem0fe6m91.jpg',
  'https://i.redd.it/pecw3ecap7g91.jpg',
  'https://i.redd.it/gxnd1svovpd91.jpg',
  'https://i.redd.it/535xkq2rmp981.png',
  'https://i.redd.it/bh1t0ftq8hl41.png',
  'https://i.redd.it/llsdp2329zz31.jpg',
  'https://i.redd.it/llikya2557j31.jpg',
  'https://i.redd.it/naiaqmzfvm131.jpg',
  'https://i.redd.it/7d399gntf8r91.png',
  'https://i.redd.it/ed5wd4cwpdv71.jpg',
  'https://i.redd.it/wg6awcayw2t41.jpg',
  'https://i.redd.it/01lhgjhayac31.png',
  'https://i.redd.it/s7fkdtucbmz91.jpg',
  'https://i.redd.it/i89y3p5w77391.png',
  'https://i.redd.it/tqkop9bl0jz81.jpg',
  'https://i.redd.it/npkqbal58tp81.jpg',
  'https://i.redd.it/euddggipo6n81.jpg',
  'https://i.redd.it/j6wjxiwhy9k81.jpg',
  'https://i.redd.it/vrqjs70aei581.jpg',
  'https://i.redd.it/kz92istu9fu41.png',
  'https://i.redd.it/7tqcxwgeimq41.jpg',
  'https://i.redd.it/6aeoetftlwo21.jpg',
  'https://i.redd.it/a3wqjh8zsuh21.jpg',
  'https://i.redd.it/j89dgf0qf5z11.jpg',
  'https://i.redd.it/wyxh6ionup2a1.png',
  'https://i.redd.it/o99vt66hkh0a1.png',
  'https://i.redd.it/11ta1za01au91.jpg',
  'https://i.redd.it/8o5dm2cn18u91.jpg',
  'https://i.redd.it/wllov80ysmd91.jpg',
  'https://i.redd.it/sel8u6ptd9v81.jpg',
  'https://i.redd.it/dvmzxf7jt6s81.jpg',
  'https://i.redd.it/lavk77w5qdv71.jpg',
  'https://i.redd.it/wbh8b1yukyf71.jpg',
  'https://i.redd.it/u0i6sr3g6tn41.jpg',
  'https://i.redd.it/615ldfqiums21.jpg',
  'https://i.redd.it/vqma4koxc7a21.jpg',
  'https://i.redd.it/itw51zrak55a1.png',
  'https://i.redd.it/n0rilob1jwu81.png',
  'https://i.redd.it/jxivxrfzo6b81.jpg',
  'https://i.redd.it/dpwely9xmsx71.jpg',
  'https://i.redd.it/5vepso1rx0v11.jpg',
  'https://i.redd.it/25wba83wyh4a1.jpg',
  'https://i.redd.it/12a90fjzprt81.jpg',
  'https://i.redd.it/ysta29ovgfs71.jpg',
  'https://i.imgur.com/KeiUyc6.png',
  'https://i.redd.it/uepwnev7wik41.jpg',
  'https://i.redd.it/xwspu0iol47a1.png',
  'https://i.redd.it/muwptn3tll0a1.jpg',
  'https://i.redd.it/rzv4gmvik00a1.jpg',
  'https://i.redd.it/ctiz2fofuxc91.png',
  'https://i.redd.it/lzgwp0tjhd791.png',
  'https://i.redd.it/l711ixrqhf591.jpg',
  'https://i.redd.it/udq0n2rix3u81.jpg',
  'https://i.redd.it/262o0po636881.png',
  'https://i.redd.it/d3q1pmneft081.jpg',
  'https://i.redd.it/8y9s77bqd2j41.jpg',
  'https://i.redd.it/twwr3t6ehqi21.jpg',
  'https://i.redd.it/cnm4dgbtrah11.jpg',
  'https://i.redd.it/v3tdqocx445a1.jpg',
  'https://i.redd.it/p8i0mvfmeh4a1.png',
  'https://i.redd.it/xdkjunhcveu91.jpg',
  'https://i.redd.it/vx6ninoy2l591.png',
  'https://i.redd.it/nb6wfphv4yp71.jpg',
  'https://i.redd.it/a9iwdo4v5op71.png',
  'https://i.redd.it/nwrbbyayamk21.jpg',
  'https://i.redd.it/foiy49mb19a21.jpg',
  'https://i.redd.it/ohifn8qey54a1.jpg',
  'https://i.redd.it/uvq9y9nltp3a1.jpg',
  'https://i.redd.it/of9pailcrq1a1.jpg',
  'https://i.redd.it/8z9g4oukdmq91.jpg',
  'https://i.redd.it/h1822e7elde71.png',
  'https://i.redd.it/793tofvwsga21.png',
  'https://i.redd.it/pvtwfqpsyuz91.jpg',
  'https://i.redd.it/3cgza43mrev81.jpg',
  'https://i.redd.it/fdbj00clnkf21.jpg',
  'https://i.redd.it/cirmx68bbhf21.jpg',
  'https://i.redd.it/21xex4ff5i4a1.jpg',
  'https://i.redd.it/o3zokhisksz91.png',
  'https://i.redd.it/gqwbl7fm9mz91.jpg',
  'https://i.redd.it/oafppb2fzqn91.jpg',
  'https://i.redd.it/ysn0ltqzmjk91.jpg',
  'https://i.redd.it/z3sango964o11.jpg',
  'https://i.redd.it/5ntusjbx3c7a1.png',
  'https://i.redd.it/zqltf6uuyh4a1.jpg',
  'https://i.redd.it/m6hreq98yjz91.jpg',
  'https://i.redd.it/8m39v1x8zpn81.jpg',
  'https://i.redd.it/z165oag6ow811.png',
  'https://i.redd.it/ibwx0egymimz.jpg',
  'https://i.redd.it/23ci1vwgkp5a1.jpg',
  'https://i.redd.it/x3nx589tyh4a1.jpg',
  'https://i.redd.it/z3qffl34up3a1.jpg',
  'https://i.redd.it/1gnuzxb8a6t51.png',
  'https://i.redd.it/35qpzb2ob0n81.jpg',
  'https://i.redd.it/5mnlxuqkpcm21.png',
  'https://i.redd.it/iaqmyy3dnj921.jpg',
  'https://i.redd.it/kwi0tlu6comz.jpg',
  'https://i.redd.it/b8txuqv6yw5a1.jpg',
  'https://i.redd.it/nsng02ekfo4a1.jpg',
  'https://i.redd.it/pqgkblx9234a1.jpg',
  'https://i.redd.it/mptbmbpztp3a1.jpg',
  'https://i.redd.it/4q1wkb5ikbr71.jpg',
  'https://i.redd.it/ewe18iquokk21.jpg',
  'https://i.redd.it/9r7rhgcvaik21.png',
  'https://i.redd.it/jlg0ly3xghk21.jpg',
  'https://i.redd.it/hkjqu0l6yxi21.jpg',
  'https://i.redd.it/idx6l98zamz91.jpg',
  'https://i.redd.it/dsa0muhc19p81.jpg',
  'https://i.redd.it/b79kxkzh6umy.png',
  'https://i.redd.it/fdm0mcih8u3a1.jpg',
  'https://i.redd.it/98pnwgbcq0j81.jpg']
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