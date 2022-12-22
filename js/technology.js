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
  const memes = ['https://i.redd.it/pvso1pmnoi731.png',
  'https://i.redd.it/165wyhiicn731.jpg',
  'https://i.redd.it/rvlx7tb3tq551.jpg',
  'https://i.redd.it/kgbw91yc3j231.jpg',
  'https://i.redd.it/m2xze6fajq931.png',
  'https://i.redd.it/pvvj2i5qhmv51.jpg',
  'https://i.redd.it/25ilqkaup5m01.png',
  'https://i.redd.it/ump63js6j4961.png',
  'https://i.redd.it/gz7g82g6dz131.jpg',
  'https://i.imgur.com/0IgT2nZ.png',
  'https://i.redd.it/zmniqv2npbv31.png',
  'https://i.redd.it/8tb08g4bvfx51.jpg',
  'https://i.redd.it/rusn6rz8wgv31.png',
  'https://i.redd.it/xs97n8p1xeg31.png',
  'https://i.redd.it/mcmfb5qc9lm61.jpg',
  'https://i.redd.it/vhzs8plj62931.jpg',
  'https://i.redd.it/6ev627veiss21.jpg',
  'https://i.redd.it/qhglrzuq6lp31.jpg',
  'https://i.redd.it/srck2931dyp51.jpg',
  'https://i.redd.it/hss7m78xwh161.jpg',
  'https://i.redd.it/tywtve79imf31.png',
  'https://i.redd.it/bndlc9pphmc31.jpg',
  'https://i.redd.it/1x4nkdqye9c51.jpg',
  'https://i.redd.it/gi5gy3h41qn51.png',
  'https://i.redd.it/uk5mbpybp6q31.jpg',
  'https://i.redd.it/roelpssm4xi01.jpg',
  'https://i.imgur.com/OtiCdxL.jpg',
  'https://i.redd.it/dkkw1rj8rey51.jpg',
  'https://i.redd.it/1823fwydi4461.jpg',
  'https://i.redd.it/a6ldfc3mp1631.jpg',
  'https://i.redd.it/ovuz6j10m4131.jpg',
  'https://i.redd.it/il920ze1ruk31.png',
  'https://i.redd.it/xbu91dmdl5741.jpg',
  'https://i.redd.it/ojuqn3gedpk51.png',
  'https://i.redd.it/yw7c9g172ga31.png',
  'https://i.redd.it/p6dqz5asi5x51.jpg',
  'https://i.redd.it/ti0vcb7k75m31.jpg',
  'https://i.redd.it/h90dvga399r61.jpg',
  'https://i.redd.it/4rnuqh8pep431.jpg',
  'https://i.redd.it/5qgoy4brcn851.png',
  'https://i.redd.it/zzjg6abtnev51.png',
  'https://i.redd.it/8ptp48d99le61.png',
  'https://i.redd.it/luw6y2aey1h31.jpg',
  'https://i.redd.it/a4uy2gq0rqw21.jpg',
  'https://i.redd.it/xd9voi4c3xd61.jpg',
  'https://i.redd.it/qqtpldms5re11.jpg',
  'https://i.redd.it/jmpj8rd2lrw41.png',
  'https://i.redd.it/2xeomld9crj01.png',
  'https://i.redd.it/6ocdhgfgwog41.jpg',
  'https://i.redd.it/t275jusmowz11.jpg',
  'https://i.redd.it/2gtsulab8ka31.png',
  'https://i.redd.it/5rvt7wz2ot761.jpg',
  'https://i.redd.it/y7a1sq8r46d41.jpg',
  'https://i.redd.it/ekc2r99ds9f61.jpg',
  'https://i.redd.it/orrrxuzascm31.jpg',
  'https://i.redd.it/e2d20pxnnoj61.png',
  'https://i.redd.it/lak9od311mv61.jpg',
  'https://i.redd.it/580gia428h061.jpg',
  'https://i.redd.it/697rnx506uv31.jpg',
  'https://i.redd.it/c2qyjdgskvl51.jpg',
  'https://i.imgur.com/jrhWbOy.jpg',
  'https://i.redd.it/nwzo2bqzqx031.jpg',
  'https://i.redd.it/mvtizs25fg831.jpg',
  'https://i.redd.it/7dbff3j76u451.jpg',
  'https://i.redd.it/ibo08trldww31.png',
  'https://i.redd.it/whf02o6ih2531.jpg',
  'https://i.redd.it/q0uik2xrybh51.png',
  'https://i.redd.it/zspd0tgh8nu61.jpg',
  'https://i.redd.it/lal1b6io1uw51.jpg',
  'https://i.redd.it/3wymm4ktpf901.jpg',
  'https://i.redd.it/s078c96mfav51.png',
  'https://i.redd.it/1v0k7uhhi6p31.jpg',
  'https://i.redd.it/n2x3juchgjl31.jpg',
  'https://i.redd.it/3qhq068c0cq31.jpg',
  'https://i.redd.it/gspvb5remw731.jpg',
  'https://i.redd.it/rhq4fgag19c31.jpg',
  'https://i.redd.it/jwb4apsix1s31.jpg',
  'https://i.redd.it/wj0zokyg1r861.jpg',
  'https://i.redd.it/k7hrdj1u8i831.jpg',
  'https://i.redd.it/pqhr9sbmjjn51.jpg',
  'https://i.redd.it/iydpt2hj6mq61.png',
  'https://i.redd.it/p04ri4bmlxn31.jpg',
  'https://i.redd.it/uu4prp2q9ej31.jpg',
  'https://i.redd.it/m5bks5ia6gl41.jpg',
  'https://i.redd.it/xqhou4wpxfd31.jpg',
  'https://i.redd.it/ty6se1own9x61.jpg',
  'https://i.redd.it/q2ycng6d9bm41.png',
  'https://i.redd.it/9u14odttrl641.jpg',
  'https://i.redd.it/xhix8iwwcen61.png',
  'https://i.redd.it/e6oajd0ym4c61.png',
  'https://i.redd.it/6pzm9uas6zs51.jpg',
  'https://i.redd.it/l138jig1s9z61.png',
  'https://i.redd.it/25ri30rwa3471.jpg',
  'https://i.redd.it/ehft1r97tm061.jpg',
  'https://i.redd.it/qwp54svrykd61.png',
  'https://i.redd.it/ok25dmflpv631.jpg',
  'https://i.redd.it/p0b7i3zfe3u21.jpg',
  'https://i.redd.it/knahja3ziqa31.png',
  'https://i.imgur.com/2X8KH2q.jpg',
  'https://i.imgur.com/KkJDTeL.jpg',
  'https://i.redd.it/gh7cvbuv6ld51.jpg',
  'https://i.imgur.com/iwYUfvt.jpg',
  'https://i.redd.it/96jmaagcrg961.jpg',
  'https://i.redd.it/m8cdgjmq24k51.jpg',
  'https://i.redd.it/p0av2v5h4ef61.jpg',
  'https://i.redd.it/19ajehu98ts51.png',
  'https://i.redd.it/p0zu8qpmzi331.png',
  'https://i.redd.it/q4tk7hy8rr531.jpg',
  'https://i.redd.it/osw3kq7h90w61.png',
  'https://i.redd.it/lbohm4rzjsa41.jpg',
  'https://i.redd.it/rkapxgoyba141.jpg',
  'https://i.redd.it/fr2kitnt00k41.png',
  'https://i.redd.it/bza3mkj5doi41.jpg',
  'https://i.redd.it/ff7rujto6qi31.jpg',
  'https://i.imgur.com/BDnoAT0.jpg',
  'https://i.redd.it/xz8hbg86cyq51.png',
  'https://i.redd.it/7nycyfc92rr51.jpg',
  'https://i.redd.it/roanllbau3l01.jpg',
  'https://i.redd.it/mx5uclr4ugk41.jpg',
  'https://i.redd.it/e0dmco50u6l31.jpg',
  'https://i.redd.it/yslle5kui3m51.jpg',
  'https://i.redd.it/fl2y1lh8r9061.jpg',
  'https://i.redd.it/cljo01vdnyq61.jpg',
  'https://i.redd.it/ru3tjjndgwo31.jpg',
  'https://i.redd.it/pe3zaldt3ls31.jpg',
  'https://i.redd.it/ncmhpw91g5m41.jpg',
  'https://i.redd.it/i1iq26zyi3r51.jpg',
  'https://i.redd.it/ww4i9clwbuc51.jpg',
  'https://i.redd.it/um9t2hkjutm51.jpg',
  'https://i.redd.it/5i4ji3i9ctt51.jpg',
  'https://i.redd.it/g2kcv8k0hgj61.png',
  'https://i.redd.it/5ggupfdyx4k31.jpg',
  'https://i.redd.it/iurbcjqatx361.png',
  'https://i.redd.it/f6lh8jufccr51.jpg',
  'https://i.imgur.com/Tk7AUt7.jpg',
  'https://i.imgur.com/dbXKIAW.jpg',
  'https://i.redd.it/ntj8l329lkw31.png',
  'https://i.imgur.com/Dq7AEBi.png',
  'https://i.redd.it/v0y9cl9xz1l41.jpg',
  'https://i.redd.it/qq9s224x5mp41.jpg',
  'https://i.redd.it/yj4ux6pxm6t51.jpg',
  'https://i.redd.it/mvkg38gh3zr21.jpg',
  'https://i.redd.it/i78pgn9h2tqz.png',
  'https://i.redd.it/8ffsqd4cido61.jpg',
  'https://i.redd.it/e2a081of3lh51.png',
  'https://i.redd.it/ztkqoxck3zj31.jpg',
  'https://i.redd.it/6c3elcb39xa91.jpg',
  'https://i.redd.it/h8jazzs5r8e31.jpg',
  'https://i.redd.it/9da4lou6auf31.jpg',
  'https://i.redd.it/nwmhr6wojqv51.jpg',
  'https://i.redd.it/9ppa3odk5ou41.jpg',
  'https://i.redd.it/nl1j8aqi6l711.png',
  'https://i.redd.it/nj6lt8oy12x21.jpg',
  'https://i.redd.it/h69b3uabwnh61.png',
  'https://i.redd.it/rizadsdq5s461.jpg',
  'https://i.redd.it/7ens4g1mc0651.png',
  'https://i.imgur.com/3G6wZdk.jpg',
  'https://i.redd.it/8bcra0b3u2h61.png',
  'https://i.redd.it/q4l67apqq7q71.jpg',
  'https://i.redd.it/bbbbcxn19ob61.jpg',
  'https://i.redd.it/99rf4x95njk51.jpg',
  'https://i.imgur.com/YGQZPtZ.jpg',
  'https://i.redd.it/4479uecwpt351.jpg',
  'https://i.redd.it/1twptohp8ln61.jpg',
  'https://i.redd.it/q9fy797qqoa01.png',
  'https://i.redd.it/8uqwz9y6xqj51.jpg',
  'https://i.redd.it/duevxvyclyh61.png',
  'https://i.redd.it/5d3cjvghihn31.jpg',
  'https://i.redd.it/lop0px1lftv61.jpg',
  'https://i.redd.it/djuf3twc5j951.png',
  'https://i.redd.it/gvs6e4clps151.png',
  'https://i.redd.it/o0249jso5fz61.jpg',
  'https://i.redd.it/kmxss08j8q361.jpg',
  'https://i.redd.it/ftzzecpmxb401.jpg',
  'https://i.redd.it/ycgb62h1hh071.png',
  'https://i.redd.it/jw3lnmbfcxb51.jpg',
  'https://i.redd.it/uwoh1pc86by41.png',
  'https://i.redd.it/2xcn11obre451.png',
  'https://i.redd.it/8xpvlg0psm251.jpg',
  'https://i.redd.it/vyfp3ps50ih61.png',
  'https://i.redd.it/j0tyd0f6bg151.jpg',
  'https://i.redd.it/8ttjqud3l9j61.jpg',
  'https://i.redd.it/m478tf4mt0i01.jpg',
  'https://i.redd.it/tcz1yvytqgh41.png',
  'https://i.redd.it/eegqffauvrn61.jpg',
  'https://i.redd.it/99qbhpvsugg61.jpg',
  'https://i.redd.it/g08udhe73w851.jpg',
  'https://i.redd.it/aasf472jifj41.png',
  'https://i.redd.it/b5hndyzgybe71.jpg',
  'https://i.redd.it/wrhr3e8eouq41.jpg',
  'https://i.redd.it/xybys3gowfc61.jpg',
  'https://i.redd.it/7ylsj4061ib31.jpg',
  'https://i.redd.it/t60xsons7zi51.jpg',
  'https://i.redd.it/njga472pogz41.png',
  'https://i.redd.it/rq4xq4qy1hc61.jpg',
  'https://i.redd.it/05cmnbfo39o51.png',
  'https://i.redd.it/cprragg2nb851.jpg',
  'https://i.redd.it/ra6g92pn85a71.png',
  'https://i.redd.it/kd3a6sj664v61.png',
  'https://i.imgur.com/MkPZVYT.png',
  'https://i.redd.it/cydohz0ck2041.jpg',
  'https://i.redd.it/jtqg6d4hgo231.png',
  'https://i.redd.it/ku7ico6ruog71.png',
  'https://i.redd.it/kghd7xrwxas61.jpg',
  'https://i.redd.it/t1a7c5onz8j91.jpg',
  'https://i.redd.it/01d29gjhu0251.jpg',
  'https://i.redd.it/6bp7jyptpv071.jpg',
  'https://i.redd.it/gz2a1a5b7xo51.jpg',
  'https://i.redd.it/1x84iuuz5n161.png',
  'https://i.redd.it/ticxxth78z271.jpg',
  'https://i.redd.it/xpvodlx827y61.png',
  'https://i.redd.it/evlxmdgiefz51.png',
  'https://i.redd.it/pxyptru26lx41.jpg',
  'https://i.redd.it/52meb6j2eix81.jpg',
  'https://i.redd.it/zr398pf270c51.jpg',
  'https://i.redd.it/o4kcp16axer61.png',
  'https://i.redd.it/c0zxmfgryij01.jpg',
  'https://i.redd.it/5zqz1s5cwci31.jpg',
  'https://i.redd.it/i02792emj5c41.jpg',
  'https://i.redd.it/lfe28ksmco351.jpg',
  'https://i.redd.it/vxpbstgn94d31.png',
  'https://i.redd.it/zqdw029z4lr61.png',
  'https://i.redd.it/a4ib4gz6tul31.png',
  'https://i.redd.it/2nhxwpdwi3e61.jpg',
  'https://i.redd.it/a6hprdb0v9d51.jpg',
  'https://i.redd.it/7r22v8t9f3061.jpg',
  'https://i.redd.it/g97r5wylsr941.jpg',
  'https://i.redd.it/6bekwtts3bp51.jpg',
  'https://i.redd.it/76npwovfvol31.jpg',
  'https://i.redd.it/zxhsb6dh3kc71.jpg',
  'https://i.redd.it/rixk31n3xja41.png',
  'https://i.redd.it/eixwu53iyvx51.jpg',
  'https://i.redd.it/dl3rhtmj9iq61.jpg',
  'https://i.redd.it/64763q9nenp61.jpg',
  'https://i.redd.it/f02sshp8tvq31.jpg',
  'https://i.redd.it/phyf923ytz351.png',
  'https://i.redd.it/743nv5oinr261.jpg',
  'https://i.redd.it/81rm71o8k9631.jpg',
  'https://i.redd.it/ibkbpy5hyr141.png',
  'https://i.redd.it/2bauu7zo94o31.jpg',
  'https://i.redd.it/nmlcv9zkh7i31.jpg',
  'https://i.redd.it/hyl3wwz7ose51.png',
  'https://i.redd.it/we145yyv54t61.jpg',
  'https://i.redd.it/hxl08iuv8nk61.jpg',
  'https://i.redd.it/d7vxjra5pn561.png',
  'https://i.redd.it/uifqfo1jlsp51.jpg',
  'https://i.redd.it/nlqojokmy7a41.png',
  'https://i.redd.it/9trizhi3fqt31.png',
  'https://i.redd.it/leuoyr867o041.png',
  'https://i.redd.it/ocpuvqm0j9i01.jpg',
  'https://i.redd.it/n0z89ywnw5y51.jpg',
  'https://i.redd.it/4ntsk1kezbz41.png',
  'https://i.redd.it/4j8gq1avok551.png',
  'https://i.redd.it/siph34c8i1951.jpg',
  'https://i.redd.it/zlsbzsirdgd51.jpg',
  'https://i.redd.it/r9mdihr7kgs21.jpg',
  'https://i.redd.it/ecfczz0p1o331.jpg',
  'https://i.redd.it/b7ubevkm8d361.png',
  'https://i.redd.it/ukso71dkbdb51.png',
  'https://i.redd.it/peur4x0h8es11.jpg',
  'https://i.redd.it/dzfw301nayg61.jpg',
  'https://i.redd.it/je08tqqf8qj41.jpg',
  'https://i.redd.it/egn7egkf3z461.jpg',
  'https://i.redd.it/87emdswuss251.png',
  'https://i.redd.it/rcko830mear21.jpg',
  'https://i.redd.it/0hu2viuenne51.png',
  'https://i.redd.it/3n2xn6tunfb41.jpg',
  'https://i.redd.it/ei3naplbjuy61.png',
  'https://i.redd.it/5fnruvfvx7571.jpg',
  'https://i.redd.it/09lf06mm82g21.jpg',
  'https://i.redd.it/4o2q5uqbqwt41.png',
  'https://i.redd.it/gp8p1bjy12i31.jpg',
  'https://i.redd.it/hma4dkjxb8j01.jpg',
  'https://i.redd.it/dcd1h65i9ag41.png',
  'https://i.redd.it/c4dzuiz6l3a31.jpg',
  'https://i.redd.it/cncclz5e2uj61.jpg',
  'https://i.redd.it/36obqnas9c651.png',
  'https://i.redd.it/qgt6e434d6b41.jpg',
  'https://i.redd.it/afkv9htyf0c71.png',
  'https://i.redd.it/jg9z6q6egot61.jpg',
  'https://i.redd.it/yg26nc8y48d61.jpg',
  'https://i.redd.it/hi67v1janyd51.jpg',
  'https://i.redd.it/p4c6hzmd6mz41.jpg',
  'https://i.redd.it/zr6i1oc8yiw61.jpg',
  'https://i.redd.it/nz146i9qtiu41.jpg',
  'https://i.redd.it/zapg0yvmufq51.jpg',
  'https://i.redd.it/49g1tnaaifc31.jpg',
  'https://i.redd.it/rocy90wl96371.jpg',
  'https://i.redd.it/9k0ppc1ry7l51.jpg',
  'https://i.redd.it/q8yee2kccq211.jpg',
  'https://i.redd.it/mifmz8xnp8971.jpg',
  'https://i.redd.it/f4eore945sb71.jpg',
  'https://i.redd.it/aa4t5to65y341.jpg',
  'https://i.redd.it/4mk2edeub4t81.jpg',
  'https://i.redd.it/rytbkfqtxho51.jpg',
  'https://i.redd.it/mxo3praxws741.jpg',
  'https://i.redd.it/jldc7es6fqw51.jpg',
  'https://i.redd.it/cekw6ldn59j51.jpg',
  'https://i.redd.it/ca0nt8aswjy51.jpg',
  'https://i.redd.it/ur9efydtkfe31.jpg',
  'https://i.redd.it/lpxglmwmsfz21.jpg',
  'https://i.redd.it/yivc1ru9qmc51.jpg',
  'https://i.redd.it/i5nll09djok31.png',
  'https://i.redd.it/jfe2g5csz6o41.png',
  'https://i.redd.it/4q4k8q9bie2a1.jpg',
  'https://i.redd.it/7ifr84wo4ko31.png',
  'https://i.redd.it/jtqk8i2mcwf91.jpg',
  'https://i.redd.it/lwvjb65jpzy41.jpg',
  'https://i.redd.it/fvkqrcvhmpa81.png',
  'https://i.redd.it/uxenodct79361.jpg',
  'https://i.redd.it/ws6pplppzp671.png',
  'https://i.redd.it/9l1gsphzbe541.jpg',
  'https://i.redd.it/beuypul3sxq11.jpg',
  'https://i.redd.it/27g9yjmmd6k01.jpg',
  'https://i.redd.it/11ih8w10u73a1.jpg',
  'https://i.redd.it/famcwb31xjf21.png',
  'https://i.redd.it/isrojoc0sb341.jpg',
  'https://i.redd.it/wycf20q6og771.png',
  'https://i.redd.it/98kbq8t5wzd31.jpg',
  'https://i.redd.it/ofm13yg6m1r31.jpg',
  'https://i.redd.it/btl5mdx879k51.jpg',
  'https://i.redd.it/5ir3g1i2wqf41.jpg',
  'https://i.redd.it/ymckby6u3ku31.jpg',
  'https://i.redd.it/eigqocgjzr641.png',
  'https://i.redd.it/1yunqxrj9km51.jpg',
  'https://i.imgur.com/96zkazH.jpg',
  'https://i.redd.it/duadmlsw3u341.png',
  'https://i.redd.it/1liq6b9o8rs31.jpg',
  'https://i.redd.it/s6snrzhfw9h41.png',
  'https://i.redd.it/6k8xp69b6zi61.jpg',
  'https://i.redd.it/i2o0cwm5b7g51.png',
  'https://i.redd.it/qpjsyysxvmj51.png',
  'https://i.redd.it/1u1xtrj6xkt41.png',
  'https://i.redd.it/ocg17x6jpoy81.jpg',
  'https://i.redd.it/adq892306la51.jpg',
  'https://i.redd.it/d43la4o25y861.jpg',
  'https://i.redd.it/hj4rdg3jzys61.jpg',
  'https://i.redd.it/m814z5xhya551.jpg',
  'https://i.imgur.com/SwYDSca.png',
  'https://i.redd.it/ahpoeok9g8951.png',
  'https://i.redd.it/pigeatq9p4241.jpg',
  'https://i.redd.it/2xeomld9crj01.png',
  'https://i.imgur.com/WYMeLoy.jpg',
  'https://i.redd.it/b9drwn8n49881.jpg',
  'https://i.redd.it/kiqd9q6oh3x31.png',
  'https://i.redd.it/sxdonjxyw6861.jpg',
  'https://i.redd.it/uaejdtisf9n51.jpg',
  'https://i.imgur.com/RJCN1Ue.jpg',
  'https://i.redd.it/l1df5nqkk9i61.png',
  'https://i.imgur.com/4c6uJ8X.jpg',
  'https://i.redd.it/2w7rlk4d6py31.png',
  'https://i.redd.it/u4pqrg930ch61.jpg',
  'https://i.redd.it/8zbu1jkj1ky61.png',
  'https://i.redd.it/0x4ewslqrzx31.jpg',
  'https://i.redd.it/9laj5hc8y5z31.jpg',
  'https://i.redd.it/wmtnfsaklbu31.jpg',
  'https://i.redd.it/66c7o3u3szh51.png',
  'https://i.redd.it/rbampu3d1d131.jpg',
  'https://i.imgur.com/b7gHp7z.jpg',
  'https://i.redd.it/4jgkcnkizuc61.jpg',
  'https://i.redd.it/r81xzl6d8ze71.jpg',
  'https://i.redd.it/ny5qtrt78oc61.jpg',
  'https://i.redd.it/2sx62w57hck31.jpg',
  'https://i.redd.it/fca33hcczhe51.jpg',
  'https://i.redd.it/knuhq1eo4b831.jpg',
  'https://i.redd.it/yilperfxaz971.jpg',
  'https://i.redd.it/wgrqynbu4vq61.jpg',
  'https://i.redd.it/iqji4uoc21f51.jpg',
  'https://i.redd.it/3g3qm9zo8ri61.jpg',
  'https://i.redd.it/b6enq8p52hh51.png',
  'https://i.redd.it/tryzvmvhi8b51.jpg',
  'https://i.redd.it/2o8m05iklog31.jpg',
  'https://i.redd.it/2ce4dfnflg371.png',
  'https://i.redd.it/1f9q8gfcgvz31.png',
  'https://i.imgur.com/zTC2s3k.jpg',
  'https://i.redd.it/3stnb7tnlwu31.png',
  'https://i.redd.it/jsi4fu35dja41.jpg',
  'https://i.redd.it/4xoarxi5wox31.jpg',
  'https://i.redd.it/rmxfa757ns041.png',
  'https://i.redd.it/qrjzd5736j991.jpg',
  'https://i.redd.it/zjt8z8zxg0o51.png',
  'https://i.redd.it/relcp9g7hqe31.jpg',
  'https://i.redd.it/x480wmk8ook21.jpg',
  'https://i.redd.it/awns32lbt7g01.jpg',
  'https://i.redd.it/i6cjk45455b61.jpg',
  'https://i.redd.it/9biba4x5nbm51.png',
  'https://i.redd.it/8xjs1ntmcp341.jpg',
  'https://i.redd.it/76wwlnqp6ev41.jpg',
  'https://i.redd.it/oowewiska4y51.jpg',
  'https://i.redd.it/0wu0b17lhno41.jpg',
  'https://i.redd.it/m8k1ef2pjtu61.jpg',
  'https://i.redd.it/ou2087e8xnk71.jpg',
  'https://i.imgur.com/U6G82bT.jpg',
  'https://i.redd.it/kwqxt8916xu61.jpg',
  'https://i.redd.it/gjnekhm2whs61.jpg',
  'https://i.redd.it/w7pztafbe6g31.jpg',
  'https://i.redd.it/v84k8itr44021.png',
  'https://i.redd.it/ff9mi8vwl3831.png',
  'https://i.redd.it/zcl9liyb2v821.jpg',
  'https://i.redd.it/qj6oiv1bl7i51.jpg',
  'https://i.redd.it/9ruigemfxh651.jpg',
  'https://i.redd.it/ii0hbgmq6r021.jpg',
  'https://i.redd.it/r4kl33sd1tb41.jpg',
  'https://i.redd.it/wluq5hgpf4071.jpg',
  'https://i.redd.it/46ewgjgjdi761.jpg',
  'https://i.redd.it/bdvslnqc9fa71.jpg',
  'https://i.redd.it/44jo9arqbt161.png',
  'https://i.redd.it/o4sd0wunxfd91.jpg',
  'https://i.redd.it/un36tpwmhv831.jpg',
  'https://i.imgur.com/euzoofB.jpg',
  'https://i.redd.it/46ql1aucf3w81.jpg',
  'https://i.redd.it/3bmckw4v7kb51.jpg',
  'https://i.redd.it/d0eoeaxene161.jpg',
  'https://i.imgur.com/UabGqGH.jpg',
  'https://i.redd.it/d20p8qwszje91.jpg',
  'https://i.redd.it/kbtqewlj14581.jpg',
  'https://i.redd.it/26ferw37e7d71.jpg',
  'https://i.redd.it/ubizgo18k2u41.jpg',
  'https://i.imgur.com/0sXSkdn.png',
  'https://i.redd.it/3n3t0s0kzwj01.jpg',
  'https://i.redd.it/egnatj3c18a51.png',
  'https://i.redd.it/rbavnf7dtg751.jpg',
  'https://i.redd.it/1n7mhv8btu241.jpg',
  'https://i.redd.it/ke80j8b5gmu51.jpg',
  'https://i.redd.it/wqh843z18t171.jpg',
  'https://i.redd.it/7d823j8krzl41.jpg',
  'https://i.redd.it/ixb2wpr7isn31.jpg',
  'https://i.redd.it/k5s0j1c28ji21.jpg',
  'https://i.redd.it/1x1epwc9hcd71.jpg',
  'https://i.redd.it/9lcmkec39vf61.jpg',
  'https://i.redd.it/2x9bf89yt4i41.jpg',
  'https://i.redd.it/o21njc6vwol51.jpg',
  'https://i.redd.it/fbzaqwzmd9751.png',
  'https://i.imgur.com/mqqIsuw.jpg',
  'https://i.redd.it/taarkhdt8fx01.jpg',
  'https://i.redd.it/ujjb035g88d31.jpg',
  'https://i.redd.it/vev686vb20f61.png']
 
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