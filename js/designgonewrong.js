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
  const memes = ['https://i.imgur.com/DFCbOrY.jpg',
  'https://i.imgur.com/1I9Q30A.jpg',
  'https://i.redd.it/fj6w4ypxfja31.jpg',
  'https://i.redd.it/j5ovndoy7ce41.jpg',
  'https://i.redd.it/hmyv9eqjegq21.jpg',
  'https://i.redd.it/eibh92lmdrr51.jpg',
  'https://i.redd.it/et6gz31tx4f51.jpg',
  'https://i.redd.it/nb9geu8pxac31.jpg',
  'https://i.redd.it/d76c194wtr551.jpg',
  'https://i.redd.it/y5gxwuz3ske51.png',
  'https://i.redd.it/owqagtdjjc021.png',
  'https://i.imgur.com/S5PkUQ6.jpg',
  'https://i.redd.it/zlcnpw0jef921.jpg',
  'https://i.redd.it/v0x7koqg8an61.jpg',
  'https://i.redd.it/vv61vse8kum41.jpg',
  'https://i.imgur.com/MYKpu1a.jpg',
  'https://i.redd.it/pjis3m09mew81.jpg',
  'https://i.redd.it/9pnj4mx95ko51.jpg',
  'https://i.redd.it/kfd3xvaeury31.jpg',
  'https://i.redd.it/y1voqyemkvj91.jpg',
  'https://i.redd.it/1nqd45fa98541.jpg',
  'https://i.redd.it/3y2y688ils241.jpg',
  'https://i.imgur.com/1mEE4Xr.jpg',
  'https://i.redd.it/7a2j0m7sgmw31.jpg',
  'https://i.redd.it/8jyxdp9zfhl31.jpg',
  'https://i.redd.it/sq01wdw31cm31.jpg',
  'https://i.redd.it/pjcnqlr4e2g61.jpg',
  'https://i.redd.it/meif569rwqw31.jpg',
  'https://i.imgur.com/nVJspVM.jpg',
  'https://i.redd.it/wqsum7jf03x31.jpg',
  'https://i.redd.it/0pp5k9054mc61.jpg',
  'https://i.redd.it/08jbm5ky4qc61.jpg',
  'https://i.redd.it/v3t87sb85y621.png',
  'https://i.redd.it/sy75heqfxyc41.png',
  'https://i.redd.it/bizdyk2gnh631.jpg',
  'https://i.redd.it/gsxe3pqj0xy71.jpg',
  'https://i.imgur.com/jn6K7sW.jpg',
  'https://i.redd.it/bx4ygcz9zql41.jpg',
  'https://i.redd.it/3mvhq8cp6hk91.jpg',
  'https://i.redd.it/9f0wuo73xoq21.jpg',
  'https://i.redd.it/xdgim5486ph21.jpg',
  'https://i.redd.it/ispfzzrkqms21.jpg',
  'https://i.redd.it/uaneddqndk981.jpg',
  'https://i.redd.it/sjafxywxrby31.png',
  'https://i.redd.it/lq6w5mchrzj81.jpg',
  'https://i.redd.it/s8qym4n6aq251.jpg',
  'https://i.redd.it/wi2xj1hibpd41.jpg',
  'https://i.redd.it/46gscehicix91.jpg',
  'https://i.redd.it/q46na6s1jgj41.jpg',
  'https://i.redd.it/kdqidwjhzcc41.jpg',
  'https://i.redd.it/pokca8dy8m721.jpg',
  'https://i.redd.it/lowgpw4p1tq91.jpg',
  'https://i.redd.it/s8tsh0rv52z01.jpg',
  'https://i.redd.it/jghkj9mwwgq41.png',
  'https://i.redd.it/aht9hi1kbnm11.png',
  'https://i.redd.it/3ldcymgtk7721.png',
  'https://i.redd.it/q717gre29de21.jpg',
  'https://i.redd.it/fw9x51g7a6s51.png',
  'https://i.redd.it/km4a4wzjumh41.jpg',
  'https://i.redd.it/f977i5d8r0641.png',
  'https://i.redd.it/iup4z50tfdj91.jpg',
  'https://i.redd.it/u2bn3590ki531.jpg',
  'https://i.redd.it/l2jm2w8pxo051.jpg',
  'https://i.redd.it/vzkijkbf6tb31.jpg',
  'https://i.redd.it/id3j4ovabdl31.jpg',
  'https://i.redd.it/cmzte6ppc1l41.jpg',
  'https://i.redd.it/x1x8dry8ngj31.jpg',
  'https://i.imgur.com/teT1oVj.jpg',
  'https://i.redd.it/9n4nbe3vej481.jpg',
  'https://i.redd.it/b20grm3jda641.jpg',
  'https://i.redd.it/qz490rlotg061.png',
  'https://i.redd.it/yv097x75amd51.jpg',
  'https://i.redd.it/4azzzhme4m461.png',
  'https://i.redd.it/5kb09njdo1q91.jpg',
  'https://i.imgur.com/Cz9yjSy.jpg',
  'https://i.redd.it/64lc0k1apbm11.png',
  'https://i.redd.it/gn7z15b5pq671.png',
  'https://i.redd.it/yudxaudofxl31.jpg',
  'https://i.redd.it/vkey71wey0a71.jpg',
  'https://i.redd.it/vdtlrf3udwp61.jpg',
  'https://i.redd.it/s99rupaabuz41.jpg',
  'https://i.redd.it/hr1js09f0ai41.png',
  'https://i.redd.it/yckscjdzsjm41.jpg',
  'https://i.redd.it/wlmoj09a4c451.jpg',
  'https://i.redd.it/n7kfa3mdd3251.jpg',
  'https://gfycat.com/kaleidoscopicfastasianpiedstarling',
  'https://i.redd.it/wyggpe3t14e31.jpg',
  'https://i.redd.it/kv4y1j3gjut21.jpg',
  'https://i.redd.it/n3ts11juinl21.jpg',
  'https://i.redd.it/y5l42jne3s841.jpg',
  'https://i.redd.it/ibe8tdkp2ym81.jpg',
  'https://i.imgur.com/clf1LHy.jpg',
  'https://i.redd.it/322v5bobobn21.jpg',
  'https://i.redd.it/2dcj9l5959k11.jpg',
  'https://i.imgur.com/4ejYjJQ.jpg',
  'https://i.redd.it/xx7ctkimcte21.jpg',
  'https://i.redd.it/j64953vaa4c31.jpg',
  'https://i.redd.it/izjiedo2dc351.jpg',
  'https://i.redd.it/e5ad9csrubx31.jpg',
  'https://i.redd.it/mmgw0v5t5aa41.jpg',
  'https://i.redd.it/dasxv0s258b61.jpg',
  'https://i.redd.it/rcgd1t315da91.jpg',
  'https://i.imgur.com/tBhtPud.jpg',
  'https://i.redd.it/f5cbw1ug3ht61.jpg',
  'https://i.redd.it/c4dgnd3wq3s41.jpg',
  'https://i.redd.it/2gcu5mzmcae51.png',
  'https://i.redd.it/rnzzj0k30gi31.jpg',
  'https://i.redd.it/86vh4ci5f3l41.jpg',
  'https://i.redd.it/9i8rz5dz4ks81.png',
  'https://i.redd.it/b6bukk6uu1d21.jpg',
  'https://i.imgur.com/w1Nme0v.jpg',
  'https://i.imgur.com/urLN7DO.jpg',
  'https://i.redd.it/68f9jerqr1791.jpg',
  'https://i.redd.it/qe8omolrt4051.jpg',
  'https://i.redd.it/i4jsam68dtg21.jpg',
  'https://i.redd.it/8z9vxkxnxlj61.png',
  'https://i.redd.it/m94yu2bfjdq51.jpg',
  'https://i.redd.it/mb8no3ikp4f31.jpg',
  'https://i.redd.it/hi2d8sdw9ry21.png',
  'https://i.redd.it/mkn2ohdd0w471.png',
  'https://i.redd.it/o55d0gz75gm71.jpg',
  'https://i.redd.it/9rx5tufynez21.jpg',
  'https://i.redd.it/skezw40bbhg01.png',
  'https://i.redd.it/jcybf6op1d271.jpg',
  'https://i.redd.it/zko1rrp75u181.jpg',
  'https://i.imgur.com/MPBECxv.jpg',
  'https://i.redd.it/x5yexo525bt51.jpg',
  'https://i.redd.it/gt0c13dk2s041.jpg',
  'https://i.redd.it/uyr9m17vwmp31.png',
  'https://i.redd.it/metb5p5pfgn01.png',
  'https://i.redd.it/yyljic7fmjb31.jpg',
  'https://i.redd.it/mj37cbkvnkh31.jpg',
  'https://i.redd.it/617qv9fnr9v21.jpg',
  'https://i.redd.it/yl3gcvz5ado91.jpg',
  'https://i.redd.it/0p6kzxzndwx31.png',
  'https://i.redd.it/y4ncjfdf6qx31.jpg',
  'https://i.redd.it/7qw31526mo221.jpg',
  'https://i.redd.it/t15kmts7t9v81.jpg',
  'https://i.imgur.com/DdTXt7H.png',
  'https://i.redd.it/iraqlgz6s1d31.jpg',
  'https://i.redd.it/9ims2h1si9i11.jpg',
  'https://i.imgur.com/XLsOX2J.jpg',
  'https://i.redd.it/k82xiiij28e61.jpg',
  'https://i.redd.it/feq55v9xfta21.png',
  'https://i.redd.it/8ffl7o0b42r31.jpg',
  'https://i.redd.it/9aj5rpps1i431.jpg',
  'https://i.imgur.com/f2iBIzc.jpg',
  'https://i.redd.it/116qb7fluh871.png',
  'https://i.redd.it/p41z9w6lgi331.jpg',
  'https://i.redd.it/h2m06ljs0jz31.jpg',
  'https://i.redd.it/q7or1ch1g5351.jpg',
  'https://i.redd.it/d2vlj7m6nv211.jpg',
  'https://i.redd.it/hxz7eh8549771.png',
  'https://i.redd.it/zfyw5dn3o2u11.jpg',
  'https://i.redd.it/84hdcfamgw271.jpg',
  'https://i.redd.it/q02egh5ixnz31.jpg',
  'https://i.redd.it/ujzfboauzlk11.jpg',
  'https://i.imgur.com/r1UW5sC.jpg',
  'https://i.redd.it/jsv6ssulotv41.jpg',
  'https://i.redd.it/mhcqume3suv51.jpg',
  'https://i.redd.it/nufdfm23tq981.jpg',
  'https://i.redd.it/goj5f9knzi031.jpg',
  'https://i.redd.it/0l9m5puk7ie31.jpg',
  'https://i.redd.it/8tm6bgqjxek31.png',
  'https://i.redd.it/ge1qqd2t9u821.jpg',
  'https://i.redd.it/5tk3bwxd8rq61.jpg',
  'https://i.redd.it/130ovar2aqe11.png',
  'https://i.redd.it/qnin1q0urwq31.jpg',
  'https://i.redd.it/slhpza4js8a31.png',
  'https://i.redd.it/ctmy19dr6o801.jpg',
  'https://i.redd.it/3h59xvd1sp991.png',
  'https://i.redd.it/omrgs4eb03h61.jpg',
  'https://i.redd.it/dsp5qpl5c1611.png',
  'https://i.redd.it/478ji3ixpdx21.jpg',
  'https://i.redd.it/ee5bl2znwt361.png',
  'https://i.redd.it/has9jn0qzy131.jpg',
  'https://i.redd.it/wur7iifz6u431.jpg',
  'https://i.redd.it/eoagr6v60az21.png',
  'https://i.redd.it/90duf8hc26l81.png',
  'https://i.redd.it/g1o5jeeok8681.jpg',
  'https://i.redd.it/0v909pgid7171.jpg',
  'https://i.redd.it/ez94tsyl92341.jpg',
  'https://i.redd.it/heqi2qcnzr641.png',
  'https://i.redd.it/owb4zr9lz1931.jpg',
  'https://i.redd.it/nov5qa48s3n21.jpg',
  'https://i.redd.it/4senww08kpr61.jpg',
  'https://i.redd.it/l6zljwyotxu11.jpg',
  'https://i.redd.it/wwe9l2l2sdy11.jpg',
  'https://i.imgur.com/e1quXHI.jpg',
  'https://i.redd.it/m6ai2srggin21.jpg',
  'https://i.redd.it/n3brpa9ndf641.jpg',
  'https://i.redd.it/xc0cp62kg4f21.jpg',
  'https://i.redd.it/vioivx8sjld31.png',
  'https://i.redd.it/vdhpfez65pu21.jpg',
  'https://i.redd.it/vxrzlkuwsuu01.jpg',
  'https://i.redd.it/swye04xwy5j31.jpg',
  'https://i.redd.it/354nomt27rh11.jpg',
  'https://i.redd.it/w0325c7xtz631.jpg',
  'https://i.redd.it/sq3f9kfaf0l21.jpg',
  'https://i.redd.it/qz09hdztton21.jpg',
  'https://i.redd.it/rjwpgricujk31.png',
  'https://i.redd.it/lnc6qkj5fnk31.png',
  'https://i.redd.it/xm8ycmizgv391.png',
  'https://i.redd.it/vps2i903dmx21.png',
  'https://i.redd.it/hykapdtru6111.jpg',
  'https://i.redd.it/pnetmgk8yr421.jpg',
  'https://i.redd.it/esne07qgl4h51.jpg',
  'https://i.redd.it/a1hj6mcrjrm31.png',
  'https://i.redd.it/ti3pab1dl8c41.jpg',
  'https://i.redd.it/khnis8qeitf31.png',
  'https://i.redd.it/9wjbst9dwvr51.jpg',
  'https://i.redd.it/d7k7vah0ddv31.png',
  'https://i.redd.it/qb37r45dgiu21.jpg',
  'https://i.redd.it/cis2f7u3g64a1.jpg',
  'https://i.redd.it/hqofhr4tfeo41.jpg',
  'https://i.redd.it/sftybn4gxxa81.jpg',
  'https://i.redd.it/qyf1vszsiv341.jpg',
  'https://i.redd.it/obma8i8tg1s51.jpg',
  'https://i.redd.it/eu1m01m7woo21.jpg',
  'https://i.redd.it/o0wiy4ty0mu91.jpg',
  'https://i.redd.it/pdfx7sylmli51.jpg',
  'https://i.redd.it/sxmai14sbnf21.jpg',
  'https://i.redd.it/e37c2kxm7v831.jpg',
  'https://i.redd.it/it43a4pxdr471.jpg',
  'https://i.redd.it/j1hr98ncvuu51.jpg',
  'https://i.redd.it/wzopv2ylidp21.png',
  'https://i.imgur.com/ftROSwR.png',
  'https://i.redd.it/vw0db0h5ka751.jpg',
  'https://i.redd.it/u968k2su5jf41.jpg',
  'https://i.redd.it/gmy1158gorx21.jpg',
  'https://i.redd.it/xhcjhq9bqv5a1.jpg',
  'https://i.imgur.com/AHSaJ6I.jpg',
  'https://i.redd.it/o14cw2di94w51.jpg',
  'https://i.redd.it/q7eeoxmbc2g31.png',
  'https://i.redd.it/wvq3mg4yfh521.jpg',
  'https://i.redd.it/avb9qokywxm31.png',
  'https://i.redd.it/1m8htotolok21.jpg',
  'https://i.redd.it/9ml3o3v6xgd31.jpg',
  'https://i.redd.it/ckoln1r8d4l21.jpg',
  'https://i.redd.it/amg9sv5xcwk21.jpg',
  'https://i.redd.it/wduu5cev6q761.jpg',
  'https://i.redd.it/b14dy22110t41.jpg',
  'https://i.redd.it/bp0alpu1j7921.jpg',
  'https://i.redd.it/34cr0n4a3ff41.jpg',
  'https://i.redd.it/iunp1homhbb71.jpg',
  'https://i.redd.it/xi2gs0j5rtq11.jpg',
  'https://i.redd.it/7wq2hteqge451.jpg',
  'https://i.redd.it/nvmczx1qtqi31.jpg',
  'https://i.imgur.com/PB0Lc2n.jpg',
  'https://i.redd.it/whhfp1uez6n41.jpg',
  'https://i.redd.it/3qsh8hrshqs21.jpg',
  'https://i.redd.it/yc45yktuzw071.jpg',
  'https://i.redd.it/j665q88o4ss41.png',
  'https://i.redd.it/dtf60he7wy061.jpg',
  'https://i.redd.it/0rmavddnlbw31.jpg',
  'https://i.redd.it/z39g2dsiy9801.png',
  'https://i.redd.it/y2y04n5gnfs01.jpg',
  'https://i.redd.it/ubnn4zm7v2311.jpg',
  'https://i.imgur.com/zsNiXA4.jpg',
  'https://i.redd.it/tyn6q8mgldg61.jpg',
  'https://i.redd.it/v83mr39ax6p21.jpg',
  'https://i.redd.it/y8kwkzehu0e61.jpg',
  'https://i.redd.it/cgwbtuiduiy31.jpg',
  'https://i.redd.it/cyapo7kd7to51.png',
  'https://i.redd.it/tyqxsk9v10k31.jpg',
  'https://i.redd.it/wgx4q91g19531.jpg',
  'https://i.redd.it/mc3zyeohwwx11.jpg',
  'https://i.redd.it/92o0rnfycyi41.jpg',
  'https://i.redd.it/ey0rhd5bq1c51.jpg',
  'https://i.redd.it/kui3mwzywkd21.png',
  'https://i.redd.it/psjk36e99bh61.jpg',
  'https://i.imgur.com/Mv0bKvN.png',
  'https://i.redd.it/in7mtufhnhq21.jpg',
  'https://i.redd.it/lqagxaj9lq731.jpg',
  'https://i.redd.it/m5zlhst5nzs31.jpg',
  'https://i.redd.it/ybgfcnvowbg41.png',
  'https://i.redd.it/hkg3qrcpe1031.jpg',
  'https://i.imgur.com/iuXX0vs.jpg',
  'https://i.redd.it/r8ngn4ttfto41.png',
  'https://i.redd.it/malzx3h3pxy31.jpg',
  'https://i.redd.it/8il21lkwnar51.jpg',
  'https://i.redd.it/taqz8dpuqfs41.jpg',
  'https://i.redd.it/162crnozpim01.png',
  'https://i.redd.it/4r1rlbafytw61.jpg',
  'https://i.imgur.com/jIOHZTd.jpg',
  'https://i.redd.it/ysykevznw4w11.jpg',
  'https://i.redd.it/few3m8t0tkv51.png',
  'https://i.imgur.com/RzegMMS.jpg',
  'https://i.redd.it/f2anedh4sni11.jpg',
  'https://i.redd.it/hbiirn0tikg31.jpg',
  'https://i.redd.it/g8h3tuvvsxu21.jpg',
  'https://i.imgur.com/1VSFTl1.jpg',
  'https://i.redd.it/6dl1vuhtte211.jpg',
  'https://i.redd.it/5gkqppa5w2m41.jpg',
  'https://i.redd.it/ldcbtcws6wk51.jpg',
  'https://i.redd.it/p7pid5hn5da41.jpg',
  'https://i.redd.it/kjl4x6yvxoyz.jpg',
  'https://i.redd.it/u9222evp5ja11.jpg',
  'https://i.redd.it/zr2jkvlh4wr81.jpg',
  'https://i.redd.it/0ryhs74ze7d71.jpg',
  'https://i.redd.it/f2c81g579qs01.jpg',
  'https://i.redd.it/mtrdc0ag8l861.jpg',
  'https://i.redd.it/p98lvr5plv241.png',
  'https://i.redd.it/18gvab85g2p21.jpg',
  'https://i.imgur.com/tb9GWn1.png',
  'https://i.redd.it/ewchlh9gt7t31.jpg',
  'https://imgur.com/AU7bHDe.jpg',
  'https://i.redd.it/ntpnsm4h02e41.jpg',
  'https://i.redd.it/netwnoqh70h21.jpg',
  'https://i.redd.it/98z98fttrjb11.jpg',
  'https://i.redd.it/b5tywh8juzu61.jpg',
  'https://i.redd.it/8hthj1w8rjk41.jpg',
  'https://i.redd.it/sygb2dbzu1u51.png',
  'https://i.imgur.com/ak31qmm.jpg',
  'https://i.redd.it/6f7cp8r7o6821.png',
  'https://i.redd.it/s4suww434qf21.jpg',
  'https://i.redd.it/p8mhaed980a41.png',
  'https://i.redd.it/scy3z4jyxp161.jpg',
  'https://i.redd.it/tjh3kjvv6m731.jpg',
  'https://i.redd.it/7wn3njwcbgn21.png',
  'https://i.redd.it/y1dauy07rd111.jpg',
  'https://i.redd.it/u5hrlre69w141.png',
  'https://i.imgur.com/jsfOfss.jpg',
  'https://i.redd.it/p9nf2jvqn9b21.jpg',
  'https://i.redd.it/l9t03wu487l01.png',
  'https://i.redd.it/vsy64g9uy9x21.jpg',
  'https://i.redd.it/7lt3td07tji01.jpg',
  'https://i.redd.it/o3i56gxpzna31.jpg',
  'https://i.redd.it/rproxhd6i5531.png',
  'https://i.imgur.com/asqAg6B.jpg',
  'https://i.redd.it/9efoiihljjf31.jpg',
  'https://i.redd.it/jqhbot0s5ot21.jpg',
  'https://i.redd.it/cqsof2e1vmo31.jpg',
  'https://i.redd.it/iw5khnqehjn51.jpg',
  'https://i.redd.it/7c74sqv9vdd31.jpg',
  'https://i.redd.it/bn0oe715vwd41.jpg',
  'https://i.redd.it/mnm5xjdcvcn91.jpg',
  'https://i.redd.it/uc6tcfyf1nh81.jpg',
  'https://i.redd.it/c0zk0l8q2u931.jpg',
  'https://i.redd.it/ybaw82253at61.png',
  'https://i.redd.it/4b31zuqwtll61.png',
  'https://i.redd.it/6o5zrccxl1971.jpg',
  'https://i.redd.it/zxzmvwkxc0c21.jpg',
  'https://i.redd.it/z4te46rcpxj21.jpg',
  'https://i.redd.it/fnrhf3m1np331.jpg',
  'https://i.redd.it/pwgm6pa3ixw11.jpg',
  'https://i.redd.it/eiqhdy9wv2w71.jpg',
  'https://i.redd.it/hes4uiasub531.jpg',
  'https://i.redd.it/sn27h66ad7o91.jpg',
  'https://i.redd.it/uo71pbgqzr711.jpg',
  'https://i.redd.it/xnhylqb2mf531.jpg',
  'https://i.redd.it/5dmx5yl91gk41.jpg',
  'https://i.redd.it/fwtre3cg6x351.jpg',
  'https://i.redd.it/c3b6oruyjbz41.png',
  'https://i.redd.it/uyyvbijxyud21.jpg',
  'https://i.redd.it/hh0d613jzb831.jpg',
  'https://i.redd.it/8xm0ar5zmwh21.jpg',
  'https://i.redd.it/h0a8cgepotw51.jpg',
  'https://i.redd.it/dkswrr3h92481.png',
  'https://i.redd.it/co05ntx5fes31.jpg',
  'https://i.imgur.com/6LGixtH.jpg',
  'https://i.redd.it/vbdcwxjs58e21.jpg',
  'https://i.redd.it/fye6ioki2gm21.png',
  'https://i.imgur.com/JbNa766.jpg',
  'https://i.redd.it/jvfx10c271v21.png',
  'https://i.redd.it/dp94hightah31.jpg',
  'https://i.redd.it/cui1pqrvh6v41.jpg',
  'https://i.redd.it/koqm1dz7ogd61.jpg',
  'https://i.redd.it/ab9aarp1i5u31.jpg',
  'https://i.redd.it/rc80h8mynfg21.jpg',
  'https://i.imgur.com/DOWz9ed.png',
  'https://i.redd.it/fdewpjw829b51.jpg',
  'https://i.redd.it/vjlpcixmfkr51.jpg',
  'https://i.redd.it/qluxydkl0jh41.png',
  'https://i.redd.it/6xa9xlibhtg71.jpg',
  'https://i.redd.it/o3rz9i6gcck21.jpg',
  'https://i.redd.it/pfa7wmmwsnu31.jpg',
  'https://i.redd.it/akt3phvnrm671.jpg',
  'https://i.redd.it/tfwtv4l8bbb31.jpg',
  'https://i.redd.it/oihmtfyytlw21.jpg',
  'https://i.redd.it/z3can0uha1561.jpg',
  'https://i.redd.it/pxxooo5dbvn51.jpg',
  'https://i.redd.it/5zre7px7b0l61.jpg',
  'https://i.imgur.com/hQEktdp.jpg',
  'https://i.redd.it/4zul7rh1w0m31.jpg',
  'https://i.redd.it/w3lqbll2gfh81.jpg',
  'https://i.redd.it/oy42kuvfblk71.jpg',
  'https://i.redd.it/glqxuoa4icp11.jpg',
  'https://i.redd.it/urlooz3wvvf51.jpg',
  'https://i.redd.it/dfwd01yutgo31.jpg',
  'https://i.redd.it/d6smq4pbfgg31.jpg',
  'https://i.redd.it/1a5nz9oow6p31.jpg',
  'https://i.redd.it/q6l5i9ki2mz61.png',
  'https://i.redd.it/09c8x77h04x51.jpg',
  'https://i.redd.it/cjhzchqegey41.jpg',
  'https://i.redd.it/08bybdh2raz71.jpg',
  'https://i.redd.it/jssihfs3eyf21.jpg',
  'https://i.redd.it/59qcwui5l8081.jpg',
  'https://i.redd.it/e41eikxbhqi91.png',
  'https://i.redd.it/hzs56d7lfk411.jpg',
  'https://i.redd.it/pn3bmcbq37h11.jpg',
  'https://i.redd.it/425tpepzcjb21.png',
  'https://i.redd.it/hf5ygtlk7j701.jpg',
  'https://i.redd.it/fduqx8c571w61.png',
  'https://i.redd.it/jeakrv9ygug11.png',
  'https://i.redd.it/ttfqlwfh58391.jpg',
  'https://i.imgur.com/699ZCgv.jpg',
  'https://i.redd.it/81unpoietar71.jpg',
  'https://i.redd.it/0qh5ay1fgf291.jpg',
  'https://i.imgur.com/fUoOptC.jpg',
  'https://i.redd.it/rvrvp3m71ry41.jpg',
  'https://i.redd.it/qw1k65erk8s41.jpg',
  'https://i.imgur.com/ritFQO1.jpg',
  'https://i.imgur.com/TiFNsgN.png',
  'https://i.redd.it/orabvc48wn141.jpg',
  'https://i.redd.it/h5znum5ov33a1.jpg',
  'https://i.redd.it/k7wmtwqs7xx01.jpg',
  'https://i.redd.it/zadkgfp7g5d41.jpg',
  'https://i.redd.it/n00e4pnxhnr51.jpg',
  'https://i.redd.it/knkqy251up931.jpg',
  'https://i.redd.it/eme17izzd1o31.jpg',
  'https://i.redd.it/8afhtb1d7r351.jpg',
  'https://i.redd.it/jysto34b3jp31.jpg',
  'https://i.redd.it/ob0iwovvz0d51.jpg',
  'https://i.redd.it/60eokpcleob11.jpg',
  'https://i.redd.it/runnraq5lur11.jpg',
  'https://i.redd.it/0nysxd4891431.jpg',
  'https://i.redd.it/cwtccszefvh31.jpg',
  'https://i.redd.it/e13kn9y3qpv21.jpg',
  'https://i.redd.it/s0m1r07p2tb21.png',
  'https://i.redd.it/p5gmww7mqj351.jpg',
  'https://i.redd.it/ts5g30y60nn31.jpg']
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