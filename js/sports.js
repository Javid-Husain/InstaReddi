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
  const memes = ['https://i.redd.it/kxdl7m9b3re71.png',
  'https://i.redd.it/wo7u26m8ge761.jpg',
  'https://i.imgur.com/465hjyG.jpg',
  'https://i.redd.it/i77jypou0kx51.jpg',
  'https://i.redd.it/z8kl1mff2cd61.jpg',
  'https://i.redd.it/cb4lytbu2ds61.jpg',
  'https://i.redd.it/g277d56ghsb61.jpg',
  'https://i.redd.it/z8tklrxhkit41.jpg',
  'https://i.redd.it/7rt5wqi8zy551.jpg',
  'https://i.redd.it/i0jtmrhtpeu41.jpg',
  'https://i.redd.it/8uaorx7jrum41.jpg',
  'https://i.redd.it/rm9csnlpe5f61.jpg',
  'https://i.redd.it/kljlkpyv8m251.jpg',
  'https://i.redd.it/f0pmlv94oga41.jpg',
  'https://i.redd.it/y97r3aoyc7y41.jpg',
  'https://i.redd.it/gqk4zarx58b51.jpg',
  'https://i.redd.it/x4ipaplr3c551.jpg',
  'https://i.redd.it/sayuwsvhj6551.png',
  'https://i.redd.it/4zig33ihog461.jpg',
  'https://i.redd.it/ba9j7o2mnx831.png',
  'https://i.redd.it/ark4oa18sbl61.jpg',
  'https://i.redd.it/e7fbq5f4ze261.jpg',
  'https://i.redd.it/hsxpqsyugqw51.jpg',
  'https://i.redd.it/8ny23cgym3751.jpg',
  'https://i.redd.it/42xyw4ztoom41.jpg',
  'https://i.redd.it/j5b5douwm5a31.jpg',
  'https://i.redd.it/in8ygbfr5p451.jpg',
  'https://i.redd.it/r222wnhamly41.jpg',
  'https://i.redd.it/8q04jekj5ka31.jpg',
  'https://i.redd.it/xtsnl8xejg471.jpg',
  'https://i.redd.it/gs676dk5x4761.jpg',
  'https://i.redd.it/kqdd5ltrads51.jpg',
  'https://i.redd.it/kntt5quhh6j51.jpg',
  'https://i.redd.it/fsv15sx9dq551.jpg',
  'https://i.redd.it/uzw8x5q202v41.jpg',
  'https://i.redd.it/vov81e674an41.jpg',
  'https://i.imgur.com/UU5ulp5.jpg',
  'https://i.redd.it/kcjonf6tfkc41.jpg',
  'https://i.redd.it/ubqknvdl4lp51.jpg',
  'https://i.redd.it/smftmahm3yo51.jpg',
  'https://i.redd.it/yr0y7h9augg51.jpg',
  'https://i.redd.it/011hniafd3s41.jpg',
  'https://i.redd.it/1bpym4gryhv31.png',
  'https://i.redd.it/aq3my68c8pa31.jpg',
  'https://i.redd.it/6iqovqwptny61.jpg',
  'https://i.redd.it/i1k85pa4k8y51.png',
  'https://i.redd.it/a4j0pdgswgr51.jpg',
  'https://i.redd.it/ito0r3bee4p51.jpg',
  'https://i.redd.it/zoky83iv1zm51.jpg',
  'https://i.redd.it/xnvpi7td51h51.jpg',
  'https://i.redd.it/bmf0g7maspe51.jpg',
  'https://i.redd.it/rvf3t2qbrja51.jpg',
  'https://i.redd.it/kj4t937xfzz41.jpg',
  'https://i.redd.it/inkc894peir41.jpg',
  'https://i.redd.it/vrohgofuco341.jpg',
  'https://i.imgflip.com/4t8odc.jpg',
  'https://i.redd.it/izyukfkqoj961.jpg',
  'https://i.redd.it/ebxobp2t11y51.png',
  'https://i.redd.it/kze8hkv0tjj51.jpg',
  'https://i.redd.it/uayr3t3ep6i51.jpg',
  'https://i.redd.it/ty7fjjezf2i51.jpg',
  'https://i.redd.it/18jy735epr151.jpg',
  'https://i.redd.it/kyvdkm6azft41.jpg',
  'https://i.redd.it/8ewnfbh5u3n41.png',
  'https://i.redd.it/47a9uxl6mq341.jpg',
  'https://i.redd.it/0q20zrscuda31.jpg',
  'https://i.redd.it/656i4etq0f431.jpg',
  'https://i.redd.it/2vqpjsg7chr61.jpg',
  'https://i.redd.it/xlf4r95xysf61.jpg',
  'https://i.redd.it/285s06leye061.jpg',
  'https://i.redd.it/bwosc7jtmnc51.jpg',
  'https://i.redd.it/r41rq35k3d251.png',
  'https://i.redd.it/gurxmdlvs5151.jpg',
  'https://i.redd.it/dto2qfzw0df41.jpg',
  'https://i.redd.it/9thbgnvo0zb41.jpg',
  'https://i.redd.it/sikf66y21oa41.jpg',
  'https://i.redd.it/miyphchh5ys31.png',
  'https://i.redd.it/yp82aegtd6w61.png',
  'https://i.imgur.com/wCjPc8k.png',
  'https://i.redd.it/m8fw5nzfsua61.png',
  'https://i.redd.it/tozcb3h8uay51.png',
  'https://i.redd.it/rt0chg47jnv51.jpg',
  'https://i.redd.it/o98s2ysrwve51.png',
  'https://i.redd.it/xfqlrwli7fw41.jpg',
  'https://i.redd.it/2dvmz8mbfur41.jpg',
  'https://i.redd.it/yfwm3urm3vn41.jpg',
  'https://i.redd.it/dityxv5q1jj41.jpg',
  'https://i.redd.it/4xn9joquu6d41.jpg',
  'https://i.redd.it/q3l1bt8ah1841.jpg',
  'https://i.redd.it/xni6y3yyysk31.jpg',
  'https://i.redd.it/5m1wf6jtuii61.jpg',
  'https://i.redd.it/9m45o2i2y2h61.jpg',
  'https://i.redd.it/1mhyjo6melb61.png',
  'https://i.redd.it/vusxjdqlb2d51.jpg',
  'https://i.redd.it/sthzfsod5qm41.jpg',
  'https://i.redd.it/uyvdosg0gul41.jpg',
  'https://i.redd.it/o76l88z1yv241.jpg',
  'https://i.redd.it/x5kcu5nbf9431.jpg',
  'https://i.redd.it/rct1e03ane981.jpg',
  'https://i.redd.it/ynjnmhsovoa61.jpg',
  'https://i.redd.it/i64a44h9w4761.png',
  'https://i.redd.it/fto6xzomrjs51.jpg',
  'https://i.redd.it/qskos73cw5851.jpg',
  'https://i.redd.it/15dt12b1zr251.jpg',
  'https://i.redd.it/7dzv1qp9oeg41.jpg',
  'https://i.redd.it/6jov0pyncz131.jpg',
  'https://i.redd.it/ebw2v5vmvwg61.jpg',
  'https://i.redd.it/0vy12ktzypf61.jpg',
  'https://i.redd.it/h52czmsogd561.jpg',
  'https://i.redd.it/mpgh9vssdvw51.jpg',
  'https://i.redd.it/ch9lylvdnug51.jpg',
  'https://i.redd.it/fdz8ewn30r351.png',
  'https://i.redd.it/fdj6rvman2o41.jpg',
  'https://i.redd.it/vq279pb6gdj41.jpg',
  'https://i.redd.it/h2m1ninytri41.jpg',
  'https://i.imgur.com/2WbAep2.jpg',
  'https://i.redd.it/n3c20hdabiu31.jpg',
  'https://i.redd.it/i529h1efipg71.jpg',
  'https://i.redd.it/34mnxea7vcp61.jpg',
  'https://i.redd.it/g7z4u8uqg9m61.jpg',
  'https://i.redd.it/9l848vikvbb61.jpg',
  'https://i.redd.it/9u091jzf2zn51.jpg',
  'https://i.redd.it/qk8sh2x5vje51.png',
  'https://i.redd.it/itz9a4jb1mv41.jpg',
  'https://i.redd.it/ishn7oxxs1h31.jpg',
  'https://i.redd.it/5phhz9ocmjk21.png',
  'https://i.redd.it/tbcu94hs6i671.png',
  'https://i.redd.it/5a0uaci1c2n51.png',
  'https://i.redd.it/e4j8j1s53u851.jpg',
  'https://i.redd.it/dr38jt0ils651.jpg',
  'https://i.redd.it/174x6nf6g6h41.jpg',
  'https://i.redd.it/2n1ylc9kxme41.jpg',
  'https://i.redd.it/z7v7qg0bmfc41.jpg',
  'https://i.redd.it/tuokv4bmstb41.jpg',
  'https://i.redd.it/sp4w2a15i1341.jpg',
  'https://i.redd.it/0ve71kbgqpr31.jpg',
  'https://i.redd.it/irfspvaxxyb31.jpg',
  'https://i.redd.it/ss95s83mvo291.png',
  'https://i.redd.it/4ff5q5ics8u61.jpg',
  'https://i.redd.it/61o9lptlp6g61.jpg',
  'https://i.redd.it/60gf6csonjd61.png',
  'https://i.redd.it/n0b9m1e4kt861.jpg',
  'https://i.redd.it/esah2s7xes761.jpg',
  'https://i.redd.it/ad8lk6wckiu51.jpg',
  'https://i.redd.it/tuqmbbnwpzt51.jpg',
  'https://i.redd.it/zk8mtr9ggrs51.png',
  'https://i.redd.it/kninxfmjyfp51.jpg',
  'https://i.redd.it/iwrkf8dolbq41.jpg',
  'https://i.redd.it/9gnpkije9ii41.jpg',
  'https://i.redd.it/xvv6pz2xwke41.jpg',
  'https://i.redd.it/2cvhsyxhsy841.jpg',
  'https://i.redd.it/hnk9o3syf2v31.jpg',
  'https://i.redd.it/8rcqjkel7uo31.png',
  'https://i.redd.it/k5xjo3eumcm31.jpg',
  'https://i.redd.it/ogr3hby0o6371.jpg',
  'https://i.redd.it/isj68l3mgf071.jpg',
  'https://i.redd.it/oh5inftvk7z61.jpg',
  'https://i.redd.it/o550snijqbv51.jpg',
  'https://i.redd.it/zus7c5hndob51.png',
  'https://i.redd.it/x63pf21xn4b51.png',
  'https://i.redd.it/llwodtui31a51.jpg',
  'https://i.redd.it/zcxkpyuv94551.jpg',
  'https://i.imgur.com/ekvQZ23.jpg',
  'https://i.redd.it/7bms9wlk8jv41.png',
  'https://i.redd.it/3og8gu2bc5c41.jpg',
  'https://i.redd.it/l5vm57tfweb41.jpg',
  'https://i.redd.it/ry8d050zqn941.jpg',
  'https://i.redd.it/5m3wpq79hu041.jpg',
  'https://i.redd.it/4fyfumnysrs31.jpg',
  'https://i.redd.it/fz03aol565331.jpg',
  'https://i.redd.it/uru2ni8zeoa71.jpg',
  'https://i.redd.it/wipvb8boupv61.jpg',
  'https://i.redd.it/g6fyihta5ho61.jpg',
  'https://i.redd.it/sziwrodk3ah61.png',
  'https://i.redd.it/77tb69lxwib61.jpg',
  'https://i.redd.it/s6x3afivsua61.png',
  'https://i.imgur.com/soN8xrq.jpg',
  'https://i.redd.it/onjxblgcl1061.png',
  'https://i.redd.it/vf56bhhgvuu51.jpg',
  'https://i.redd.it/r55cuqo81dj51.jpg',
  'https://i.redd.it/sxpbqi44zdh51.jpg',
  'https://i.redd.it/z5ov4a9k22151.png',
  'https://i.redd.it/t442kii27tz41.jpg',
  'https://i.redd.it/nju1bgtn3xs41.jpg',
  'https://i.redd.it/sfghdbr34vq41.jpg',
  'https://i.redd.it/kvl9crkwg5j41.jpg',
  'https://i.redd.it/xxnezs47k0b41.jpg',
  'https://i.imgur.com/CGiiV0S.jpg',
  'https://i.redd.it/7sue3217qsp31.jpg',
  'https://i.redd.it/bu522b11s0b31.jpg',
  'https://i.redd.it/0cde67qe53931.jpg',
  'https://i.redd.it/3q3vn44dwsi21.jpg',
  'https://i.redd.it/thf9okkbkpt81.png',
  'https://i.redd.it/dkz9e5ohrr981.jpg',
  'https://i.redd.it/7qh88rfxkma61.jpg',
  'https://i.redd.it/5pirwdbkh6661.jpg',
  'https://i.redd.it/e91c4k1d2ag51.jpg',
  'https://i.redd.it/2ropuqrfskz41.jpg',
  'https://i.redd.it/mj21ud41xlr41.jpg',
  'https://i.redd.it/8jpcyo6wjbr41.jpg',
  'https://i.redd.it/60ae8yj4xwf41.jpg',
  'https://i.redd.it/cnund6jpn6e41.jpg',
  'https://i.redd.it/jkj9s79q3sc41.jpg',
  'https://i.redd.it/dl3djm4hzcb41.png',
  'https://i.redd.it/p001ya5toc841.png',
  'https://i.redd.it/b28jluvhih541.jpg',
  'https://i.redd.it/xl87txkx53k31.jpg',
  'https://i.redd.it/psruznc3lua31.jpg',
  'https://i.redd.it/ih3fc90gfhx21.png',
  'https://i.redd.it/ahnbyxa7sge21.jpg',
  'https://i.redd.it/e9byzlq4s10a1.png',
  'https://i.redd.it/fhc7nviqbwd81.jpg',
  'https://i.redd.it/bnuugqovkhc71.jpg',
  'https://i.redd.it/v3jmgp0bfrs61.jpg',
  'https://i.redd.it/ddcizup1mis61.jpg',
  'https://i.redd.it/80xmuqa3g0o61.jpg',
  'https://i.redd.it/z2cctjt6x3261.jpg',
  'https://i.redd.it/x54ne3y6lkq51.jpg',
  'https://i.redd.it/lyv9ocoysdi51.jpg',
  'https://i.redd.it/cbd99jgm52a51.png',
  'https://i.redd.it/o9m7qg0y5w951.jpg',
  'https://i.redd.it/4f0fsqybvh951.jpg',
  'https://i.redd.it/nwl9ivpagvz41.jpg',
  'https://i.redd.it/lj693k1m0dm41.jpg',
  'https://i.redd.it/be0lsz517eh41.jpg',
  'https://i.imgur.com/Fr79jS8.jpg',
  'https://i.redd.it/9fgppj9znxu31.jpg',
  'https://i.redd.it/lswqkzyqltf31.png',
  'https://i.redd.it/c6kou4gf5z931.jpg',
  'https://i.redd.it/l2zyv9yjmy431.jpg',
  'http://i.imgur.com/MBUyt0n.png',
  'http://i.imgur.com/mb5BO5R.jpg',
  'https://i.redd.it/akucc18r1gh71.jpg',
  'https://i.redd.it/m9zyl76zn4171.jpg',
  'https://i.redd.it/6ri26am3kwn61.jpg',
  'https://i.redd.it/x46iko5vr6261.jpg',
  'https://i.redd.it/7kohf7xmz2061.jpg',
  'https://i.redd.it/msvi4aeyzxz51.png',
  'https://i.redd.it/cipios3qxgh51.jpg',
  'https://i.redd.it/egrx55g2d4d51.jpg',
  'https://i.redd.it/bd0clysvc6051.jpg',
  'https://i.redd.it/y6ei4w1zfty41.jpg',
  'https://i.redd.it/msgiv3mzfxu41.jpg',
  'https://i.redd.it/i0md9qe0tqu41.jpg',
  'https://i.redd.it/1o36vuk60zn41.png',
  'https://i.redd.it/86djk63uzwk41.jpg',
  'https://i.imgur.com/nqjssqO.jpg',
  'https://i.imgur.com/QAFtTGG.jpg',
  'https://i.imgur.com/ZXVf7Mb.jpg',
  'https://i.redd.it/cpl7fwfi1w241.jpg',
  'https://i.redd.it/dhsbqlofy9241.jpg',
  'https://i.redd.it/f2nl6pdxmsr31.jpg',
  'https://i.redd.it/3p8nmjrv97p31.jpg',
  'https://i.redd.it/6hxlqvi3pjl31.png',
  'https://i.redd.it/qhf9owvs7pa31.jpg',
  'https://i.redd.it/vcpfxyryim631.jpg',
  'https://i.redd.it/ga014n2ru2y21.jpg',
  'https://i.redd.it/43mfcm43qub21.jpg',
  'https://i.redd.it/gb9nf23gup3a1.jpg',
  'https://i.redd.it/c4mdds5bjjn91.jpg',
  'https://i.redd.it/ytpn5256jjn91.jpg',
  'https://i.redd.it/qp16ldqcy3k91.jpg',
  'https://i.redd.it/5zmni60x47t81.jpg',
  'https://i.redd.it/65dne5904ln81.jpg',
  'https://i.redd.it/rbsz5lqwbc471.jpg',
  'https://i.redd.it/fiajvzkulsg61.jpg',
  'https://i.redd.it/bqzruiae4r761.jpg',
  'https://i.redd.it/etab90hivvs51.jpg',
  'https://i.redd.it/plm3vlnqn4i41.jpg',
  'https://i.redd.it/b326uakmq0f41.png',
  'https://i.redd.it/j1md7n1mrf441.jpg',
  'https://i.redd.it/1qoofpimhs041.jpg',
  'https://i.redd.it/8j6ifb0qymz21.jpg',
  'https://i.redd.it/1yveyvy5mw891.jpg',
  'https://i.redd.it/x90sqa5sroe81.jpg',
  'https://i.redd.it/oyjc5y2fzk281.jpg',
  'https://i.redd.it/g3ho6jgl84l71.jpg',
  'https://i.redd.it/gh4tqhv9f9s61.jpg',
  'https://i.redd.it/ljxhzxnd1mo61.png',
  'https://i.redd.it/xlapflrltgg61.jpg',
  'https://i.redd.it/9nhmjuwr6jb61.jpg',
  'https://i.redd.it/l9qyh47nrgm41.jpg',
  'https://i.redd.it/3ncsggamtal41.jpg',
  'https://i.redd.it/15doz2xh9s941.jpg',
  'https://i.redd.it/k440jnr09u441.jpg',
  'https://i.redd.it/eff1uvp31au21.jpg',
  'https://i.redd.it/dms3cxdoedf21.jpg',
  'http://i.imgur.com/FAktrBs.jpg',
  'http://www.livememe.com/kbhin35.jpg',
  'https://i.redd.it/n6p7k5e2vt4a1.png',
  'https://i.redd.it/jt1rxbfvjcv81.jpg',
  'https://i.redd.it/j7g5fjkxj1g81.jpg',
  'https://i.redd.it/4bcg7hwflaf81.jpg',
  'https://i.imgur.com/xHdNOOX.jpg',
  'https://i.redd.it/u8gs81qcspv71.jpg',
  'https://i.redd.it/2cf8mx1nonu71.jpg',
  'https://i.redd.it/ph445zbunmt61.jpg',
  'https://i.redd.it/bfwvjqlrcpn61.jpg',
  'https://i.redd.it/key3kj5wu3b61.jpg',
  'https://i.redd.it/evx8uawr5m761.jpg',
  'https://i.redd.it/nkzjbym5wby51.jpg',
  'https://i.redd.it/7dczjq6l9ss51.jpg',
  'https://i.redd.it/33ahnam1tbh51.png',
  'https://i.redd.it/ovtei12lhyv41.jpg',
  'https://i.redd.it/u042u88md4n41.jpg',
  'https://i.redd.it/hzzj74zu7wm41.jpg',
  'https://i.redd.it/pq4k9o6ivpi41.jpg',
  'https://i.redd.it/1wkyk3wi6sf41.png',
  'https://i.imgur.com/orOvRD9.jpg',
  'https://i.redd.it/0o5r63nnlu741.jpg',
  'https://i.imgur.com/EUtEtU1.jpg',
  'https://i.redd.it/uwkpupmfdg641.jpg',
  'https://i.redd.it/yhs0hc0nww241.jpg',
  'https://i.redd.it/m1l1bmadfdv31.jpg',
  'https://i.redd.it/y5lvsuavl5u31.jpg',
  'https://i.redd.it/evp8po3g0un31.jpg',
  'https://i.redd.it/xr4oubxsdnn31.jpg',
  'https://i.redd.it/d2g1927jh0l31.png',
  'https://i.redd.it/9c5xgey8wpc31.jpg',
  'https://i.redd.it/5700scy5dea31.jpg',
  'https://i.redd.it/4xlpwyryv8431.png',
  'https://i.redd.it/qjhq3n7bpgw21.jpg',
  'https://i.redd.it/w6dym1f49iu21.jpg',
  'https://i.redd.it/nm5arh8s4mt11.jpg',
  'https://i.redd.it/a1ka6kjoqrq01.jpg',
  'https://i.redd.it/e1h540x95rky.jpg',
  'https://i.redd.it/9i1wkcb7sjn91.jpg',
  'https://i.redd.it/2d84px5u0hz81.jpg',
  'https://i.redd.it/950rzcpdg4u81.jpg',
  'https://i.redd.it/e39s1knbr6r81.png',
  'https://i.redd.it/6m40473x90q81.jpg',
  'https://i.redd.it/359fjc3u4l981.png',
  'https://i.redd.it/jswg8oftit081.jpg',
  'https://i.redd.it/hzdgegjg4dn71.jpg',
  'http://i.imgflip.com/5iek3g.jpg',
  'https://i.redd.it/gc3vfurcqlf71.png',
  'https://i.redd.it/p7fp7tdem2e71.png',
  'https://i.redd.it/96o9o9807ja71.jpg',
  'https://i.redd.it/ssi5c4ngs2o61.jpg',
  'https://i.redd.it/69c1k52x7b261.jpg',
  'https://i.redd.it/pefhk0t3xys51.jpg',
  'https://i.redd.it/264fu9zzlln51.jpg',
  'https://i.redd.it/yuw1r8gmtcz41.jpg',
  'https://i.redd.it/m2zrn85whit41.jpg',
  'https://i.redd.it/c7zxl5ob9no41.png',
  'https://i.redd.it/ta6k2t6t50k41.png',
  'https://i.redd.it/y9sfppax8ec41.jpg',
  'https://i.redd.it/cchrie3chtb41.jpg',
  'https://i.redd.it/glil5bir1sr31.png',
  'https://i.redd.it/i0vly55chjr31.jpg',
  'https://i.redd.it/76ad8qnvoli31.jpg',
  'https://i.redd.it/2tjflscdo6k21.jpg',
  'https://i.redd.it/k0pyj6cs7fd21.jpg',
  'https://i.redd.it/fk3nzis732521.png',
  'https://i.redd.it/7ji85f9nwxj11.jpg',
  'https://i.redd.it/vmpewvyqqlm01.jpg',
  'https://i.redd.it/dxq5ulwqiduz.jpg',
  'http://i.imgur.com/tm43Q05.png',
  'http://i.imgur.com/zKLq7k5.jpg',
  'http://i.imgur.com/Pmj5xho.jpg',
  'https://i.redd.it/n8jq54hct37a1.png',
  'https://i.redd.it/08ya6tf2b55a1.jpg',
  'https://i.redd.it/47yg0na8f15a1.png',
  'https://i.redd.it/bcntsk8a4kn91.jpg',
  'https://i.redd.it/tn7oqwvxwzh91.jpg',
  'https://i.redd.it/ia4pfmwcglv81.jpg',
  'https://i.redd.it/fak2moe5r2o81.jpg',
  'https://i.redd.it/agu220w6t8n81.png',
  'https://i.redd.it/bet9naaddjj81.png',
  'https://i.redd.it/gwwy7iaap1j81.jpg',
  'https://i.redd.it/sh2h2nx3ruh81.jpg',
  'https://i.redd.it/ppu5fse1q8h81.png',
  'https://imgur.com/3UTfGLW.jpg',
  'https://i.redd.it/44wzxm0i9fy71.jpg',
  'https://i.redd.it/hzftbm521bx71.jpg',
  'https://i.redd.it/emryy9h2eqo71.jpg',
  'https://i.redd.it/wvemcoaxex771.jpg',
  'https://i.redd.it/zcz4bugs10w61.jpg',
  'https://i.redd.it/e2nkfe3mdnq61.jpg',
  'https://i.redd.it/hweuo47k6uk61.jpg',
  'https://i.redd.it/kq56krmckxr51.jpg',
  'https://i.redd.it/rkj03leuaqq41.jpg',
  'https://i.redd.it/1za2ddqtq9m41.jpg',
  'https://i.redd.it/u1rk6u0jv7b41.jpg',
  'https://i.redd.it/n5ym4see1m941.jpg',
  'https://i.redd.it/ynn0rfhft2641.png',
  'https://i.redd.it/gqubvkrd4xw31.png',
  'https://i.redd.it/5adulu84ywy31.jpg',
  'https://i.redd.it/9veuph9ppvy31.jpg',
  'https://i.redd.it/dlomcjb53gx31.png',
  'https://imgur.com/0WUvRhJ.jpg',
  'https://i.redd.it/z5bkhb5x1la31.jpg',
  'https://i.redd.it/czxgq8v4z1831.jpg',
  'https://i.redd.it/v5e7ixgth0z21.jpg',
  'https://i.redd.it/03inatwaz9u21.jpg',
  'https://i.redd.it/uew1bvf9mjn21.png',
  'https://i.redd.it/hjmp947drx821.png',
  'https://i.kym-cdn.com/photos/images/original/001/409/503/a29.jpeg',
  'https://i.redd.it/ow4b0873vp011.jpg',
  'https://i.imgur.com/A33KZKz.jpg',
  'https://i.redd.it/kouk4gf54fyz.jpg',
  'https://i.redd.it/tcwoa3r3uhsz.jpg',
  'https://i.imgur.com/C1P1wOW.jpg',
  'https://i.redd.it/u0xiova3ab6z.jpg',
  'http://media.makeameme.org/created/most-of-the-8d6jy3.jpg',
  'https://i.imgflip.com/p07rg.jpg',
  'http://i.imgur.com/ikGPqim.png',
  'http://i.imgur.com/livP1oH.jpg',
  'https://i.imgflip.com/ghupc.png',
  'http://i.imgur.com/oBW25UK.png',
  'https://i.redd.it/wjexnpzfgf4a1.png',
  'https://i.redd.it/d5erhc24pgz91.png',
  'https://i.redd.it/3qr8j1vkhse91.jpg',
  'https://i.redd.it/xyjtl58yzf591.png',
  'https://i.redd.it/eltm4co6wnz81.jpg',
  'https://i.redd.it/u2po53j3piu81.jpg',
  'https://i.redd.it/9rkqttwchfp81.png',
  'https://i.redd.it/pxls36flvpe81.jpg',
  'https://i.redd.it/pialp7ndlkd81.jpg',
  'https://i.redd.it/0nn40boioox71.jpg',
  'https://i.redd.it/p8dy0sk1ybo71.jpg',
  'https://i.redd.it/fbfbvjolhch71.jpg',
  'https://i.redd.it/85g8xrwim0e71.png',
  'https://i.redd.it/ya9x9dzdi9s61.jpg',
  'https://i.imgur.com/TmQLTZH.jpg',
  'https://i.redd.it/192jb3vut8o61.jpg',
  'https://i.redd.it/gkt0sw0z8ed61.jpg',
  'https://i.redd.it/ofwnc80fvab61.jpg',
  'https://i.redd.it/6hbq9leakf761.jpg',
  'https://i.redd.it/e0g3zifrurk51.png',
  'https://i.redd.it/4sqq3pgdfam41.jpg',
  'https://i.redd.it/ersrl2ur6zb41.jpg',
  'https://i.redd.it/3l6meb5h3zb41.jpg',
  'https://i.imgur.com/GMXHjBn.jpg',
  'https://i.redd.it/ku73why6pv241.jpg',
  'https://i.redd.it/adnlqclbzw141.jpg',
  'https://i.redd.it/1flpbp5a72m31.jpg',
  'https://i.redd.it/vs1g9v80n2k31.jpg',
  'https://i.redd.it/vh0xby778pa31.jpg',
  'https://i.redd.it/rssn9tmcnq331.jpg',
  'https://i.redd.it/xsntv2a477j21.png',
  'https://i.redd.it/wqevtlpbqpb21.jpg',
  'https://pics.me.me/fight-milk-22-fightmilk22-we-are-living-at-the-peak-36007159.png',
  'https://i.redd.it/cseli9pccgl11.jpg',
  'https://i.redd.it/zgp6gqynx7411.jpg',
  'https://i.redd.it/u91hxowdma311.jpg',
  'https://i.redd.it/sm01v93gknw01.jpg',
  'https://i.redd.it/tgljvsbp9ee01.jpg',
  'http://i.imgur.com/fE7Ygsy.jpg',
  'http://i.imgur.com/BznJhFG.jpg',
  'http://i.imgur.com/XioMlad.jpg']
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