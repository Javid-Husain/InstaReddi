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
  const memes = ['https://i.imgur.com/ivgwE7e.jpg',
  'https://i.redd.it/6jp2e2ztexa41.jpg',
  'https://i.redd.it/cp28zjje6zp61.jpg',
  'https://i.redd.it/laywxmnim3x61.jpg',
  'https://i.redd.it/bqjnw3lm67851.jpg',
  'https://i.redd.it/ptsubyr5ken91.jpg',
  'https://i.redd.it/40dnbv87r3171.png',
  'https://i.imgur.com/SBOAS8L.jpg',
  'https://i.redd.it/4lfenu1t0pu51.png',
  'https://i.redd.it/9wslf9kh9xu71.jpg',
  'https://i.redd.it/sm5w0tg9mr4a1.jpg',
  'https://i.redd.it/wy7bz1jbcxs61.jpg',
  'https://i.redd.it/gq9jow9ipv571.jpg',
  'https://i.redd.it/8fcxyh2380r61.jpg',
  'https://i.redd.it/00rsqh5vivj61.png',
  'https://i.redd.it/p1lrl4sawfq61.jpg',
  'https://i.redd.it/vxhrxiidxls41.png',
  'https://i.redd.it/bg2i0sv0vyy91.png',
  'https://i.redd.it/lxv3zek6qa351.jpg',
  'https://i.redd.it/mgxrhcr3els91.jpg',
  'https://i.redd.it/jzjm04h6gjq51.png',
  'https://i.redd.it/gyu0bijnm7b71.png',
  'https://i.redd.it/3x0vla0eos041.png',
  'https://i.redd.it/1gy92iks2bj41.jpg',
  'https://i.imgur.com/fR2aGpG.jpg',
  'https://i.redd.it/7op6v2g65is51.jpg',
  'https://i.redd.it/ri5mk522ena51.jpg',
  'https://i.redd.it/382qpgeuvcs51.jpg',
  'https://i.imgur.com/zL110zl.jpg',
  'https://i.redd.it/etuuxpb559f61.jpg',
  'https://i.redd.it/uxszqy1li8s61.jpg',
  'https://i.redd.it/se11sv22l3s51.jpg',
  'https://i.redd.it/qu8cj5m0mdt91.png',
  'https://i.redd.it/tp44yywmels51.jpg',
  'https://i.redd.it/k0oojjozc5w61.png',
  'https://i.redd.it/8tzzh4q3qat81.jpg',
  'https://i.redd.it/312w68zpkud51.png',
  'https://i.redd.it/rc1qzg4208w71.png',
  'https://i.redd.it/d3nbpckaxdo61.jpg',
  'https://i.redd.it/a92x6xm1ghk41.jpg',
  'https://i.redd.it/q6erehfvwlu91.png',
  'https://i.redd.it/j6fkqj58jbw91.jpg',
  'https://i.redd.it/mpb06jxyyu271.png',
  'https://i.redd.it/8mmhwkxsvwf41.jpg',
  'https://i.redd.it/nakk3mdnv0c71.jpg',
  'https://i.redd.it/57j1un2kpyg51.png',
  'https://i.imgur.com/SKFWArQ.jpg',
  'https://i.redd.it/5jdwvsna2ti51.jpg',
  'https://i.redd.it/0ozwdr57ewo51.jpg',
  'https://i.redd.it/xyzu7abw76k51.jpg',
  'https://i.redd.it/91f9vbn1qt671.jpg',
  'https://i.redd.it/k9kz8p2lcs051.jpg',
  'https://i.redd.it/x7n969f9jl161.jpg',
  'https://i.redd.it/4fgdj5kdqmd51.jpg',
  'https://i.redd.it/gg9wtwdcuj081.png',
  'https://i.redd.it/s5zp74a1uh071.jpg',
  'https://i.redd.it/v4uuqisjqoj81.jpg',
  'https://i.redd.it/rorqta1l53w51.jpg',
  'https://i.redd.it/idgkdtpl34441.jpg',
  'https://i.redd.it/55ksygffnkz41.jpg',
  'https://i.redd.it/hcje5662bvy81.png',
  'https://i.redd.it/pwv078bzkd081.jpg',
  'https://i.redd.it/kuge9x1hhn6a1.jpg',
  'https://i.redd.it/w2nb29hyxwh71.jpg',
  'https://i.redd.it/9czf419qef841.jpg',
  'https://i.redd.it/z4wi03ni90i51.jpg',
  'https://i.redd.it/nc3ep7q1xi551.jpg',
  'https://i.redd.it/uexsh9t92x961.jpg',
  'https://i.redd.it/h16g3f3j6wv61.jpg',
  'https://i.redd.it/6h2ggvuow5x61.jpg',
  'https://i.redd.it/d1pfoyzvd3a61.jpg',
  'https://i.redd.it/i2d6069ff1h61.png',
  'https://i.redd.it/k652hwsp5w851.jpg',
  'https://i.redd.it/7j2xqeyd5nq61.jpg',
  'https://i.redd.it/mh9s1adkj9081.jpg',
  'https://i.redd.it/4hl23btyn5j51.jpg',
  'https://i.redd.it/54xcbyh3mmu51.jpg',
  'https://i.redd.it/6tee9od8mlr41.jpg',
  'https://i.redd.it/n07fzxatf0671.png',
  'https://i.redd.it/d1dqyld56jd41.jpg',
  'https://i.redd.it/cvex05h2jww61.jpg',
  'https://i.redd.it/roy3iy6x6vg61.jpg',
  'https://i.imgur.com/pNb1eMD.png',
  'https://i.redd.it/jtedeamknbb61.png',
  'https://i.redd.it/twux7ar7ir371.jpg',
  'https://i.redd.it/q9v3eup8k5961.jpg',
  'https://i.redd.it/9li787ddfzn61.jpg',
  'https://i.imgur.com/Gh029xR.jpg',
  'https://i.imgur.com/xKgMo9p.jpg',
  'https://i.redd.it/mgr198r1ik561.jpg',
  'https://i.redd.it/9y26bmx4adz71.jpg',
  'https://i.redd.it/temoyt6s9tn41.png',
  'https://i.redd.it/6kobntalx7d71.jpg',
  'https://i.redd.it/5h9o7vpb13y61.jpg',
  'https://i.redd.it/mfsjuhut7wm41.png',
  'https://i.redd.it/14uf1npfxsk61.jpg',
  'https://i.redd.it/u4wj5d8y6vb71.jpg',
  'https://i.redd.it/1pj7pimo9hi61.jpg',
  'https://i.redd.it/gy4yquvpkyi41.png',
  'https://i.redd.it/c5hhexzlh6f71.jpg',
  'https://i.redd.it/u28zspckokl51.jpg',
  'https://i.redd.it/v5j3q4tpys441.jpg',
  'https://i.redd.it/lr46qv8oq8161.jpg',
  'https://i.redd.it/lwwrm98xyth61.jpg',
  'https://i.redd.it/92rwdx84h2141.jpg',
  'https://i.redd.it/v5fmxr7rfpl51.jpg',
  'https://i.redd.it/3is5g8ynwgg61.jpg',
  'https://i.redd.it/7jt13uhxtoj61.jpg',
  'https://i.redd.it/lyq0xhswqdg51.jpg',
  'https://i.redd.it/a9z5kl4x4c651.jpg',
  'https://i.redd.it/0930gwalp2351.jpg',
  'https://i.imgur.com/dYOxWtB.jpg',
  'https://i.redd.it/e8c63zore9i61.jpg',
  'https://i.redd.it/rw3tvvy2iwk61.jpg',
  'https://i.redd.it/8xx9glul7px61.jpg',
  'https://i.redd.it/pul7vbdi1v061.jpg',
  'https://i.redd.it/jrxy7f340sl51.jpg',
  'https://i.redd.it/5ufywpqoshm41.jpg',
  'https://i.redd.it/we4w0l8jlk071.jpg',
  'https://i.redd.it/lzgvs4bself71.jpg',
  'https://i.redd.it/d2nl76aowtt61.jpg',
  'https://i.imgur.com/PQtNWbk.jpg',
  'https://i.redd.it/exd2stzbcsq61.jpg',
  'https://i.redd.it/odfdb1is31r71.jpg',
  'https://i.redd.it/rhaxblp6cy251.jpg',
  'https://i.redd.it/5w808b7tx36a1.jpg',
  'https://i.redd.it/92bf3btdzhx61.jpg',
  'https://i.redd.it/t99iale7zhv61.jpg',
  'https://i.redd.it/33j4wyjrtvp41.jpg',
  'https://i.redd.it/95j9r429o5b61.jpg',
  'https://i.redd.it/o2ce0fotjj361.jpg',
  'https://i.redd.it/w0kc037ybbv81.jpg',
  'https://i.redd.it/d4rdqv0foxs51.jpg',
  'https://i.redd.it/89xlc8cn2wg71.jpg',
  'https://i.redd.it/j1312o4l1b171.jpg',
  'https://i.imgur.com/bZlrVvE.jpg',
  'https://i.redd.it/c1r4wuk0fhr51.jpg',
  'https://i.redd.it/ma87bzyc61w41.jpg',
  'https://i.redd.it/gurjvnwabhf31.jpg',
  'https://i.redd.it/5ir0hecat3k61.jpg',
  'https://i.redd.it/07a3l0j3g9o91.png',
  'https://i.redd.it/46d0h0anomp41.jpg',
  'https://i.redd.it/5gjl6xq83az61.jpg',
  'https://i.imgur.com/mvknlaX.jpg',
  'https://i.redd.it/8jbt8tyrsat61.jpg',
  'https://i.redd.it/bho10tobtfe51.jpg',
  'https://i.redd.it/lg7gvtmcbu751.jpg',
  'https://i.redd.it/kyziil1nqqv41.jpg',
  'https://i.redd.it/6hdkzm4hqfr61.jpg',
  'https://i.redd.it/hgdkh69yti0a1.jpg',
  'https://i.redd.it/20yrqu5gu7q71.jpg',
  'https://i.imgur.com/HptzzJx.png',
  'https://i.redd.it/32vp9y59xtu71.jpg',
  'https://i.redd.it/vmndnk2khkl81.jpg',
  'https://i.redd.it/hj0ty7maadl81.jpg',
  'https://i.redd.it/t9rq48e0s1271.jpg',
  'https://i.redd.it/ww9lxrdimh061.png',
  'https://i.redd.it/61bdm44ysdb71.png',
  'https://i.redd.it/b6816u1kgo571.jpg',
  'https://i.redd.it/e1bx31v6w3071.jpg',
  'https://i.redd.it/u7sje0imdqd51.jpg',
  'https://i.imgur.com/JTQQuda.jpg',
  'https://i.imgur.com/sgLKO9O.jpg',
  'https://i.redd.it/cykufcjxo7h51.jpg',
  'https://i.redd.it/8rnymop52sw71.jpg',
  'https://i.imgur.com/D0j2Ae7.jpg',
  'https://i.redd.it/wumcl3tvmrm61.png',
  'https://i.redd.it/mdg4dt4kmg391.jpg',
  'https://i.redd.it/g4d91vtrepa81.png',
  'https://i.redd.it/bm6rwxh8zxv61.png',
  'https://i.redd.it/ozphloiuh5x71.png',
  'https://i.redd.it/yl65dwsinx561.png',
  'https://i.redd.it/qt8mslv8hoz81.jpg',
  'https://i.redd.it/sk6rvwc0oun91.jpg',
  'https://i.redd.it/1txz0j8rn6q61.jpg',
  'https://i.redd.it/ubg24wy4qmj61.jpg',
  'https://i.redd.it/18cnh24280f81.jpg',
  'https://i.redd.it/n78gmfob32651.jpg',
  'https://i.redd.it/umctikn876h91.jpg',
  'https://i.redd.it/hxq9wljyrbu51.jpg',
  'https://i.redd.it/i9whvocvnh171.jpg',
  'https://i.redd.it/qzj6nn2016e41.png',
  'https://i.redd.it/50dgso5vgew91.png',
  'https://i.redd.it/tydoxotjw1871.jpg',
  'https://i.redd.it/v35felx224471.jpg',
  'https://i.redd.it/4k8jj0nzwa851.jpg',
  'https://i.redd.it/th1v9nudrbi41.jpg',
  'https://i.redd.it/j7ar95q1g3q51.jpg',
  'https://i.redd.it/itxaiyoj76f91.jpg',
  'https://i.redd.it/hlf1nnonwaa61.png',
  'https://i.redd.it/83fw7a0czby91.jpg',
  'https://i.redd.it/trypofx2kml61.jpg',
  'https://i.redd.it/1zumm12u2t141.jpg',
  'https://i.redd.it/gw5s66lyfd661.jpg',
  'https://i.redd.it/5gg1qwqcgvo81.jpg',
  'https://i.redd.it/vzllsg8za5d61.png',
  'https://i.redd.it/84haok9msr581.jpg',
  'https://i.redd.it/xlpa5aoe5jt61.png',
  'https://i.redd.it/a9nvt3e8x7n81.jpg',
  'https://i.redd.it/gwgdetosrjv61.jpg',
  'https://i.redd.it/rd6oxyw1rim51.jpg',
  'https://i.redd.it/sqsvgl5v8vz61.png',
  'https://i.redd.it/e4mje8dqed0a1.jpg',
  'https://i.redd.it/9be1riq70x751.jpg',
  'https://i.redd.it/78ww6cos65m81.jpg',
  'https://i.redd.it/7k17w0nbzfz31.jpg',
  'https://i.redd.it/hgjxn4utbvl41.png',
  'https://i.redd.it/ve4skcn475t61.png',
  'https://i.redd.it/4u1wcsff6as51.jpg',
  'https://i.redd.it/hxb8146uho551.jpg',
  'https://i.redd.it/vkzp68r4e5u61.jpg',
  'https://i.redd.it/3phz2hfcjlj31.jpg',
  'https://i.redd.it/z9b2fyccab671.jpg',
  'https://i.redd.it/qpkxfmg38jy61.jpg',
  'https://i.redd.it/1mhnw9tynhl61.png',
  'https://i.imgur.com/Eh0EHLa.jpg',
  'https://i.redd.it/pqm4yh23gpd91.png',
  'https://i.redd.it/87pajj8vueb51.jpg',
  'https://i.redd.it/sv11902t26o61.png',
  'https://i.imgur.com/duxGhrX.jpg',
  'https://i.redd.it/kvt5lberhak61.jpg',
  'https://i.redd.it/vtjlai722df91.png',
  'https://i.redd.it/0ppjcapzla781.png',
  'https://i.redd.it/o4k3gvgme2571.jpg',
  'https://i.redd.it/j76sf90nnkx41.jpg',
  'https://i.redd.it/jhi4dzui7fy81.jpg',
  'https://i.redd.it/usemb7tmb2671.jpg',
  'https://i.redd.it/amz0emysjfa51.png',
  'https://i.redd.it/gedk5vuovf091.jpg',
  'https://i.redd.it/ddfgsicbd2i61.jpg',
  'https://i.redd.it/kxsgkg7ww4p51.jpg',
  'https://i.imgur.com/alQAOlc.jpg',
  'https://i.redd.it/m2qqt5klgxi91.png',
  'https://i.redd.it/ya88p1mt6bo71.png',
  'https://i.redd.it/3qln7tu74m341.jpg',
  'https://i.redd.it/gmo3jm6r4qg71.png',
  'https://i.redd.it/5802xxi10zd71.jpg',
  'https://i.redd.it/vvszgcdsmq481.jpg',
  'https://i.redd.it/0ygsr9w9hqp31.jpg',
  'https://i.redd.it/2662rkq136b41.jpg',
  'https://i.imgur.com/OReKAHT.jpg',
  'https://i.redd.it/8m2ilo2r3ru91.jpg',
  'https://imgur.com/BeIOUk5.jpg',
  'https://i.redd.it/x2m5porljby31.jpg',
  'https://i.redd.it/x38scjlzkqn51.jpg',
  'https://i.imgur.com/xeEH4cf.jpg',
  'https://i.redd.it/nxrcd0gvs9p91.png',
  'https://i.redd.it/fsarf9m6xyw71.png',
  'https://i.redd.it/450rijl6fqn81.jpg',
  'https://i.redd.it/mo3dq1bdwza41.jpg',
  'https://i.redd.it/uwrth8rvu7s91.jpg',
  'https://i.redd.it/9b0rdkuyevt41.jpg',
  'https://i.redd.it/lu0iyuqnmfj81.jpg',
  'https://i.redd.it/8crcq9gh0vk51.png',
  'https://i.redd.it/bkx064x412371.png',
  'https://i.redd.it/c7tfyqiw0id81.jpg',
  'https://i.redd.it/xyfidz3apen61.jpg',
  'https://i.redd.it/b1wxbr144x681.png',
  'https://i.redd.it/029cy3c5tmy51.jpg',
  'https://i.redd.it/7o1keqtzr3751.jpg',
  'https://i.redd.it/khgt820lz5n61.png',
  'https://i.redd.it/dn50cj3ufxp51.jpg',
  'https://i.redd.it/9ps25w0psl551.jpg',
  'https://i.redd.it/or71hmtzhc251.jpg',
  'https://i.redd.it/95u7euvom2t51.jpg',
  'https://i.redd.it/6b94p8ro9u5a1.jpg',
  'https://i.redd.it/jat6jg110r861.jpg',
  'https://i.redd.it/426u967nz3a81.jpg',
  'https://i.redd.it/ob46b8a19mr61.jpg',
  'https://i.redd.it/3t06p8qhqn361.png',
  'https://i.imgur.com/T5jgV5m.jpg',
  'https://i.redd.it/9tvhhnxfyft91.jpg',
  'https://i.imgur.com/EGl5qxE.jpg',
  'https://i.redd.it/8k2168253nu71.jpg',
  'https://i.redd.it/z66oic6jc3k71.jpg',
  'https://i.redd.it/t4gly9pcz9c91.jpg',
  'https://i.redd.it/7zgk5awvoys91.jpg',
  'https://i.imgur.com/aeKxVoA.png',
  'https://i.redd.it/8bfmfywuqsj61.jpg',
  'https://i.redd.it/hcxg1b1ysj181.jpg',
  'https://i.redd.it/x6hdmyuxv8x51.jpg',
  'https://i.redd.it/2bjiwuw1dz281.png',
  'https://i.redd.it/2w79i5erl8u51.jpg',
  'https://i.redd.it/z2u6nnxfpxf61.png',
  'https://i.redd.it/1jk29uh7urd91.png',
  'https://i.redd.it/husqmx4hmof41.jpg',
  'https://i.redd.it/h01nl73qjj681.jpg',
  'https://i.redd.it/d03ztznk30761.png',
  'https://i.redd.it/1lrc7ee11f671.jpg',
  'https://imgur.com/CQFrgCo.jpg',
  'https://i.redd.it/mq0plfgvirs91.jpg',
  'https://i.redd.it/851blkjd72i41.png',
  'https://i.redd.it/r3gv7k1dibp81.jpg',
  'https://i.redd.it/cj28a7bh6c481.jpg',
  'https://i.redd.it/a1qkn6pjxd281.jpg',
  'https://i.imgur.com/3PJDzDK.jpg',
  'https://i.redd.it/77ju12sb0g971.jpg',
  'https://i.redd.it/ytdtv9y2i0n61.jpg',
  'https://i.redd.it/5j3wev03v1t61.jpg',
  'https://i.redd.it/d1f5w8y3hbd81.jpg',
  'https://i.redd.it/wkmyjo30uzr61.jpg',
  'https://i.redd.it/gjuutp5si3o71.jpg',
  'https://i.redd.it/1vp594pus8b81.jpg',
  'https://i.redd.it/yay6unnwpnf61.png',
  'https://i.redd.it/pf83eyea7x071.jpg',
  'https://i.redd.it/q9pzfnhk6du91.jpg',
  'https://i.redd.it/bn4pql8iomv51.jpg',
  'https://i.redd.it/6tx41p823xa61.jpg',
  'https://i.redd.it/998omg8faq561.jpg',
  'https://i.redd.it/k3x3cv0ogfp61.jpg',
  'https://i.redd.it/ndqlvsqqdvt51.jpg',
  'https://i.redd.it/0dwz5ogskxh51.jpg',
  'https://i.redd.it/75e8784exg951.jpg',
  'https://i.imgur.com/Kb7J7gS.png',
  'https://i.redd.it/ijgplxsx3xq31.png',
  'https://i.imgur.com/UBWxGWJ.jpg',
  'https://i.redd.it/8ccmyvrt65h71.jpg',
  'https://i.redd.it/ats1qbyn3ry71.jpg',
  'https://i.redd.it/0s1wlymqmso91.png',
  'https://i.redd.it/d720q8xuo1v51.jpg',
  'https://i.redd.it/su4aicqqpcc61.png',
  'https://i.redd.it/xjg80tpm1ty41.jpg',
  'https://i.redd.it/4m5wifji73l51.jpg',
  'https://i.redd.it/tain0y188dr61.jpg',
  'https://i.redd.it/opaa0sqacat51.jpg',
  'https://i.redd.it/7pflukfqu4k51.jpg',
  'https://i.redd.it/pyynjs6y7cd71.jpg',
  'https://i.redd.it/bwykcsjzxvw51.png',
  'https://i.redd.it/8ecpt799cjr61.jpg',
  'https://i.redd.it/ry0gjelde8c71.jpg',
  'https://i.redd.it/yxqccqscsep81.jpg',
  'https://i.redd.it/foadgyj7mjq61.jpg',
  'https://i.redd.it/2zah3vc0lki91.jpg',
  'https://i.redd.it/0ow7uzp0wzt61.png',
  'https://i.redd.it/rfu76wjliiw51.jpg',
  'https://i.redd.it/3yfftyx02fk41.jpg',
  'https://i.redd.it/d66xxfjsay051.jpg',
  'https://i.redd.it/1j2ibgfjrpk51.jpg',
  'https://i.redd.it/0vxke2x7xqr61.jpg',
  'https://i.redd.it/rf8dv203pzx91.jpg',
  'https://i.redd.it/ig3t56d8hnv91.png',
  'https://i.redd.it/3wtoa68abr061.jpg',
  'https://i.redd.it/5ae41j3ktrj51.jpg',
  'https://i.redd.it/0flensxofj791.jpg',
  'https://i.redd.it/akxjnepdkwm51.jpg',
  'https://i.redd.it/mdoivrrp66i71.png',
  'https://i.redd.it/a1anw2hlhfw51.jpg',
  'https://i.redd.it/191d6mr2fuq71.png',
  'https://i.redd.it/o6wrrj0wqqz41.jpg',
  'https://i.redd.it/cq6p2qmwtte91.png',
  'https://i.redd.it/htt7wt54frx71.jpg',
  'https://i.redd.it/34gdb6zpm5d71.jpg',
  'https://i.redd.it/tsw7s5rirf471.jpg',
  'https://i.redd.it/vy7dx11g8w161.jpg',
  'https://i.redd.it/dncre4s860p61.jpg',
  'https://i.redd.it/zxkvlw7gqge61.jpg',
  'https://i.redd.it/tethx5dkp6361.jpg',
  'https://i.redd.it/bvs1av2yec181.jpg',
  'https://i.redd.it/9fef5vy6cfz51.jpg',
  'https://i.redd.it/4yl2w30kubj51.jpg',
  'https://i.redd.it/dgjpmpq0jtz51.jpg',
  'https://i.redd.it/p7mes95ubac61.jpg',
  'https://i.redd.it/f5sdrp9ixvn51.png',
  'https://i.redd.it/4y2ylg5569l91.jpg',
  'https://i.redd.it/vzeegyli7dn81.jpg',
  'https://i.redd.it/ds9jzn00r4381.jpg',
  'https://i.redd.it/2srrovcj7oq51.jpg',
  'https://i.redd.it/tmoimwghkxz61.jpg',
  'https://i.redd.it/gtp90jxh7c931.jpg',
  'https://i.redd.it/qs38dxx7xqv61.png',
  'https://i.redd.it/ehen3pneqeu71.png',
  'https://i.imgur.com/wx8a2Ou.jpg',
  'https://i.redd.it/92sbeoisutn61.jpg',
  'https://i.redd.it/yx9u0h6e1xe41.jpg',
  'https://i.redd.it/zvrqrvyglkz91.jpg',
  'https://i.redd.it/x9tyg1os73w61.png',
  'https://i.imgur.com/OYbTcRE.jpg',
  'https://i.redd.it/u0cl4ogfkek71.png',
  'https://i.redd.it/dngo8hasubc41.jpg',
  'https://i.redd.it/7t7ss22e16y71.jpg',
  'https://i.redd.it/ibyhpv181mh51.png',
  'https://i.redd.it/hckn3s7r1fz81.jpg',
  'https://i.redd.it/hhiookr7z6y41.png',
  'https://i.redd.it/qfam5nd2vmw51.jpg',
  'https://i.redd.it/hqslkxqe23r51.jpg',
  'https://i.redd.it/cxu9yr9ms5q61.png',
  'https://i.redd.it/fjziok4m71l61.jpg',
  'https://i.redd.it/qli5cbap5gt51.jpg',
  'https://i.redd.it/td39hgxs8yp81.jpg',
  'https://i.redd.it/gdjnle0wymx51.jpg',
  'https://i.redd.it/bk9bei0pw3551.jpg',
  'https://i.redd.it/v03fay6tuj741.jpg',
  'https://i.redd.it/z1suzyd1xad61.jpg',
  'https://i.redd.it/63sqsj2ndqu61.jpg',
  'https://i.redd.it/7kz75byrij851.jpg',
  'https://i.redd.it/l5rrqvzrrx661.png',
  'https://i.redd.it/bvrasns8tdq81.jpg',
  'https://i.redd.it/fu5ow1hpjlt61.jpg',
  'https://i.redd.it/ci7vjdtsjy461.jpg',
  'https://i.redd.it/x5cn6ot9cf061.jpg',
  'https://i.redd.it/axwa7vsvfpb81.png',
  'https://i.redd.it/oj5zn8448vc61.png',
  'https://i.redd.it/m8k7zv016f151.jpg',
  'https://i.redd.it/bdn8thkh9fn41.jpg',
  'https://i.redd.it/6wfkoxls58u61.jpg',
  'https://i.redd.it/6xspqbbn1co51.jpg',
  'https://i.redd.it/vke2mnjeg0v41.jpg',
  'https://i.redd.it/6q9hrttysdf41.jpg',
  'https://i.redd.it/vk03c3xd1nq41.jpg',
  'https://i.redd.it/m4k3vgrsnqt61.jpg',
  'https://i.redd.it/c9xff2ko2wg41.jpg',
  'https://i.redd.it/1m21nul2nhh61.jpg',
  'https://i.redd.it/o6vn244laym51.jpg',
  'https://i.redd.it/kyi1dy6qea051.jpg',
  'https://i.redd.it/pdpo4egrcmr91.jpg',
  'https://i.redd.it/mdezg3d181461.jpg',
  'https://i.redd.it/99ly8sn9o1e81.jpg',
  'https://i.redd.it/kjvixmq93s971.jpg',
  'https://i.redd.it/0yysds9sx7m41.jpg',
  'https://i.redd.it/cuyhqqy1iji51.png',
  'https://i.redd.it/e0egop0tvyl61.jpg',
  'https://i.redd.it/t6vd9cmg6rx61.jpg',
  'https://i.redd.it/d7n1y7cgeqm81.jpg',
  'https://i.redd.it/qzcdo95fibw51.jpg',
  'https://i.redd.it/dd8wedoanvh91.jpg',
  'https://i.redd.it/k6xyyiav7wu51.jpg',
  'https://i.redd.it/nyx3knh6ck991.jpg',
  'https://i.imgur.com/a73mFys.jpg',
  'https://i.redd.it/mf1b4v3ux5r61.jpg',
  'https://i.redd.it/4p3r1t3l82e51.jpg',
  'https://i.redd.it/ok3wklt5yzd61.jpg',
  'https://i.redd.it/prgn72pf7a561.jpg',
  'https://i.redd.it/r522g9bmguo51.jpg',
  'https://i.imgur.com/Qyh15dY.jpg',
  'https://i.redd.it/8k365wpdlud61.png',
  'https://i.imgflip.com/4ehr7y.jpg',
  'https://i.redd.it/j9w8ben7pta51.png',
  'https://i.redd.it/hv53wcu7l8061.jpg',
  'https://i.imgur.com/LUR0Vvy.jpg',
  'https://i.redd.it/9xde0b361mf51.jpg',
  'https://i.redd.it/cmys15evgn471.jpg',
  'https://i.redd.it/2xpuyx8xwct61.jpg',
  'https://i.redd.it/c8sn4xuxs6m61.jpg',
  'https://i.redd.it/cn36porejjy71.jpg',
  'https://i.redd.it/k9c1v9lttcq61.jpg',
  'https://i.redd.it/52dj2g4cweo31.jpg',
  'https://i.redd.it/wcuiqm7ygey31.jpg',
  'https://i.redd.it/7a4f4i6iani51.png',
  'https://i.redd.it/s57znz0agmo61.jpg',
  'https://i.redd.it/ub7wt7afqps61.jpg',
  'https://i.redd.it/oybmt6qyurc61.jpg',
  'https://i.redd.it/jndkyd30q6w91.jpg',
  'https://i.redd.it/700bhdfgys871.jpg',
  'https://i.redd.it/7ge9fwlis9o41.jpg',
  'https://i.redd.it/bdkho298xrf61.png',
  'https://i.redd.it/znfxly18wpm51.jpg',
  'https://i.redd.it/bperukwjowv91.jpg',
  'https://i.redd.it/ffuyatckl6061.jpg',
  'https://i.redd.it/8p8kjdhjcyt51.png',
  'https://i.redd.it/unbpc3bdbyl81.jpg',
  'https://i.redd.it/b93dyhd230k31.jpg',
  'https://i.imgur.com/VGEo050.jpg',
  'https://i.redd.it/q7rf093rxe091.png',
  'https://i.redd.it/p6qsimy7du961.png',
  'https://i.redd.it/th7kyfdmylp91.jpg']
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