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
  const memes = ['https://i.redd.it/2iysmrgu25y41.jpg',
  'https://i.redd.it/p6zv247p8xv81.jpg',
  'https://i.redd.it/43lac94xwr751.jpg',
  'https://i.redd.it/v7b6jjn5ctc51.jpg',
  'https://i.redd.it/uljmpphdvoh61.jpg',
  'https://i.redd.it/apzr3f834b651.jpg',
  'https://i.redd.it/jm6t8cmt0op41.jpg',
  'https://i.redd.it/j37es619i6561.jpg',
  'https://i.redd.it/5l5zfxmwd8w81.jpg',
  'https://i.redd.it/hri9seqlzr841.png',
  'https://i.redd.it/0aclgcnmcjm31.jpg',
  'https://i.redd.it/nwynijficng41.jpg',
  'https://i.redd.it/w43uaex4b3091.jpg',
  'https://i.imgur.com/qrNw0MX.jpg',
  'https://i.redd.it/vfi5pnpt4k691.jpg',
  'https://i.redd.it/ji536gdyxqy81.jpg',
  'https://i.redd.it/gb32hgs1mcc71.jpg',
  'https://i.redd.it/13t9ttybxkw61.jpg',
  'https://i.redd.it/abwuvp3e51751.png',
  'https://i.redd.it/58j5pg8t69q61.jpg',
  'https://i.redd.it/euhcv7y97hk91.jpg',
  'https://i.redd.it/h7jvwic5xi661.jpg',
  'https://i.redd.it/9pwvo5bxf6741.jpg',
  'https://i.redd.it/e9bsh6o81s491.jpg',
  'https://i.redd.it/1oxx1rikmp151.jpg',
  'https://i.redd.it/r6otom6sdmu41.jpg',
  'https://i.redd.it/xaccwp0nlqx91.jpg',
  'https://i.redd.it/5ggfdr3blfj61.jpg',
  'https://i.redd.it/4i8meqiaqc0a1.jpg',
  'https://i.redd.it/uqsp8m1lhse61.jpg',
  'https://i.redd.it/p5rk76uav3c61.jpg',
  'https://i.redd.it/q0pjhfn6lrj91.jpg',
  'https://i.redd.it/g2ev5pro6tz81.jpg',
  'https://i.redd.it/nzg31vv21so91.jpg',
  'https://i.redd.it/s8z0f0fz0g091.jpg',
  'https://i.redd.it/kb5b8ia4k7g61.jpg',
  'https://i.redd.it/3c9vbv6zq9e51.jpg',
  'https://i.redd.it/fqniw8w882791.jpg',
  'https://i.redd.it/emaekmqcblh61.jpg',
  'https://i.imgur.com/2IQ1MXW.jpg',
  'https://i.imgur.com/WkeO8Uw.jpg',
  'https://i.redd.it/esciljic4tq61.jpg',
  'https://i.redd.it/vnjemc3oddp81.jpg',
  'https://i.redd.it/bhw7f6f4r5s91.jpg',
  'https://i.redd.it/c5g5ez9r8j0a1.jpg',
  'https://i.redd.it/in1zu8ytvrk91.jpg',
  'https://i.redd.it/hex23kr68qb41.jpg',
  'https://i.redd.it/2igv2vekc10a1.jpg',
  'https://i.redd.it/b7u39q9rn5p31.jpg',
  'https://i.redd.it/vfl8xf183gw81.jpg',
  'https://i.redd.it/y8tvgnpnddt61.png',
  'https://i.redd.it/d928ius6xp561.jpg',
  'https://i.redd.it/itva9xhc58u91.png',
  'https://i.redd.it/6kfuqx99lu251.jpg',
  'https://i.redd.it/1hak6lspasb51.jpg',
  'https://i.redd.it/kc88pi63osd31.png',
  'https://i.redd.it/xowv8y76iq391.jpg',
  'https://i.redd.it/1vskn8imigl91.jpg',
  'https://i.redd.it/hy3gau6vcef91.jpg',
  'https://i.redd.it/28q96aezguw61.jpg',
  'https://i.redd.it/t5s91k31sq541.jpg',
  'https://i.redd.it/xj3l5rq3w1e71.jpg',
  'https://i.redd.it/x68s78qicle91.jpg',
  'https://i.imgur.com/Ghy2n0s.jpg',
  'https://i.redd.it/3qusjtplbr2a1.jpg',
  'https://i.redd.it/c0ez1hs4q0j91.jpg',
  'https://i.redd.it/adt66y4jtzd91.jpg',
  'https://i.redd.it/wx6cb6chzs791.jpg',
  'https://i.redd.it/6pc99c5v474a1.jpg',
  'https://i.redd.it/7l2nof6xsrw91.jpg',
  'https://i.redd.it/1euhrxracgf61.jpg',
  'https://i.redd.it/dbwia8xynkr91.jpg',
  'https://i.redd.it/x70jijtj2l4a1.jpg',
  'http://i.imgur.com/Ed8EtQW.jpg',
  'https://i.redd.it/uq4p05wtrf431.jpg',
  'https://i.redd.it/268l26lrcep61.jpg',
  'https://i.redd.it/kyb8lytinxq61.jpg',
  'https://i.redd.it/juu9aw9n3x351.jpg',
  'https://i.redd.it/gibmanb85a891.jpg',
  'https://i.imgur.com/owma8IX.jpg',
  'https://i.redd.it/ssm3jlsjekt91.jpg',
  'https://i.redd.it/yhsmqifp0j551.jpg',
  'https://i.redd.it/5c35c0z51wc51.jpg',
  'https://i.redd.it/49dn1z2nt42a1.jpg',
  'https://i.redd.it/tm2q353qjd791.jpg',
  'https://i.redd.it/3cesn7i7tlz91.jpg',
  'https://i.imgur.com/uhwSfRm.jpg',
  'https://i.redd.it/4pkw17zf4vm61.png',
  'https://i.redd.it/60yr7d8cxdb51.jpg',
  'https://i.redd.it/mhk6kqvg3t271.jpg',
  'https://i.redd.it/6ha8e95b1h671.jpg',
  'https://i.redd.it/g7rv1own3os31.jpg',
  'https://i.redd.it/ap6ldv1hwc191.jpg',
  'https://i.redd.it/6h0kthzihg771.jpg',
  'https://i.redd.it/31qww9tlkt3a1.jpg',
  'https://i.redd.it/03epx1m7dw1a1.jpg',
  'https://i.redd.it/fcxybzxol03a1.jpg',
  'https://i.redd.it/vhx7r68888w91.jpg',
  'https://i.imgur.com/wDl7LJ3.jpg',
  'https://i.redd.it/ljwsjongmqz31.jpg',
  'https://i.redd.it/n6frjrn69mq61.jpg',
  'https://i.redd.it/26fssra42m861.png',
  'https://i.redd.it/725yeci0ljl81.jpg',
  'https://i.redd.it/74amd7z2f1l81.jpg',
  'https://i.redd.it/eip1ixc8dzy51.jpg',
  'https://i.redd.it/7384nhero9p91.jpg',
  'https://i.redd.it/ptga2e0kexs31.jpg',
  'https://i.redd.it/j69nc2fc71m81.jpg',
  'https://i.redd.it/90ehvr8ljb191.jpg',
  'https://i.redd.it/7nce817pv1b71.jpg',
  'https://i.redd.it/szoa1ohw7iy81.png',
  'https://i.redd.it/31boe5uy4i1a1.jpg',
  'https://i.redd.it/i6gvl80106491.jpg',
  'https://i.redd.it/ntf6kqsb33i41.jpg',
  'https://i.redd.it/7l4yxo7w38f81.jpg',
  'https://i.redd.it/qw70e914ivr91.jpg',
  'https://i.redd.it/w7nph49kst691.jpg',
  'https://i.redd.it/0rrguk8gv1m61.jpg',
  'https://i.redd.it/arng9cswybz91.jpg',
  'https://i.redd.it/bw1mh6icmuy61.jpg',
  'https://i.redd.it/0m7hkwnhata31.jpg',
  'https://i.redd.it/16wv7wg46wa51.jpg',
  'https://i.redd.it/qxsnvuzj0th41.png',
  'https://i.redd.it/yul05o84l2o91.jpg',
  'https://i.imgur.com/asYdPXF.jpg',
  'https://i.redd.it/wbpyiwcewex61.jpg',
  'https://i.redd.it/ozfc98r5fhc91.jpg',
  'https://i.redd.it/stcpwv5sb1l41.jpg',
  'https://i.redd.it/sb5rj4gdj9x31.jpg',
  'https://i.redd.it/y4cn0ak4zd1a1.jpg',
  'https://i.redd.it/zfvu9ai0ajo91.jpg',
  'https://i.redd.it/jl1xh55dewp61.jpg',
  'https://i.redd.it/wa4q3i7mqwz61.jpg',
  'https://i.redd.it/v5bxl4fknpz91.jpg',
  'https://i.redd.it/wlhsbmg5cpc41.jpg',
  'https://i.redd.it/jk8m2ns05ry91.jpg',
  'https://i.redd.it/p8u4m754hmz81.jpg',
  'https://i.redd.it/w6oc04646po61.png',
  'https://i.redd.it/mjvrlhfcff341.png',
  'https://i.redd.it/id0ntxwzid061.jpg',
  'https://imgur.com/PGMihtD.jpg',
  'https://imgur.com/TDXmY0j.jpg',
  'https://i.redd.it/lirbsojyz0l91.jpg',
  'https://i.redd.it/yahdlge3so651.jpg',
  'https://i.redd.it/2bkyvje333g61.jpg',
  'https://i.redd.it/w4048gdryio91.png',
  'https://i.redd.it/o7hn0lcq3cf71.png',
  'https://i.imgur.com/HkNnBPt.jpg',
  'https://i.redd.it/kozaqrs9z6v61.jpg',
  'https://i.redd.it/oexz7lf9g7161.jpg',
  'https://i.redd.it/4g9jed8lqxm91.jpg',
  'https://i.redd.it/2a281jmxv5r91.png',
  'https://i.redd.it/nred7a023uw41.jpg',
  'https://i.redd.it/z2v5zttofzj61.jpg',
  'https://i.redd.it/et0nwdphrmg61.jpg',
  'https://i.imgur.com/bCfnrqF.jpg',
  'https://i.redd.it/6qvwd9guccz81.jpg',
  'https://i.redd.it/dfno9wnw3jj51.jpg',
  'https://i.imgur.com/uRTlSfo.jpg',
  'https://i.redd.it/fjcllb0fbc471.jpg',
  'https://i.redd.it/80w536uhv8291.jpg',
  'https://i.redd.it/85n3a5p4vsd91.jpg',
  'https://i.redd.it/7wlzu43650m91.jpg',
  'https://i.redd.it/j6eszmtvm2171.jpg',
  'https://i.redd.it/t8sr0bei5b271.jpg',
  'https://i.redd.it/8s79r07vzj5a1.jpg',
  'https://i.redd.it/ilgu4ouezvy81.jpg',
  'https://i.redd.it/nbxshoy2j37a1.jpg',
  'https://i.redd.it/xkzlybqz72q91.jpg',
  'https://i.redd.it/imww7vfri4791.jpg',
  'https://i.redd.it/pn7eguar3qc61.jpg',
  'https://i.redd.it/z5wuylpx97591.jpg',
  'https://i.redd.it/d0h87d4elc481.jpg',
  'https://i.redd.it/xrkpr2cx6em61.png',
  'https://i.redd.it/p11c2lpyamg51.jpg',
  'https://i.redd.it/l872q6oispx51.jpg',
  'https://i.redd.it/9otvqzbixel41.jpg',
  'https://i.redd.it/nndrltdj4n771.jpg',
  'https://i.redd.it/eox88qs1u9251.jpg',
  'https://i.redd.it/bnyq4h51w8m41.jpg',
  'https://i.redd.it/fuh25zgrrc951.jpg',
  'https://i.redd.it/klbdmuy4i1261.jpg',
  'https://i.redd.it/mfqc4ypmcjy91.jpg',
  'https://i.redd.it/7r1gf24u50f31.jpg',
  'https://abrilveja.files.wordpress.com/2020/01/000_1oa01z.jpg',
  'https://i.redd.it/gsbzcxomidy61.jpg',
  'https://i.redd.it/g4zb82vdwf871.jpg',
  'https://i.redd.it/d2q74a70m6f91.jpg',
  'https://i.redd.it/oq15v79vnn6a1.jpg',
  'https://i.redd.it/0dztxgv8csq91.png',
  'https://i.redd.it/u8vztvg9qz581.jpg',
  'https://i.redd.it/4obvx7gvfzw91.jpg',
  'https://i.redd.it/21lukkidaiu81.jpg',
  'https://i.redd.it/4b68l4y0xqp61.jpg',
  'https://i.imgur.com/GjE1CJs.jpg',
  'https://i.redd.it/gb79z1dbq8t61.jpg',
  'https://i.redd.it/laxnww7oj6051.jpg',
  'https://i.redd.it/plkhg6j9uir81.jpg',
  'https://i.redd.it/rycse6xesf171.png',
  'https://i.redd.it/syjk65mn2m391.jpg',
  'https://i.imgur.com/7cK9MQp.jpg',
  'https://i.redd.it/msjvch5y6dy91.jpg',
  'https://i.redd.it/dp8d0j69fa271.jpg',
  'https://i.redd.it/7gvjvehxm8h51.jpg',
  'https://i.redd.it/dbc4cm60ztl51.png',
  'https://i.redd.it/77t5n4bbly791.jpg',
  'https://i.redd.it/810i0pjt3vx81.jpg',
  'https://i.redd.it/63hl0yxlb2v91.jpg',
  'https://i.redd.it/1wtd6mmzw5r81.jpg',
  'https://i.redd.it/j0t8ynlg61l51.png',
  'https://i.redd.it/dfshcgrvqs2a1.jpg',
  'https://i.redd.it/fqo61dj0ssw51.jpg',
  'https://i.redd.it/pveuxchhgu4a1.jpg',
  'https://i.redd.it/xkplsncaoxg71.jpg',
  'https://i.redd.it/j6gptc4u84u41.jpg',
  'https://i.redd.it/1ga1jzj1wdl81.jpg',
  'https://i.imgur.com/j61DcKA.jpg',
  'https://i.imgur.com/7RzFkRl.jpg',
  'https://i.redd.it/rbtzwit2ntd51.jpg',
  'https://i.redd.it/m6r62jeuyg441.jpg',
  'https://i.redd.it/at771l95syu61.jpg',
  'https://i.redd.it/jof1wq0ajsf91.jpg',
  'https://i.redd.it/8u79seh892y91.jpg',
  'https://i.redd.it/gzxcfv75dyn51.jpg',
  'https://i.redd.it/n3oeu7o7uib61.jpg',
  'https://i.redd.it/4euqd0ww2s461.png',
  'https://i.redd.it/5ykik5r7ddh51.jpg',
  'https://i.redd.it/lb6jteynrhl61.jpg',
  'https://i.imgur.com/1R9FLwn.jpg',
  'https://i.redd.it/u72ydyyy16s61.jpg',
  'https://i.redd.it/yraduoxkz7g51.jpg',
  'https://i.redd.it/8g72de5jb3d61.jpg',
  'https://i.redd.it/2dy5mj8ywds91.jpg',
  'https://i.redd.it/tc285c4wyrx31.jpg',
  'https://i.redd.it/yfzicm44k4g41.jpg',
  'https://i.redd.it/ruxt4zw8ubx81.png',
  'https://i.redd.it/wawp1kb32bc81.jpg',
  'https://i.imgur.com/zbZjYpq.jpg',
  'https://i.redd.it/je9rq2qe321a1.jpg',
  'https://i.redd.it/jpfygu2w7m161.jpg',
  'https://i.redd.it/mlqrf0gf8ro21.jpg',
  'https://i.redd.it/5p67oy942ov91.jpg',
  'https://i.redd.it/k5f5sglwf7b81.jpg',
  'https://i.redd.it/soarake0m9241.jpg',
  'https://i.redd.it/jiaroju7g34a1.jpg',
  'https://imgur.com/945mYTe.jpg',
  'https://i.redd.it/oxthi0ntlta71.jpg',
  'https://i.redd.it/rpf3s3brsnj71.jpg',
  'https://i.redd.it/fsr5hgntkah31.jpg',
  'https://i.redd.it/eldn7fi37t0a1.jpg',
  'https://i.redd.it/5sstiqwxfc571.jpg',
  'https://i.imgur.com/Kbxm7hS.jpg',
  'https://i.redd.it/d5u4552v9vv61.png',
  'https://i.redd.it/kgstcgiwrfv91.jpg',
  'https://i.redd.it/wkxg75anu7q91.jpg',
  'https://i.redd.it/xhz9l7l17xq51.jpg',
  'https://i.redd.it/tg4mtc2xekg71.jpg',
  'https://i.redd.it/9iu4vaezgyb91.png',
  'https://i.redd.it/dv3s8i7cxoq91.jpg',
  'https://i.redd.it/ylqendd0qax51.jpg',
  'https://i.redd.it/sy25cyxjty251.jpg',
  'https://i.redd.it/vrwoi0hwupu91.jpg',
  'https://i.redd.it/k3114bne6yu51.jpg',
  'https://i.redd.it/l2phs6l9fsj61.jpg',
  'https://i.redd.it/8dcl3mdubim91.jpg',
  'https://i.redd.it/51auyodq09w51.jpg',
  'https://i.imgur.com/8klOvFS.jpg',
  'https://i.redd.it/qlf6unog2st91.jpg',
  'https://i.redd.it/0l2p66em55y51.jpg',
  'https://i.redd.it/ctl56h0sk2h61.jpg',
  'https://i.redd.it/b390noskao091.jpg',
  'https://i.redd.it/w3n4amh8ye361.jpg',
  'https://i.redd.it/x9dyqqgakwy71.jpg',
  'https://i.redd.it/hxg7r3dwlmv61.jpg',
  'https://i.redd.it/lh1bpjoztsg91.jpg',
  'https://i.redd.it/6oip2s7jeml41.jpg',
  'https://i.redd.it/xjv3ypdi8e5a1.jpg',
  'https://i.redd.it/2hk2vt3btq161.jpg',
  'https://i.redd.it/4223r6jywkx91.jpg',
  'https://i.redd.it/jxi38kev4lw91.jpg',
  'http://i.imgur.com/GaQS3dF.jpg',
  'https://i.redd.it/3afsuac7w3991.jpg',
  'https://i.redd.it/zoj3ru1ns3k31.jpg',
  'https://i.redd.it/ed79btblfx371.jpg',
  'https://i.imgur.com/cceaxKO.png',
  'https://i.redd.it/9cvb7ghmqve41.jpg',
  'https://i.redd.it/xjx2c3cx1zo41.jpg',
  'https://i.redd.it/rfijdfbflkv91.png',
  'https://i.redd.it/ecltdw9llrf71.png',
  'https://i.redd.it/kxtuujymtbc91.jpg',
  'https://i.redd.it/zmqrnukm0yz21.jpg',
  'https://i.redd.it/oyo47lso3kl61.jpg',
  'https://i.redd.it/t6b1peo554t61.png',
  'https://i.redd.it/nufi1tvnpye61.jpg',
  'https://i.redd.it/lntzvgrtzl671.jpg',
  'https://i.redd.it/ghex40h7yx3a1.jpg',
  'https://i.redd.it/tkjp0qs0iav91.jpg',
  'https://i.redd.it/vmjf8w8t0be61.jpg',
  'https://i.redd.it/qqu7zozxnsu61.jpg',
  'https://i.redd.it/08mtpet7q5231.jpg',
  'https://i.redd.it/kem4mn7mkr591.jpg',
  'https://i.redd.it/ij1umsmxlkd61.jpg',
  'https://i.redd.it/yefwkkjeftx51.jpg',
  'https://i.redd.it/q9g9bdwa29z61.jpg',
  'https://i.redd.it/an4yfiefk2871.jpg',
  'https://i.redd.it/rlz67a5bjkx41.jpg',
  'https://i.redd.it/4kf3638xqp451.png',
  'https://i.redd.it/djhnwh2j1qt31.jpg',
  'https://i.redd.it/8jf3tsgb26z41.jpg',
  'https://i.redd.it/ejgo92cefzo61.jpg',
  'https://i.redd.it/qjnken3362w51.jpg',
  'https://i.redd.it/ujhidfurglw81.jpg',
  'https://i.redd.it/156msia8rlr61.jpg',
  'https://i.imgur.com/Pt76KaV.jpg',
  'https://i.imgur.com/Ze1ZaXf.jpg',
  'https://i.redd.it/o5se5a20z1d51.jpg',
  'https://i.redd.it/n0pi0yxpq8x61.jpg',
  'https://i.redd.it/yrx7qh6i8pn51.jpg',
  'https://i.redd.it/iph2uq90dw051.jpg',
  'https://i.redd.it/4b6cg0d5t5661.jpg',
  'https://i.redd.it/q20isjsre2071.jpg',
  'https://i.redd.it/i9rwosd4kvv91.jpg',
  'https://i.redd.it/47w7r8ude2m31.jpg',
  'https://i.redd.it/t4aczba26vd91.jpg',
  'https://i.redd.it/vw8jy711o0x61.jpg',
  'https://i.redd.it/435duuj22fe91.jpg',
  'https://i.redd.it/dcjvrlz5d4691.jpg',
  'https://i.redd.it/j46sqlg8dbx91.jpg',
  'https://i.redd.it/pdx63ddz3kk61.png',
  'https://i.redd.it/4xox6zh3m0g51.jpg',
  'https://i.redd.it/8rbeqg7f9wi71.jpg',
  'https://i.redd.it/4ks0ik3qvo851.jpg',
  'https://i.redd.it/3u5s10prixo91.jpg',
  'https://i.redd.it/wbrbwzuipmz41.jpg',
  'https://i.redd.it/c0lsnpgcnxg41.jpg',
  'https://i.redd.it/pf8k4uxao7c91.jpg',
  'https://i.redd.it/9egosu6w50q51.jpg',
  'https://i.redd.it/gdo5ct8pj0191.jpg',
  'https://i.redd.it/prwk9tjarpd41.png',
  'https://i.redd.it/37435x77yxv51.jpg',
  'https://i.redd.it/ltqtfnk6sm071.jpg',
  'https://i.redd.it/2k2qrpt4ytk51.jpg',
  'https://i.redd.it/hlep4f0mpup41.jpg',
  'https://i.redd.it/93rnx65xlnt41.jpg',
  'https://i.redd.it/3s4zzev8rk3a1.jpg',
  'https://i.redd.it/65d04hyt6ta61.jpg',
  'https://i.redd.it/g1qf2tmxowo41.jpg',
  'https://i.redd.it/12xmb2sd03g71.jpg',
  'https://i.redd.it/kn262akn3a861.jpg',
  'https://i.redd.it/lf991wcrj8m91.jpg',
  'https://i.redd.it/w6nn39oulye71.jpg',
  'https://i.redd.it/z7h0f6anqk651.jpg',
  'https://i.redd.it/fjdwgg8m5si91.jpg',
  'https://i.redd.it/4g8gcy8jg5z91.png',
  'https://i.redd.it/l0zxldtvos291.jpg',
  'https://i.redd.it/9ukbyplufb551.jpg',
  'https://i.redd.it/88vze3p31ao91.jpg',
  'https://i.redd.it/3opm17xb3q361.png',
  'https://i.redd.it/ndn1zdf48ap51.jpg',
  'https://i.redd.it/qnpjcav5cwu91.jpg',
  'https://i.redd.it/ixcvjamsvn571.jpg',
  'https://i.redd.it/0a1r19pkaj1a1.jpg',
  'https://i.redd.it/xcobjmevqj571.jpg',
  'https://i.redd.it/24t020kwkt0a1.jpg',
  'https://i.redd.it/f0wh22ui2op51.jpg',
  'https://i.redd.it/lmpap2b2lu571.jpg',
  'https://i.redd.it/o7ypd9z1x2z81.jpg',
  'https://imgur.com/JDCGwV8.jpg',
  'https://i.redd.it/4x4roivfbhd51.jpg',
  'https://i.imgur.com/XJE3MK4.jpg',
  'https://i.redd.it/8g2yrn0lanc51.jpg',
  'https://i.redd.it/a7xahwytg3o61.jpg',
  'https://i.redd.it/yurtnekx88h61.jpg',
  'https://i.redd.it/vlus067kp3i71.jpg',
  'https://i.redd.it/8i1au6e1ifc61.png',
  'https://i.redd.it/dfdmrrzlohg61.jpg',
  'https://i.redd.it/z6mrf5o4r2651.jpg']
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