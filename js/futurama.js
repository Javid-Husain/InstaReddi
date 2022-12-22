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
  const memes = ['https://i.redd.it/q5ftlgbywuj11.jpg',
  'http://i.imgur.com/NpFEJY3.jpg',
  'https://i.redd.it/nayplfl1c3841.jpg',
  'https://i.redd.it/6e8vf2rrkbv31.jpg',
  'https://i.redd.it/9cie5vud6l6z.jpg',
  'https://i.imgur.com/WO1YiNQ.png',
  'https://i.redd.it/hviviw88r2x71.jpg',
  'https://i.redd.it/y01ru2nen9x01.jpg',
  'https://i.redd.it/29vdq51xviiz.jpg',
  'https://i.redd.it/xn2k01ulcay01.jpg',
  'https://i.redd.it/ddb76wcqwzty.jpg',
  'https://i.redd.it/a4c684mi7q601.jpg',
  'https://i.redd.it/wt3jc1g21ce11.png',
  'https://i.redd.it/14wqgsupnif91.jpg',
  'https://i.redd.it/k23kqcvwaxzz.jpg',
  'https://i.imgur.com/aD9701R.jpg',
  'https://i.redd.it/ladg7faef1c21.jpg',
  'https://i.redd.it/hp6xtydibkjz.jpg',
  'https://i.redd.it/oph9a8xvh0o91.jpg',
  'https://i.redd.it/dphqkdmhq1xz.jpg',
  'https://i.redd.it/1iql6m501xc11.jpg',
  'https://i.redd.it/3vdo3z4881921.jpg',
  'https://i.redd.it/a0zi5avcsav01.jpg',
  'https://i.redd.it/4jxpf7spda291.jpg',
  'https://i.redd.it/cucfnnua4gr11.jpg',
  'https://i.redd.it/juz8spo4jfoz.png',
  'http://i.imgur.com/tbmyMTo.jpg',
  'https://i.imgur.com/do9BDGh.jpg',
  'https://i.redd.it/r16j7qvjzht01.jpg',
  'https://i.redd.it/sbtkn8ahjh801.jpg',
  'https://i.redd.it/09b75sd57oj11.jpg',
  'https://i.redd.it/rv4sofw598b11.jpg',
  'https://i.redd.it/z7326ibaja301.jpg',
  'https://i.redd.it/dp6aufypyujz.jpg',
  'http://i.imgur.com/yXeNZXE.png',
  'https://i.redd.it/q1jyvfxjf4w11.jpg',
  'https://i.redd.it/jfu0kydz8o0z.jpg',
  'https://i.redd.it/lh12lo9yf0391.jpg',
  'https://i.redd.it/2tdikwg3h6q11.jpg',
  'https://i.imgur.com/S0mjgYP.jpg',
  'https://i.redd.it/9fec1qpms5b61.jpg',
  'https://i.redd.it/cle2ngez2t931.jpg',
  'https://i.redd.it/ns9kjzhx2ib11.jpg',
  'https://i.redd.it/je29cg4nnlh01.jpg',
  'https://i.redd.it/ahegtwmxv8o11.png',
  'https://i.redd.it/gj7lc59x52b21.jpg',
  'https://i.redd.it/igk1l4dewil71.jpg',
  'https://i.redd.it/liuypnluk0k11.jpg',
  'https://i.redd.it/knhkdkp063t01.jpg',
  'https://i.imgur.com/RZBWAyW.jpg',
  'https://i.redd.it/ow7z2fqjsyyz.jpg',
  'https://i.redd.it/6ma9bqjnt6321.jpg',
  'https://i.redd.it/s3m2tb7zh0tz.jpg',
  'https://i.redd.it/ryjh2kpf3dd11.jpg',
  'https://i.redd.it/r4uits7dcho21.png',
  'https://i.redd.it/quevmbadar211.png',
  'https://i.redd.it/f0y6dgvogqj21.jpg',
  'https://i.redd.it/1etuay1h5g421.jpg',
  'https://i.redd.it/xnoe18no5izy.jpg',
  'https://i.redd.it/ob4wo514r9091.jpg',
  'https://i.redd.it/t1wa3eq8sw051.jpg',
  'https://i.imgur.com/DA6F6EP.jpg',
  'https://i.redd.it/084kux8iln121.jpg',
  'https://i.redd.it/mtbvkke1ibi31.jpg',
  'https://i.redd.it/6e1zqwaim2a01.jpg',
  'https://i.redd.it/c03ma96o0dk21.jpg',
  'https://i.redd.it/y6a628cog4i91.jpg',
  'https://i.redd.it/dhggw5477od51.jpg',
  'https://i.redd.it/rhn4z82v2kq11.jpg',
  'https://i.redd.it/toavkywa93e11.jpg',
  'https://i.imgur.com/VLzVzQT.jpg',
  'http://i.imgur.com/3BjnM64.jpg',
  'https://i.redd.it/66sn9mqvrcl61.png',
  'http://oyster.ignimgs.com/mediawiki/apis.ign.com/futurama/e/ed/Hawking.jpg',
  'https://i.redd.it/alhk3g97ers01.png',
  'https://i.redd.it/u3up82yb72621.jpg',
  'https://i.redd.it/1t5hmn7klj811.jpg',
  'https://i.redd.it/hleeb6fgtpj01.jpg',
  'https://i.redd.it/k4p26a1fu8m21.jpg',
  'https://i.redd.it/6jxi53l9xj281.jpg',
  'https://i.redd.it/emudd774vvn21.png',
  'https://i.redd.it/v7cw7ptiav6a1.jpg',
  'https://i.redd.it/erddssn3qtl01.jpg',
  'https://i.redd.it/d5f71t4fm1x01.jpg',
  'https://i.redd.it/rcdqc5gzjob21.jpg',
  'https://i.redd.it/fme78rdxgat01.jpg',
  'https://i.redd.it/9jl3hunr3v521.jpg',
  'https://i.redd.it/dkavwcqj1u311.jpg',
  'https://i.redd.it/0mex1mu2ebhz.jpg',
  'https://i.redd.it/9c33ol4ztnz21.jpg',
  'https://i.redd.it/84vg0d8nk3o11.jpg',
  'https://i.redd.it/utx9mio1ful81.png',
  'https://i.imgur.com/7uE8MN8.jpg',
  'https://i.redd.it/s26qq133vs161.png',
  'https://i.redd.it/rkgzi78rp3k71.jpg',
  'https://i.redd.it/ggfn07z4n2q01.jpg',
  'https://i.redd.it/uwzk3xhaqzh21.jpg',
  'https://i.redd.it/13e69ghiik511.jpg',
  'https://i.redd.it/tujzym54jye91.jpg',
  'https://i.redd.it/lz9c3sngxug61.jpg',
  'https://i.redd.it/3110ur7vt8b21.jpg',
  'https://i.redd.it/4gvara48ae001.jpg',
  'https://i.redd.it/e7csslma9df21.jpg',
  'https://i.redd.it/rq9cfcdb88m81.jpg',
  'http://s3-us-west-2.amazonaws.com/sparkjoy.org/wp-content/uploads/sites/27/2015/04/31212955/MuDRaG_giraffe01.jpg',
  'https://i.redd.it/fm601ujcetf31.jpg',
  'https://i.redd.it/2un20nlifey01.jpg',
  'https://i.imgur.com/hIdZiT8.jpg',
  'https://i.redd.it/1sl9a0udykxz.jpg',
  'https://i.redd.it/qxs0y6yljlfz.jpg',
  'https://i.redd.it/wbrhywzncowy.jpg',
  'https://i.redd.it/pg29oajducf11.png',
  'https://i.redd.it/2c1rxc2wzk231.jpg',
  'https://i.redd.it/2rk4l4xzen411.jpg',
  'https://i.redd.it/z3pcsdg93pw51.jpg',
  'https://i.redd.it/e0kz2rxye3301.jpg',
  'https://i.redd.it/5q9i9cwbsr661.jpg',
  'https://i.redd.it/bwgnigvpw5k11.jpg',
  'https://i.imgur.com/PHKAvvu.jpg',
  'https://i.redd.it/70zvgzxzettz.jpg',
  'https://i.redd.it/1mh0ktapa5d01.jpg',
  'https://i.redd.it/t8k8rnirgne01.jpg',
  'https://i.imgur.com/UKEL2dS.png',
  'https://i.imgur.com/uY6Z7Wy.png',
  'https://i.redd.it/c1ryygkm8xn51.jpg',
  'https://i.imgur.com/2e31oHi.png',
  'https://i.redd.it/jbr2q7penetz.jpg',
  'https://i.redd.it/3bknkiv3vacy.jpg',
  'https://i.redd.it/ft32p7vb4wx11.jpg',
  'https://i.redd.it/ytbedqd5yjuz.jpg',
  'https://i.redd.it/qbccs4kv6i301.jpg',
  'https://i.redd.it/85renhawmsc01.jpg',
  'https://i.redd.it/k94lrdbulgh01.jpg',
  'https://i.redd.it/jb5g1pz831531.jpg',
  'https://i.redd.it/fa1hviscdwh81.jpg',
  'https://i.imgur.com/keUbVTH.jpg',
  'https://i.redd.it/phe22d6xlsl21.jpg',
  'https://i.imgur.com/rGleCwb.jpg',
  'https://i.redd.it/bcruskxhtzh01.jpg',
  'https://i.redd.it/6efz6xmcuq521.jpg',
  'https://i.redd.it/pmsfnfx01rd41.jpg',
  'https://i.redd.it/mudwp6x6cszz.jpg',
  'https://i.redd.it/ulqt6ikxzv101.jpg',
  'https://i.redd.it/0k2pkk4xvk421.png',
  'https://i.imgur.com/s4iomBz.jpg',
  'http://i.imgur.com/mdiDVBN.jpg',
  'https://i.redd.it/bfn29ircb4s71.jpg',
  'https://i.redd.it/sp7yk4nw18621.jpg',
  'https://i.redd.it/w1eoyp36ebo01.jpg',
  'https://i.redd.it/klk5ssm5e35z.jpg',
  'https://i.redd.it/i054txnffl721.jpg',
  'https://i.imgur.com/z3znCJc.jpg',
  'https://i.redd.it/eu8mtccswn111.jpg',
  'https://i.redd.it/dq9w0ux4lge31.jpg',
  'https://i.redd.it/pn0qjnxruo801.jpg',
  'https://i.redd.it/496vmzi5kqw11.jpg',
  'https://i.redd.it/205jp1gbbbb01.jpg',
  'https://i.redd.it/s32gjufuq0g01.jpg',
  'https://i.redd.it/2b4n19urqeoy.jpg',
  'https://i.redd.it/fpir7w50cp531.jpg',
  'https://i.redd.it/41xnhf45qsk31.jpg',
  'https://i.redd.it/4sanwpz4gbz01.jpg',
  'https://i.imgur.com/ThPb2wM.jpg',
  'https://i.redd.it/fk4xgjg1kam01.png',
  'https://i.redd.it/ay2aa0v14qa11.png',
  'https://i.redd.it/9gj7vomt6i021.jpg',
  'https://i.redd.it/i4fb0y2dzi501.jpg',
  'https://i.redd.it/hlvizmubm5wz.jpg',
  'https://i.redd.it/chf4bqhyh8341.jpg',
  'https://i.redd.it/454sf5cw1e111.jpg',
  'https://i.redd.it/aowwvzwnkre21.jpg',
  'https://i.redd.it/c55v7s3mzj601.jpg',
  'https://i.redd.it/44ofm0cixnp11.jpg',
  'https://i.redd.it/8i1pn5vcdam11.jpg',
  'https://i.redd.it/suv0377xzpu31.png',
  'https://i.redd.it/dx3pulv0xmk61.jpg',
  'https://i.redd.it/c61c4za7doh11.jpg',
  'https://i.redd.it/kdjw8k889x211.jpg',
  'https://i.redd.it/j9rqie3crug01.jpg',
  'https://i.redd.it/5d219et97ex11.jpg',
  'https://i.redd.it/q1yglkg4vu111.jpg',
  'https://i.redd.it/561t7owldd661.jpg',
  'https://i.redd.it/l2e4rhxs2tz21.jpg',
  'https://i.redd.it/8wiuad337ij61.jpg',
  'https://i.redd.it/08ylyvpxgi201.jpg',
  'https://i.redd.it/fzt7pp6m1fd21.jpg',
  'https://i.imgur.com/YWIrN00.png',
  'https://i.redd.it/qetup3c7gve11.jpg',
  'https://i.redd.it/5lbwa2mwrb0z.jpg',
  'https://i.redd.it/uzinwkwvl8x81.jpg',
  'https://i.redd.it/f9pa5xil1kez.png',
  'https://i.redd.it/x2gaxvntac531.jpg',
  'https://i.redd.it/ucrgsgt644s01.jpg',
  'https://i.redd.it/almfk25xplc21.jpg',
  'https://i.redd.it/j0o98aaafee41.jpg',
  'https://i.redd.it/plljhel5hxe71.jpg',
  'https://i.redd.it/0hha2prhy95z.jpg',
  'https://i.redd.it/2baq8xp5x7921.jpg',
  'https://i.redd.it/o5oijliij6uz.jpg',
  'https://i.redd.it/of66w9or0e9z.jpg',
  'https://i.redd.it/cerr83t8cyc71.jpg',
  'https://i.redd.it/4wlla5crkkr11.jpg',
  'https://i.redd.it/erpq8xuphpi51.jpg',
  'https://i.redd.it/3xzqbfqi7go41.jpg',
  'https://i.redd.it/30obywad2cjz.jpg',
  'https://i.redd.it/olb7zjhvjnlz.jpg',
  'http://i.imgur.com/RgHQoer.jpg',
  'https://i.imgur.com/a0AWiuU.jpg',
  'https://i.redd.it/ryadyd4pi9901.jpg',
  'https://i.redd.it/lurj30la8x421.jpg',
  'https://i.redd.it/iy78eaf9lrk01.png',
  'https://i.redd.it/jt565ql4y3311.png',
  'https://i.redd.it/jsphrhde5ss11.jpg',
  'https://i.redd.it/xtmexqu1e8t21.jpg',
  'https://i.redd.it/60fxejhw6ju31.jpg',
  'https://2.bp.blogspot.com/-TPF-QoXTk5o/UgGLvuJ71oI/AAAAAAAAINo/o9X8qaD4EiY/s1600/binaryfut.png',
  'https://i.redd.it/55y3pz8wfwz41.png',
  'http://i.imgur.com/rkDwXg5.png',
  'https://i.redd.it/kvpx4vdcn7r31.jpg',
  'https://i.redd.it/yf453smgnup31.jpg',
  'https://i.redd.it/0h6fid16nvy81.jpg',
  'https://i.redd.it/644yu4f4u2801.png',
  'https://i.redd.it/fqn6j8ao9uwz.png',
  'http://i.imgur.com/fhfeaU6.png',
  'https://i.redd.it/q9jnag26pdwz.jpg',
  'https://i.redd.it/w1fizpoh9k511.jpg',
  'https://i.redd.it/10mo1myu3gj01.jpg',
  'https://i.redd.it/r9tyq8nyvi951.jpg',
  'https://i.redd.it/miy30ydo6ur21.jpg',
  'https://i.redd.it/uvri1zek1ds11.png',
  'https://i.redd.it/myre2ic5lfj11.jpg',
  'https://i.redd.it/aw2ew13wsqg21.jpg',
  'https://i.redd.it/majr6wd0lkz91.jpg',
  'https://i.imgur.com/YYABTnR.jpg',
  'https://i.redd.it/mq9who2gyj681.jpg',
  'https://i.redd.it/3k3c6kglqud31.jpg',
  'https://i.imgur.com/TQCCx1t.jpg',
  'https://i.imgur.com/xFIbdIP.jpg',
  'https://i.redd.it/677lcmaw6g061.jpg',
  'https://i.redd.it/876pmm269wv51.jpg',
  'https://i.redd.it/3tha3se99m491.jpg',
  'https://i.redd.it/wpz7xoru7omz.jpg',
  'https://i.redd.it/1mtc45yv35u11.jpg',
  'https://i.redd.it/uipfqlrtct821.jpg',
  'https://i.redd.it/6xsxlagpfke41.jpg',
  'http://i.imgur.com/WI92TpL.png',
  'https://i.redd.it/vix9wd802ni81.jpg',
  'https://i.redd.it/jg6b8qfm1gq11.jpg',
  'https://i.redd.it/9cqvtqd31m001.png',
  'https://i.redd.it/2f68fl1djap41.jpg',
  'https://i.redd.it/6btwmgnl87021.jpg',
  'https://i.redd.it/d3590dx14o821.jpg',
  'https://i.redd.it/za7ja435sg621.jpg',
  'https://i.redd.it/j575tz6uxoyy.jpg',
  'https://i.redd.it/b3ykvk6tw8k11.jpg',
  'https://i.redd.it/yq46geqp2bh81.jpg',
  'https://i.redd.it/urdemtf46m141.jpg',
  'https://i.redd.it/ht4mn06tcrp61.jpg',
  'https://i.imgur.com/b9zE3UC.jpg',
  'https://i.redd.it/beca5ksigau11.png',
  'https://i.redd.it/dx81wy11cuv01.jpg',
  'https://i.redd.it/7dn190f2vzt91.jpg',
  'https://i.redd.it/tixcbecmg2321.jpg',
  'https://i.redd.it/ja0tj5g4s8d31.png',
  'https://i.redd.it/v2cvfrf4ky401.jpg',
  'https://i.redd.it/qpkhvns9rmn41.jpg',
  'https://i.redd.it/o0kiq0bkx2521.jpg',
  'https://i.redd.it/9jiznsolwzo11.png',
  'https://i.redd.it/arovfkkre4e61.jpg',
  'https://i.redd.it/5w2e1s0zm3821.jpg',
  'https://i.redd.it/6zx4sl4u1di01.jpg',
  'https://i.redd.it/yzsodx5wg6c11.png',
  'https://i.imgur.com/z0ET4XC.jpg',
  'https://i.redd.it/7vexfcd11c831.jpg',
  'https://i.redd.it/0g3zk8bpjotx.png',
  'http://i.imgur.com/TmBCkbe.jpg',
  'https://i.redd.it/4cyr4sd9mem21.jpg',
  'https://i.redd.it/3kxmb1nuak011.png',
  'https://i.imgur.com/DBnoC7Q.jpg',
  'http://i.imgur.com/m6BEKdK.png',
  'https://i.redd.it/sbg2d0m5hw601.jpg',
  'https://i.redd.it/sewhlog333vz.jpg',
  'https://i.imgur.com/bH4hrVf.jpg',
  'https://i.redd.it/xcl7tsovfe471.jpg',
  'https://i.redd.it/2nmu1qoqueb21.png',
  'https://i.redd.it/ieauz41n5zr41.jpg',
  'https://i.redd.it/n5hxwskyv9641.jpg',
  'https://i.redd.it/8hx6v1kgl9551.jpg',
  'https://i.redd.it/9otnktbnh9s31.jpg',
  'https://i.redd.it/bdohgwd03iv81.jpg',
  'https://i.redd.it/vz71sbtpyet41.png',
  'https://i.redd.it/6wlbpxk6jq091.jpg',
  'https://i.redd.it/cmrwy7eh66f21.jpg',
  'https://i.redd.it/cc8moute14h11.jpg',
  'https://i.redd.it/14ryv0gpbbe31.jpg',
  'https://i.redd.it/7j18tmsz0ps31.jpg',
  'https://i.redd.it/zz45xalssxu11.jpg',
  'https://i.redd.it/2lgt5lofhue01.jpg',
  'https://i.redd.it/l44qn06xjn041.jpg',
  'https://i.redd.it/1ldghmiz6mb61.jpg',
  'https://i.redd.it/93srws5fj3r01.jpg',
  'https://i.redd.it/lh9tqi3rpl061.jpg',
  'https://i.redd.it/ieec80ti4lj21.jpg',
  'https://i.redd.it/ifr5rgekf3ty.jpg',
  'https://i.redd.it/hv6lh24o0j611.jpg',
  'https://i.redd.it/kiol06jwkgw11.jpg',
  'https://i.redd.it/1stexnn5c08z.jpg',
  'https://i.redd.it/1hf3yxfhfae01.jpg',
  'https://i.redd.it/ddpfo85pqkt11.jpg',
  'https://i.redd.it/2gpq46z3p4v01.jpg',
  'https://i.redd.it/f8w5vwkowfn41.png',
  'https://i.redd.it/frihvbaw9tt41.jpg',
  'https://i.redd.it/h16g8m9k2p421.jpg',
  'https://i.redd.it/ewsevyvpwdu31.jpg',
  'https://i.redd.it/p31m8d888y911.png',
  'https://imgur.com/VB7IwfG.jpg',
  'https://i.redd.it/yldpqrqsh5k01.jpg',
  'https://i.redd.it/rttqz581lan21.jpg',
  'https://i.redd.it/jnhpmbz0u2f11.jpg',
  'https://i.redd.it/if72d9zbax531.jpg',
  'https://i.redd.it/8scwo60np17z.jpg',
  'https://i.redd.it/vnt9hw3398041.png',
  'https://i.redd.it/sz9wgpag0br91.png',
  'https://i.redd.it/waa3qhvfm3u51.png',
  'https://i.redd.it/r2u7yip5ozzy.png',
  'https://i.redd.it/cy6bjfsw45i11.jpg',
  'https://i.redd.it/dseci54nsya41.jpg',
  'http://i.imgur.com/9EVKNym.jpg',
  'https://i.redd.it/6gaun6ryuxu61.jpg',
  'https://i.redd.it/avxpq4vwtui41.jpg',
  'https://i.redd.it/7hh0ddvvs8w01.jpg',
  'https://i.redd.it/ni3bfpc5f9q21.jpg',
  'https://i.redd.it/l042rm36m8pz.jpg',
  'https://i.redd.it/xyyaj0uxsbe71.jpg',
  'https://i.redd.it/zy17h26if4y21.jpg',
  'https://i.imgur.com/gl9vPMf.jpg',
  'https://i.redd.it/2676b7gt51m61.jpg',
  'https://i.redd.it/38z8bd9f74j71.jpg',
  'https://i.redd.it/whpopvxlm8271.jpg',
  'https://i.imgur.com/3Qevp3z.jpg',
  'https://i.imgur.com/a4tHlPh.jpg',
  'https://i.redd.it/j9f5sb8wjooz.jpg',
  'https://i.redd.it/l92tjlqw0z881.jpg',
  'https://i.redd.it/rg9905ufpxm51.jpg',
  'https://i.redd.it/9tf3882s9ut01.jpg',
  'https://i.redd.it/7hg8m0h2nik31.png',
  'https://i.redd.it/ewa1ry55qzx91.png',
  'https://i.redd.it/hb0xpy82qjc51.jpg',
  'https://i.redd.it/fs2tx5cgm4l51.jpg',
  'https://i.redd.it/z1tmh389ppf21.jpg',
  'https://i.redd.it/ay0h8u3sdvc61.png',
  'https://i.redd.it/p87lc60alsj31.jpg',
  'https://i.redd.it/ckup4h0uee1a1.jpg',
  'https://i.imgur.com/WBsNCsl.jpg',
  'https://i.redd.it/cyy2db5s0eg01.jpg',
  'https://i.redd.it/sxnnrmu6s0v91.jpg',
  'https://i.redd.it/9ij81nk9gjj71.jpg',
  'https://i.redd.it/e9iyuhpocup01.jpg',
  'https://i.redd.it/2hdvz433q5ry.jpg',
  'https://i.redd.it/oxfvcwcpq1871.png',
  'https://i.redd.it/qm8ccwjxxzw61.jpg',
  'https://i.imgur.com/rvpeqRk.jpg',
  'https://i.redd.it/7anxs57g1e701.jpg',
  'https://i.redd.it/t44hh7wegum11.jpg',
  'https://i.imgur.com/qbib2Fc.png',
  'https://i.redd.it/4yohqt83oto41.jpg',
  'https://i.redd.it/21se7pvhqkm31.png',
  'https://i.redd.it/12r22qjwshn51.jpg',
  'https://vgy.me/pyTbl3.jpg',
  'https://i.redd.it/pnw7l4zh9hx21.jpg',
  'https://i.redd.it/8b2yf7j25ci81.jpg',
  'https://i.redd.it/oczfgzepfow01.jpg',
  'https://i.redd.it/u3v29nxty8n11.png',
  'https://i.redd.it/zdfuqsg2tphz.jpg',
  'http://i.imgur.com/mCkRGcE.jpg',
  'https://i.redd.it/nf0152zqvoy31.jpg',
  'https://i.redd.it/155a6ad1sok41.jpg',
  'https://i.redd.it/9vpezn72h0u21.png',
  'https://i.redd.it/snv3av447eh11.jpg',
  'https://i.redd.it/bo8m4nuo00721.jpg',
  'https://i.redd.it/acenp3t8usry.jpg',
  'https://i.redd.it/yfuqj7yktzi11.png',
  'https://i.redd.it/imu2cr2ulo401.jpg',
  'https://i.redd.it/wczwtiifligz.jpg',
  'https://i.redd.it/1ycx63kyd1o41.jpg',
  'https://i.redd.it/ycl6uzxmrir21.jpg',
  'https://i.imgur.com/12cghfJ.jpg',
  'https://i.redd.it/v6zz8rw0z7s21.jpg',
  'https://i.redd.it/xb753niq2ez71.jpg',
  'https://i.redd.it/wb64ef7h0qo01.jpg',
  'https://i.redd.it/voqi0j8tm8821.jpg',
  'https://i.redd.it/m0viw1y9tuv41.jpg',
  'https://i.redd.it/jblpwxn112731.jpg',
  'https://i.redd.it/3t510s55smr61.jpg',
  'https://i.redd.it/wq93s9txyh5z.jpg',
  'https://i.redd.it/xhhjpd8ikbh21.jpg',
  'https://i.redd.it/k7c83t4942m41.jpg',
  'https://i.redd.it/vki5amppik131.jpg',
  'https://i.redd.it/aow4anxncgq21.jpg',
  'https://i.redd.it/jhrb7kb84y741.jpg',
  'https://i.redd.it/gqe7mar2rx181.png',
  'https://i.redd.it/rnlthiqqsw4z.jpg',
  'https://i.redd.it/fx8hygluxuh31.jpg',
  'https://i.imgur.com/dEe4x8q.jpg',
  'https://i.redd.it/239eqmvltqk21.jpg',
  'https://i.redd.it/f0afyo42gnu21.jpg',
  'https://i.redd.it/dbc0zxjauf0a1.jpg',
  'https://i.redd.it/b8pjfaiwzhf71.jpg',
  'https://i.redd.it/lduup6ef8ef51.png',
  'https://i.redd.it/a540o8akeqh21.jpg',
  'https://i.redd.it/aheqxcj8yls71.jpg',
  'https://i.redd.it/sch17etah6511.jpg']
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