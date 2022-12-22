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
  const memes = ['https://i.redd.it/kub4rktu39071.jpg',
  'https://i.redd.it/cbi9uq5or3i71.png',
  'https://i.redd.it/abahmhjhe8w41.jpg',
  'https://i.redd.it/xfe0g91466x41.jpg',
  'https://i.redd.it/r3ym53opt0f61.jpg',
  'https://i.redd.it/tzj5xx3r7ex61.png',
  'https://i.redd.it/obvjjjdi8nv51.jpg',
  'https://i.redd.it/6ys83hzt33d61.jpg',
  'https://i.redd.it/lau1fwm22uy51.jpg',
  'https://i.redd.it/ky9woo3lr9461.jpg',
  'https://i.redd.it/4at0xg69hv551.jpg',
  'https://i.redd.it/zpc5lsgah4i61.png',
  'https://i.redd.it/r0nfir75whv61.jpg',
  'https://i.redd.it/iuo4ls775e351.jpg',
  'https://i.redd.it/13c84fxrfou81.jpg',
  'https://i.redd.it/j1z1vxfzhcw51.png',
  'https://i.redd.it/aiyb8oaegpw61.png',
  'https://i.imgur.com/IaCLfsN.png',
  'https://i.redd.it/tmiedehklf751.jpg',
  'https://i.redd.it/0msqdwxr19o61.jpg',
  'https://i.redd.it/ox921biyck461.jpg',
  'https://i.redd.it/weyn5wk56zu51.jpg',
  'https://i.redd.it/f0cer1uoerx61.png',
  'https://i.redd.it/dv4qvas6u6491.jpg',
  'https://i.redd.it/3vigxascbka51.png',
  'https://i.redd.it/p0jvdtiewai71.png',
  'https://i.redd.it/zvg2y872b1p41.png',
  'https://i.redd.it/z1001wjkocz91.jpg',
  'https://i.redd.it/1wnwhqbpdwc61.jpg',
  'https://i.redd.it/vd2nwbphqlm61.png',
  'https://i.redd.it/qyax5l1b86f61.jpg',
  'https://i.redd.it/u2yi9ztw93671.png',
  'https://i.redd.it/qp7hmg9x70k31.jpg',
  'https://i.redd.it/849d1qxrd5h61.jpg',
  'https://i.redd.it/z916o0r3j1r51.jpg',
  'https://i.redd.it/k370ae13yzg51.jpg',
  'https://i.redd.it/brd9611vgbv61.png',
  'https://i.redd.it/tftzhuxoxs651.jpg',
  'https://www.reddit.com/gallery/pcegyg',
  'https://i.redd.it/2e42zsbj1ty91.jpg',
  'https://i.redd.it/dj6ccxviho3a1.jpg',
  'https://i.redd.it/9ir0nfoirv961.jpg',
  'https://i.redd.it/8aq4kss8tfc71.png',
  'http://livedoor.blogimg.jp/isayamahazime/imgs/6/5/65d18d83.jpg',
  'https://i.redd.it/n1ake34hcw771.png',
  'https://i.redd.it/m97b7cpfk9o51.jpg',
  'https://i.redd.it/9yzqv790tpo61.jpg',
  'https://i.redd.it/2gxco9pmvdu61.png',
  'https://i.redd.it/b28sqi3ez2u81.jpg',
  'https://i.redd.it/0zx6ndsy3ou71.png',
  'https://i.redd.it/quqzha4c4nv41.jpg',
  'https://i.redd.it/2rxim33p6rv61.jpg',
  'https://i.redd.it/n02fpt0omv671.png',
  'https://i.redd.it/ngsls0eqy8551.jpg',
  'https://i.redd.it/1c2f5xavip571.png',
  'https://i.redd.it/kaxr4c29vyu91.png',
  'https://i.redd.it/ta09eim7j7p51.jpg',
  'https://i.redd.it/oma32y1l05z71.png',
  'https://i.redd.it/09hnl32vhz061.jpg',
  'https://i.redd.it/mvolpdet41261.jpg',
  'https://i.redd.it/caztpqqeeu191.jpg',
  'https://i.redd.it/7mhtanlt3pi71.png',
  'https://i.redd.it/mrbtvn68d5s61.png',
  'https://i.redd.it/4vsx0bccaeg71.png',
  'https://i.redd.it/fcqzikkq9bd91.png',
  'https://i.redd.it/xtni5fzneq841.png',
  'https://i.redd.it/ps8dc92sc1j61.jpg',
  'https://i.redd.it/x3upal82bfe61.jpg',
  'https://i.imgur.com/3zeQTFZ.png',
  'https://i.redd.it/smeepwh8qp051.jpg',
  'https://i.imgur.com/mlw56TZ.jpg',
  'https://i.redd.it/vatmsogo8w871.png',
  'https://i.redd.it/ty66olvulgw51.jpg',
  'https://i.redd.it/8t0kcweku1h61.png',
  'https://i.redd.it/qydxrhq4q2c61.jpg',
  'https://i.redd.it/ctbtbrfwufb71.png',
  'https://i.redd.it/2h6p2h5klua71.png',
  'https://i.redd.it/62jaxwcbukv61.png',
  'https://i.redd.it/w65w9bdxvx761.jpg',
  'https://i.redd.it/litj3a3nl2n31.jpg',
  'https://i.imgur.com/m0DtZE8.jpg',
  'https://i.redd.it/6wilksoijqo81.jpg',
  'https://i.redd.it/bow07xkdrtc71.png',
  'https://i.redd.it/kxup9knf5z691.jpg',
  'https://i.redd.it/t2tlriuqj7e71.png',
  'https://i.redd.it/m6qykvh6vo661.png',
  'https://i.redd.it/ernh0czh1at51.jpg',
  'https://i.redd.it/d5dnrx86fby91.jpg',
  'https://i.redd.it/junfir00amd71.png',
  'https://i.redd.it/fhhv0m83kfp61.jpg',
  'https://i.redd.it/4n3klvd97nc71.png',
  'https://i.redd.it/qjqj8ifa0q761.jpg',
  'https://i.redd.it/zmfiemldmxj51.jpg',
  'https://i.redd.it/09xgq80co7e61.jpg',
  'https://i.redd.it/dvmkt25p8qz51.jpg',
  'https://i.redd.it/kh4xmkswldu51.jpg',
  'https://i.redd.it/x7h64mt4i8971.jpg',
  'https://i.redd.it/vzjo7r9yh0g41.jpg',
  'https://i.redd.it/261j6okm8p351.jpg',
  'https://i.redd.it/wa2gbasmx0d71.png',
  'https://twitter.com/SHIHEILIN/status/1538808957145337857?s=20&t=kPiZyhFKufm2a8xqRjyA7g',
  'https://i.redd.it/k8t47j3517u61.png',
  'https://i.redd.it/luqm9bmsvrc91.png',
  'https://i.redd.it/pfkvcvd0s8m41.jpg',
  'https://i.redd.it/5sjyc7zeyco71.png',
  'https://i.redd.it/4lyf90yxs7p31.jpg',
  'https://i.redd.it/4ap2sbdopj071.png',
  'https://i.redd.it/7v9wtlpht9x41.jpg',
  'https://i.redd.it/9lqwlrr6pee71.png',
  'https://i.redd.it/enop1vk7k8o81.jpg',
  'https://i.redd.it/cysfex9ewrc61.jpg',
  'https://i.redd.it/h0ear3q7t7v21.jpg',
  'https://i.redd.it/howmikxcgjp61.png',
  'https://i.redd.it/oz3bcir9zm231.jpg',
  'https://i.redd.it/z58ifzxkuld51.jpg',
  'https://i.redd.it/4je5gy5tuzz51.jpg',
  'https://i.imgur.com/6PpyYWf.png',
  'https://i.redd.it/oql15w6z2dw71.jpg',
  'https://i.redd.it/f1892syge4y61.png',
  'https://i.redd.it/ianvevpd9jh61.jpg',
  'https://i.redd.it/2t5tenq2vf861.jpg',
  'https://i.redd.it/t35w7lqp6dy61.png',
  'https://i.redd.it/fysqf36mp0b51.jpg',
  'https://i.redd.it/cxduco22b3z51.jpg',
  'https://i.redd.it/lhmj0xay8ji91.jpg',
  'https://i.redd.it/5c7irsdxnmb71.png',
  'https://i.redd.it/b8vnkszz31o51.jpg',
  'https://i.redd.it/wttvff13qut51.jpg',
  'https://i.redd.it/nxtfke0qjo671.png',
  'https://i.imgur.com/D03vrGd.jpg',
  'https://i.redd.it/fqrhrm236wu61.jpg',
  'https://i.redd.it/qgsey3za0ab61.jpg',
  'https://i.redd.it/dr5m41tv5tj31.jpg',
  'https://i.redd.it/wuwm23whkqk51.jpg',
  'https://i.redd.it/fnu5sno42qq81.png',
  'https://i.redd.it/btydxlnjt2951.png',
  'https://i.redd.it/g4jfo7kl6hd91.png',
  'https://i.redd.it/5nztn1ayrmf91.jpg',
  'https://i.redd.it/lmrbxty87ay61.png',
  'https://i.redd.it/usuf3q6a1ns71.png',
  'https://i.redd.it/ha8295kn0w571.png',
  'https://i.redd.it/7mrw0xiiu2771.png',
  'https://i.redd.it/1u6g9sazbof61.png',
  'https://i.redd.it/tcw6ydv1cr561.jpg',
  'https://i.redd.it/e0b17pbk6ux61.jpg',
  'https://i.redd.it/v9odgh67wgg61.jpg',
  'https://i.redd.it/x6q9hdvsh8p61.jpg',
  'https://i.imgur.com/nT1dP7a.png',
  'https://i.redd.it/xec17ym8zuw51.png',
  'https://i.redd.it/n9ejfgnp2vm61.jpg',
  'https://i.redd.it/q1cl4ouxvtd71.png',
  'https://i.redd.it/4s1pyscs2oz41.jpg',
  'https://i.redd.it/pc9a4doxp6861.png',
  'https://i.redd.it/ygr03wzpt2a71.png',
  'https://i.redd.it/y1gmwisj4ws51.jpg',
  'https://i.redd.it/k668y81op0r61.png',
  'https://i.redd.it/r2x3y34rcf751.jpg',
  'https://i.redd.it/c5woss1jn9871.png',
  'https://i.redd.it/2rt5avshun871.png',
  'https://i.redd.it/qftmx2ixnj861.jpg',
  'https://i.redd.it/0zhoe6irtup41.jpg',
  'https://i.redd.it/w9nw6l671g251.jpg',
  'https://i.redd.it/39iqqp3vbyx11.jpg',
  'https://i.redd.it/ba7qi9rsbak91.jpg',
  'https://i.redd.it/7inaeqwxyzf71.png',
  'https://i.redd.it/ipjsqeqp4cl51.jpg',
  'https://i.redd.it/xv0f6hzd6me71.png',
  'https://www.reddit.com/gallery/z53rng',
  'https://i.redd.it/lyb2w76osn561.jpg',
  'https://i.redd.it/apb4gn5ing851.jpg',
  'https://i.redd.it/r8vb3ov9cvp51.jpg',
  'https://i.redd.it/47dnadunl4931.jpg',
  'https://i.redd.it/6mb9lysueai91.png',
  'https://i.redd.it/e2pf5zypj1b71.png',
  'https://i.redd.it/ddxhpdjfgwg61.jpg',
  'https://i.redd.it/qvzq3dpz9n151.jpg',
  'https://i.redd.it/qnqk6lxuch671.png',
  'https://i.redd.it/iqrly3uga83a1.jpg',
  'https://i.redd.it/sutnlkq1l1q71.png',
  'https://i.redd.it/b4ecj9y313p51.jpg',
  'https://i.redd.it/w0v3fhxzwy271.jpg',
  'https://i.redd.it/bbrkng48uyw61.png',
  'https://i.redd.it/v61grat3zcy51.jpg',
  'https://i.redd.it/8973u8x1b8c71.png',
  'https://i.redd.it/gf9nlgnb59c61.jpg',
  'https://www.reddit.com/gallery/ogub8g',
  'https://i.redd.it/83fajba0sfa61.jpg',
  'https://i.redd.it/y5zw8zs3rmp61.jpg',
  'https://i.redd.it/mri77yau73c91.png',
  'https://i.redd.it/uxcq3eivb1c71.png',
  'https://i.imgur.com/ud5TVUC.png',
  'https://i.redd.it/1mnxl31jmm181.png',
  'https://i.redd.it/2qhu2zla8bk61.jpg',
  'https://i.redd.it/6hpprdp7w2971.png',
  'https://i.redd.it/bbzf4ajok0s71.png',
  'https://i.redd.it/x5bw810nyme61.jpg',
  'https://i.redd.it/fukwiqsg6ub71.png',
  'https://i.redd.it/13cn5ehdxvl61.png',
  'https://i.imgur.com/ooUIFQl.png',
  'https://i.redd.it/52rqtu08xyx61.png',
  'https://i.redd.it/7eqn6g5wfcx81.jpg',
  'https://i.redd.it/rtjq5kp0z1s51.jpg',
  'https://i.redd.it/67f6m0thba671.png',
  'https://i.redd.it/ghai01nz5h771.png',
  'https://i.redd.it/27jyt15ddbu61.png',
  'https://i.redd.it/a00miluzlb371.png',
  'https://www.reddit.com/gallery/qalllg',
  'https://i.redd.it/f0vr28tirq071.png',
  'https://i.redd.it/lgn8mfzbil061.jpg',
  'https://i.imgur.com/xDtPREf.jpg',
  'https://i.redd.it/ggnm3onrxut81.jpg',
  'https://i.redd.it/2vtqcki7udv61.png',
  'https://i.redd.it/6o43on1cbaz31.jpg',
  'https://i.redd.it/lod6214xe1471.png',
  'https://i.redd.it/e1xyybfb0bq61.jpg',
  'https://i.redd.it/xg7q2k0l2q651.jpg',
  'https://i.redd.it/t0fidrfw2cs61.jpg',
  'https://i.redd.it/e9uv5zd2fil41.jpg',
  'https://i.redd.it/0d7cmfgedax31.png',
  'https://i.redd.it/im0np8v8kie51.jpg',
  'https://i.redd.it/2ypijcdl0kx91.jpg',
  'https://i.redd.it/jvnkbvkx82n71.png',
  'https://i.redd.it/s4f25ibt9nh61.jpg',
  'https://i.redd.it/ifi0959m1up71.png',
  'https://i.redd.it/ls1ecx6q26391.png',
  'https://i.redd.it/18rm18iz4b251.png',
  'https://i.redd.it/fuym2ujweau31.jpg',
  'https://i.imgur.com/pNntgCY.jpg',
  'https://i.redd.it/0plvlxqlsft51.jpg',
  'https://i.redd.it/f0cyum22ekm61.jpg',
  'https://i.redd.it/nrx4jvb7rst61.png',
  'https://i.redd.it/dvl9ukt2l0e61.jpg',
  'https://i.redd.it/agbjru7bge551.jpg',
  'https://i.redd.it/hpyfjfgdc7v61.png',
  'https://i.redd.it/59h2m1p5gsw51.jpg',
  'https://i.redd.it/5xiofm1633561.jpg',
  'https://i.redd.it/d4awiqwgh0e71.png',
  'https://i.redd.it/mc8yd66hgga71.png',
  'https://i.redd.it/7yxw2v3mrio71.png',
  'https://i.redd.it/8865ptym3fd71.png',
  'https://i.redd.it/kqgb5oapnqm71.png',
  'https://i.redd.it/3dlis76w9m671.jpg',
  'https://i.redd.it/csaej29q3yy51.jpg',
  'https://i.redd.it/wx6kmjxb1y151.jpg',
  'https://i.redd.it/vs88e7tmkg271.jpg',
  'https://i.redd.it/xtb7i49sa6z61.png',
  'https://i.redd.it/na3v0ut8qwa41.jpg',
  'https://i.redd.it/pp9h2ev9ht781.png',
  'https://i.redd.it/qnywxlnwzch61.png',
  'https://i.redd.it/dj3zkg0wwh571.png',
  'https://i.redd.it/w6uvwd37pdr51.jpg',
  'https://i.redd.it/ej3buzfpbo771.png',
  'https://i.redd.it/85f8sqwefyz61.png',
  'https://i.redd.it/jh1q1vvlaux41.jpg',
  'https://i.redd.it/vzz20h5ocna71.png',
  'https://i.redd.it/gqsymdme56x61.png',
  'https://i.redd.it/xuvl6fzhxjs61.png',
  'https://i.redd.it/xyyiekijw5w61.png',
  'https://i.redd.it/6sojxqmxzdz81.jpg',
  'https://i.redd.it/ccpgj1vt22l51.jpg',
  'https://i.redd.it/gbfp08uqtoc91.png',
  'https://i.redd.it/etp4hz7fri761.jpg',
  'https://i.redd.it/x64qbthjyg971.png',
  'https://i.redd.it/vr2ny4d8xqq61.jpg',
  'https://i.imgur.com/21VVWbH.jpg',
  'https://i.redd.it/otnyaot3tjy61.png',
  'https://i.redd.it/d2jd41r83ny71.png',
  'https://i.redd.it/sa1en1ngfj181.png',
  'https://i.redd.it/qse8xixivo781.png',
  'https://i.redd.it/8x4tk70j1b471.png',
  'https://i.redd.it/9dastp3uk3571.png',
  'https://i.redd.it/p0wul09zlhw91.jpg',
  'https://i.redd.it/pck2nfv6fsu61.png',
  'https://i.redd.it/1ber9v0ra0851.jpg',
  'https://i.redd.it/bpyhi7ueiea51.jpg',
  'https://i.redd.it/ailu7xue54361.jpg',
  'https://i.redd.it/y2xkse6ujlf71.png',
  'https://i.redd.it/30goud4xl5051.jpg',
  'https://i.redd.it/fylo620f87g71.png',
  'https://i.redd.it/g2h62cf9szu81.png',
  'https://i.redd.it/j6os2lkjd1961.jpg',
  'https://i.redd.it/15yzg9499j371.png',
  'https://i.imgur.com/cUQtNma.jpg',
  'https://i.redd.it/1b3d0cfgb7s91.jpg',
  'https://i.redd.it/1w54s3y1imq61.png',
  'https://i.redd.it/uff95u6i1tn81.jpg',
  'https://i.redd.it/pv9xxgxp2oj31.jpg',
  'https://i.redd.it/qn7xi1khow471.png',
  'https://i.redd.it/irxbzbfwcgz71.png',
  'https://i.redd.it/0bmkksm7cr661.jpg',
  'https://i.redd.it/r4ojzfr1mw481.jpg']

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