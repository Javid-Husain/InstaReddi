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
  const memes = ['https://i.redd.it/fzcdpebcrxb51.jpg',
  'https://i.redd.it/d6xsnb8kx9a51.jpg',
  'https://i.redd.it/3efozzpihlb51.jpg',
  'https://i.redd.it/wyj5zlyz3ne51.png',
  'https://i.redd.it/7cw1ehccalh51.jpg',
  'https://i.redd.it/3owt3gq03y661.jpg',
  'https://i.redd.it/7w3ad0oa1rc51.jpg',
  'https://i.imgur.com/byKrBFn.jpg',
  'https://i.redd.it/s5940qq8kfb51.jpg',
  'https://i.redd.it/ll3qi8zy1uh51.jpg',
  'https://i.redd.it/xsqaxhrioep61.jpg',
  'https://i.redd.it/5ekqe4fuq2b51.jpg',
  'https://i.redd.it/8b3q2yia0x761.jpg',
  'https://i.redd.it/01iv74lhsq451.jpg',
  'https://i.redd.it/lg1ty11bu7c51.jpg',
  'https://i.redd.it/yu9c02844fk21.jpg',
  'https://i.redd.it/yp71smfnfve41.jpg',
  'https://i.redd.it/9qxuuef8ivl41.jpg',
  'https://i.redd.it/fqvs10caa4e51.jpg',
  'https://i.redd.it/eazf62qts3s51.jpg',
  'https://i.redd.it/ox5bjd11bw681.jpg',
  'https://i.redd.it/kgryuzv84c991.jpg',
  'https://i.redd.it/mogkqvyy83k51.jpg',
  'https://i.redd.it/xepnpb7flum41.jpg',
  'https://i.redd.it/f7kl72qz66g41.jpg',
  'https://i.redd.it/2yfcks5ytr261.jpg',
  'https://i.redd.it/cy6vnqh045y61.jpg',
  'https://i.redd.it/3lq362zvju951.jpg',
  'https://i.redd.it/xf25w3tn2o551.jpg',
  'https://i.redd.it/yji4aeq5q8d51.jpg',
  'https://i.redd.it/9uv54699r9s51.jpg',
  'https://i.redd.it/y1gvhsjumer61.jpg',
  'https://i.redd.it/k3isyai433e61.jpg',
  'https://i.redd.it/7t5v57n9t0c51.jpg',
  'https://i.redd.it/ss4j4ydbenv51.jpg',
  'https://i.redd.it/znie5reu7pg41.jpg',
  'https://i.redd.it/j5ltnxv8xkr91.jpg',
  'https://i.redd.it/2p3v2azmd0961.jpg',
  'https://i.redd.it/qzaxeh2d6lh61.jpg',
  'https://i.redd.it/t8ejkkl171c51.png',
  'https://i.redd.it/4psd88ypuka81.jpg',
  'https://i.redd.it/93mr60qejql61.jpg',
  'https://i.redd.it/8l2v7mwf7fn51.jpg',
  'https://i.redd.it/ighkj2ff3j751.jpg',
  'https://i.redd.it/i6dz8vl8njg41.jpg',
  'https://i.redd.it/cu6ujlg28hr81.jpg',
  'https://i.redd.it/j0wl6a2b9p981.jpg',
  'https://i.redd.it/pie3ofy8vta51.jpg',
  'https://i.redd.it/920mw9zqgu771.jpg',
  'https://i.redd.it/6o2kwrsqiye51.jpg',
  'https://i.redd.it/3gukys8pizr61.jpg',
  'https://i.redd.it/6wpve14zfsf41.jpg',
  'https://i.redd.it/1ze7zihj2y481.jpg',
  'https://i.redd.it/9huftczsb5a61.jpg',
  'https://i.imgur.com/c2ZMPBm.jpg',
  'https://i.redd.it/p2ks2tm326561.jpg',
  'https://i.redd.it/c853gpn9fpf31.jpg',
  'https://i.redd.it/focbno79qkf51.jpg',
  'https://i.imgur.com/FzRWBEc.jpg',
  'https://i.redd.it/zq8o77ngp6981.jpg',
  'https://i.redd.it/musdqyk90b941.jpg',
  'https://i.imgur.com/xYf2S5f.jpg',
  'https://i.redd.it/km68ps8zewm51.jpg',
  'https://i.redd.it/he7wdck16l761.jpg',
  'https://i.redd.it/1n98zsvkelc91.jpg',
  'https://i.redd.it/gj3jfothx3w81.jpg',
  'https://i.redd.it/lvuvux0xoz991.png',
  'https://i.redd.it/aqfwoa4az4x91.png',
  'https://i.redd.it/miihape3mu271.jpg',
  'https://i.redd.it/c4dbrmn5c6x61.jpg',
  'https://i.redd.it/f6nc2d4fi8891.jpg',
  'https://i.redd.it/7g5tqa8xw3241.jpg',
  'https://i.redd.it/kfekjr96a7j81.jpg',
  'https://i.redd.it/gcue1kp797t61.jpg',
  'https://i.redd.it/3xa5mz28iec91.jpg',
  'https://i.redd.it/ws5l54wysjm51.jpg',
  'https://i.redd.it/zf8kmxuo7fg51.png',
  'https://i.redd.it/ch4835lu45d51.jpg',
  'https://i.redd.it/p0eqzxp0vzd61.png',
  'https://i.redd.it/qi6tbkh53k451.jpg',
  'https://i.redd.it/zlzwturwrv191.jpg',
  'https://i.redd.it/m3fx9unvwcu71.jpg',
  'https://i.redd.it/6jp06r0muna31.jpg',
  'https://i.redd.it/ssctcfprg5b81.jpg',
  'https://i.redd.it/gg4bys6cy1k41.jpg',
  'https://i.redd.it/3r6rspfaco171.jpg',
  'https://i.redd.it/20j9b4z1gzn41.jpg',
  'https://i.redd.it/hrx4a397wtd61.jpg',
  'https://i.redd.it/wcy0d8zurwm21.png',
  'https://i.redd.it/siyzwyc7myk51.jpg',
  'https://i.redd.it/5ik3euu62ix81.jpg',
  'https://imgur.com/GfAuqSv.jpg',
  'https://i.redd.it/5p2bie0lgsb91.jpg',
  'https://i.redd.it/qkbosfqbjw081.jpg',
  'https://i.redd.it/27n1xhsxxqj51.jpg',
  'https://i.redd.it/0m2ow17nkxn81.jpg',
  'https://i.redd.it/w49nhkrwj4681.jpg',
  'https://i.redd.it/5mhzbszacfz91.jpg',
  'https://i.redd.it/uxscua0wn1w41.jpg',
  'https://i.imgur.com/7ZGvuTK.jpg',
  'https://i.imgur.com/aGbjxqH.jpg',
  'https://i.redd.it/sa8prmtxkwr51.jpg',
  'https://i.redd.it/oieevyjzo8d21.jpg',
  'https://i.redd.it/s08qxdhavg251.jpg',
  'https://i.redd.it/pq3869v4ibe61.jpg',
  'https://i.redd.it/0cpvkfqn6tk51.jpg',
  'https://i.redd.it/dwdt08d98lb51.jpg',
  'https://i.redd.it/3sbhj2jn1hf91.png',
  'https://i.redd.it/0qbw1hjxb4z81.jpg',
  'https://i.redd.it/8xv0i2o95ve81.jpg',
  'https://i.redd.it/egn9998cpvi91.png',
  'https://i.redd.it/mof696vv9bc51.jpg',
  'https://i.redd.it/z0srqmhgqoi81.png',
  'https://i.redd.it/xfscn20etma61.png',
  'https://i.redd.it/4636w12xp9k51.jpg',
  'https://i.redd.it/pq3uwx1oz4291.png',
  'https://i.redd.it/30bsij3rha161.png',
  'https://i.redd.it/u8fgkmncuwq91.jpg',
  'https://i.redd.it/6pg1yhfr6wg91.jpg',
  'https://i.redd.it/4donz7fh3je61.jpg',
  'https://i.redd.it/tydtyopd81j51.jpg',
  'https://i.redd.it/nq6mt5nqamm81.jpg',
  'https://i.redd.it/hoteav5562z71.jpg',
  'https://i.redd.it/vxnap778kpf61.jpg',
  'https://i.redd.it/p1p88tchtn891.jpg',
  'https://i.redd.it/fd1ww9l15ed81.jpg',
  'https://i.imgur.com/5OZuA7A.jpg',
  'https://i.redd.it/ygu319pwip481.jpg',
  'https://i.redd.it/ggiudpc1qfj51.jpg',
  'https://i.imgur.com/sStej6a.png',
  'https://i.redd.it/whms1grw1xd81.jpg',
  'https://i.redd.it/gptllddllvf51.jpg',
  'https://i.redd.it/vogrwt2c0qd51.png',
  'https://i.redd.it/m2juodglfpc81.jpg',
  'https://i.redd.it/k1fly1z7oq951.jpg',
  'https://i.redd.it/gf5iw847vai51.jpg',
  'https://i.redd.it/990t96czlf441.jpg',
  'https://i.redd.it/pdc8219gb2981.jpg',
  'https://i.redd.it/mvp6b0sh5po51.jpg',
  'https://i.redd.it/bdxpy96bryj51.png',
  'https://i.redd.it/zd50jxhkuot21.jpg',
  'https://i.redd.it/kyd87ko2kqc71.jpg',
  'https://i.redd.it/ikizd5alyci61.png',
  'https://i.redd.it/bybpp5bu7mq91.png',
  'https://i.redd.it/q5xoz8ahwlk81.png',
  'https://i.redd.it/5l7xqfjh38471.jpg',
  'https://i.redd.it/pcqkseoh6bz61.jpg',
  'https://i.redd.it/0v3x9fhjio621.png',
  'https://i.redd.it/cmnw41njx8b91.jpg',
  'https://i.redd.it/ccucg7inyjz61.jpg',
  'https://i.redd.it/3bgmoo7hwn991.jpg',
  'https://i.redd.it/hp0vp2lnj5391.jpg',
  'https://i.redd.it/bai9pnrlmaw81.jpg',
  'https://i.imgur.com/kATJZVJ.jpg',
  'https://i.redd.it/lpab0dvmoqt81.jpg',
  'https://i.redd.it/ur9tjud24mw81.jpg',
  'https://i.redd.it/68t30aw2tdn81.jpg',
  'https://i.redd.it/oo214kkh76181.jpg',
  'https://i.redd.it/wjcnfopoaft71.jpg',
  'https://i.redd.it/bjuc5whf5qc61.jpg',
  'https://i.redd.it/xovm80v7grc91.jpg',
  'https://i.redd.it/zeli5z2fq1261.jpg',
  'https://i.redd.it/pjrgxfx0hyy21.jpg',
  'https://i.redd.it/xdwmx1bp50u91.jpg',
  'https://i.redd.it/crw5838uimd51.jpg',
  'https://i.redd.it/npsw2g31r1b51.jpg',
  'https://i.redd.it/7dn97pf0rct81.jpg',
  'https://i.redd.it/v6euj29w4g081.jpg',
  'https://i.redd.it/sjhocchss3151.jpg',
  'https://i.redd.it/y7yl7g1t45w61.jpg',
  'https://i.imgur.com/UDrdJVd.jpg',
  'https://i.redd.it/aatz3n9bbaj51.png',
  'https://i.redd.it/s3ewtoxso9c51.jpg',
  'https://i.redd.it/mb2l4bk5w8a91.jpg',
  'https://i.redd.it/gt26k9pac3u81.jpg',
  'https://i.redd.it/yuu5gnacrt681.jpg',
  'https://i.imgur.com/TSvchK6.jpg',
  'https://i.redd.it/a0m5dscy9b341.jpg',
  'https://i.redd.it/1xuvmtkdufn91.jpg',
  'https://i.redd.it/xq945un3z9m91.jpg',
  'https://i.redd.it/b75zthcauz281.jpg',
  'https://i.redd.it/ypt4qo0gbmr71.jpg',
  'https://i.redd.it/slwyz695lss51.jpg',
  'https://i.redd.it/eronj2l7z0281.jpg',
  'https://i.imgur.com/91lt8fn.jpg',
  'https://i.redd.it/v9z5zxhtg2v41.jpg',
  'https://i.redd.it/pbk7iajvogm41.jpg',
  'https://i.redd.it/nwcs0wwo91861.jpg',
  'https://i.redd.it/f2naqhj93dv51.jpg',
  'https://i.redd.it/mnu9tf2o15q81.jpg',
  'https://i.redd.it/e58hpsck8z961.jpg',
  'https://i.redd.it/u3nqr5edl3v51.jpg',
  'https://i.redd.it/q1nx4mrmg6v91.jpg',
  'https://i.redd.it/4powalwflnp91.jpg',
  'https://i.redd.it/h8o208p86s581.jpg',
  'https://i.redd.it/vvcxzijwqry61.jpg',
  'https://i.redd.it/uy2y6gdk7mc61.jpg',
  'https://i.redd.it/mdk2v3w1n7t41.jpg',
  'https://i.redd.it/958nhyldn4491.jpg',
  'https://i.redd.it/ylkzhg51jsz81.jpg',
  'https://i.redd.it/5pkfvx96mzy71.jpg',
  'https://i.redd.it/1dcbx815u2b61.jpg',
  'https://i.redd.it/z0lzq2gvw3z51.jpg',
  'https://i.redd.it/ps1nayojwvm61.jpg',
  'https://i.redd.it/q79igt7fl51a1.jpg',
  'https://i.redd.it/la8jj3i8xyd91.jpg',
  'https://i.redd.it/gag6wuck2xi81.jpg',
  'https://i.redd.it/8xa40136gju31.png',
  'https://i.redd.it/yagowh6r08y51.jpg',
  'https://i.redd.it/8poktccpnr251.jpg',
  'https://i.redd.it/qfs8u5wo7si31.jpg',
  'https://i.redd.it/2x441lldsww11.png',
  'https://i.redd.it/lywlfp380cw91.jpg',
  'https://i.redd.it/y95243ur46c91.jpg',
  'https://i.redd.it/rimkaroniiu91.jpg',
  'https://i.redd.it/x1vimyvkn3371.jpg',
  'https://i.redd.it/uf8xtgexvcn61.jpg',
  'https://i.redd.it/c3wf4z6m7fh51.jpg',
  'https://i.redd.it/pp37kv08ck791.jpg',
  'https://i.imgur.com/4HuVnPh.jpg',
  'https://i.redd.it/phqyu26zv1191.jpg',
  'https://i.redd.it/8ji0wj8280i81.jpg',
  'https://i.redd.it/ezqk26jldph81.jpg',
  'https://i.redd.it/t0zn3wpurpt71.jpg',
  'https://i.redd.it/d3hg5lviiyx81.jpg',
  'https://i.redd.it/zjq6eniot7g81.jpg',
  'https://i.redd.it/009b7vyzh6281.jpg',
  'https://i.redd.it/kb9gyv5u9yh71.jpg',
  'https://i.redd.it/fu7dl7axws861.jpg',
  'https://i.redd.it/63sbi0e8n2b91.jpg',
  'https://i.redd.it/5ns9b5rs06s91.jpg',
  'https://i.redd.it/3xbwcd3joo591.jpg',
  'https://i.redd.it/ij1flestf9b61.jpg',
  'https://i.imgur.com/sQOwEBz.jpeg',
  'https://i.redd.it/azwxtw4gx6p91.jpg',
  'https://i.redd.it/lohoafbz2mb91.png',
  'https://i.redd.it/ksvrnvfypgb81.jpg',
  'https://i.redd.it/p13nhbh421p91.jpg',
  'https://i.redd.it/qp0sagon0xe91.jpg',
  'https://i.redd.it/vxgp293azfa91.jpg',
  'https://i.redd.it/4zrcdydnh1591.jpg',
  'https://i.redd.it/wil7wg8w6gf81.jpg',
  'https://i.redd.it/i1jf11jxd1781.jpg',
  'https://i.redd.it/kmnscvevmrd71.jpg',
  'https://i.redd.it/pr8guepjw9371.jpg',
  'https://i.redd.it/9mim11hb62v91.jpg',
  'https://i.redd.it/ysx9jt5p1ax81.jpg',
  'https://i.redd.it/aa0ft8r6nhq51.png',
  'https://i.redd.it/zh6t5t69n1431.jpg',
  'https://i.redd.it/s451ghkoomz91.jpg',
  'https://i.redd.it/85usms3jnvo91.jpg',
  'https://i.redd.it/drkj59sf9ox71.jpg',
  'https://i.redd.it/s6j9vvm8dmv71.jpg',
  'https://i.redd.it/3fjoqhf9lor51.jpg',
  'https://i.redd.it/7p7z1njh62f51.jpg',
  'https://i.redd.it/lqw3j598m3g41.jpg',
  'https://i.redd.it/xcdfynkzlsa91.jpg',
  'https://i.redd.it/mndgi081y8771.jpg',
  'https://i.redd.it/buvsowu19v571.jpg',
  'https://i.redd.it/epk4kf894hy51.jpg',
  'https://i.redd.it/v5c6y84kwpz81.jpg',
  'https://i.redd.it/jl04f8ow4eq81.jpg',
  'https://i.redd.it/lia4s6jf2k381.jpg',
  'https://i.redd.it/j3jeiwduqee51.jpg',
  'https://i.redd.it/5ilw7mno4ja51.jpg',
  'https://i.redd.it/5778pvuwszk31.jpg',
  'https://i.redd.it/ogf6ei2dkis91.jpg',
  'https://i.redd.it/xnoubcpu39w61.jpg',
  'https://i.imgur.com/itU6NOy.jpg',
  'https://i.redd.it/2iebh5biltz41.jpg',
  'https://i.redd.it/3nswzpbornn61.jpg',
  'https://i.redd.it/78454tp17pl51.jpg',
  'https://i.redd.it/wdtbdv8331791.jpg',
  'https://i.redd.it/x1u6pbkzg9s71.jpg',
  'https://i.imgur.com/ASHLb01.jpg',
  'https://i.redd.it/g0xn95vzxt961.jpg',
  'https://i.redd.it/baconlt0uzl81.jpg',
  'https://i.redd.it/36myqy0j11781.jpg',
  'https://i.redd.it/gv8tpkfliob81.jpg',
  'https://i.redd.it/t08iq1qd2gx71.jpg',
  'https://i.redd.it/1i7gn0blmse51.jpg',
  'https://i.redd.it/127sb6lswmk21.jpg',
  'https://i.redd.it/so9c5enanux81.jpg',
  'https://i.redd.it/tk58hqx1suo51.jpg',
  'https://i.redd.it/qblwgfvlflt91.jpg',
  'https://i.redd.it/o1eo02pjz7b91.jpg',
  'https://i.redd.it/rwhjkhdscqm51.jpg',
  'https://i.redd.it/5stld3jhsfd51.jpg',
  'https://i.redd.it/j4kfzg914kl91.jpg',
  'https://i.redd.it/ennnzxufflj91.jpg',
  'https://i.redd.it/iw0d6sph9vj81.jpg',
  'https://i.redd.it/2t66cfa1u8e81.png',
  'https://i.redd.it/bcfgqaoz2d181.jpg',
  'https://i.redd.it/ci974ldpnma51.jpg',
  'https://i.redd.it/2i0exvmxu7k81.jpg',
  'https://i.redd.it/iy38c62v2k181.jpg',
  'https://i.redd.it/z0jn8q1i9vr71.jpg',
  'https://i.redd.it/9c7t1huw7id61.jpg',
  'https://i.redd.it/ri654wu2e5261.jpg',
  'https://i.redd.it/ew59yvg239d91.jpg',
  'https://i.redd.it/ggfdq4a691391.jpg',
  'https://i.redd.it/h0x5cj2acit81.jpg',
  'https://i.redd.it/jqx3iupfhjc81.jpg',
  'https://i.redd.it/lobqtf8de4n51.jpg',
  'https://i.redd.it/qblbxg6nnuy31.jpg',
  'https://i.redd.it/m6ryega4p7m81.jpg',
  'https://i.redd.it/3yd2w4301ki51.jpg',
  'https://i.redd.it/qeoazqdyc1t91.png',
  'https://i.redd.it/9zi8nlbmt5d91.jpg',
  'https://i.redd.it/m3ghmz8bfn491.png',
  'https://i.redd.it/kopc0btr1a171.jpg',
  'https://i.redd.it/jotpe1qhpk651.jpg',
  'https://i.redd.it/o4iadvu2fs1a1.jpg',
  'https://i.redd.it/jfzcsfacnhh91.jpg',
  'https://i.imgur.com/wePqO7X.jpg',
  'https://i.redd.it/myqw7ro6ff481.jpg',
  'https://i.redd.it/ezc82yuxmil51.png',
  'https://i.redd.it/0g6byn1q5lk41.jpg',
  'https://i.redd.it/94rbj5ugyiu81.jpg',
  'https://i.redd.it/tlky0atcr2q71.jpg',
  'https://i.redd.it/9b7skz39fw961.png',
  'https://i.redd.it/hxo3chdi4bq51.jpg',
  'https://i.redd.it/yi1epnjnv5i91.jpg',
  'https://i.redd.it/bazvjsb242991.jpg',
  'https://i.redd.it/4ahv5gaqt7c71.jpg',
  'https://i.redd.it/4r2ionpkw9d21.jpg',
  'https://i.redd.it/csnomkv9ucw91.png',
  'https://i.redd.it/akj7wq4ybjh91.jpg',
  'https://i.redd.it/hnjpldxwazk81.jpg',
  'https://i.redd.it/8q7jo8rqd5781.jpg',
  'https://i.redd.it/qzxfv2u8lhf51.jpg',
  'https://i.redd.it/565tow3saa651.jpg',
  'https://i.redd.it/k8eev0wgw0z91.jpg',
  'https://i.redd.it/b154ksxfu4581.jpg',
  'https://i.redd.it/j1vjx169e2c31.jpg',
  'https://i.redd.it/1neq1mffjqg81.jpg',
  'https://i.redd.it/11bnhsvae7x71.jpg',
  'https://i.redd.it/w0p341jt1b361.jpg',
  'https://i.redd.it/a0vloqy2bxw51.jpg',
  'https://i.imgur.com/V2sKnAN.jpg',
  'https://i.redd.it/q3e16p9i58b51.jpg',
  'https://i.redd.it/18nmrnew90551.jpg',
  'https://i.redd.it/405szcnre9351.png',
  'https://i.redd.it/nt2bjcr7qcy41.jpg',
  'https://i.redd.it/m4pt0tblcw141.jpg',
  'https://i.redd.it/hckxdptymy381.jpg',
  'https://i.redd.it/knsv97iuxka61.jpg',
  'https://i.redd.it/4ybnkjrax9v41.jpg',
  'https://i.redd.it/mhir0d9jx7t21.jpg',
  'https://i.redd.it/88kbmmao7jx61.jpg',
  'https://i.redd.it/480imo29ajm61.jpg',
  'https://i.redd.it/1wzlc1egdjz41.jpg',
  'https://i.redd.it/6vyyq4ad9k251.jpg',
  'https://i.redd.it/7lstznk0pcp41.jpg',
  'https://i.redd.it/7btz5g0fhlv21.png',
  'https://i.redd.it/6cyhw2dlfgx91.jpg',
  'https://media.gab.com/system/media_attachments/files/109/289/623/original/85eb7eda43a06703.jpg',
  'https://i.redd.it/7y7ufcdgyn291.jpg',
  'https://i.redd.it/c021401ugy781.png',
  'https://i.redd.it/u88sn5uj08x51.jpg',
  'https://i.redd.it/28kx2gpy7vc51.jpg',
  'https://i.redd.it/ui87ln8iixi31.jpg',
  'https://i.redd.it/lr94shwq1ze31.jpg',
  'https://i.redd.it/q0q127k2y8091.png',
  'https://i.redd.it/rj9wmfutnvn71.jpg',
  'https://i.redd.it/56idznzriup61.jpg',
  'https://i.redd.it/8hdt1f75kqp41.jpg',
  'https://i.redd.it/38jj3tj66ev91.jpg',
  'https://i.redd.it/wibv3yzjqup91.jpg',
  'https://i.redd.it/pioezcyipbg91.jpg',
  'https://i.redd.it/6voku5f4tze91.jpg',
  'https://i.redd.it/8mbr92b28bi81.jpg',
  'https://i.redd.it/2806kh2sbm981.jpg',
  'https://i.redd.it/nhovjh5lidl71.jpg',
  'https://i.redd.it/0taasantmqk71.jpg',
  'https://i.redd.it/2kw9emfuhg171.jpg',
  'https://i.redd.it/omki2197r2851.png',
  'https://i.imgur.com/t0Au4E1.jpg',
  'https://i.redd.it/0cd7k5iqxuw31.jpg',
  'https://i.redd.it/6kxtxa6i9et91.jpg',
  'https://i.redd.it/d05d030bkuc91.jpg',
  'https://i.redd.it/jgtqp4tx8v091.jpg',
  'https://i.redd.it/w85919j70mc81.jpg',
  'https://i.redd.it/w7azmez9bva81.jpg',
  'https://i.redd.it/cmkc73cnizz71.jpg',
  'https://i.redd.it/84yjza1q24771.jpg',
  'https://i.redd.it/4e3imvxsp0v61.jpg',
  'https://i.redd.it/skdm7rom0uu61.jpg',
  'https://i.redd.it/ddybn8knw4g61.jpg',
  'https://i.redd.it/66jzeu93sve61.jpg',
  'https://i.redd.it/f2tt1z0zw6q51.jpg',
  'https://i.redd.it/n4yvt9bgptb51.jpg',
  'https://i.redd.it/c62r3gsnzgw41.jpg',
  'https://i.redd.it/wvbyzjxtx9041.jpg',
  'https://i.redd.it/062820z2vns91.jpg',
  'https://i.redd.it/ncqckucp5m391.jpg',
  'https://i.redd.it/wrkgl3vqzo881.jpg',
  'https://i.redd.it/lhxrp0w21xj71.jpg',
  'https://i.redd.it/cqjr88sft0671.jpg',
  'https://i.redd.it/21qmcfu01xx61.jpg',
  'https://i.redd.it/u1gnjwo9wer91.jpg',
  'https://i.redd.it/bzdg6ljtuxh91.jpg',
  'https://i.redd.it/885zkmfapd591.jpg',
  'https://i.redd.it/k8rtguxg25m81.jpg',
  'https://i.redd.it/hnkl3d8w4ar51.jpg',
  'https://i.imgur.com/1nNSRSf.jpg',
  'https://i.redd.it/tx0zte4023g51.jpg',
  'https://i.redd.it/iafbf7tqxuy91.jpg',
  'https://i.redd.it/g8a3zoasnqx91.jpg',
  'https://i.redd.it/fc0xl6vlwbb81.jpg',
  'https://media.gab.com/system/media_attachments/files/085/412/911/original/e678e17a8fc21784.jpg',
  'https://i.redd.it/u4xlxssb6oj71.jpg',
  'https://i.redd.it/7wukom3jbb671.jpg',
  'https://i.redd.it/38uuaj6vshp51.jpg',
  'https://i.redd.it/gpxhfzd40m931.jpg',
  'https://i.redd.it/c2edk0xw6g781.jpg',
  'https://i.redd.it/vwp99ctvdd681.jpg',
  'https://i.redd.it/h5b9cud8cgz71.jpg',
  'https://i.redd.it/tml6fuq98tu71.jpg',
  'https://i.redd.it/u54i8etjg2q61.jpg',
  'https://i.redd.it/vvv3pok0b7n61.jpg',
  'https://i.redd.it/fphusgsq4jr51.png',
  'https://i.redd.it/oepn36ziblu91.jpg',
  'https://i.redd.it/tuu0k88v7mk91.jpg',
  'https://i.redd.it/10xg13xtdyi61.jpg',
  'https://i.redd.it/goeh96o22ji91.jpg',
  'https://i.redd.it/s6d7g4xqqsy81.jpg',
  'https://i.redd.it/ghx4pwlfzwg81.jpg',
  'https://i.redd.it/7qlsgajdxi581.jpg',
  'https://i.imgur.com/AfVjD3I.jpg',
  'https://i.redd.it/x59m9ebs8zw61.png',
  'https://i.redd.it/pstv3px76ms61.jpg',
  'https://i.redd.it/5vzx3xldrer51.jpg',
  'https://i.redd.it/n93jr51wzw351.jpg',
  'https://i.redd.it/17d7muuqr7831.jpg',
  'https://i.redd.it/z669hxiprjm91.jpg',
  'https://i.redd.it/04lhtl7092091.png',
  'https://i.redd.it/xfktz283s6u71.png',
  'https://i.redd.it/r06cnf0abgk61.jpg',
  'https://i.redd.it/skyw4wetyn751.jpg',
  'https://i.redd.it/nt578yzzko341.jpg',
  'https://i.redd.it/hfse7vgt0tr91.jpg',
  'https://i.imgur.com/S90i1mY.png',
  'https://i.redd.it/23hdvucmp0k81.jpg',
  'https://i.redd.it/kvet61zo89i81.jpg',
  'https://i.redd.it/2yefsjkqa8a81.png',
  'https://i.redd.it/xrd63otfp2o71.jpg',
  'https://i.imgur.com/0T6OwC9.png',
  'https://i.redd.it/67t19zla3e261.jpg',
  'https://i.redd.it/evdvt2f1o1z51.png',
  'https://i.redd.it/mnyr3imqmaa41.jpg',
  'https://i.redd.it/idqhbukw1bj91.jpg',
  'https://i.redd.it/p4hr4s6mtga81.png',
  'https://i.imgur.com/o2oIffz.jpg',
  'https://i.redd.it/u6an7x9rj8j61.jpg',
  'https://i.redd.it/6krznl4oabh51.png',
  'https://i.redd.it/6fovqvib25j41.jpg',
  'https://i.redd.it/frvpx9uw6cu31.jpg',
  'https://i.redd.it/evcua6w94gy81.jpg',
  'https://i.redd.it/fqfqg1uxvyq81.jpg',
  'https://i.redd.it/7d45gqhv08e71.jpg',
  'https://i.redd.it/u7vqs7r1pl971.jpg',
  'https://i.redd.it/jv5462sfhg771.png',
  'https://i.redd.it/7s7zd3qjbdh61.jpg',
  'https://i.redd.it/jgwirivwo8t51.jpg',
  'https://i.redd.it/vkq7u7xos3u91.jpg',
  'https://i.redd.it/dozcea2m13m71.jpg',
  'https://i.redd.it/s2ixhuk6uuh61.jpg',
  'https://i.redd.it/xqaaz3jybof61.jpg',
  'https://i.redd.it/f763juo5opn51.jpg',
  'https://i.redd.it/dq0wawljsb2a1.jpg',
  'https://i.redd.it/9n5093z4btf91.jpg',
  'https://i.redd.it/pv11543zy0d81.jpg',
  'https://i.redd.it/ihj8wy2rr9c81.jpg',
  'https://i.redd.it/rec32jn3bn281.jpg',
  'https://i.redd.it/mjv7tn2zxzm61.jpg',
  'https://i.redd.it/pp67s39vykk51.jpg',
  'https://i.redd.it/hfcka0w4rbo41.jpg',
  'https://i.redd.it/4mi1d7mvnum91.jpg',
  'https://i.redd.it/vv1hk0doqfe91.jpg',
  'https://i.redd.it/e0a8q99vlpj81.jpg',
  'https://i.redd.it/g22dp75y6o481.jpg',
  'https://i.redd.it/s949kevdpfi71.jpg',
  'https://i.redd.it/3uksvo455kt61.jpg',
  'https://i.redd.it/joduz0798hs61.jpg',
  'https://i.redd.it/1iukjxcvoj861.jpg',
  'https://i.redd.it/sh0x16521p661.jpg',
  'https://i.redd.it/30t9d3d760361.jpg',
  'https://i.redd.it/j9r00p9tsbb51.jpg',
  'https://i.redd.it/qijtvg352m3a1.jpg',
  'https://i.redd.it/5caf7q1j8t1a1.jpg',
  'https://media.gab.com/system/media_attachments/files/109/341/797/original/34c5549f555a9810.png',
  'https://i.redd.it/f9qtyv40yv391.jpg',
  'https://i.redd.it/50r6wz2llg081.png',
  'https://i.redd.it/egykj9tsosv71.jpg']
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