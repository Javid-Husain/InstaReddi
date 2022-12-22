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
  const memes = ['https://i.redd.it/gxudc8ledl541.jpg',
  'https://i.redd.it/uhdif402ptp41.jpg',
  'https://i.redd.it/6zakdi5eaur31.png',
  'https://i.redd.it/q4urcyyjcoy31.jpg',
  'https://i.redd.it/h46fmgydp2x31.jpg',
  'https://i.redd.it/y94va5bq0zr41.jpg',
  'https://i.redd.it/xmg2g1zy5fn41.jpg',
  'https://i.redd.it/silgj4opx5641.jpg',
  'https://i.redd.it/365zq9wo82241.jpg',
  'https://i.redd.it/8qd8zknzwnp31.jpg',
  'https://i.redd.it/9qjpg1ua5i041.jpg',
  'https://i.redd.it/b4ysr9yed5241.jpg',
  'https://i.redd.it/0963tglioaa31.jpg',
  'https://i.imgur.com/ILS9o2j.jpg',
  'https://i.redd.it/tr2tzrncce941.png',
  'https://i.redd.it/idptg721zmr41.jpg',
  'https://i.redd.it/f7bx7svtb7o31.jpg',
  'https://i.redd.it/znaorv0zr2z31.jpg',
  'https://i.redd.it/b34yojz2rbs31.png',
  'https://i.redd.it/a6w573zjv8041.jpg',
  'https://i.redd.it/1cudfrx8lge41.jpg',
  'https://i.redd.it/qi6l2os3swb41.jpg',
  'https://i.redd.it/b4greaonutb21.jpg',
  'https://i.redd.it/k6fiykdnnok21.png',
  'https://i.redd.it/9jbxi7wurn731.jpg',
  'https://i.redd.it/vprlj7jw3dw41.jpg',
  'https://i.redd.it/psxs5vfpu7e31.jpg',
  'https://i.redd.it/rzxqlr0z2jb41.png',
  'https://i.redd.it/xpqm3xt4mf921.jpg',
  'https://i.redd.it/wal29ijo6c931.png',
  'https://i.redd.it/38jaiiv473m41.jpg',
  'https://i.redd.it/zngokfwy4mn31.jpg',
  'https://i.redd.it/4ch7fx03ggx31.jpg',
  'https://i.redd.it/1dsxleodzoc41.jpg',
  'https://i.redd.it/zzlxatr539441.png',
  'https://i.redd.it/cqmfdp5k0p531.png',
  'https://i.redd.it/7kwriktqhni31.png',
  'https://i.redd.it/xxxurm8uh9831.jpg',
  'https://i.redd.it/4gtu8z73gye41.jpg',
  'https://i.redd.it/lqgl0azu9lo41.jpg',
  'https://i.redd.it/xj92iu6py8o41.jpg',
  'https://i.redd.it/zwfo5u7vfd831.jpg',
  'https://i.redd.it/ho0doqamish41.jpg',
  'https://i.redd.it/1km1lbl00nn61.jpg',
  'https://i.redd.it/2rg5buhyr7q41.png',
  'https://i.redd.it/ktwmhbtcsve41.jpg',
  'https://i.redd.it/pioivluonp731.png',
  'https://i.redd.it/bhllkemlcwn41.jpg',
  'https://i.redd.it/0ki117lhdwg41.jpg',
  'https://i.redd.it/mpzxz8jwr9c41.jpg',
  'https://i.redd.it/og7qst8npgs21.jpg',
  'https://i.redd.it/140qxw3u9hq41.jpg',
  'https://i.redd.it/26gi1m7f09f21.jpg',
  'https://i.redd.it/2ort7b8gto251.jpg',
  'https://i.redd.it/63bv8gazfhs31.jpg',
  'https://i.redd.it/u6an7fiywlm41.png',
  'https://i.redd.it/swk79i1xypj41.jpg',
  'https://i.redd.it/h45bot9xmpg41.jpg',
  'https://i.redd.it/e878o36pf0231.jpg',
  'https://i.redd.it/9pmr4k5d7t741.jpg',
  'https://i.redd.it/6h6211xl4ff31.jpg',
  'https://i.redd.it/y3dm9033mnj41.png',
  'https://i.redd.it/fguc6rzdj7531.png',
  'https://i.redd.it/os866bh2rf541.jpg',
  'https://i.redd.it/2bnxde73c1l41.jpg',
  'https://i.redd.it/n347v1a6izb41.jpg',
  'https://i.redd.it/p61ay8v7rtl31.png',
  'https://i.redd.it/vuiir00lx2e31.jpg',
  'https://i.redd.it/vtkcbz1217g21.jpg',
  'https://i.redd.it/3wk8j8wp1v041.jpg',
  'https://i.redd.it/0sob2ic0kqx31.png',
  'https://i.redd.it/o54bndhnjlf21.png',
  'https://i.redd.it/9bp36ydflu641.jpg',
  'https://i.redd.it/jjkuoahwj5m51.jpg',
  'https://i.redd.it/3mno332fceh31.jpg',
  'https://i.redd.it/8x9z74yhpcc21.jpg',
  'https://i.redd.it/ng6j644tp9c31.jpg',
  'https://i.redd.it/t8iihfmms1q41.jpg',
  'https://i.redd.it/btkm875fnz241.jpg',
  'https://i.redd.it/jpzt4bltbl941.jpg',
  'https://i.redd.it/7xnt26q9ebm31.jpg',
  'https://i.redd.it/uhmsd80dwg341.jpg',
  'https://i.redd.it/0gl484x5b7941.jpg',
  'https://i.redd.it/53x43p9nde041.jpg',
  'https://i.redd.it/iv8tac5ksz461.jpg',
  'https://i.redd.it/c15hibii1za41.jpg',
  'https://i.redd.it/7kpzcn6acp041.jpg',
  'https://i.redd.it/1eqma1bm3kg31.jpg',
  'https://i.redd.it/ldsbjqceqcq31.jpg',
  'https://i.redd.it/otyd2m356wp21.jpg',
  'https://i.redd.it/st7cm6dvfed31.jpg',
  'https://i.redd.it/hpjx3bhekl521.jpg',
  'https://i.redd.it/pazea0m0o1h41.jpg',
  'https://i.redd.it/l6hzhhxal5g41.jpg',
  'https://i.redd.it/4axrfhfgl7n41.png',
  'https://i.redd.it/6738rep1ops31.jpg',
  'https://i.redd.it/ek3rmxk7b6p51.jpg',
  'https://i.redd.it/ilvf54xg8z731.jpg',
  'https://i.redd.it/mryafrwsr0m41.jpg',
  'https://i.redd.it/0l72nzwmh5q41.png',
  'https://i.redd.it/erdykvaz6pi11.jpg',
  'https://i.redd.it/gebbu914d1i51.jpg',
  'https://i.redd.it/7bncg3blyi341.jpg',
  'https://i.redd.it/pyhops5umbv21.jpg',
  'https://i.redd.it/g8i646m2c0e31.png',
  'https://i.redd.it/2nurfom6abb31.jpg',
  'https://i.redd.it/kp71x1mmn9p41.jpg',
  'https://i.redd.it/te76c0hkfr051.jpg',
  'https://i.redd.it/0vgyglcjqyj51.jpg',
  'https://i.redd.it/ku5tzz1q32n41.jpg',
  'https://i.redd.it/weyfm92rgwv61.jpg',
  'https://i.redd.it/bxoduv0nj9q41.jpg',
  'https://i.redd.it/wm3dxbdm6l841.jpg',
  'https://i.redd.it/uzk8yi86kmn41.jpg',
  'https://i.redd.it/usee77wf4w721.jpg',
  'https://i.redd.it/cx98jnhpe0131.png',
  'https://i.redd.it/9vjthzofn2751.jpg',
  'https://i.redd.it/ji0sab61t6541.jpg',
  'https://i.redd.it/jbzo0sb1n9631.jpg',
  'https://i.redd.it/pranm0u73qf41.jpg',
  'https://i.redd.it/h7qebqkccnx31.jpg',
  'https://i.redd.it/bx490awydyi51.png',
  'https://i.redd.it/5grdnpxcmlj41.png',
  'https://i.redd.it/85spfjj1i4o31.jpg',
  'https://i.redd.it/pp6s3whyspa51.jpg',
  'https://i.redd.it/kzhw98c6p3l41.png',
  'https://i.redd.it/354y0swvcn441.jpg',
  'https://i.redd.it/eumln7bafs141.png',
  'https://i.redd.it/vgakand1ywy41.jpg',
  'https://i.redd.it/jizdfbucnq841.jpg',
  'https://i.redd.it/mj3uyghclvo41.png',
  'https://i.redd.it/5ogea8b78ei51.jpg',
  'https://i.redd.it/wuwq7mlctta31.jpg',
  'https://i.redd.it/q8z5g4xuqaw31.jpg',
  'https://i.redd.it/3lcl093uqbi51.jpg',
  'https://i.redd.it/fxvissvpxqm71.jpg',
  'https://i.redd.it/iejod4pgq9751.jpg',
  'https://i.redd.it/84n357etfu061.jpg',
  'https://i.redd.it/ohetvbhx9wl41.jpg',
  'https://i.redd.it/97ssx4042qr61.jpg',
  'https://i.redd.it/mfm6cpqy6gh41.png',
  'https://i.redd.it/aew4ee9ehte31.jpg',
  'https://i.redd.it/cswttkb38bk41.jpg',
  'https://i.redd.it/9c167pjfqsm41.jpg',
  'https://i.redd.it/8dgqs5cnmxi31.png',
  'https://i.redd.it/qvsx2mklgdn31.jpg',
  'https://i.redd.it/pr6wmg1ykkv41.jpg',
  'https://i.redd.it/jneno0s8eeb51.jpg',
  'https://i.redd.it/1dbedj6kd4j51.jpg',
  'https://i.redd.it/7o9vvo11cnu31.jpg',
  'https://i.redd.it/i8nvm5hkge741.jpg',
  'https://i.redd.it/ifjkx5qjdtg41.jpg',
  'https://i.redd.it/bc8nxzgih9e41.png',
  'https://i.redd.it/na5p6cgh8wm51.jpg',
  'https://i.redd.it/ob3n3jb19fb41.jpg',
  'https://i.redd.it/g7fs7c5zi2631.jpg',
  'https://i.redd.it/sad4jk8hbyg41.png',
  'https://i.redd.it/49qf4cjn15f41.jpg',
  'https://i.redd.it/p4squxmhj0771.jpg',
  'https://i.redd.it/60w6hjqv73j41.jpg',
  'https://i.redd.it/fn85jcs1fqk41.jpg',
  'https://i.redd.it/p11bw25pzu651.jpg',
  'https://i.redd.it/p8tkk9b01vv31.jpg',
  'https://i.redd.it/sdbhj2uh58141.jpg',
  'https://i.redd.it/wlzfqeegp2b61.jpg',
  'https://i.redd.it/i6a1xc2jf7z31.jpg',
  'https://i.redd.it/t6brgkx0rdk41.jpg',
  'https://i.redd.it/s2lcv8p5i4t41.jpg',
  'https://i.redd.it/1w80hrdfybp31.jpg',
  'https://i.redd.it/k6bmq9beoas41.jpg',
  'https://i.redd.it/nv5ag5phkne51.jpg',
  'https://i.redd.it/3cr3utqv0ok41.jpg',
  'https://i.redd.it/38cewppzz9s51.jpg',
  'https://i.redd.it/jmlxch3mdw351.jpg',
  'https://i.redd.it/sib88bf4x7k41.png',
  'https://i.redd.it/e2assxsrowv21.jpg',
  'https://i.redd.it/stivo06tmzx41.png',
  'https://i.redd.it/6q4pqpwitez51.jpg',
  'https://i.redd.it/jgvm6iqzy5r31.jpg',
  'https://i.imgur.com/tXb5uax.png',
  'https://i.redd.it/bhibl8qcpud21.jpg',
  'https://i.redd.it/m7a6ilyh6rc41.png',
  'https://i.redd.it/du0ab7rr39i41.png',
  'https://i.redd.it/rziwuggjfc941.png',
  'https://i.redd.it/1wqi1pzkm1441.jpg',
  'https://i.redd.it/6fgxkif3p6f31.jpg',
  'https://i.redd.it/nk49kkcelfx51.jpg',
  'https://i.redd.it/5dxedlmt35761.png',
  'https://i.redd.it/f9llozj151951.jpg',
  'https://i.redd.it/9s5vls0x44941.jpg',
  'https://i.redd.it/pk826u57nwz11.jpg',
  'https://i.redd.it/ciq1b2k73ck21.jpg',
  'https://i.redd.it/qg3dzb15w5s41.jpg',
  'https://i.redd.it/wna7rv4moef21.jpg',
  'https://i.redd.it/hi81g4dcjqn41.jpg',
  'https://i.redd.it/adlfr07n55l31.jpg',
  'https://i.redd.it/lhia4y00m9v31.jpg',
  'https://i.redd.it/8vh4lwmfxgt51.png',
  'https://i.redd.it/jvhzdf8moxh51.jpg',
  'https://i.redd.it/hexr1xky9to41.jpg',
  'https://i.redd.it/izegx9i9lu251.jpg',
  'https://i.redd.it/nbv97l4kq0w31.jpg',
  'https://i.redd.it/qdgdyps9skj51.jpg',
  'https://i.redd.it/orzndasqqg651.jpg',
  'https://i.redd.it/38y58hetho651.png',
  'https://i.redd.it/vyr5l1toiiq31.jpg',
  'https://i.redd.it/xmoxs23zw4861.jpg',
  'https://i.redd.it/79qs9ixr1nq41.jpg',
  'https://i.redd.it/18b5ujf6se241.jpg',
  'https://i.redd.it/wktu5u0nodl51.png',
  'https://i.redd.it/kuzmpq3gzf751.jpg',
  'https://i.redd.it/40o6c53983k21.jpg',
  'https://i.redd.it/6pvmmfbwlu361.png',
  'https://i.redd.it/uzrbnezle5a41.jpg',
  'https://i.redd.it/r50oidmw47m41.jpg',
  'https://i.redd.it/2esltrxn50r41.png',
  'https://i.redd.it/jkq72awr5it31.jpg',
  'https://i.redd.it/sedp09xqoqm31.jpg',
  'https://i.imgur.com/oIxb9aB.jpg',
  'https://i.redd.it/ktakjafih4c41.jpg',
  'https://i.redd.it/n585km4s8wy31.jpg',
  'https://i.redd.it/yakpsvrt16j31.png',
  'https://i.redd.it/gff5ezivi5j41.jpg',
  'https://i.redd.it/pg4xcvv29ix41.png',
  'https://i.redd.it/t5l3v86usl641.jpg',
  'https://i.redd.it/5tvhuuotrbl51.jpg',
  'https://i.redd.it/xz13945vx8t41.jpg',
  'https://i.redd.it/ph73vj92p3q31.jpg',
  'https://i.redd.it/0cfzpte1l7r41.png',
  'https://i.redd.it/rzw2r5o6gbj11.jpg',
  'https://i.redd.it/rkugzy80gvo51.jpg',
  'https://i.redd.it/fzj8rp6t43421.jpg',
  'https://i.redd.it/xhefe989f9r41.jpg',
  'https://i.redd.it/30heeig7pqo41.jpg',
  'https://i.redd.it/dx2s4pq1loz41.jpg',
  'https://i.redd.it/xuil14iptu841.png',
  'https://i.redd.it/kvpkyn8i25a61.jpg',
  'https://i.redd.it/jup6n8fnma641.jpg',
  'https://i.redd.it/6ev2bmetc5931.jpg',
  'https://i.redd.it/gv67isezkml41.png',
  'https://i.redd.it/h61bke8npdu41.jpg',
  'https://i.redd.it/o97oor4kbx941.jpg',
  'https://i.redd.it/zz93we8gcso31.jpg',
  'https://i.redd.it/p7zp4qn2qrc21.jpg',
  'https://i.redd.it/qc1itdqs6pm41.jpg',
  'https://i.redd.it/j5ew8m9nrcy41.jpg',
  'https://i.redd.it/bm4dxfg5ns841.jpg',
  'https://i.redd.it/mvhpeuai8hv31.png',
  'https://i.redd.it/dxm1rnvi89271.jpg',
  'https://i.imgur.com/mTVGocv.jpg',
  'https://i.redd.it/atir037ub7w51.jpg',
  'https://i.redd.it/qmxf8wt7x6c41.jpg',
  'https://i.redd.it/4rt7csnxl6631.jpg',
  'https://i.redd.it/6ifsrwqfnqy41.jpg',
  'https://i.redd.it/rqft13pwf3i61.jpg',
  'https://i.redd.it/7u4hj9puctg31.jpg',
  'https://i.redd.it/nb51zpf9z5661.jpg',
  'https://i.redd.it/u2mlif8syf851.jpg',
  'https://i.redd.it/kcfmtleg25h21.jpg',
  'https://i.redd.it/6bxdfqkfq8f51.jpg',
  'https://i.redd.it/ivav1jzkp0d41.jpg',
  'https://i.redd.it/z8mqvx63b0e21.jpg',
  'https://i.redd.it/5x2nukyin0141.jpg',
  'https://i.redd.it/svn4ribmmmd51.jpg',
  'https://i.redd.it/7751scakwg451.jpg',
  'https://i.redd.it/3urm4izxnxf41.jpg',
  'https://i.redd.it/iy9z3rzp9mf31.jpg',
  'https://i.imgur.com/r97FVoA.jpg',
  'https://i.redd.it/jy3lhoxv39y31.jpg',
  'https://i.redd.it/snu7m3aqau141.png',
  'https://i.redd.it/lmt8doqtisi21.jpg',
  'https://i.redd.it/5t9ibitnsc661.jpg',
  'https://i.redd.it/727v6trryda41.jpg',
  'https://i.redd.it/bqbhnwfjvkb21.png',
  'https://i.redd.it/huqv20j2mxm41.jpg',
  'https://i.redd.it/yixxbvdwt3q41.jpg',
  'https://i.redd.it/eityokz07co41.png',
  'https://i.redd.it/pj7f1cr03n541.jpg',
  'https://i.redd.it/o2yd0fefeyh31.jpg',
  'https://i.redd.it/gjzrcxtj6se41.png',
  'https://i.redd.it/xkpr306u8go41.png',
  'https://i.redd.it/1hgfyl3ujlh51.png',
  'https://i.redd.it/amaufok5vue51.jpg',
  'https://i.redd.it/8fc0nytegjh51.jpg',
  'https://i.redd.it/b7fyoo22mxx41.png',
  'https://i.redd.it/pzk9f4wreez31.jpg',
  'https://i.redd.it/zn1attrq4cb61.jpg',
  'https://i.redd.it/hp3vqvrbwmf61.jpg',
  'https://i.redd.it/vmaqzrsn8bn51.png',
  'https://i.redd.it/q578j3rz4rb41.jpg',
  'https://i.redd.it/fyi2194x0rk51.jpg',
  'https://i.redd.it/2vv0y6vfxdf41.png',
  'https://i.redd.it/07yrq1wvwll31.jpg',
  'https://i.redd.it/i5zliuw93vt21.jpg',
  'https://i.redd.it/3ye7epicilc41.jpg',
  'https://i.redd.it/fm1v8lgcm1c51.jpg',
  'https://i.redd.it/esp3qr8qjbe51.jpg',
  'https://i.redd.it/q21sedxd5kr41.jpg',
  'https://i.redd.it/ome6zar4ef341.png',
  'https://i.redd.it/huxpau4zj6441.jpg',
  'https://i.redd.it/hdrxp69jzln11.jpg',
  'https://i.redd.it/mue343o64gg61.jpg',
  'https://i.redd.it/valp0v1gbhz31.jpg',
  'https://i.redd.it/z0jcy0dg0jr31.jpg',
  'https://i.redd.it/dpmj820unfa51.png',
  'https://i.redd.it/32z4k5wfqjh21.png',
  'https://i.redd.it/eqh84ev9ijl41.jpg',
  'https://i.redd.it/maxnvnab08d51.jpg',
  'https://i.redd.it/nq3sf82o4hj41.jpg',
  'https://i.redd.it/q1rbbweq3gf61.png',
  'https://i.redd.it/cd374u3a3lr61.jpg',
  'https://i.redd.it/43g5r9foisd21.jpg',
  'https://i.redd.it/vv443ehygjm51.jpg',
  'https://i.redd.it/e85s34ep7g931.jpg',
  'https://i.redd.it/f8i5yjhdvne21.jpg',
  'https://i.redd.it/3iakh8avn3r31.jpg',
  'https://i.redd.it/g59o3aosqtt41.jpg',
  'https://i.redd.it/7jxgrx87b5p61.png',
  'https://i.redd.it/w7f8lbpsejv31.jpg',
  'https://i.redd.it/q2k3rpsje9p51.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/9/95/Washington_Crossing_the_Delaware_by_Emanuel_Leutze%2C_MMA-NYC%2C_1851.jpg',
  'https://i.redd.it/mvmvzfrt66061.jpg',
  'https://i.redd.it/j2r0nm8b72s21.jpg',
  'https://imgur.com/EXWyzzl.jpg',
  'https://i.redd.it/kz24flwbffi41.jpg',
  'https://i.redd.it/8kqs3f8auwm21.jpg',
  'https://i.redd.it/rlzsn29ec3m51.png',
  'https://i.redd.it/a1cowwvqgxn51.png',
  'https://i.redd.it/asswzjihvrt31.jpg',
  'https://i.redd.it/mqs7jn33m8e61.jpg',
  'https://i.redd.it/skhvsiywdc721.png',
  'https://i.redd.it/5hhxkahk4s621.jpg',
  'https://i.redd.it/11l4z40wspp51.jpg',
  'https://i.redd.it/71gcbi10hr661.jpg',
  'https://i.redd.it/g0yh3zqmgew51.jpg',
  'https://i.redd.it/xyezswym91c21.jpg',
  'https://i.redd.it/pk3vjde76xt31.jpg',
  'https://i.redd.it/f5n1qsliw9k21.jpg',
  'https://i.redd.it/sledcrkesom51.png',
  'https://i.redd.it/jyf9g2swygz51.jpg',
  'https://i.redd.it/ndbi4muog4d41.jpg',
  'https://i.redd.it/dce9vf898e131.jpg',
  'https://i.redd.it/jm3rxmes5bu31.jpg',
  'https://i.redd.it/d3a78isbrv831.jpg',
  'https://i.redd.it/nhy0ip41l9k61.jpg',
  'https://i.redd.it/w0y6ztguwi141.jpg',
  'https://i.redd.it/x3ymdct0rve61.jpg',
  'https://i.redd.it/py9pxyeo5bx31.png',
  'https://i.redd.it/eqc31t9ublk21.jpg',
  'https://i.redd.it/09ghx8xqsq351.png',
  'https://i.redd.it/8t8zyxua08v41.jpg',
  'https://i.redd.it/hi87jdfubpr31.jpg',
  'https://i.redd.it/be3r64v2pxa61.jpg',
  'https://i.redd.it/8e3xlyrn5kd41.jpg',
  'https://i.redd.it/li2oitvb47o61.png',
  'https://i.redd.it/gln6bn4s3bb41.png',
  'https://i.redd.it/ynrj7fidk7o41.jpg',
  'https://i.redd.it/0wkkk5iz48h41.jpg',
  'https://i.redd.it/n29fimjbhic61.png',
  'https://i.redd.it/9yaddnd1gna61.png',
  'https://i.redd.it/lxf3ffcnmps21.jpg',
  'https://i.redd.it/buw3c52cdvy51.jpg',
  'https://i.redd.it/mcvrl9fb4j751.jpg',
  'https://i.redd.it/g5i55zo6kg071.jpg',
  'https://i.redd.it/c2p7k3hga2e61.png',
  'https://i.redd.it/u2f1epweydf51.jpg',
  'https://i.redd.it/0v008t6by4u41.jpg',
  'https://i.redd.it/202mlbjbk2431.jpg',
  'https://i.redd.it/ault0kc2f3u51.jpg',
  'https://i.redd.it/07lxvp9qq6v31.png',
  'https://i.redd.it/qjmgcvrv23k41.jpg',
  'https://i.redd.it/69lso70efjk21.jpg',
  'https://i.redd.it/yn1c2suqbmm61.jpg',
  'https://i.redd.it/yrkg1m7cd2i41.jpg',
  'https://i.redd.it/rnndaqc929w51.jpg',
  'https://i.redd.it/f45iiwzb3li21.jpg',
  'https://i.redd.it/84zre08enhd61.png',
  'https://i.redd.it/k5bu1854mrd51.jpg',
  'https://i.redd.it/pcolzmqabhg41.jpg',
  'https://i.redd.it/24ouyb0gv0f51.jpg',
  'https://i.redd.it/5xbmoelj1ww31.jpg',
  'https://i.redd.it/0vo2k5u6me821.jpg',
  'https://i.redd.it/ig1o39xivp561.jpg',
  'https://i.redd.it/hdtswfsy1oo41.png',
  'https://i.redd.it/g8q5hoqo6bf61.jpg',
  'https://i.redd.it/a43z4lpr5sn41.png',
  'https://i.redd.it/lgug7moc6j941.jpg',
  'https://i.redd.it/k3x9vi09bdo61.jpg',
  'https://i.redd.it/lf63aypd7un41.png',
  'https://i.redd.it/7uw3bb7kfk251.jpg',
  'https://i.redd.it/cw8hm0ya9ar51.png',
  'https://i.redd.it/isk9ttcn8dz21.jpg',
  'https://i.redd.it/fiuyt6hw3ky31.png',
  'https://i.redd.it/clowjzp34ao31.jpg',
  'https://i.redd.it/nkeon7crmm361.jpg',
  'https://i.redd.it/m02x0yla08l41.jpg',
  'https://i.redd.it/k4j1vwrzgbv61.jpg',
  'https://i.redd.it/sruijhkw3t161.jpg',
  'https://i.redd.it/ge8feaaz2qt41.jpg',
  'https://i.redd.it/ep9kccujmy541.jpg',
  'https://i.redd.it/mm5rh4h8v3141.jpg',
  'https://i.redd.it/2vjlaewa5x361.png',
  'https://i.redd.it/tjr2hdmee1s41.jpg',
  'https://i.redd.it/zf45grasin271.png',
  'https://i.redd.it/c6ykew7rsbf41.png',
  'https://i.redd.it/rsd3cyh5jtq61.jpg',
  'https://i.redd.it/t4fb903gc0261.jpg',
  'https://i.redd.it/ecfegup6ket41.jpg',
  'https://i.redd.it/kpygih8ayjm41.jpg',
  'https://i.redd.it/77zwltnmn6l31.jpg',
  'https://i.redd.it/13fgnyxs3ud51.png',
  'https://i.redd.it/0otuwmggcwd41.jpg',
  'https://i.redd.it/mw0hynl72xf21.jpg',
  'https://i.redd.it/vqtr8nqm5lg51.jpg',
  'https://i.redd.it/g76a0xlmsui51.jpg',
  'https://i.redd.it/z9l1lpeuyej41.jpg',
  'https://i.redd.it/dbmmfjru72e51.jpg',
  'https://i.redd.it/yf22oqhxohn41.jpg',
  'https://i.redd.it/jbkccznw5pl51.jpg',
  'https://i.redd.it/1gufmtyhnec51.jpg',
  'https://i.redd.it/69aan80xrf271.jpg',
  'https://i.redd.it/9d67qssf4b051.jpg',
  'https://i.redd.it/7mink304blw41.jpg',
  'https://i.redd.it/qoelo7bs3qx41.png',
  'https://i.redd.it/un25t68pwt651.jpg',
  'https://i.redd.it/a494k8ikrde51.jpg',
  'https://i.redd.it/gio370jalw561.jpg',
  'https://i.redd.it/v9292wurvt351.png',
  'https://i.redd.it/93g3x5rala251.jpg',
  'https://i.redd.it/x85izw3v1li31.jpg',
  'https://i.redd.it/c8xpepa9ost61.png',
  'https://i.redd.it/dhloubz2ut951.jpg',
  'https://i.redd.it/5x88e80n40x21.png',
  'https://i.redd.it/no8ru9hwwxu61.jpg',
  'https://i.redd.it/j9kw47lz8ts41.jpg',
  'https://i.redd.it/h7ohkmoivz721.jpg',
  'https://i.redd.it/fkw29nbwevo21.jpg',
  'https://i.redd.it/5g6e2r5gqx861.png',
  'https://i.redd.it/k7cxv9a8krw31.png',
  'https://i.redd.it/stzbxz3hnw141.png',
  'https://i.redd.it/ym61d19r31061.jpg',
  'https://i.redd.it/jfla6iq138b21.jpg',
  'https://i.redd.it/kyksy9ynmbo31.jpg',
  'https://i.redd.it/pvnzxa4se4u61.jpg',
  'https://i.redd.it/ja2pfj11n4l51.jpg',
  'https://i.redd.it/xmh2wbt7sku31.jpg',
  'https://i.redd.it/rcrdy5pbelp61.jpg',
  'https://i.redd.it/snvguscp2hh51.jpg',
  'https://i.redd.it/rnqhmo7y0uq41.png',
  'https://i.redd.it/lrmrr0frft441.jpg',
  'https://i.redd.it/vpnih6l4r7y41.jpg',
  'https://i.redd.it/8nio88sqggm41.jpg',
  'https://i.redd.it/6q8tbyc58zl31.jpg',
  'https://i.redd.it/ziweh2uh1zr61.jpg',
  'https://i.redd.it/pr9ue9gd0ul41.jpg',
  'https://i.redd.it/ifdytgtk2fg21.jpg',
  'https://i.redd.it/tijz4sorz3q51.png',
  'https://i.redd.it/ph6erg3alct31.jpg',
  'https://i.redd.it/lka4f8h7ks041.jpg',
  'https://i.redd.it/94cbz76546151.jpg',
  'https://i.redd.it/hqvwjbcqa6h51.jpg',
  'https://i.redd.it/b4q9b1712dm31.png',
  'https://i.redd.it/63tm68snj6c51.jpg',
  'https://i.redd.it/dbl8l2rc6qu41.jpg',
  'https://i.redd.it/vxf97nacpoy41.png',
  'https://i.redd.it/dltbxiz28w531.png',
  'https://i.redd.it/1ulwyjuvluy31.png',
  'https://i.redd.it/bo5ngrinzk441.jpg',
  'https://i.redd.it/g3h25f8os2061.png',
  'https://i.redd.it/9usu9vt9qwj51.jpg',
  'https://i.redd.it/4yz1kjofcbw61.png',
  'https://i.redd.it/dp33xsod42651.jpg',
  'https://i.redd.it/ytk0bqcp0jt41.jpg',
  'https://i.redd.it/go9ve2o7a0e51.jpg',
  'https://i.redd.it/6nlsm1d5fs961.png',
  'https://i.redd.it/a2hendrii4c61.png',
  'https://i.redd.it/i6q2crwdoe951.jpg',
  'https://i.redd.it/895jlbfb37y31.png',
  'https://i.redd.it/qr523ktsxb841.jpg',
  'https://i.redd.it/swesin0h5lj61.jpg'];

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