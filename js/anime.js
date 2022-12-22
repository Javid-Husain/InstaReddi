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
  const memes = ['https://i.redd.it/r63rimz07kl81.jpg',
  'https://i.redd.it/atusei0zgn1a1.jpg',
  'https://i.redd.it/qqlgi5vomnu91.jpg',
  'https://i.redd.it/vfnzz66nayk81.jpg',
  'https://i.redd.it/g82ilvbr2lg91.jpg',
  'https://i.redd.it/6pye6pfdw6a91.png',
  'https://i.redd.it/71tmzqijsqr91.jpg',
  'https://i.redd.it/sk7jaana3pu71.jpg',
  'https://i.redd.it/7jw8gcto3dt91.jpg',
  'https://i.redd.it/h7tgybuqxrl91.jpg',
  'https://i.redd.it/4dr0za562ox61.jpg',
  'https://i.redd.it/kr0m735klvg71.jpg',
  'https://i.redd.it/fexdm66dnqv91.jpg',
  'https://i.redd.it/gct1dcxnkrc91.jpg',
  'https://i.redd.it/mr2jlz6ka6o61.jpg',
  'https://i.redd.it/o5wt3b6qkhf71.jpg',
  'https://i.redd.it/ebbnu5posw781.png',
  'https://i.redd.it/20ncjov368c91.jpg',
  'https://i.redd.it/x63p9ontoaw91.jpg',
  'https://i.redd.it/gija00xzale71.jpg',
  'https://i.redd.it/nsqoawiklqe81.jpg',
  'https://i.redd.it/btt1bptf3xc91.jpg',
  'https://i.redd.it/ndi8myk5r4971.jpg',
  'https://i.redd.it/p3g996xwjvu91.jpg',
  'https://i.redd.it/nh6u2nt74lo81.jpg',
  'https://i.redd.it/ig5fz0o0dhu61.png',
  'https://i.redd.it/v2017o43dde91.jpg',
  'https://i.redd.it/frt0e2gfnph81.jpg',
  'https://i.redd.it/uo2deglptll61.jpg',
  'https://i.redd.it/no3qocy4trz71.jpg',
  'https://i.redd.it/t54iyzjssso71.jpg',
  'https://i.redd.it/egut3tcjkby71.jpg',
  'https://i.redd.it/84opt447z4x91.jpg',
  'https://i.redd.it/ffcjrbtag5s91.jpg',
  'https://i.redd.it/3sv88hw8ee1a1.png',
  'https://i.redd.it/5ypi2gjix7g51.jpg',
  'https://i.redd.it/04wcbqfg9to91.jpg',
  'https://i.redd.it/a8yvnmxb43z61.jpg',
  'https://i.redd.it/o3ii0cjn37j91.jpg',
  'https://i.redd.it/dcsn7230eip91.jpg',
  'https://i.redd.it/jgjolq0ufns71.jpg',
  'https://i.redd.it/8mva2tkngkc71.jpg',
  'https://i.redd.it/p0w8fz4illz91.jpg',
  'https://i.redd.it/jr3pn5g99bt61.jpg',
  'https://i.redd.it/fea3ouopf6u91.jpg',
  'https://i.redd.it/7irkz5t5hdu91.jpg',
  'https://i.redd.it/psb33tmnao681.jpg',
  'https://i.redd.it/wcf4pb5mcia71.jpg',
  'https://i.redd.it/6w0hklyqok881.jpg',
  'https://i.redd.it/hyjhgqvvgvl71.png',
  'https://i.redd.it/6tqxyrcji9071.jpg',
  'https://i.redd.it/fudmppta48w61.png',
  'https://i.redd.it/25b2xu8204w61.jpg',
  'https://i.redd.it/xepphru84tm71.jpg',
  'https://i.redd.it/ibcd26w0x23a1.jpg',
  'https://i.redd.it/mzotcxmebnm81.jpg',
  'https://i.redd.it/3wpxgxbj8bm81.jpg',
  'https://i.redd.it/1s7wq3uovor61.jpg',
  'https://i.redd.it/wgfipizth3u91.jpg',
  'https://i.redd.it/k5p794mzg2i71.jpg',
  'https://i.redd.it/qdbocdimhjt91.jpg',
  'https://i.redd.it/94yx7wqdpu0a1.png',
  'https://i.redd.it/5s444kfyewu61.png',
  'https://i.redd.it/zucgzc7alk3a1.jpg',
  'https://i.redd.it/09w99minax581.jpg',
  'https://i.redd.it/c7rxm42e1rf81.jpg',
  'https://i.redd.it/zgfif4klyn471.jpg',
  'https://i.redd.it/kf2r0z1mcvy61.jpg',
  'https://i.redd.it/01bmzx971ve61.jpg',
  'https://i.redd.it/u6f71rzhnfv81.jpg',
  'https://i.redd.it/9dop63qioe5a1.png',
  'https://i.redd.it/ko3r4jld9d691.png',
  'https://i.redd.it/2kbvc4fb97r61.jpg',
  'https://i.redd.it/aq69bh9lofh91.jpg',
  'https://i.redd.it/zf7wj70hhx891.jpg',
  'https://i.redd.it/eg0mi20j7cc91.jpg',
  'https://i.redd.it/oo0807ihwk171.jpg',
  'https://i.redd.it/fx0hno2esgc71.jpg',
  'https://i.redd.it/5eben8ww565a1.jpg',
  'https://i.redd.it/3q5wtpy7km4a1.jpg',
  'https://i.redd.it/s88sjv3dwae71.jpg',
  'https://i.redd.it/8758gdl6egq51.png',
  'https://i.redd.it/13r4kvtnu0m91.jpg',
  'https://i.redd.it/8m1acxg0fn5a1.jpg',
  'https://i.imgur.com/GN5Z3BN.jpg',
  'https://i.redd.it/0xwb77i2ge591.jpg',
  'https://i.redd.it/z69137tz5qn81.jpg',
  'https://i.redd.it/pojq45dvkca71.jpg',
  'https://i.redd.it/hro1r0gygtz61.jpg',
  'https://i.redd.it/31r3uuu2g9y61.jpg',
  'https://i.redd.it/v93b9tmg1o4a1.jpg',
  'https://i.redd.it/cdr34y5ypy771.jpg',
  'https://i.redd.it/pomwx6zpvl571.jpg',
  'https://i.redd.it/18p7vau3wuf71.jpg',
  'https://i.redd.it/845iy3zdh7961.jpg',
  'https://i.redd.it/77sy431awc671.jpg',
  'https://i.redd.it/sglbo0zny4s61.jpg',
  'https://i.redd.it/w7tvnm5zazf81.jpg',
  'https://i.redd.it/y40tbloq9tc81.jpg',
  'https://i.redd.it/rkw30bputim61.jpg',
  'https://i.redd.it/xzgftdvgkbr61.png',
  'https://i.redd.it/4kdvtv86vy971.jpg',
  'https://i.redd.it/vhiz6tlmcko61.jpg',
  'https://i.redd.it/yza0tmri3ck81.jpg',
  'https://i.redd.it/cnhfs5hrsz1a1.png',
  'https://i.redd.it/mqjv262ggmv61.jpg',
  'https://i.redd.it/kcnby88t92k51.jpg',
  'https://i.redd.it/r04m2m07vht51.jpg',
  'https://i.redd.it/bjdxyx05ln2a1.png',
  'https://i.redd.it/h5socvw7hkx81.png',
  'https://i.redd.it/1b51n3k1a7a71.jpg',
  'https://i.redd.it/utp223e77dx81.jpg',
  'https://i.redd.it/8k4t22ww0ah61.jpg',
  'https://i.redd.it/le0wpzgsd2h71.jpg',
  'https://i.redd.it/es5lkseag7r51.jpg',
  'https://i.redd.it/bxubl1as47f91.jpg',
  'https://i.redd.it/z07jtw6uv5y71.jpg',
  'https://i.redd.it/egcymxwxbfz91.png',
  'https://i.redd.it/c8qojabstwv61.jpg',
  'https://i.redd.it/mc16fmmwx0p71.jpg',
  'https://i.imgur.com/sMZKZu2.jpg',
  'https://i.redd.it/9x79lmg8ndx51.jpg',
  'https://i.redd.it/kxau438kgo071.jpg',
  'https://i.redd.it/253utqfm6r6a1.jpg',
  'https://i.redd.it/s9q2ih5uas971.jpg',
  'https://i.redd.it/qrio0pcdkpj81.jpg',
  'https://i.redd.it/nq985sgavbv61.jpg',
  'https://i.redd.it/0oj5uyzv8g5a1.jpg',
  'https://i.redd.it/jfabdksdweo71.jpg',
  'https://i.redd.it/2fzhipanxms61.jpg',
  'https://i.redd.it/rok6xhcg1tv61.jpg',
  'https://i.redd.it/352g3leovax61.png',
  'https://i.redd.it/t9bmiqkroly71.jpg',
  'https://i.redd.it/o50xrb74t1n91.jpg',
  'https://i.redd.it/vgdtk89oqkd71.jpg',
  'https://i.redd.it/vju8v1yhh91a1.png',
  'https://i.redd.it/4jn66p7werf71.jpg',
  'https://i.redd.it/0wsmq2r9yxd71.jpg',
  'https://i.redd.it/fhmsjiw6vgn91.png',
  'https://i.redd.it/640nbcgdebf81.jpg',
  'https://i.redd.it/zg5610dbmg571.png',
  'https://i.redd.it/q5uiiyil56w91.jpg',
  'https://i.redd.it/1xcnhxzyvjf71.jpg',
  'https://i.redd.it/911nncahr5871.jpg',
  'https://i.redd.it/7ruotvoqga591.jpg',
  'https://i.redd.it/yaco9wvthvl91.png',
  'https://i.redd.it/50jcdf25vj971.jpg',
  'https://i.redd.it/kl00dts14gg71.jpg',
  'https://i.redd.it/qn7t4ee8lep91.jpg',
  'https://i.redd.it/wm9ncehk3ao51.jpg',
  'https://i.redd.it/l9sbbsznppn61.jpg',
  'https://i.redd.it/1i2es06707y71.jpg',
  'https://i.redd.it/l4k740xhkm0a1.jpg',
  'https://i.redd.it/e3o4xsruri391.jpg',
  'https://i.redd.it/cnhnaqy5dnj61.jpg',
  'https://i.redd.it/lh30g60duoz61.jpg',
  'https://i.redd.it/y11alfah8u071.jpg',
  'https://i.redd.it/ae3bqy4d5bu61.jpg',
  'https://i.redd.it/o8uyrbjpzqp61.jpg',
  'https://i.redd.it/morur0180n391.jpg',
  'https://i.imgur.com/QyX4FUu.jpg',
  'https://i.redd.it/drfbi35ojkb71.jpg',
  'https://i.redd.it/dvobu7yr3kg81.jpg',
  'https://i.redd.it/eqgwxcn2bg171.jpg',
  'https://i.redd.it/13mmcn7yt7171.jpg',
  'https://i.redd.it/i9m8hcr1x3r61.jpg',
  'https://i.redd.it/g3i9k065uws61.jpg',
  'https://i.redd.it/2jjt335srrs61.jpg',
  'https://i.redd.it/tmijczuz3hd71.jpg',
  'https://i.redd.it/o9nchj77cou81.jpg',
  'https://i.redd.it/90wtjw5wt7581.jpg',
  'https://i.redd.it/dntt2ci9pa5a1.jpg',
  'https://i.redd.it/pp6ohpobhf271.jpg',
  'https://i.redd.it/kw1s8qjnhel71.png',
  'https://i.redd.it/8n54md4zedw91.jpg',
  'https://i.redd.it/zfdqfpdwq0e81.jpg',
  'https://i.redd.it/n5bzuh5jcng81.jpg',
  'https://i.redd.it/jcrhc202bs481.jpg',
  'https://i.redd.it/r07iaiqr00371.jpg',
  'https://i.redd.it/dhygnbthfdf71.jpg',
  'https://i.redd.it/mkikc26ayqj51.jpg',
  'https://i.redd.it/hx9t0sb3pk671.jpg',
  'https://i.redd.it/dnjx1ximxwd81.jpg',
  'https://i.redd.it/ot72cxsjnx371.jpg',
  'https://i.redd.it/bfifuk39hgw61.jpg',
  'https://i.redd.it/k74bze9ybbp51.jpg',
  'https://i.redd.it/6ajfxn5oe0s71.jpg',
  'https://i.redd.it/mcte1tieq2s71.png',
  'https://i.redd.it/m3qdzpc74g3a1.jpg',
  'https://i.redd.it/hpd8p5092r781.png',
  'https://i.redd.it/0pnour9mx5751.jpg',
  'https://i.redd.it/xcjj91z7qoy61.jpg',
  'https://i.redd.it/ou414tddnfo61.jpg',
  'https://i.redd.it/emfyehm1ykd81.jpg',
  'https://i.redd.it/sepqxx0ex9371.jpg',
  'https://i.redd.it/zhuntb75exx51.jpg',
  'https://i.redd.it/fykw8owp53k81.png',
  'https://i.redd.it/f0h29wazlrm81.jpg',
  'https://i.redd.it/90sxuvvby8p91.jpg',
  'https://i.redd.it/0y0l230ww4481.jpg',
  'https://i.redd.it/8muzr8k9hb361.jpg',
  'https://i.redd.it/keiiognz7ni71.jpg',
  'https://i.redd.it/pd93pum9flf91.jpg',
  'https://i.redd.it/jvp0rtjb4ew81.png',
  'https://i.redd.it/kuq72e6f2da91.jpg',
  'https://i.redd.it/d1dq7toa7zg51.jpg',
  'https://i.redd.it/66yu9t8n8mc81.jpg',
  'https://i.redd.it/t2y6wqdwttq61.jpg',
  'https://i.redd.it/cvd3u7nq690a1.jpg',
  'https://i.redd.it/2qdpx12ppe181.jpg',
  'https://i.redd.it/j8niammwbis91.png',
  'https://i.redd.it/f9ym60y4ool51.jpg',
  'https://i.redd.it/kco4wttr9za71.jpg',
  'https://i.redd.it/ynxhjvtzejs61.jpg',
  'https://i.redd.it/bgb66b7ej16a1.png',
  'https://i.redd.it/rs22iao9rs171.png',
  'https://i.redd.it/1wh6kih4cq0a1.jpg',
  'https://i.redd.it/g0kqsmm7wnu91.jpg',
  'https://i.redd.it/nytv31uvznr51.jpg',
  'https://i.redd.it/43rv3msv6fq91.jpg',
  'https://i.redd.it/6ro08tnkgf481.jpg',
  'https://i.redd.it/cm9aviud46q71.png',
  'https://i.redd.it/mgs9snucymo71.jpg',
  'https://i.redd.it/gyl10smi40m61.png',
  'https://i.redd.it/i5j9iic6ga581.jpg',
  'https://i.redd.it/37ou3lh98iv41.jpg',
  'https://i.redd.it/apdlaw5sn5l81.jpg',
  'https://i.redd.it/f85ke3jpo1561.jpg',
  'https://i.redd.it/qs8z84wvx5b71.jpg',
  'https://i.redd.it/y4441qv1ucw71.jpg',
  'https://i.redd.it/bl0ab1t4pbx91.jpg',
  'https://i.redd.it/cj3kctu04lh71.jpg',
  'https://i.redd.it/89j7bngtqyw81.jpg',
  'https://i.redd.it/iajwv48byl571.jpg',
  'https://i.redd.it/9lqnbychf6n71.jpg',
  'https://i.redd.it/shjrt5not3q61.jpg',
  'https://i.redd.it/l47a21jar4u61.jpg',
  'https://i.redd.it/vnlng025wf671.png',
  'https://i.redd.it/znw47xsnwzw91.jpg',
  'https://i.redd.it/24qd8rmx87o91.jpg',
  'https://i.redd.it/xma0ttl1mhc91.jpg',
  'https://i.redd.it/2eovzwiyvvo51.jpg',
  'https://i.redd.it/qx15nkt3fth71.jpg',
  'https://i.redd.it/i3dnu4alc5p71.jpg',
  'https://i.redd.it/2014u4njzx081.jpg',
  'https://i.redd.it/2jn4187qlu571.jpg',
  'https://i.redd.it/x5lzkiojub161.jpg',
  'https://i.redd.it/g1kspdim9zn91.jpg',
  'https://i.redd.it/9tttbrp8fw681.jpg',
  'https://i.redd.it/bwlbhr1md4j91.jpg',
  'https://i.redd.it/fkdms8px53c91.png',
  'https://i.redd.it/1cjxontjg3071.png',
  'https://i.redd.it/ocx7vvdl81o71.jpg',
  'https://i.redd.it/tl4ui3e2zs581.jpg',
  'https://i.redd.it/0x7g2358w83a1.jpg',
  'https://i.redd.it/ibhyp6xfc3y61.jpg',
  'https://i.redd.it/2t4o5amq8hu91.jpg',
  'https://i.redd.it/s19ec89raus71.jpg',
  'https://i.redd.it/lyp5oe047tb71.jpg',
  'https://i.redd.it/jzvp4zy16xb71.jpg',
  'https://i.redd.it/z6blzxrfg2y71.jpg',
  'https://i.redd.it/xnkxxue4i6081.jpg',
  'https://i.redd.it/97vqwmbz9c761.jpg',
  'https://cdn.awwni.me/1z1uv.jpg',
  'https://i.redd.it/pjgipbhaetu51.jpg',
  'https://i.redd.it/a72vynr6eaq61.jpg',
  'https://i.redd.it/2bk13gl6b3e71.jpg',
  'https://i.redd.it/f4czzqw42ty71.jpg',
  'https://i.redd.it/gzmdddsa1yi51.jpg',
  'https://i.redd.it/vt1f24n6uxu71.jpg',
  'https://i.redd.it/n3tki9jj1x361.jpg',
  'https://i.redd.it/abewda1jq4181.jpg',
  'https://i.redd.it/3aw3awgat2c81.jpg',
  'https://i.redd.it/d0kdgmcsx31a1.jpg',
  'https://i.redd.it/k612rf9503t61.jpg',
  'https://i.redd.it/f71kvod166k51.jpg',
  'https://i.redd.it/63drl2kv28771.jpg',
  'https://i.redd.it/26ns2imj9xd71.jpg',
  'https://i.redd.it/3tkj21heu4n51.png',
  'https://i.redd.it/l089u7u9qyo71.jpg',
  'https://i.redd.it/rcq2wgc5yq3a1.jpg',
  'https://i.redd.it/vp0xq4viaok61.jpg',
  'https://i.redd.it/vlw5j9xa7nw61.jpg',
  'https://i.redd.it/m93qif1594m61.png',
  'https://i.redd.it/iu6n2ka13r571.png',
  'https://i.redd.it/x8xebxry66i91.jpg',
  'https://i.redd.it/vskrqaa2k5n61.jpg',
  'https://i.redd.it/kzz9bo6ai5v61.jpg',
  'https://i.redd.it/08y8314xf5g51.png',
  'https://i.redd.it/78nu8hrke9l61.jpg',
  'https://i.redd.it/cnnj0k0cjq1a1.jpg',
  'https://i.redd.it/5glgnosfx2371.jpg',
  'https://i.redd.it/eu2onf7p4ix41.jpg',
  'https://i.redd.it/dxjs9v8xarh61.jpg',
  'https://i.redd.it/jlkhsm1yrtw61.jpg',
  'https://i.redd.it/lkwxxom2hng71.jpg',
  'https://i.redd.it/kicygj2mk8h51.jpg',
  'https://i.redd.it/s3he6ujrygc61.jpg',
  'https://i.redd.it/5tz8sezklj271.jpg',
  'https://i.redd.it/u4t406tl9o371.jpg',
  'https://i.redd.it/th768b6vwla61.jpg',
  'https://i.redd.it/989pjhu66vk81.jpg',
  'https://i.redd.it/rmasw4daaze61.jpg',
  'https://i.redd.it/3bw4j7e7k56a1.jpg',
  'https://i.redd.it/z0y9s8uitt781.jpg',
  'https://i.redd.it/zvbg13dk7g661.jpg',
  'https://i.redd.it/ifk45q0uexk51.jpg',
  'https://i.redd.it/q1el1cqxjd571.jpg',
  'https://i.redd.it/m4orrjph0mf81.jpg',
  'https://i.redd.it/jcuzvapua7771.jpg',
  'https://i.redd.it/9n2pr1dq8ps61.jpg',
  'https://i.redd.it/w4hc9zl4o0881.png',
  'https://i.redd.it/6e64g6bgire71.png',
  'https://i.redd.it/dp5h41rrfwt91.jpg',
  'https://i.redd.it/6xmygf7yaae61.jpg',
  'https://i.redd.it/8kt74dnwd8o71.jpg',
  'https://i.redd.it/rui079ujirm91.jpg',
  'https://i.redd.it/vkqblqnj19c71.jpg',
  'https://i.redd.it/l598olx9lpv61.jpg',
  'https://i.redd.it/j8i6wmcd11n81.jpg',
  'https://i.redd.it/hjkzu6b4ggt61.jpg',
  'https://i.redd.it/q8giqxbxy7s71.jpg',
  'https://i.redd.it/r8e8sty1qfs71.jpg',
  'https://i.redd.it/4g54qzwn5kp61.jpg',
  'https://i.redd.it/zkne15ea5rd71.jpg',
  'https://i.redd.it/nctavudq062a1.jpg',
  'https://i.redd.it/2qdqdutbeak71.jpg',
  'https://i.redd.it/i7ve1ga8k9g71.jpg',
  'https://i.redd.it/f8u5yd4dael91.jpg',
  'https://i.redd.it/rqpzy9imi0z71.jpg',
  'https://i.redd.it/225lxqgqiaj51.jpg',
  'https://i.redd.it/c2pjb90ff1a91.jpg',
  'https://i.redd.it/9udptkno0wi71.jpg',
  'https://i.redd.it/27j20w7o4p271.jpg',
  'https://i.redd.it/kj9bt2eqc4171.jpg',
  'https://i.redd.it/1jecjj8p8pt61.jpg',
  'https://i.redd.it/amoae2iwgqi91.jpg',
  'https://i.redd.it/yqler3rqe6261.jpg',
  'https://i.redd.it/kgbz5fqgidl61.jpg',
  'https://i.redd.it/5n06nqruuw081.jpg',
  'https://i.redd.it/9oash7b21pt81.jpg',
  'https://i.redd.it/nknyl56lu0i61.jpg',
  'https://i.redd.it/lv47wcxpabz81.jpg',
  'https://i.redd.it/nn0btz8uv5r91.jpg',
  'https://i.redd.it/6swswrl6e6371.png',
  'https://i.redd.it/eus9fkngucy61.jpg',
  'https://i.redd.it/pzrnerfl60361.jpg',
  'https://i.redd.it/tx0g8z1u7cy91.png',
  'https://i.redd.it/46zgjg9otwh71.jpg',
  'https://i.redd.it/3npy3dd2gso61.jpg',
  'https://i.redd.it/jfxylclinlu71.png',
  'https://i.redd.it/vbcjlhr2krn51.jpg',
  'https://i.redd.it/davjrc5bwk491.jpg',
  'https://i.redd.it/b7em9fz3cz3a1.png',
  'https://i.redd.it/32voeeeye5381.jpg',
  'https://i.redd.it/sblhfly1d2u61.png',
  'https://i.redd.it/wcvpq5jv9zf71.jpg',
  'https://i.redd.it/48ur01dqpq371.jpg',
  'https://i.redd.it/gss91630yo151.jpg',
  'https://i.redd.it/hfdb2tovbrj91.jpg',
  'https://i.redd.it/aejf6a0gmx961.jpg',
  'https://i.redd.it/44bdzc5y4po51.jpg',
  'https://i.redd.it/6ue3plcwnc381.jpg',
  'https://i.redd.it/emze6ke521171.jpg',
  'https://i.redd.it/l3pwcsb6rp971.jpg',
  'https://i.redd.it/achtnbsq2tt51.jpg',
  'https://i.redd.it/f05arloa3wr91.jpg',
  'https://i.redd.it/f4po8rv3j2m91.jpg',
  'https://i.redd.it/bpyrl0iqjil51.jpg',
  'https://i.redd.it/7gizcqgo1rz81.png',
  'https://i.redd.it/oroglmmhepb71.png',
  'https://i.redd.it/j3mk7b4ozld91.jpg',
  'https://i.redd.it/smgz2rulj4k91.jpg',
  'https://i.redd.it/3j4olgyebg2a1.png',
  'https://i.redd.it/qgzzpeajcln61.jpg',
  'https://i.redd.it/u8r328szz6t61.jpg',
  'https://i.redd.it/wne06h0ci1n51.jpg',
  'https://i.redd.it/r0w91bqn1gq61.jpg',
  'https://i.redd.it/gh3qp8xbvet71.jpg',
  'https://i.redd.it/ksskssc5gd581.png',
  'https://i.redd.it/e6wcbte41jt91.jpg',
  'https://i.redd.it/ll9s3igyd6671.jpg',
  'https://i.redd.it/c6kxw7felz1a1.jpg',
  'https://i.redd.it/m9el8u2w0r771.jpg',
  'https://i.redd.it/yd87k5wlig371.jpg',
  'https://i.redd.it/ltbr7if2or061.jpg',
  'https://i.redd.it/sy72egk68lu91.jpg',
  'https://i.redd.it/zhf4qfxoz0161.jpg',
  'https://i.redd.it/vwjzfgnuhgp51.jpg',
  'https://i.redd.it/09ztcd6h0vf91.jpg',
  'https://i.redd.it/g7dzoxvl5bz91.jpg',
  'https://i.redd.it/0i6kevpp9y671.jpg',
  'https://i.redd.it/x09a8t3sef771.jpg',
  'https://i.redd.it/zyz1i1786ky61.jpg',
  'https://i.redd.it/bqu63wo890c71.jpg',
  'https://i.redd.it/jn2njzytq0b51.jpg',
  'https://i.redd.it/dzjrr25vzce81.jpg',
  'https://i.redd.it/rh493eobg54a1.jpg',
  'https://i.redd.it/xjhfrn1p2zy91.jpg',
  'https://i.redd.it/ojg6zopw2aw81.png',
  'https://i.redd.it/6eh5qrfb5po61.jpg',
  'https://i.redd.it/2erzlow2yeg81.jpg',
  'https://i.redd.it/3qhuy4om4mc91.png',
  'https://i.redd.it/03d8najkle391.jpg',
  'https://i.redd.it/8460ex56a4k91.jpg',
  'https://i.redd.it/2ukp004v06l61.jpg',
  'https://i.redd.it/qsvj3ksbjv971.jpg',
  'https://i.redd.it/22jbxav9ts161.jpg',
  'https://i.redd.it/cp7bgau1m7e71.jpg',
  'https://i.redd.it/1o60rwrbot2a1.jpg',
  'https://i.redd.it/iae23c3o9cy41.png',
  'https://i.redd.it/gfn7so8p8yu91.jpg',
  'https://i.redd.it/bjk3jhx8gnn51.jpg',
  'https://i.redd.it/xkrj60q1ubb71.jpg',
  'https://i.redd.it/opwlzgxuh0y61.jpg'];
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