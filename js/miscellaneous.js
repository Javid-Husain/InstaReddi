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
  const memes = ['https://i.redd.it/6d0gd30lum541.jpg',
  'https://i.redd.it/6vkl2cgivxm41.jpg',
  'https://i.redd.it/nfug9wz14gz01.jpg',
  'https://i.imgur.com/HJB3pzm.jpg',
  'https://i.redd.it/2are21444r541.jpg',
  'https://i.redd.it/ar9xdi0kzu641.jpg',
  'https://i.redd.it/n2e22chl9hk11.jpg',
  'https://i.redd.it/sho4it2gmux51.jpg',
  'https://i.redd.it/zo2hsmpxin011.jpg',
  'https://i.redd.it/9omfu3f6k0q11.jpg',
  'https://i.redd.it/cseoxdxpvl331.jpg',
  'https://i.redd.it/joyei2q6p4s31.jpg',
  'https://i.redd.it/q934mjtgokr31.png',
  'https://i.redd.it/73ia6iuvdx031.png',
  'https://i.redd.it/bf7one310t751.jpg',
  'https://i.redd.it/8n22ba0f6sr51.jpg',
  'https://i.redd.it/h19z1xu9t1z41.jpg',
  'https://i.redd.it/a71w6ym88d251.png',
  'https://i.redd.it/03usxvuw2tq51.png',
  'https://i.redd.it/f4as9m8uc7q11.jpg',
  'https://i.redd.it/34dr05esqj241.jpg',
  'https://i.redd.it/zkt0zt4osvj21.jpg',
  'https://i.redd.it/n1rka5sz8gr31.jpg',
  'https://i.redd.it/pwqkuzx63xx11.png',
  'https://i.redd.it/pvhcq5momzr21.jpg',
  'https://i.redd.it/dfhv8xzspif21.jpg',
  'https://i.redd.it/22v3r2f5og051.jpg',
  'https://i.redd.it/fmpbn4uzngn11.png',
  'https://i.redd.it/nscr1ex2l2c21.jpg',
  'https://i.redd.it/7xkg2o3xmzl11.jpg',
  'https://i.redd.it/od7j1my6h7b41.jpg',
  'https://i.redd.it/xuzk9vl55rr01.jpg',
  'https://i.redd.it/l0ldjbrza3x31.png',
  'https://i.redd.it/r7un6wf43jzz.png',
  'https://i.redd.it/4p3wejmei2q21.jpg',
  'https://i.redd.it/zud24vw61ex11.jpg',
  'https://i.redd.it/1fh2twvl6nf31.jpg',
  'https://i.imgur.com/IreP4Ky.jpg',
  'https://i.redd.it/3mu889mmbxq31.jpg',
  'https://i.redd.it/ismfwnnjtcy11.png',
  'https://i.redd.it/bj7fvwl8kjx11.jpg',
  'https://i.redd.it/2kjdazquq7b11.png',
  'https://i.redd.it/z1cpxt8q9qr11.jpg',
  'https://i.redd.it/mwmlal6dk9b31.jpg',
  'https://i.redd.it/r1lfqc8k2whz.jpg',
  'https://i.redd.it/6ybydhkmsin31.png',
  'https://i.redd.it/nqpg6e13ll841.jpg',
  'https://i.redd.it/2plihohis7u31.jpg',
  'https://i.redd.it/gfmefify5fz21.jpg',
  'https://i.redd.it/a6pbbne99t441.jpg',
  'https://i.redd.it/7acxukumet511.jpg',
  'https://i.redd.it/75kl7urw2q051.jpg',
  'https://i.redd.it/91m91d88kwr31.png',
  'https://i.imgur.com/tXDCvIw.jpg',
  'https://i.imgur.com/hD6UQXe.png',
  'https://i.redd.it/a32opnrlmg551.jpg',
  'https://i.redd.it/o3pdqztfmcd11.jpg',
  'https://i.redd.it/djltdztgx2a11.jpg',
  'https://i.redd.it/k478360ehti11.jpg',
  'https://i.redd.it/vyv5nhu3mk831.jpg',
  'https://i.redd.it/9834v131uyd21.jpg',
  'https://i.redd.it/h9megtf722n41.jpg',
  'https://i.redd.it/6756fbdr03m11.png',
  'https://i.redd.it/boi5mh3i28h21.jpg',
  'https://i.redd.it/qbzhsxx5fb201.jpg',
  'https://i.redd.it/igbkloxr4nv31.png',
  'https://i.redd.it/v4ocr12apvl11.jpg',
  'https://i.redd.it/0hr26ilz2e921.jpg',
  'https://i.redd.it/raz20mswomd31.jpg',
  'https://i.redd.it/bsqjhhudolm11.jpg',
  'https://i.redd.it/8tva97jmksf21.jpg',
  'https://i.redd.it/uxztop1p5o241.jpg',
  'https://i.redd.it/xl21l971d2q01.jpg',
  'https://i.redd.it/5s65b1xh7gc21.jpg',
  'https://i.redd.it/6sdynfocd5t21.jpg',
  'https://i.redd.it/q79c52g1nks01.jpg',
  'https://i.redd.it/oxsfeqjqo6u01.jpg',
  'https://i.imgur.com/MIJwGt2.jpg',
  'https://i.redd.it/a794w1ndlge21.jpg',
  'https://i.redd.it/isofriqiki921.jpg',
  'https://i.redd.it/j9fpzil9a1421.jpg',
  'https://i.redd.it/jkvad2xsuz111.jpg',
  'https://i.imgur.com/79pH3rI.jpg',
  'https://i.redd.it/2hgl3g03vfd21.jpg',
  'https://i.redd.it/ev8wbw9i7k011.jpg',
  'https://i.redd.it/3impfn2futa31.jpg',
  'https://i.redd.it/zbe23swn3mg21.jpg',
  'https://i.redd.it/p5fpj2d0b6t01.jpg',
  'https://i.redd.it/3k0jepnj24l01.jpg',
  'https://i.redd.it/c94r3zirk0031.jpg',
  'https://i.redd.it/vqwulf2erej31.jpg',
  'https://i.imgur.com/rP0Vyq4.jpg',
  'https://i.redd.it/uwqhivn9u4f21.jpg',
  'https://i.redd.it/8rsr6z343me41.png',
  'https://i.redd.it/i2xf2itbxi231.jpg',
  'https://i.redd.it/rhena83sche11.jpg',
  'https://i.redd.it/0d9ee8kq78941.jpg',
  'https://i.redd.it/nv8f1kje0z911.jpg',
  'https://i.redd.it/0oe9sp9y6jz21.jpg',
  'https://i.redd.it/r0qirfebrmj11.jpg',
  'https://i.redd.it/zc0m61e8jyl31.jpg',
  'https://i.redd.it/ocisltc03xk11.jpg',
  'https://i.redd.it/iyf4uhz11wr21.jpg',
  'https://i.redd.it/9m52s99ehb231.jpg',
  'https://i.redd.it/th8nkigkwwc11.png',
  'https://i.redd.it/gq0d2pn80nkz.jpg',
  'https://i.redd.it/osiq03bxfkh21.png',
  'https://i.redd.it/ase3z2w0qba31.jpg',
  'https://i.redd.it/n6u2rb5shka11.jpg',
  'https://i.redd.it/24lgyw5h83m31.jpg',
  'https://i.redd.it/kvjvnmh52h631.jpg',
  'https://i.redd.it/8dwf93zzumg11.jpg',
  'https://i.redd.it/jj2uvmkd6yk21.jpg',
  'https://i.redd.it/6y1cpbt1f1e31.png',
  'https://i.redd.it/sagzh0uasi441.jpg',
  'https://i.redd.it/paqlevn3tty21.jpg',
  'https://i.imgur.com/Az9iRcO.jpg',
  'https://i.redd.it/s17zh14cbb621.jpg',
  'https://i.redd.it/aocsssgllg851.jpg',
  'https://i.redd.it/gk9da0du467z.jpg',
  'https://i.redd.it/m578lfikrec11.jpg',
  'https://i.imgur.com/o9jz0oj.jpg',
  'https://i.redd.it/89to10j6ep921.jpg',
  'https://i.redd.it/bkdvxo39tk231.jpg',
  'https://i.redd.it/dyjee4wdqer11.jpg',
  'https://i.redd.it/q5p9zlg2sv221.jpg',
  'https://i.redd.it/gr7kzlzj5sp11.jpg',
  'https://i.redd.it/8v4i62on2fs21.jpg',
  'https://i.redd.it/3bh95vbt0mr11.jpg',
  'https://i.imgur.com/jsdLilL.jpg',
  'https://i.redd.it/zwnfgr2pk5f41.jpg',
  'https://i.redd.it/rs5dxuj2nik21.jpg',
  'https://i.redd.it/lwwn9ysmx9e21.jpg',
  'https://i.redd.it/hwu231710d631.png',
  'https://i.redd.it/rxbpysyfzcv11.jpg',
  'https://i.redd.it/bi9z5j49tw301.jpg',
  'https://i.redd.it/kjelfhoo60d31.jpg',
  'https://i.redd.it/gcq1509ypxh01.jpg',
  'https://i.redd.it/i8wv8dfn94e11.jpg',
  'https://i.redd.it/msfo2qcaw6d21.jpg',
  'https://i.redd.it/5jtuzyixv3g41.jpg',
  'https://i.redd.it/o60de658je741.png',
  'https://i.redd.it/ye0bwe8zqgl21.jpg',
  'https://i.imgur.com/aKMjf3W.jpg',
  'https://i.redd.it/ptuqmvi3oat31.jpg',
  'https://i.redd.it/cyiq79ku88i11.jpg',
  'https://i.redd.it/he3oarjqjl821.jpg',
  'https://i.redd.it/s466ql2k2ij21.jpg',
  'https://i.redd.it/jo1yqviac2f51.png',
  'https://i.redd.it/3axsb28o4t231.jpg',
  'https://i.redd.it/hnk9x8vq99831.png',
  'https://i.redd.it/q9ndwgpp7ae61.png',
  'https://i.redd.it/f3fdm4pkhdc31.jpg',
  'https://i.redd.it/jai0dvfjvha11.jpg',
  'https://i.redd.it/rqhks88b39u51.png',
  'https://i.redd.it/193czoet3c331.jpg',
  'https://i.redd.it/mlbpzh81r3621.jpg',
  'https://i.redd.it/t1vy4rvlb1c01.jpg',
  'https://i.redd.it/7yv7zsvu66201.jpg',
  'https://i.redd.it/0qvty5u9y3c31.jpg',
  'https://i.redd.it/3i1rg5h5g1k11.jpg',
  'https://i.redd.it/f4rw1veue4l21.jpg',
  'https://i.redd.it/etged23ov0s31.png',
  'https://i.redd.it/r2ji7hpv8tx11.jpg',
  'https://i.redd.it/63w52f13fok41.jpg',
  'https://i.redd.it/eiwgpk4e5zv11.jpg',
  'https://i.redd.it/9cr1c0th54j21.jpg',
  'https://i.imgur.com/tVJSLdo.jpg',
  'https://i.redd.it/4msuzpp84ll01.png',
  'https://i.redd.it/u3t6e4q6zi121.jpg',
  'https://i.redd.it/jufpq3nani311.jpg',
  'https://i.imgur.com/vdqUThX.jpg',
  'https://i.redd.it/xdlckciq5eh31.jpg',
  'https://i.redd.it/obuoqo6n9ol11.jpg',
  'https://i.redd.it/6vm5pwnru8x31.jpg',
  'https://i.redd.it/o323ffgftyk01.jpg',
  'https://i.redd.it/c03hcjxscvd11.jpg',
  'https://i.redd.it/sua86lhc8ap01.jpg',
  'https://i.redd.it/3ap6lzpnt9vz.jpg',
  'https://i.redd.it/4nyaucwy21441.jpg',
  'https://i.redd.it/rte9rm1juhw11.jpg',
  'https://i.redd.it/gmu0fzxpo5x11.jpg',
  'https://i.redd.it/9kh6ci5pom221.jpg',
  'https://i.redd.it/kk23l2s37kc21.jpg',
  'https://i.redd.it/5whuydh6d3e01.jpg',
  'https://i.imgur.com/0H4jXcQ.jpg',
  'https://i.redd.it/bp880ezm7tn31.png',
  'https://i.imgur.com/Xuvcvm2.jpg',
  'https://i.redd.it/j185zpeyv6n31.png',
  'https://i.redd.it/onieltp031m21.jpg',
  'https://i.redd.it/fph4t9n5w8o21.png',
  'https://i.redd.it/zklx6zxqmx421.jpg',
  'https://i.redd.it/px7d68ellxy21.jpg',
  'https://i.redd.it/u6hekl1zv8811.jpg',
  'https://i.redd.it/b73r5dwvwxa41.jpg',
  'https://i.redd.it/lm3k172py9921.jpg',
  'https://i.redd.it/i2naor7ed9w21.jpg',
  'https://i.redd.it/bd3jazb0ces31.jpg',
  'https://i.redd.it/ldrbte6v26o31.jpg',
  'https://i.redd.it/8h4djbqx3w521.jpg',
  'https://i.redd.it/l25awnaa76911.jpg',
  'https://i.redd.it/zhh75atq4zn11.jpg',
  'https://i.redd.it/3of8gtl1mdx31.jpg',
  'https://i.redd.it/hmwuj6bd7re41.jpg',
  'https://i.redd.it/0zpwm0fatj931.jpg',
  'https://i.redd.it/vp7nu86kt3r31.jpg',
  'https://i.redd.it/sexdx32vpmx01.png',
  'https://i.redd.it/zy11dzic99131.jpg',
  'https://i.redd.it/wupd2oxp02l51.jpg',
  'https://i.imgur.com/FwlDmlr.jpg',
  'https://i.redd.it/n3i2wf7wd8721.jpg',
  'https://i.redd.it/y6ez80dg3a541.jpg',
  'https://i.redd.it/5nys4xyfj9y31.jpg',
  'https://i.redd.it/gh1hcfkmj5k21.jpg',
  'https://i.redd.it/m5mxjif1p1d21.jpg',
  'https://i.redd.it/17nv7t04cu431.jpg',
  'https://i.redd.it/apbzs5bc9tr31.jpg',
  'https://i.redd.it/jn3jhghkn8331.jpg',
  'https://i.redd.it/ohfdl0tved841.jpg',
  'https://i.redd.it/zjzbiz3usop51.jpg',
  'https://i.imgur.com/553qk18.jpg',
  'https://i.redd.it/ufy03o502zt21.jpg',
  'https://i.redd.it/8pz82sfzx3h21.jpg',
  'https://i.redd.it/tk806xki8fo21.jpg',
  'https://i.redd.it/e75oo2bllr0z.png',
  'https://i.redd.it/2u0plwal92r21.jpg',
  'https://i.redd.it/v6dzz0paw2f11.jpg',
  'https://i.redd.it/83350l3rt8241.jpg',
  'https://i.imgur.com/EHX4g3j.jpg',
  'https://i.redd.it/ze8c9acl03wy.jpg',
  'https://i.redd.it/1j4l5z1aobg21.jpg',
  'https://i.redd.it/5vxdggph5o831.jpg',
  'https://i.redd.it/oc4hn8ydwmj41.jpg',
  'https://i.redd.it/bktvqxomrb431.jpg',
  'https://i.redd.it/cnvblywuuzq61.jpg',
  'https://i.redd.it/80lkt3mkl0a51.jpg',
  'https://i.redd.it/77x9s1bxfvw11.jpg',
  'https://i.imgur.com/FUXzFi9.jpg',
  'https://i.imgur.com/xWFSn15.png',
  'https://i.redd.it/nqdvhrag2ib11.jpg',
  'https://i.redd.it/63j212ya48l41.jpg',
  'https://i.imgur.com/E27ofYs.jpg',
  'https://i.redd.it/eqonkvu77bk11.jpg',
  'https://i.redd.it/aka4m5fxtfo11.jpg',
  'https://i.redd.it/3ixi813d6r631.jpg',
  'https://i.redd.it/1vfz7ljj0pw41.jpg',
  'https://i.redd.it/p9mkmdqszvv31.jpg',
  'https://i.redd.it/jh16jot5smh41.jpg',
  'https://i.redd.it/1eiywhgxjj361.jpg',
  'https://i.redd.it/y6v4bnwy1me21.jpg',
  'https://i.redd.it/uunhhn5ejzs11.jpg',
  'https://i.redd.it/c68bhff2un701.png',
  'https://i.redd.it/jngwp44mf3211.jpg',
  'https://i.redd.it/jr0m12ps9cl31.png',
  'https://i.imgur.com/jRmhqV0.jpg',
  'https://i.redd.it/jll3v9zr9yq41.jpg',
  'https://i.redd.it/uygw85nw6ak21.jpg',
  'https://i.redd.it/dziyvgpkcuf31.jpg',
  'https://i.redd.it/jx3uackqvig21.jpg',
  'https://i.redd.it/vox66vsu4hc41.jpg',
  'https://i.redd.it/ibeo45gefyb11.png',
  'https://i.redd.it/xzedobuvm8c41.jpg',
  'https://i.redd.it/dp8dhefbxhj11.jpg',
  'https://i.redd.it/hjz67b8z6li31.jpg',
  'https://i.redd.it/ofpox0vfr2hz.jpg',
  'https://i.redd.it/370oebh7mi541.jpg',
  'https://i.redd.it/9f6lc1z8k71z.jpg',
  'https://i.redd.it/vfzy3k66pcs11.jpg',
  'https://i.redd.it/svvjd6wfnrs21.jpg',
  'https://i.redd.it/v7hmuq85mkwz.jpg',
  'https://i.redd.it/n2nqd66zoyj21.jpg',
  'https://i.redd.it/2mhyunzt6ky21.jpg',
  'https://i.redd.it/fjh0chwt3rt21.png',
  'https://i.redd.it/e98lbgj7wq731.jpg',
  'https://i.redd.it/9o4v2a7temv21.png',
  'https://i.redd.it/sv8irfzsiou31.jpg',
  'https://i.imgur.com/BGxz6GH.jpg',
  'https://i.redd.it/nrgnzvyhiee31.jpg',
  'https://i.redd.it/mbwjtswojzu31.png',
  'https://i.redd.it/zikp9g518di31.png',
  'https://i.redd.it/s3sw006lj1l21.jpg',
  'https://i.redd.it/luz27fsrsn161.jpg',
  'https://i.redd.it/edhqea0fur911.jpg',
  'https://i.redd.it/nwnxwft1neu01.jpg',
  'https://i.redd.it/4jcb2ld1fgu31.jpg',
  'https://i.redd.it/4znin1ngal131.jpg',
  'https://i.redd.it/meqozmroy0nz.jpg',
  'https://i.redd.it/ffe3b2mlayxz.png',
  'https://i.redd.it/tslu8czwlcc21.jpg',
  'https://i.redd.it/ov9hv0bhsvk21.jpg',
  'https://i.redd.it/xrqjk64uvxx41.jpg',
  'https://i.imgur.com/0e2MM7a.jpg',
  'https://i.redd.it/1u8a4cwalic61.png',
  'https://i.redd.it/lnz0cub0g0l31.jpg',
  'https://i.redd.it/6ropfvpieh421.jpg',
  'https://i.redd.it/oqavgi6fdnx31.png',
  'https://i.redd.it/6dh3i1d9l3z31.jpg',
  'https://i.redd.it/875ilgpzgm111.png',
  'https://i.redd.it/xc2aqommg4h41.png',
  'https://i.imgur.com/95aeBPs.jpg',
  'https://i.redd.it/xd90wd0r20621.jpg',
  'https://i.redd.it/blm0780h18041.jpg',
  'https://i.redd.it/yzmbucwm6de21.png',
  'https://i.redd.it/e8jtjwu88jm01.jpg',
  'https://i.redd.it/p7njaac9jfy21.jpg',
  'https://i.redd.it/2t672amf8viz.jpg',
  'https://i.redd.it/3j3dlsnjtiq31.jpg',
  'https://i.redd.it/ow4xjhgzmey01.jpg',
  'https://i.redd.it/gj1air3osyx31.jpg',
  'https://i.redd.it/r8cgkhv8uq621.jpg',
  'https://i.imgur.com/r3O928X.jpg',
  'https://i.redd.it/6mf37ikqyw621.jpg',
  'https://i.redd.it/tbtbobyzxa9z.jpg',
  'https://i.redd.it/wwqvrjjafsu31.jpg',
  'https://i.redd.it/pkl75btwybh21.png',
  'https://i.redd.it/9kfvtzg375q31.jpg',
  'https://i.redd.it/bzffwmuuarw21.jpg',
  'https://i.redd.it/okvewkm44mk21.jpg',
  'https://i.redd.it/sspbp1xf3e8z.jpg',
  'https://i.redd.it/xx63bf04a5y21.jpg',
  'https://i.redd.it/jruq2pbu4c511.jpg',
  'https://i.redd.it/9759iz92ogmz.jpg',
  'https://i.redd.it/mb29jokmk2e41.jpg',
  'https://i.redd.it/25n3iubck1q31.jpg',
  'https://i.redd.it/34pr9kughjp21.jpg',
  'https://i.redd.it/3vrqyhmfm5p21.jpg',
  'https://i.redd.it/zjjl4qsofhu41.png',
  'https://i.redd.it/7qwelekaquv21.jpg',
  'https://i.redd.it/34gc9au7lmk31.jpg',
  'https://i.redd.it/0znkj9b64dk01.jpg',
  'https://i.redd.it/ru2i2xv0t1121.jpg',
  'https://i.redd.it/4lx4iszy2rm01.jpg',
  'https://i.redd.it/btw1pr11m0721.jpg',
  'https://i.redd.it/9ygye2pe3x241.jpg',
  'https://i.redd.it/ru3glhq2ftc31.jpg',
  'https://i.redd.it/j9l9i3gjzwa11.jpg',
  'https://i.redd.it/k08zc9twoth51.jpg',
  'https://i.redd.it/18yye54wl8c31.jpg',
  'https://i.redd.it/zvt1qph75p331.jpg',
  'https://i.redd.it/59b2l7ab9t921.png',
  'https://i.redd.it/tfa7lpcxj9821.jpg',
  'https://i.redd.it/9unkv4it5t421.png',
  'https://i.redd.it/d9daehbyj9p11.jpg',
  'https://i.redd.it/p0et5hrju6x21.png',
  'https://i.redd.it/dwqpmjczvaz51.jpg',
  'https://i.redd.it/n6rdpoyz58x01.jpg',
  'https://i.imgur.com/FCVWcIZ.jpg',
  'https://i.redd.it/tykd0krqf6c21.jpg',
  'https://i.redd.it/31hl1si4xh911.jpg',
  'https://i.redd.it/5ql9r0zc55l31.jpg',
  'https://i.redd.it/ytk4gkh54h731.jpg',
  'https://i.redd.it/g1ttw75bfauy.jpg',
  'https://i.redd.it/wbosdxdbjm031.jpg',
  'https://i.redd.it/i63tel8jtom11.jpg',
  'https://i.imgur.com/Rjxojxz.jpg',
  'https://i.redd.it/52ml4y45u8111.jpg',
  'https://i.redd.it/fejbp6wta9h41.png',
  'https://i.redd.it/gy1i4kwgn3011.jpg',
  'https://i.redd.it/oc7ixsz5qsi31.jpg',
  'https://i.redd.it/7wtok2558dw31.jpg',
  'https://i.redd.it/g2vj0coedkt41.jpg',
  'https://i.redd.it/isjqt1nbwzb21.jpg',
  'https://i.redd.it/chy6nvmnguw21.jpg',
  'https://i.redd.it/7rj3w4db2my51.jpg',
  'https://i.redd.it/at6p0uyb3aq11.jpg',
  'https://i.redd.it/eq8ymi8955331.png',
  'https://i.redd.it/lvwwd6dj96h31.jpg',
  'https://i.redd.it/3rxnxejqwktz.jpg',
  'https://i.redd.it/ohlvjy9w5ve11.jpg',
  'https://i.redd.it/ob180onxki531.jpg',
  'https://i.redd.it/f18ivxa1ofz51.png',
  'https://i.imgur.com/6NbLJHD.jpg',
  'https://i.redd.it/0boijpf38wn41.jpg',
  'https://i.redd.it/jx005xbe66j41.jpg',
  'https://i.redd.it/039x0t5j1q321.jpg',
  'https://i.redd.it/3x8mycnabtm31.jpg',
  'https://i.redd.it/vaiggius98f31.jpg',
  'https://i.redd.it/fhpx00s9iln21.jpg',
  'https://i.redd.it/ghp30ek1ddx21.jpg',
  'https://i.redd.it/wxo2f0utwpo01.png',
  'https://i.redd.it/vj1bp44yr0p21.png',
  'https://i.redd.it/edcoygfvhvuz.jpg',
  'https://i.redd.it/lwdkcu7qgfw21.jpg',
  'https://i.redd.it/xxe2l01nxkx21.jpg',
  'https://i.redd.it/vkd7g297ouq21.jpg',
  'https://i.redd.it/7uw5jt8rwtz31.jpg',
  'https://i.redd.it/ia8jqzy3j3h11.jpg',
  'https://i.redd.it/d3tjm7bjauj01.jpg',
  'https://i.redd.it/liyh1mubs5641.jpg',
  'https://i.redd.it/sq0ppp9748t11.jpg',
  'https://i.redd.it/6npy5z2x1qg21.jpg',
  'https://i.redd.it/89witc5nrkw11.jpg',
  'https://i.redd.it/nr3n0jldwa021.jpg',
  'https://i.redd.it/elfkqy7e01511.jpg',
  'https://i.redd.it/ile211j5sqe21.jpg',
  'https://i.imgur.com/1By2JvB.jpg',
  'https://i.redd.it/vbssvvyxy5t61.jpg',
  'https://i.redd.it/ngbdv7jkaqq21.jpg',
  'https://i.redd.it/zg52dtjlwxty.jpg',
  'https://i.redd.it/xpweidn5ykm31.jpg',
  'https://i.redd.it/gpp72ch1nvb11.jpg',
  'https://i.redd.it/bsstmxpdgg721.png',
  'https://i.redd.it/wtg7eo1ul0x11.jpg',
  'https://i.redd.it/gjtadfnvlf6z.jpg',
  'https://i.redd.it/zwuycwr1hji11.jpg',
  'https://i.redd.it/lmg9cz3iwgh41.jpg',
  'https://i.redd.it/s0hy18ml21x51.jpg',
  'https://i.redd.it/osly2woawto31.jpg',
  'https://i.redd.it/zx8dme05n9l21.jpg',
  'https://i.redd.it/4ama5yyqc6f51.jpg',
  'https://i.redd.it/g5xroojynkj31.jpg',
  'https://i.redd.it/l81411l3nxd41.jpg',
  'https://i.redd.it/8j6go27volp41.jpg',
  'https://i.redd.it/d12w5qlvliw01.jpg',
  'https://i.redd.it/xezm5kgykxyz.jpg',
  'https://i.redd.it/xbqd8y87n4131.jpg',
  'https://i.redd.it/blf4xc7dl9731.png',
  'https://i.redd.it/9d083jep8sd21.jpg',
  'https://i.redd.it/0qa20as9rlc11.jpg',
  'https://i.redd.it/8ccvoss5mje21.jpg',
  'https://i.redd.it/w51vitwf0lg31.jpg',
  'https://i.redd.it/migye5zo9gv41.jpg',
  'https://i.redd.it/4g081k0ad4421.jpg',
  'https://i.redd.it/enk3dozptst41.jpg',
  'https://i.redd.it/a53h224mgez01.jpg',
  'https://i.redd.it/ye1teear673z.jpg',
  'https://i.imgur.com/eKogxxn.jpg',
  'https://i.redd.it/v48bqtma17u41.jpg',
  'http://i.imgur.com/ypDvR2o.jpg',
  'https://i.redd.it/mz016xnwn8g51.jpg',
  'https://i.redd.it/aax4feaegxc51.jpg',
  'https://i.redd.it/kqmzquqj3g931.png',
  'https://i.redd.it/gntezo6dsgh21.jpg',
  'https://i.redd.it/d77uzttdcry11.jpg',
  'https://i.redd.it/9tgiakpeb0x21.jpg',
  'https://i.redd.it/y1kf2hj878f21.png',
  'https://i.redd.it/00yzz19op2b21.jpg',
  'https://i.redd.it/wrrlyn27ouf41.jpg',
  'https://i.redd.it/8wk0xzvzy2141.jpg',
  'https://i.redd.it/hydpr2rpmat01.jpg',
  'https://i.redd.it/8msdw2i4tka21.png',
  'https://i.redd.it/fwadzx4vhvl01.jpg',
  'https://i.redd.it/37jfaeqjk6u21.jpg',
  'https://i.redd.it/b1w583t6rm511.png',
  'https://i.redd.it/h7qhxvh4x4941.jpg',
  'https://i.imgur.com/bxQlZgA.jpg',
  'https://i.redd.it/myssth1yhyf51.jpg',
  'https://i.redd.it/7xc90ukonks11.jpg',
  'https://i.redd.it/rbjzqd0li0f31.jpg',
  'https://i.redd.it/zcv5lriz9jvz.jpg',
  'https://i.redd.it/oo0b8fz03kh01.jpg',
  'https://i.redd.it/91j6yh8yqda41.jpg',
  'https://i.redd.it/tadaf5gbr2631.png',
  'https://i.redd.it/mn08m6d4v3301.jpg',
  'https://i.redd.it/diapaqn1w4031.jpg',
  'https://i.redd.it/kt3ahs5zs7r21.jpg',
  'https://i.redd.it/mwmacs42sqb21.jpg',
  'https://i.redd.it/crelcrtusftz.jpg',
  'https://i.redd.it/xeklmd73vzi31.jpg',
  'https://i.redd.it/343hyfap2ah31.jpg',
  'https://i.redd.it/rqqs6pu3y5311.jpg',
  'https://i.redd.it/nyqkcfr334001.jpg',
  'https://i.redd.it/lzgp1k24o9s31.jpg',
  'https://i.redd.it/nfbjd7uyhkg51.jpg',
  'https://i.redd.it/8xl9jixhp2801.jpg',
  'https://i.redd.it/vmvx048l77n11.jpg',
  'https://i.redd.it/3c6v98w875r01.jpg',
  'https://i.redd.it/o7ylmbsuey331.jpg',
  'https://i.redd.it/to5wd1g1dzh31.jpg',
  'https://i.redd.it/b4uh5gmd4yi21.jpg',
  'https://i.redd.it/24ga8ttc0jv21.jpg',
  'https://i.redd.it/l3vup5dmikly.jpg',
  'https://i.redd.it/63s21vmlew701.jpg',
  'https://i.redd.it/xcsu65gjd4yz.jpg']
  
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