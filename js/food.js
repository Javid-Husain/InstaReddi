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
  const memes = ['https://i.imgur.com/6BO42bN.jpg',
  'https://i.redd.it/n6o4i4bt1en61.jpg',
  'https://i.redd.it/pjdfm0lt3g261.png',
  'https://i.redd.it/ybby1agwyyp61.png',
  'https://i.redd.it/d176452hzx761.jpg',
  'https://i.redd.it/e96o1jtr3fy71.jpg',
  'https://i.redd.it/pekekh58b7d61.jpg',
  'https://i.redd.it/bjv41fmlqjr61.jpg',
  'https://i.redd.it/vwj26ptpfoj31.jpg',
  'https://i.redd.it/3kzh9hpvk2g51.jpg',
  'https://i.redd.it/zfjmkdosyzm61.jpg',
  'https://i.redd.it/zetqmnl2q7a61.jpg',
  'https://i.redd.it/s7hhu5f0sub71.png',
  'https://i.redd.it/gwh4ikqie9671.png',
  'https://i.imgur.com/i2BocwR.png',
  'https://i.redd.it/nvdrq0tyuuk61.jpg',
  'https://i.redd.it/e6sve8fq3d161.png',
  'https://i.redd.it/51z7t44opeh51.jpg',
  'https://i.redd.it/h71cxv9jvhp41.jpg',
  'https://i.redd.it/neurbogn0ob71.jpg',
  'https://i.redd.it/7bwh9tkdzax91.jpg',
  'https://i.redd.it/kooovyvup5e71.jpg',
  'https://i.redd.it/0gcno0fcajd61.jpg',
  'https://i.redd.it/6sn55gii30b61.jpg',
  'https://i.redd.it/zg2wfebp8tw51.jpg',
  'https://i.redd.it/00oeowzhxmz41.png',
  'https://i.redd.it/r6omq18wy2e31.png',
  'https://i.redd.it/ve8dc1iwuec61.jpg',
  'https://i.redd.it/8xq7dwz3uq961.jpg',
  'https://i.redd.it/5w4ozd22ei961.jpg',
  'https://i.redd.it/l6rj7559z4l41.jpg',
  'https://i.redd.it/3aazmx1jyou31.png',
  'https://i.redd.it/q8k8j1yd1g961.jpg',
  'https://i.redd.it/7tbpth1e31481.jpg',
  'https://i.redd.it/tu3t5ray3tt61.png',
  'https://i.redd.it/j0l7362y06r61.jpg',
  'https://i.redd.it/vwsue6wlrqx31.jpg',
  'https://i.redd.it/2dx1dp03rtg31.jpg',
  'https://i.redd.it/9x4e88g0er231.jpg',
  'https://i.redd.it/t84wbryj46291.png',
  'https://i.redd.it/kfjfqafx23a71.jpg',
  'https://i.redd.it/vaxjl7obrjx61.jpg',
  'https://i.redd.it/dpgv3adztvq61.jpg',
  'https://i.redd.it/0dzz3t3tm2i61.jpg',
  'https://i.redd.it/laocij5nci251.jpg',
  'https://i.redd.it/c5qmzo1780251.jpg',
  'https://i.redd.it/3meohrps9fu31.jpg',
  'https://i.redd.it/dcu3tyrkoyt31.jpg',
  'https://i.redd.it/ugahbovm85191.jpg',
  'https://i.redd.it/e5bt2bc9c2471.jpg',
  'https://i.redd.it/6g9copgarfp61.png',
  'https://i.redd.it/5qm0euwgqob61.png',
  'https://i.redd.it/as7clunz0j761.jpg',
  'https://i.redd.it/ya14xh5phcy51.jpg',
  'https://i.redd.it/bwfwmxuwkhq51.jpg',
  'https://i.redd.it/7l37bzm9emp51.jpg',
  'https://i.redd.it/eqix6fl1lnl51.jpg',
  'https://i.redd.it/8rx1bojov5g51.jpg',
  'https://i.redd.it/r9wkp7p7que51.jpg',
  'https://i.redd.it/9r84wj2ooo751.png',
  'https://i.redd.it/i57hs4zl8ns31.jpg',
  'https://i.redd.it/6s53d4q8rj091.jpg',
  'https://i.redd.it/0h19lsgtwa771.jpg',
  'https://i.redd.it/g2jo3tzgn4471.jpg',
  'https://i.redd.it/vzl6oxtkv9171.jpg',
  'https://i.redd.it/af0fa01l96z61.jpg',
  'https://i.redd.it/9rxh4xpgcct61.jpg',
  'https://i.redd.it/mky2vs8zahn61.png',
  'https://i.redd.it/plofr9wk8gb61.jpg',
  'https://i.redd.it/9fh2r850tk861.jpg',
  'https://i.redd.it/hag5yt0hi2761.jpg',
  'https://i.redd.it/vo796wgh8jc41.jpg',
  'https://i.redd.it/nqx9y4tv44d31.jpg',
  'https://i.redd.it/3c2hs1zou5331.jpg',
  'https://i.redd.it/774y4rc6yxs81.png',
  'https://i.redd.it/0f84rsvgp6981.png',
  'https://i.redd.it/rzrr5ip6bdd71.jpg',
  'https://i.redd.it/3qtn7e6exnc71.jpg',
  'https://i.redd.it/u3mo8m5sux771.jpg',
  'https://i.redd.it/7es3mwjz0y071.jpg',
  'https://i.redd.it/yacuy8un3yz61.png',
  'https://i.redd.it/0pyp40exroh61.jpg',
  'https://i.redd.it/e0lahjr2ong61.jpg',
  'https://i.redd.it/8zhzf51b4gz41.jpg',
  'https://i.redd.it/7u0wsxrowar41.jpg',
  'https://i.redd.it/2jmr449jkmc81.jpg',
  'https://i.redd.it/ne9p4qbyhbg71.jpg',
  'https://i.redd.it/nffonwtfcuf71.jpg',
  'https://i.redd.it/ck76zhs0ap771.jpg',
  'https://i.redd.it/sukb21uigkz61.jpg',
  'https://i.redd.it/4l4y53tpe0z61.png',
  'https://i.redd.it/0ts2xvyc8yx61.jpg',
  'https://i.redd.it/ag2unih92qw61.jpg',
  'https://i.redd.it/5rx3ruxo1yl61.jpg',
  'https://i.redd.it/jrm5ng24rju51.jpg',
  'https://i.redd.it/kx9uaf4qedk51.jpg',
  'https://i.redd.it/ahol8vctwzj51.png',
  'https://i.redd.it/bmkxhobpfr651.jpg',
  'https://64.media.tumblr.com/12285cbb27def9a5da5f6120dc75cfcc/tumblr_nlrz15mO1f1tkzsfgo1_640.jpg',
  'https://i.redd.it/w4ziz5vcfmb81.jpg',
  'https://i.redd.it/5fp9irows4181.jpg',
  'https://i.redd.it/wufpx3uxegz71.jpg',
  'https://i.redd.it/7q0r5mqdqil71.jpg',
  'https://i.redd.it/7m1x3i0b23871.jpg',
  'https://i.redd.it/fhd2477wn9271.jpg',
  'https://i.imgur.com/cqNtfO2.jpg',
  'https://i.redd.it/4uf66xdf7m661.png',
  'https://i.redd.it/01muj95gja661.jpg',
  'https://i.redd.it/j0ex5sgzn3z51.jpg',
  'https://i.redd.it/b7b0p303msl51.jpg',
  'https://i.redd.it/cn7b2aaf2uk51.jpg',
  'https://i.redd.it/r84imvol8mk51.jpg',
  'https://i.redd.it/xyd9qat1vch51.png',
  'https://i.redd.it/anxia2mstm351.jpg',
  'https://i.redd.it/aw5nj8u5y1v41.jpg',
  'https://i.redd.it/ufnm0h6376k41.jpg',
  'https://i.redd.it/hbmnvf4736h41.jpg',
  'https://i.redd.it/0v9jm3uaqo141.jpg',
  'https://i.redd.it/b0ddur2j01u31.jpg',
  'https://i.redd.it/wwi52jm4soa31.jpg',
  'https://i.redd.it/pp9951u8v8731.jpg',
  'https://i.redd.it/m6eucum3bc331.jpg',
  'https://i.redd.it/wndq6zgxiz191.jpg',
  'https://i.redd.it/bkypp74hz9g81.png',
  'https://i.redd.it/6zd0nqnky8p71.jpg',
  'https://i.redd.it/3en6eptjosm71.jpg',
  'https://i.redd.it/ulv3nzhtycj71.jpg',
  'https://i.redd.it/sf3qiexbc7971.jpg',
  'https://i.redd.it/3itbeg4jmx371.jpg',
  'https://i.redd.it/pxpejofdasv61.jpg',
  'https://i.redd.it/gnwu0cx0ssl61.jpg',
  'https://i.redd.it/uwtufqb192661.jpg',
  'https://i.redd.it/3otwm5axsk261.jpg',
  'https://i.redd.it/i8r5zdhppa261.jpg',
  'https://i.redd.it/z5jc3evatov51.jpg',
  'https://i.redd.it/m3d2vkp9ult51.jpg',
  'https://i.redd.it/7jfn7a9qnda51.png',
  'https://i.redd.it/cxn1w1cm5u051.png',
  'https://i.redd.it/ukf2caa4z6v41.jpg',
  'https://i.redd.it/579ob7z4sut41.jpg',
  'https://i.redd.it/se4hzmyo1zq41.jpg',
  'https://i.redd.it/0ylqu60oubl41.jpg',
  'https://i.redd.it/4ixjw0c29ug31.jpg',
  'https://i.redd.it/hbon1m7l8l181.jpg',
  'https://i.redd.it/hb3ul9xn9kt71.jpg',
  'https://i.redd.it/ddlwgt10ygm71.jpg',
  'https://i.redd.it/fm7kjnm5h0a71.jpg',
  'https://i.redd.it/eukj8fqj39871.jpg',
  'https://i.redd.it/vpeqmgfarf571.jpg',
  'https://i.redd.it/2j2mdfdawk471.jpg',
  'https://i.redd.it/xlwxfe5gdke61.png',
  'https://i.redd.it/5ijgpy3h7e761.png',
  'https://i.redd.it/p51o07r4t1y51.jpg',
  'https://i.redd.it/k08estgpklw51.jpg',
  'https://i.redd.it/z3tdxjsg9pg51.jpg',
  'https://i.redd.it/ofcfbagp5se51.jpg',
  'https://i.redd.it/7fysfw0hfh851.jpg',
  'https://i.redd.it/tksfhm7i9c251.jpg',
  'https://i.redd.it/3wluv6dklyv41.jpg',
  'https://i.redd.it/9m6g5jae27t41.jpg',
  'https://i.redd.it/5roen7marhl41.jpg',
  'https://i.redd.it/ok5z2k0crch31.jpg',
  'https://i.redd.it/9cskilnimq131.jpg',
  'https://i.redd.it/srlt4undpn6a1.jpg',
  'https://i.redd.it/jfc9e6l933p91.jpg',
  'https://i.redd.it/c84s5gfukf491.png',
  'https://i.redd.it/q7v4w00t63n71.jpg',
  'https://i.redd.it/i13l6dsglth71.jpg',
  'https://i.redd.it/xlnjjg1epre71.jpg',
  'https://i.redd.it/vfliq7cj9le71.jpg',
  'https://i.redd.it/nw2v0qd4txz61.png',
  'https://i.redd.it/8r2fwmtmqxm61.jpg',
  'https://i.redd.it/857nk8p91y761.jpg',
  'https://i.redd.it/37v2xqzjiw661.jpg',
  'https://i.redd.it/fj34l7fyes261.jpg',
  'https://i.redd.it/o40rp60urfv51.png',
  'https://i.redd.it/bh3rbhpj0qt51.png',
  'https://i.redd.it/apf7jnxgwbt51.jpg',
  'https://i.redd.it/e5sv0y3u0af51.jpg',
  'https://i.redd.it/zbvcytgynad51.jpg',
  'https://i.redd.it/ou6ftptqta551.jpg',
  'https://i.redd.it/ietsymdrw0v41.jpg',
  'https://i.redd.it/yn7cdiwcpsr41.jpg',
  'https://i.redd.it/hq6873km1up41.jpg',
  'https://i.redd.it/deevtssukyh41.jpg',
  'https://i.redd.it/xs396aiurr041.jpg',
  'https://i.redd.it/vjby1qu965r21.png',
  'https://i.redd.it/9ghxo0ew8c5a1.jpg',
  'https://i.redd.it/dz8byeqsys1a1.jpg',
  'https://i.redd.it/98hlen6g1v0a1.jpg',
  'https://i.redd.it/eet40dyw3hv91.jpg',
  'https://i.redd.it/2tduf8qb7cc91.jpg',
  'https://i.redd.it/t966rynuyv681.jpg',
  'https://i.redd.it/u0orb3o0whj71.png',
  'https://i.redd.it/1rdgl4e4fky61.jpg',
  'https://i.imgur.com/c6LZ7PY.jpg',
  'https://i.redd.it/2kbsr5lgb7l61.jpg',
  'https://i.redd.it/1r37gqxfppk61.jpg',
  'https://i.redd.it/d59s0ctnar761.jpg',
  'https://i.redd.it/w4y7aasa3q761.jpg',
  'https://i.redd.it/83v2p2dofh761.jpg',
  'https://i.redd.it/cyjelfor1oz51.png',
  'https://i.redd.it/io2kixqo63t51.png',
  'https://i.redd.it/nfua4b79u2s51.jpg',
  'https://i.redd.it/u3swv22a2zh51.png',
  'https://i.redd.it/kjejtgrd9tf51.jpg',
  'https://i.redd.it/atau6k1108z41.jpg',
  'https://i.redd.it/yyvyn1ihk1x41.jpg',
  'https://i.redd.it/30ypkc0gguq41.jpg',
  'https://i.redd.it/l4e6l0xl4wp41.jpg',
  'https://i.redd.it/zjq9m4lbc6p41.jpg',
  'https://i.redd.it/x7u8liqy2nn41.png',
  'https://i.redd.it/qr9gi3em4jj41.jpg',
  'https://i.redd.it/sehvwxooxg941.jpg',
  'https://i.redd.it/fytlvlvrgs931.jpg',
  'https://i.redd.it/r2tovu0h6n331.jpg',
  'https://i.redd.it/sir1uu3vje331.jpg',
  'https://i.redd.it/u93rzm4wa51a1.jpg',
  'https://i.redd.it/2fnde049r3l91.jpg',
  'https://i.redd.it/b7yxb73c8dq81.jpg',
  'https://i.redd.it/krvvm0kj59d81.jpg',
  'https://i.redd.it/pbfbvqfpom681.jpg',
  'https://i.redd.it/060zmb9plsz71.png',
  'https://i.redd.it/9x12rtycp4s71.jpg',
  'https://i.redd.it/nj353oyg2hn71.jpg',
  'https://i.redd.it/iaidpeh2i2n71.jpg',
  'https://i.redd.it/g45hcq8uj7m71.png',
  'https://i.redd.it/g64mk29bn6h71.jpg',
  'https://i.redd.it/7g3exg7d63571.jpg',
  'https://i.redd.it/wjebw6sh8rz61.jpg',
  'https://i.redd.it/q73m2vnt0rh61.jpg',
  'https://i.redd.it/cl6x3k281rc61.jpg',
  'https://i.redd.it/088ey7q2pp761.jpg',
  'https://i.redd.it/aohxkxi9qaw51.png',
  'https://i.redd.it/u8p8vytyjrd51.jpg',
  'https://i.redd.it/rek18rjmq7d51.jpg',
  'https://i.redd.it/po2eo038z6251.jpg',
  'https://i.redd.it/3bhx4fkanla41.png',
  'https://i.redd.it/z24lzzq1v5z31.png',
  'https://i.redd.it/i6aayykehy931.jpg',
  'https://i.redd.it/wvsksln5l8231.jpg',
  'https://i.redd.it/3gy5an8immw91.png',
  'https://i.redd.it/uy60c7rcdcu91.jpg',
  'https://i.redd.it/fflpwkp7sio91.jpg',
  'https://i.redd.it/b33yif4955g91.png',
  'https://i.redd.it/7qnluo9vtre81.jpg',
  'https://i.redd.it/27bm4lw1o5981.jpg',
  'https://i.redd.it/tgkxh52bbd381.jpg',
  'https://i.redd.it/sv9ut57g9yz71.jpg',
  'https://i.redd.it/0d3ho4wovzy71.jpg',
  'https://i.redd.it/n7ci29vq0zq71.jpg',
  'https://i.redd.it/yl9zbgkjbfb71.jpg',
  'https://i.redd.it/kxhzkybqca671.jpg',
  'https://i.imgur.com/LO7bm7k.jpg',
  'https://i.imgur.com/uz6Zm5z.jpg',
  'https://i.redd.it/d5u9xmhfkij61.jpg',
  'https://i.redd.it/0sl2jxaqko961.jpg',
  'https://i.pinimg.com/originals/55/d7/89/55d789ca88cd5ff70238499afe11eb61.jpg',
  'https://i.redd.it/gve2dlkdsr761.jpg',
  'https://i.redd.it/f18ipdb7sr761.jpg',
  'https://i.redd.it/1k524wlrar761.jpg',
  'https://i.redd.it/f4jvz9dfnn761.jpg',
  'https://i.redd.it/75r7eu7fi2761.jpg',
  'https://i.redd.it/01entis3wv661.jpg',
  'https://i.redd.it/hveota50sx361.jpg',
  'https://i.redd.it/gvpjy33zmlp51.jpg',
  'https://i.redd.it/ivqkpwreqdm51.jpg',
  'https://i.redd.it/0o73glk5qnb51.png',
  'https://i.redd.it/4ay8ha6owh751.png',
  'https://i.redd.it/i6h0bywvqin41.jpg',
  'https://i.redd.it/4zvipgyb8mg41.jpg',
  'https://i.redd.it/ds8gvyyg5xe41.jpg',
  'https://i.redd.it/8fbej5748fd41.jpg',
  'https://i.redd.it/lybtmhwixy841.jpg',
  'https://i.redd.it/5nz4vr3wx9641.jpg',
  'https://i.redd.it/5cat6tunfo541.jpg',
  'https://i.redd.it/t3mbr7zmxau31.png',
  'https://i.redd.it/9wysuj07w6r31.jpg',
  'https://i.redd.it/zxprs9oo0w2a1.jpg',
  'https://i.redd.it/x3g4h3ygwbz91.jpg',
  'https://i.redd.it/nwz30htgqhw91.jpg',
  'https://i.redd.it/1zxlw13hcfu91.png',
  'https://i.imgur.com/MIb8NIw.jpg',
  'https://i.redd.it/8vbu2lzi93b91.jpg',
  'https://i.redd.it/ro4xcpl6yea91.jpg',
  'https://i.redd.it/dlub1vrlbcx81.jpg',
  'https://i.redd.it/iw6ekzs7d8s81.jpg',
  'https://i.redd.it/nayqel491lb81.jpg',
  'https://i.redd.it/s6a9o5offv281.jpg',
  'https://i.redd.it/ax5o7zbq9no71.jpg',
  'https://i.redd.it/sglesdws8no71.jpg',
  'https://i.redd.it/jlt4uz8na3m71.jpg',
  'https://i.redd.it/1wx3m3sl8hk71.jpg',
  'https://i.redd.it/1pde28yqrxz61.jpg',
  'https://i.imgur.com/JUEHT9g.jpg',
  'https://i.imgur.com/pOuxSMj.jpg',
  'https://i.redd.it/iuc3xfhqp6k61.png',
  'https://i.redd.it/hn3n7d07aoh61.jpg',
  'https://i.redd.it/l556dxt7ur761.jpg',
  'https://i.redd.it/elgn8vhf8r761.jpg',
  'https://i.redd.it/jxw9bqa45k761.jpg',
  'https://i.redd.it/c9ipauaa7e761.jpg',
  'https://i.redd.it/zzf3fxwk3c761.jpg',
  'https://i.redd.it/fth2nymkwdj51.jpg',
  'https://i.redd.it/ron9va34o0h51.jpg',
  'https://i.redd.it/gs6r9edffdc51.png',
  'https://i.redd.it/nh6jz6td2cz41.jpg',
  'https://i.redd.it/ld5mrf1xz8z41.jpg',
  'https://i.redd.it/k4xmuu4p1hy41.jpg',
  'https://i.redd.it/2xtg2yqjzxo41.jpg',
  'https://i.redd.it/zeth26o2mqh41.jpg',
  'https://i.redd.it/04nzf9hgbqh41.jpg',
  'https://i.redd.it/jt7t7ud7jme41.jpg',
  'https://i.redd.it/bsmviruf6fe41.jpg',
  'https://i.redd.it/z0ayasffbra41.jpg',
  'https://i.redd.it/jn33d1mf77841.jpg',
  'https://i.redd.it/03f4b1vuxwb31.jpg',
  'https://i.redd.it/sb7shwuae4731.jpg',
  'https://i.redd.it/ayky2p34l2z21.jpg',
  'https://i.redd.it/nxt9l14p5ir21.jpg',
  'https://i.redd.it/x7anld8nts4a1.png',
  'https://i.redd.it/b150midxik4a1.png',
  'https://i.redd.it/7rc90uzc3c1a1.jpg',
  'https://i.redd.it/a9zxmuvvxjz91.jpg',
  'https://i.redd.it/6qtzpen1sbp91.jpg',
  'https://i.redd.it/3s9ak4hk6nb91.jpg',
  'https://i.redd.it/x28u2qpdhhs81.jpg',
  'https://i.redd.it/9cb0jfu4byp81.jpg',
  'https://i.redd.it/wrr9yrmls2o81.jpg',
  'https://i.redd.it/5ij3xhfwhzm81.jpg',
  'https://i.redd.it/gaddnbv0ifl81.jpg',
  'https://i.redd.it/manzotoemve81.jpg',
  'https://i.redd.it/viev6qsrcq581.jpg',
  'https://i.redd.it/1yqkxe65ol381.jpg',
  'https://i.redd.it/41n6lxzbuh381.jpg',
  'https://i.redd.it/0bo9f39pdt081.jpg',
  'https://i.redd.it/ph1mogye53t71.jpg',
  'https://i.redd.it/28jikx06xkb71.png',
  'https://i.redd.it/eklf8xnvjj571.jpg',
  'https://i.redd.it/fo4sc23qc4071.jpg',
  'https://i.redd.it/69ms7kscd4z61.jpg',
  'https://i.imgur.com/jwL5D5s.jpg',
  'https://i.redd.it/uewafm4maj761.jpg',
  'https://i.redd.it/so4jtbhjda761.png',
  'https://i.redd.it/h9t94mnb5u061.jpg',
  'https://i.redd.it/x4v0jhwljuj51.jpg',
  'https://i.redd.it/05p2d2dzgxh51.jpg',
  'https://i.redd.it/d6c7paz1quv41.jpg',
  'https://i.redd.it/k6gyw790wfv41.jpg',
  'https://i.redd.it/a2d9chjy1qr41.jpg',
  'https://i.redd.it/k8rh7pz1fwh41.jpg',
  'https://i.redd.it/xjarh2ivmgf41.jpg',
  'https://i.redd.it/2okwr638w5b41.png',
  'https://i.redd.it/ee6eo3wvsq441.jpg',
  'https://i.redd.it/eggnidq8s8731.jpg',
  'https://i.redd.it/08ske51l446a1.png',
  'https://i.redd.it/synbuzuydcu91.jpg',
  'https://i.redd.it/c69rpdot0ar91.jpg',
  'https://i.redd.it/73m5msguh3p91.jpg',
  'https://i.redd.it/o5masv8w9wo91.jpg',
  'https://i.redd.it/lmusyad1e2m91.png',
  'https://i.redd.it/lsczivazrfj91.jpg',
  'https://i.redd.it/0e5hd8ppohj91.jpg',
  'https://i.redd.it/ddg1fdt5qwi91.jpg',
  'https://i.redd.it/4v0eywev4md91.jpg',
  'https://i.redd.it/l4rqvv74b6991.jpg',
  'https://i.redd.it/hscxgq41n4t81.png',
  'https://i.redd.it/qi304y7cf2q81.jpg',
  'https://i.redd.it/ltsp4voy7qh81.jpg',
  'https://i.redd.it/5m8vw4t4xj981.jpg',
  'https://i.redd.it/nh7k8lb7ie981.jpg',
  'https://i.redd.it/wvmwgdoihu181.png',
  'https://i.redd.it/o31rj4u7op181.jpg',
  'https://i.redd.it/ll47nxeh8s181.jpg',
  'https://i.redd.it/oox683592ay71.jpg',
  'https://i.redd.it/vcha4lydwdj71.jpg',
  'https://i.redd.it/rteb43qcyei71.jpg',
  'https://i.redd.it/lezttmcmj4471.jpg',
  'https://i.redd.it/gay47c3pgiz61.jpg',
  'https://i.imgur.com/Qb1VSLI.jpg',
  'https://www.youtube.com/watch?v=2DEbP7AZwJg',
  'https://i.redd.it/99onnvk7vx761.jpg',
  'https://i.redd.it/mmur5oysir761.jpg',
  'https://i.redd.it/9778kmi3xp761.jpg',
  'https://i.redd.it/luejkw502qw51.jpg',
  'https://i.redd.it/ci4ifo6vpkt51.jpg',
  'https://www.youtube.com/watch?v=WrmuCjoJW6I&lc=UgxvsnUrHGFk0zhuyR94AaABAg',
  'https://i.redd.it/cnzkwo73k0h51.jpg',
  'https://i.redd.it/0fxmhqbtete51.jpg',
  'https://i.redd.it/l5jmcl5wc9d51.jpg',
  'https://i.redd.it/9jhbgpbs8a651.jpg',
  'https://i.redd.it/paqvv0zrv7p41.jpg',
  'https://i.redd.it/yy9f4m63z6q41.jpg',
  'https://i.redd.it/4wbjbkgrcla41.png',
  'https://i.redd.it/40qhnjpnkf941.jpg',
  'https://i.redd.it/m5g0xaazbif31.jpg',
  'https://i.redd.it/zkdk9m0ib1d31.jpg',
  'https://i.redd.it/5l9676bh8b631.jpg',
  'https://i.redd.it/mj6naremj7v91.jpg',
  'https://i.redd.it/1tbaq0881dl91.jpg',
  'https://i.redd.it/xdywhvq8flj91.png',
  'https://i.redd.it/h8trhj8fxrd91.jpg',
  'https://i.redd.it/bspf8dwpe4d91.jpg',
  'https://i.redd.it/0t45j9brjnb91.jpg',
  'https://i.imgur.com/hC6HxJm.jpg',
  'https://i.redd.it/m5fj436wgna81.jpg',
  'https://i.redd.it/d1wg46nkqr481.jpg',
  'https://i.redd.it/eopi1hnhawr71.jpg',
  'https://i.redd.it/d33fxmzqj4471.jpg',
  'https://i.redd.it/enrs1adp22471.jpg',
  'https://i.redd.it/nhx6mlkvnls61.png',
  'https://i.redd.it/so4p27tttk761.jpg',
  'https://i.redd.it/khb19k122o561.jpg',
  'https://i.redd.it/ix6ftod1s3z51.jpg',
  'https://i.imgur.com/o8DPXEZ.jpg',
  'https://i.redd.it/goa8tt9mo9w51.png',
  'https://i.redd.it/nod83jeotm351.jpg',
  'https://i.redd.it/psnmgnk7lz151.jpg',
  'https://i.redd.it/dd4dm0adt4541.jpg',
  'https://i.redd.it/pmv3es8hho541.jpg',
  'https://i.redd.it/ue2jedkh8bw91.jpg',
  'https://i.redd.it/nhyz4upqexi91.jpg',
  'https://64.media.tumblr.com/c45462c5ac8eefe122f832e38b627476/tumblr_ndlam7rpIJ1tkzsfgo1_640.jpg',
  'https://i.redd.it/s5wlw2wlygk81.jpg',
  'https://www.youtube.com/watch?v=H8ArH46mhsg',
  'https://i.redd.it/e517uxrswlc81.png',
  'https://i.redd.it/igjozj2mjw981.jpg',
  'https://i.redd.it/yo62egdpj9681.jpg',
  'https://i.redd.it/o1rb6sflyw381.png',
  'https://i.redd.it/rdfsofjhs5o71.jpg']

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