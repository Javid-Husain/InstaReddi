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
  const memes = ['https://i.redd.it/gmmhoe37vso61.jpg',
  'https://i.redd.it/gh2u5c44r1x21.jpg',
  'https://i.redd.it/21dv8tlnxc941.jpg',
  'https://i.redd.it/3sp10y125rk41.jpg',
  'https://i.redd.it/tdmab5l9pjg51.png',
  'https://i.redd.it/ekgbqqxklf661.jpg',
  'https://i.redd.it/jinxk49egc551.jpg',
  'https://i.redd.it/wwmuybpvha631.jpg',
  'https://i.redd.it/2oivu7t3tor31.jpg',
  'https://i.imgur.com/uJDVVFa.jpg',
  'https://i.redd.it/wja26wbpr2541.jpg',
  'https://i.redd.it/lycosiko7xl51.jpg',
  'https://i.redd.it/407p8q5pt7g51.jpg',
  'https://i.redd.it/ivlab50yf4071.jpg',
  'https://i.redd.it/8rcw2uffn1b31.jpg',
  'https://i.redd.it/qyl3yj919vw31.png',
  'https://i.redd.it/pvz5rybeh0531.jpg',
  'https://i.redd.it/0n59t85q9ku41.png',
  'https://i.redd.it/bgyv546h6wh31.jpg',
  'https://i.redd.it/qe4680y9ef141.jpg',
  'https://i.redd.it/3vlywgtsd2b61.jpg',
  'https://i.redd.it/wqj0y61o6ug51.jpg',
  'https://i.redd.it/o31353xtamz41.jpg',
  'https://i.redd.it/4qa48ykp8ou21.jpg',
  'https://i.redd.it/wt5g17gwvls41.jpg',
  'https://i.imgur.com/syG5hIu.jpg',
  'https://i.redd.it/zff5gaqypkj61.jpg',
  'https://i.redd.it/80e7xpizm6761.jpg',
  'https://i.redd.it/oxraau2mydd41.jpg',
  'https://i.redd.it/1mlbd4gycdy41.jpg',
  'https://i.redd.it/v2zjn2xgv3y51.jpg',
  'https://i.redd.it/ns83ls5nhem51.jpg',
  'https://i.redd.it/rtvt0u1aa6u41.jpg',
  'https://i.redd.it/6qun3ph150p41.jpg',
  'https://i.redd.it/p0uc7jqcbxp51.jpg',
  'https://i.redd.it/y4vx8o0bnpg41.jpg',
  'https://i.imgur.com/TMJYmqT.jpg',
  'https://i.redd.it/oz8tfiqwgtp41.png',
  'https://i.redd.it/io81tkf3cv241.jpg',
  'https://i.redd.it/av1kbggl7mz51.jpg',
  'https://i.redd.it/r24kljvxu3t51.jpg',
  'https://i.redd.it/wyoiiauaec761.jpg',
  'https://i.redd.it/d29gu9burf261.jpg',
  'https://i.redd.it/g33iigh99mg21.jpg',
  'https://i.redd.it/s7v9zeidyyv41.jpg',
  'https://i.redd.it/rbmf8tvds5g51.jpg',
  'https://i.redd.it/s408hbq86so41.jpg',
  'https://i.redd.it/ptrojulz82831.jpg',
  'https://i.redd.it/hlk868c5oe641.jpg',
  'https://i.redd.it/wqhw2eeumku31.png',
  'https://i.redd.it/v3yr2bw3hkz51.png',
  'https://i.redd.it/bdl69fhq2gk41.jpg',
  'https://i.redd.it/dnefzaa3ikv41.png',
  'https://i.redd.it/m0m8wxj1b2u31.jpg',
  'https://i.redd.it/abf3wi76u9231.jpg',
  'https://i.redd.it/ckg6fbjfgui41.jpg',
  'https://i.redd.it/c8q5ja4jjra51.jpg',
  'https://i.redd.it/drq3ewqx2js31.jpg',
  'https://i.redd.it/ilvlzs1mp8o21.jpg',
  'https://i.redd.it/e9thqmrwngz31.jpg',
  'https://i.redd.it/b1z2z6xowhr41.jpg',
  'https://i.redd.it/p1oij5sz90n51.jpg',
  'https://i.redd.it/feh2qrirg3551.jpg',
  'https://i.redd.it/zpwde28fxz651.jpg',
  'https://i.redd.it/2l5x567aopo31.jpg',
  'https://i.redd.it/zsonu3v3sbm41.jpg',
  'https://i.redd.it/yfvxjzd6y8t31.jpg',
  'https://i.redd.it/z65lgrjm3n651.jpg',
  'https://i.redd.it/5ezz25qoilv61.jpg',
  'https://i.redd.it/vsrcrsbto5e61.jpg',
  'https://i.redd.it/pqpd28xb4we41.jpg',
  'https://i.redd.it/29n1174krlc71.jpg',
  'https://i.redd.it/d7kuwgvi8qy31.jpg',
  'https://i.redd.it/dy70tkp2num31.jpg',
  'https://i.redd.it/waalfpi8sol41.jpg',
  'https://i.redd.it/7aztazgw4j941.png',
  'https://i.redd.it/c5niehc8bwa61.jpg',
  'https://i.redd.it/32rzp9tc1jk31.jpg',
  'https://i.redd.it/wttlnwaz9kj21.jpg',
  'https://i.redd.it/awxa60ik8dq31.png',
  'https://i.redd.it/wo988u1j7du41.jpg',
  'https://i.redd.it/715pwpogyqe41.jpg',
  'https://i.redd.it/tf97pqt0w5151.jpg',
  'https://i.redd.it/qaj5690h5xs51.jpg',
  'https://i.redd.it/j1gu2pqi98541.png',
  'https://i.redd.it/iqxqhvxecmj51.jpg',
  'https://i.redd.it/dmy0j2u2vhz51.jpg',
  'https://i.redd.it/a7si9nczlpp31.jpg',
  'https://i.redd.it/c8g1yqnmnqp41.jpg',
  'https://i.redd.it/b4yt6vjlufh31.jpg',
  'https://i.redd.it/l543ud2fo7m31.jpg',
  'https://i.redd.it/4y7v4wtqd9d41.jpg',
  'https://i.redd.it/1mvjd9h0o3e51.jpg',
  'https://i.redd.it/umfpyjfqeat41.jpg',
  'https://i.redd.it/5zn8fyaayjx61.jpg',
  'https://i.redd.it/b7j8rcj7bzz51.jpg',
  'https://i.redd.it/4sh0qlgne6k41.jpg',
  'https://i.redd.it/wk7bf5jx8gr71.png',
  'https://i.redd.it/kzukxfazswo41.jpg',
  'https://i.redd.it/3iiykio8kih41.jpg',
  'https://i.redd.it/w9kv3mkykfx51.png',
  'https://i.redd.it/nonxb64lk4751.png',
  'https://i.redd.it/7oaujmdog5y31.jpg',
  'https://i.redd.it/4u758kuh4j851.jpg',
  'https://i.redd.it/jvx3klk4tvt31.jpg',
  'https://i.redd.it/84vpv4fho2061.jpg',
  'https://i.redd.it/53raogz9ven41.png',
  'https://i.redd.it/tt8jh5z7ok021.jpg',
  'https://i.redd.it/g0lvoveua2x41.png',
  'https://i.redd.it/3ir941nm7dx51.png',
  'https://i.redd.it/dkhrmuf2r0361.png',
  'https://i.redd.it/3v35mcaixut21.jpg',
  'https://i.redd.it/dv7z6es6b4m51.png',
  'https://i.redd.it/7orpdm3ojug71.jpg',
  'https://i.redd.it/fqaimn3wxpe51.jpg',
  'https://i.redd.it/2vnzwskqbdg71.jpg',
  'https://i.redd.it/yb95lvm4c0f51.jpg',
  'https://i.redd.it/wxe5ko2yu3n51.jpg',
  'https://i.redd.it/9hv833wejn941.jpg',
  'https://i.redd.it/efq3vi2b5dt41.jpg',
  'https://i.redd.it/2d0mcnkbgs951.jpg',
  'https://i.redd.it/jnptw3l7cg941.jpg',
  'https://i.redd.it/w8emdzzguhr51.jpg',
  'https://i.redd.it/3kjfteo40j331.jpg',
  'https://i.redd.it/perao0sr3fy71.jpg',
  'https://i.redd.it/2t65a9aiyhg01.jpg',
  'https://i.redd.it/u0au052gakj51.jpg',
  'https://i.redd.it/6ppaer3vbvz41.jpg',
  'https://i.redd.it/8w6rwt4xizk21.jpg',
  'https://i.redd.it/l1mm7wcf84j41.jpg',
  'https://i.redd.it/7lf7anlar1n21.png',
  'https://i.redd.it/y8ks7s8n6u261.jpg',
  'https://i.redd.it/y6140heg8wo51.png',
  'https://i.redd.it/tpc35tvbr1x51.jpg',
  'https://i.redd.it/6m9yirl8qq751.jpg',
  'https://i.redd.it/twjwguhlvdr31.jpg',
  'https://i.redd.it/fz3oe0psy6431.jpg',
  'https://i.redd.it/rai1dzeriwk41.jpg',
  'https://i.redd.it/q2fy74dyeme31.jpg',
  'https://i.redd.it/h3tbf3ua3up31.jpg',
  'https://i.redd.it/vz5q0iotk3441.jpg',
  'https://i.redd.it/lbzy3xo2f3q61.jpg',
  'https://i.redd.it/ye4e05iz4oo71.jpg',
  'https://i.redd.it/77qehmes4nk41.jpg',
  'https://i.redd.it/xcgm9jlcz3c41.jpg',
  'https://i.redd.it/r5dyuvkomny61.jpg',
  'https://i.redd.it/jshwv9q3b6i51.jpg',
  'https://i.redd.it/83jzbsbvs6j51.png',
  'https://i.redd.it/10y8xc6ga2j41.jpg',
  'https://i.redd.it/uwedzilkbxz41.jpg',
  'https://i.redd.it/r1cw8p4sog241.jpg',
  'https://i.redd.it/1hdv1jn5kck51.jpg',
  'https://i.redd.it/zidy11umqxr51.jpg',
  'https://i.redd.it/qm3q83xhfhg41.jpg',
  'https://i.redd.it/rjmwr05zifj31.jpg',
  'https://i.redd.it/8qb1di8sm1c51.jpg',
  'https://i.redd.it/cvh832c6al541.jpg',
  'https://i.redd.it/q6vntt36td961.png',
  'https://i.redd.it/a2f7hyhthc641.jpg',
  'https://i.redd.it/oefhy439f0071.jpg',
  'https://i.redd.it/gl7z04tn93m41.jpg',
  'https://i.redd.it/zc8jnst3r9m41.jpg',
  'https://i.redd.it/27gylc7khpy41.jpg',
  'https://i.redd.it/7xcsm9yyu8t21.jpg',
  'https://i.redd.it/wbchu8vshtv51.png',
  'https://i.redd.it/6fa8bpr3tcj41.jpg',
  'https://i.redd.it/pxq4747604051.jpg',
  'https://i.redd.it/1b70gum47gj51.jpg',
  'https://i.redd.it/j5xuzzvpbmh41.jpg',
  'https://i.redd.it/cecxi4e0pih51.jpg',
  'https://i.redd.it/ilf97sdg0u561.jpg',
  'https://i.redd.it/avo4hkjvy9f31.jpg',
  'https://i.redd.it/nm5k51prstk41.jpg',
  'https://i.redd.it/go0gkjgpz9r31.jpg',
  'https://i.redd.it/fvke9c6uyod31.jpg',
  'https://i.redd.it/8u7q0gogsij41.jpg',
  'https://i.redd.it/nagxstjelc431.jpg',
  'https://i.redd.it/m3qtkiw7s1f51.jpg',
  'https://i.redd.it/46bclao99bu51.jpg',
  'https://i.redd.it/dctanya4ek531.jpg',
  'https://i.redd.it/dq8pqjchhoa71.png',
  'https://i.redd.it/b8565dw6qyz21.png',
  'https://i.redd.it/76yhvr2tjxm31.jpg',
  'https://i.redd.it/al44gk7jqns51.jpg',
  'https://i.redd.it/pjgt3bexd1u51.jpg',
  'https://i.redd.it/9ujrsoiz0p341.jpg',
  'https://i.redd.it/j2ymikns43f41.png',
  'https://i.redd.it/rpaih5xc6b931.jpg',
  'https://i.redd.it/wkhbhgqm9u361.jpg',
  'https://i.redd.it/87w1qk974kr31.jpg',
  'https://i.redd.it/j26gp2h0k8951.png',
  'https://i.redd.it/i2mj17eb5kh31.jpg',
  'https://i.redd.it/43s82ry14eg51.png',
  'https://i.redd.it/g0or72hjjjv61.jpg',
  'https://i.redd.it/huqg733eg2g51.jpg',
  'https://i.redd.it/9bjrw770ktz41.jpg',
  'https://i.redd.it/w6r8umyx92371.jpg',
  'https://i.redd.it/3mwf7n55h4n31.jpg',
  'https://i.redd.it/kq9ggfbcvst31.jpg',
  'https://i.redd.it/iw4lwgvmhez31.png',
  'https://i.redd.it/42epgj1pcqz31.jpg',
  'https://i.redd.it/niid21l8rl261.png',
  'https://i.redd.it/p7q0w6qnqqd61.jpg',
  'https://i.redd.it/9nhic1adzb461.jpg',
  'https://i.redd.it/vkn9f1r4dse31.jpg',
  'https://i.redd.it/mufpjol90jc31.jpg',
  'https://i.redd.it/acia9f9owk651.jpg',
  'https://i.redd.it/hmtab86trxg61.jpg',
  'https://i.redd.it/0r65adse9fq31.jpg',
  'https://i.redd.it/mxotzsr7c4p51.jpg',
  'https://i.redd.it/jsi3njk6mk341.jpg',
  'https://i.redd.it/yr35amv3d2p41.jpg',
  'https://i.redd.it/cwb0s7tid5f61.jpg',
  'https://i.redd.it/7ypphmrz26061.jpg',
  'https://i.redd.it/lcqq73ojiwm01.jpg',
  'https://i.redd.it/9scseq11uuk51.jpg',
  'https://i.redd.it/zi10uboxa4g41.png',
  'https://i.redd.it/y2lk1o8xdpj61.png',
  'https://i.redd.it/i89hx7zbacm51.png',
  'https://i.redd.it/xv3yb8o9rat51.jpg',
  'https://i.redd.it/tzguw6s2mn161.jpg',
  'https://i.redd.it/ijd55djhkuh61.jpg',
  'https://i.redd.it/9rgiz4q7lwv41.jpg',
  'https://i.redd.it/5ecgd5gkjb241.jpg',
  'https://i.redd.it/k8fxrxq7y9f51.jpg',
  'https://i.redd.it/569e6wxvnry41.jpg',
  'https://i.redd.it/lwmet8yn9k151.jpg',
  'https://i.redd.it/xy8ah1a3iss41.jpg',
  'https://i.redd.it/e94zwizn7zp31.jpg',
  'https://i.redd.it/auth4x1okai61.png',
  'https://i.redd.it/bwr4r4rggql51.jpg',
  'https://i.redd.it/dmscg1zff8j51.jpg',
  'https://i.redd.it/n1gx04jpd1q41.jpg',
  'https://i.redd.it/qbitygc5hqz21.png',
  'https://i.redd.it/xlvkf4npql331.jpg',
  'https://i.redd.it/3jjghumr0dk31.png',
  'https://i.redd.it/cj68ron63bu41.jpg',
  'https://i.redd.it/t0wx4l3v05j51.jpg',
  'https://i.redd.it/bphmz1ngzu951.jpg',
  'https://i.redd.it/qgpv4w7nk8w71.jpg',
  'https://i.redd.it/j44l82atduy51.jpg',
  'https://i.redd.it/hfnf23xlf4b61.jpg',
  'https://i.redd.it/eiwc0k587hq41.jpg',
  'https://i.redd.it/eoxivfsjdhg31.png',
  'https://i.redd.it/4yg1tjdhjmp31.jpg',
  'https://i.redd.it/wt83w9bj2ru61.jpg',
  'https://i.redd.it/j69syoagaa441.jpg',
  'https://i.redd.it/9a1ydxvmf6441.png',
  'https://i.redd.it/x4cm1ojmas761.jpg',
  'https://i.redd.it/jto26csusn951.jpg',
  'https://i.redd.it/0wzv7vejmya71.jpg',
  'https://i.redd.it/11mzzy7u07b41.jpg',
  'https://i.redd.it/mdwxe2padui51.jpg',
  'https://i.redd.it/suv39j5cyar51.jpg',
  'https://i.redd.it/emuicuqmxqk31.jpg',
  'https://i.redd.it/zgjk480x0p331.jpg',
  'https://i.redd.it/mnji36ho8v641.png',
  'https://i.redd.it/okr1mzdusqk51.jpg',
  'https://i.redd.it/14wiac275ff51.jpg',
  'https://i.redd.it/efzpm2zv3z631.jpg',
  'https://i.redd.it/htzs6q2ubm161.jpg',
  'https://i.redd.it/wudpwz2ykgj41.jpg',
  'https://i.redd.it/3et1syb9b0t41.jpg',
  'https://i.redd.it/6qkz066jy4041.png',
  'https://i.redd.it/frnkjghccyx11.jpg',
  'https://i.redd.it/0kmpa5d98eg31.jpg',
  'https://i.redd.it/fm6a6ce6mbc51.jpg',
  'https://i.redd.it/smw15hkz99g51.jpg',
  'https://i.redd.it/mgzry2z59sa21.jpg',
  'https://i.redd.it/cqrp15sz04t41.jpg',
  'https://i.redd.it/jh85jfp0azh41.jpg',
  'https://i.redd.it/nzije1ilqrl51.png',
  'https://i.redd.it/l45r93lrebb61.jpg',
  'https://i.redd.it/ge0l4cbewpd41.jpg',
  'https://i.redd.it/my67ruk523w51.png',
  'https://i.redd.it/kd9uczjqqej51.jpg',
  'https://i.redd.it/gkinj7v57jn51.png',
  'https://i.redd.it/h3suq1cnwhz41.jpg',
  'https://i.redd.it/ft034ag99wp21.jpg',
  'https://i.redd.it/g8kljpmrmqs61.jpg',
  'https://i.redd.it/8ryae2z1ppo41.jpg',
  'https://i.redd.it/oauysqxshc861.jpg',
  'https://i.redd.it/pp28gwlbef861.jpg',
  'https://i.redd.it/p7bn33ttgcj51.jpg',
  'https://i.redd.it/d5tl8j0q15r41.jpg',
  'https://i.redd.it/0nu485vng1w21.jpg',
  'https://i.redd.it/2zwmyl80eka31.jpg',
  'https://i.redd.it/thu61y9bzvs41.jpg',
  'https://i.redd.it/2259i5xwoiu51.jpg',
  'https://i.redd.it/i6yaueg1fhu21.jpg',
  'https://i.redd.it/gi32z09ib7u51.jpg',
  'https://i.redd.it/4qf4vbpkhvk41.jpg',
  'https://i.redd.it/q6s657y1jwr61.jpg',
  'https://i.redd.it/3ctgg9lek5561.jpg',
  'https://i.redd.it/cbpebl8flrh31.jpg',
  'https://i.redd.it/oik9djamkw961.jpg',
  'https://i.redd.it/0czwnil0bsb21.jpg',
  'https://i.imgur.com/clt3JNa.jpg',
  'https://i.redd.it/tvimpyjy1qo51.png',
  'https://i.redd.it/qkzil4dk65l71.jpg',
  'https://i.redd.it/df5u0q6xdsh51.jpg',
  'https://i.redd.it/mw1e1f5hk0x71.png',
  'https://i.redd.it/24mquaoee1171.jpg',
  'https://i.redd.it/prd5pef937r41.jpg',
  'https://i.redd.it/liwx95mlt9r51.jpg',
  'https://i.redd.it/erilvqr6o0f61.jpg',
  'https://i.redd.it/4ykp8tx7dmn41.jpg',
  'https://i.redd.it/v6qnboqx9jk51.jpg',
  'https://i.redd.it/ui2h7laxtwt21.jpg',
  'https://i.redd.it/h0jgjxc4sku61.jpg',
  'https://i.redd.it/gp231btvuxi61.jpg',
  'https://i.redd.it/twbajujnphn51.jpg',
  'https://i.redd.it/vm97to1ascg51.jpg',
  'https://i.redd.it/tp0o2k55d1t51.jpg',
  'https://i.redd.it/k06z31mnu9z21.jpg',
  'https://i.redd.it/44yuidphc0161.jpg',
  'https://i.redd.it/cb76bh2f39941.jpg',
  'https://i.redd.it/9i4iq6rfgvd31.jpg',
  'https://i.redd.it/z978ndsjl4451.jpg',
  'https://i.redd.it/w7064889nf961.jpg',
  'https://i.redd.it/jg3b877i4r561.jpg',
  'https://i.redd.it/e8py0uv5py331.jpg',
  'https://i.redd.it/862p5qur23141.png',
  'https://i.redd.it/4mc5h24wvw751.jpg',
  'https://i.redd.it/2kdcgzyqecf31.jpg',
  'https://i.redd.it/hr8wr35047831.jpg',
  'https://i.redd.it/5b316vj7kwo31.jpg',
  'https://i.redd.it/thcy4u3wgge21.jpg',
  'https://i.redd.it/7perehyi3a061.jpg',
  'https://i.redd.it/228vq7mqocc41.jpg',
  'https://i.redd.it/ptvuxzsqjla61.jpg',
  'https://i.redd.it/mxgr3vzt1tr51.png',
  'https://i.redd.it/0561xjr7z4931.jpg',
  'https://i.redd.it/c5xc3q8tb7631.jpg',
  'https://i.imgur.com/5LbIY71.jpg',
  'https://i.redd.it/hw4git8mlxa51.jpg',
  'https://i.redd.it/xvuph8e1dcm21.jpg',
  'https://i.redd.it/r5dx8f9v0ax61.jpg',
  'https://i.redd.it/bcot714tlh251.jpg',
  'https://i.redd.it/zcn74852rvw41.jpg',
  'https://i.redd.it/12h7logd9rg51.png',
  'https://i.redd.it/sljja5mupoz51.jpg',
  'https://i.redd.it/khp04okun7f21.jpg',
  'https://i.redd.it/yg14v7ui4tb31.jpg',
  'https://i.redd.it/71hwzlt0ni141.jpg',
  'https://i.redd.it/nmock4gpzra61.jpg',
  'https://i.redd.it/m4hknigy8q761.jpg',
  'https://i.redd.it/dn795thxjcf41.jpg',
  'https://i.redd.it/mwx30rrccbx31.jpg',
  'https://i.redd.it/tcxd3k8mbvp41.jpg',
  'https://i.redd.it/0aomn2vujec61.jpg',
  'https://i.redd.it/6pqic87b6j561.jpg',
  'https://i.redd.it/z0qk49ex2s261.jpg',
  'https://i.redd.it/sicwz4t3ouh51.jpg',
  'https://i.redd.it/fhfiriybvps51.jpg',
  'https://i.redd.it/vtp4z6d4tf161.jpg',
  'https://i.redd.it/l82phj3ik9y31.jpg',
  'https://i.redd.it/ypgh86ufxgk51.jpg',
  'https://i.redd.it/f8cundjaf7v31.jpg',
  'https://i.redd.it/1bbtr3x5gm971.jpg',
  'https://i.redd.it/vssv64ytvnu51.jpg',
  'https://i.redd.it/gtc902mdtzi51.png',
  'https://i.redd.it/j9gk3cinmau61.jpg',
  'https://i.redd.it/8uibfrvbjt251.jpg',
  'https://i.redd.it/d0ignigx5hn41.jpg',
  'https://i.redd.it/ggs6zei0g6f51.jpg',
  'https://i.redd.it/dddnrb7pa9c71.jpg',
  'https://i.redd.it/5u58mljs7io51.jpg',
  'https://i.redd.it/dn7o3ip58w221.jpg',
  'https://i.redd.it/pu2smrmn1cy41.jpg',
  'https://i.redd.it/4m3f4qjpnv051.jpg',
  'https://i.redd.it/r379i8pewr941.png',
  'https://i.redd.it/ho80ldjyp3u51.png',
  'https://i.redd.it/0ebu3j3bbbn21.jpg',
  'https://i.redd.it/wxthqic5rv951.jpg',
  'https://i.redd.it/ce97a35oza471.jpg',
  'https://i.redd.it/ynois7zuqfd61.jpg',
  'https://i.redd.it/n3of292bkl941.jpg',
  'https://i.redd.it/hgqwsz36msi21.jpg',
  'https://i.redd.it/oym93akwmcz31.png',
  'https://i.redd.it/wncbqk08e6c41.jpg',
  'https://i.redd.it/lyui2e2x22e61.jpg',
  'https://i.redd.it/vi8h0tbn8nc61.png',
  'https://i.redd.it/i6c48jskqng61.jpg',
  'https://i.redd.it/j9t8633ikc271.jpg',
  'https://i.redd.it/vswxjsdk4cr51.png',
  'https://i.redd.it/5iv8d8mhd7m51.jpg',
  'https://i.redd.it/uzg055ino3i71.png',
  'https://i.redd.it/1sng8umagl761.jpg',
  'https://i.redd.it/etmx9uyw6xp61.jpg',
  'https://i.redd.it/klnn2ohtvgc41.jpg',
  'https://i.redd.it/sgs1g27dud261.jpg',
  'https://i.redd.it/w5iur1hm39v21.jpg',
  'https://i.redd.it/88lo8knfplr21.jpg',
  'https://i.redd.it/6emtundgllg31.png',
  'https://i.redd.it/d8vaidu079571.jpg',
  'https://i.redd.it/h10ya96zfhk41.jpg',
  'https://i.redd.it/ljqzqf0qso271.jpg',
  'https://i.redd.it/9eftyaporff61.jpg',
  'https://i.redd.it/jai6em22i1841.jpg',
  'https://i.redd.it/j0m2iwnooay61.jpg',
  'https://i.redd.it/w8g5fugqzp031.jpg',
  'https://i.redd.it/2yefa6abakv21.jpg',
  'https://i.redd.it/00u04rskxy061.png',
  'https://i.redd.it/dsfv61meoc971.jpg',
  'https://i.imgur.com/bQnXIcq.jpg',
  'https://i.redd.it/fo9elxqpgi641.jpg',
  'https://i.redd.it/zzp71pfp85f71.jpg',
  'https://i.redd.it/kuizhlu0oly41.jpg',
  'https://i.redd.it/eqthf4ma1ey51.png',
  'https://i.redd.it/up8q7o0m76r31.jpg',
  'https://i.redd.it/ef1h43uhh1j61.jpg',
  'https://i.redd.it/hbpetgpxe1y21.jpg',
  'https://i.redd.it/3c1gox48q5941.jpg',
  'https://i.redd.it/sl9mycz1qek31.jpg',
  'https://i.redd.it/vgm4t2kwz5q31.jpg',
  'https://i.redd.it/1u0ikesq86n41.jpg',
  'https://i.redd.it/wz7pho2ysbf21.jpg',
  'https://i.redd.it/rbzd80btoj631.jpg',
  'https://i.redd.it/xhzapsiuthv51.jpg',
  'https://i.redd.it/o68fizj4f1b51.jpg',
  'https://i.redd.it/v5n8vs14gzb41.jpg',
  'https://i.redd.it/1f6qxs19kiq51.png'];

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