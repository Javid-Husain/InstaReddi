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
  const memes = ['https://i.imgur.com/th7A2XW.jpg',
  'https://i.redd.it/0gsv9rijxpn51.jpg',
  'https://i.redd.it/w8cffr81rrm51.jpg',
  'https://i.redd.it/6az7dr5fqsn31.jpg',
  'https://i.redd.it/i4el1q6ql7841.jpg',
  'https://i.redd.it/1y8xpb2xh6m31.jpg',
  'https://i.redd.it/6czrmutdhx331.jpg',
  'https://i.redd.it/6mkf2fwat6461.jpg',
  'https://i.redd.it/ixv5i09s21f51.jpg',
  'https://i.redd.it/9jb2ir5m7yc51.jpg',
  'https://i.redd.it/fx9yg9ylzc851.jpg',
  'https://i.redd.it/kslk7bp3svn21.jpg',
  'https://i.redd.it/v9vxkluptt961.jpg',
  'https://i.redd.it/unzwoor8i6x51.png',
  'https://i.redd.it/v2knx67ovc261.png',
  'https://i.redd.it/ok5bnmdtwz361.jpg',
  'https://i.redd.it/44m7l7g698041.jpg',
  'https://i.redd.it/3pasxhrchjv61.jpg',
  'https://i.redd.it/r3zt3v7jcnv31.png',
  'https://i.redd.it/ele6bpnedn441.png',
  'https://i.redd.it/c8bte6xhlip31.jpg',
  'https://i.redd.it/6xopn9mfgvx51.jpg',
  'https://i.redd.it/2j9gnasv9v961.jpg',
  'https://i.redd.it/ava1gf9gb0851.jpg',
  'https://i.redd.it/lkar9b2leic21.png',
  'https://i.redd.it/04czfzogq7c51.jpg',
  'https://i.redd.it/6vmyj3krpd471.png',
  'https://i.redd.it/gby06l0dcnc61.jpg',
  'https://i.redd.it/w7zqpp34zpi51.jpg',
  'https://i.redd.it/a6dq8zw9uh341.jpg',
  'https://i.redd.it/b6sh8jk5aft51.jpg',
  'https://i.redd.it/q39kdkci4zi51.jpg',
  'https://i.redd.it/2xieutieawt31.png',
  'https://i.imgur.com/2as3wp6.jpg',
  'https://i.redd.it/6mt435h5odm61.jpg',
  'https://i.imgur.com/iZl9NyW.jpg',
  'https://i.redd.it/qakvlsb8c0e61.jpg',
  'https://i.redd.it/tezdv6s6vew51.jpg',
  'https://i.redd.it/s7wxdl2auix51.jpg',
  'https://i.redd.it/j6dg546usin51.jpg',
  'https://i.redd.it/3g7mgt9zajz91.png',
  'https://i.imgur.com/Z6aJfBW.jpg',
  'https://i.redd.it/me6uxzu2sxf51.jpg',
  'https://i.redd.it/u6lll7z3h1b31.jpg',
  'https://i.redd.it/8uf6g88z7id41.png',
  'https://i.redd.it/hy9u9t5r76b61.jpg',
  'https://i.redd.it/vfxtwy6lu6v41.jpg',
  'https://i.redd.it/5usascgcwk361.jpg',
  'https://i.imgur.com/SWLVtkL.jpg',
  'https://i.redd.it/nernja7575f51.jpg',
  'https://i.redd.it/j0hsfxqkjye51.png',
  'https://i.redd.it/bidqtfkn3mp61.jpg',
  'https://i.redd.it/fe69axdca9h31.jpg',
  'https://i.redd.it/9zk8tyhv8qk51.png',
  'https://i.redd.it/miudhzw0z2y31.jpg',
  'https://i.redd.it/vv74ojm9lwm51.jpg',
  'https://i.redd.it/41enw3kpzld51.png',
  'https://i.redd.it/u9lgm34u3hg61.jpg',
  'https://i.redd.it/1pjz301eb0v41.jpg',
  'https://i.redd.it/zhcchqpgak841.jpg',
  'https://i.redd.it/x2xwn1hh8xk41.jpg',
  'https://i.redd.it/pign04dcdoz31.jpg',
  'https://i.redd.it/ur88gjdpbgk61.jpg',
  'https://i.redd.it/koo2nt5wn6f31.jpg',
  'https://i.redd.it/wp4ctwp926k51.jpg',
  'https://i.redd.it/r0uj966yr8c51.jpg',
  'https://i.imgur.com/pGK5kgO.jpg',
  'https://i.redd.it/8hd5dx4w6c461.jpg',
  'https://i.redd.it/nyi9yztkzg751.jpg',
  'https://i.redd.it/r73ve0rshic51.jpg',
  'https://i.redd.it/0lzqrbdam2p51.jpg',
  'https://i.redd.it/9hxyoroz7nx51.png',
  'https://i.redd.it/cuhmado2ef421.jpg',
  'https://i.redd.it/9jkzlvt8p4q31.jpg',
  'https://i.redd.it/kene70yozck51.jpg',
  'https://i.redd.it/5ebvdqfz4nx31.jpg',
  'https://i.imgur.com/IZW1ttL.png',
  'https://i.redd.it/1qntdjaieqj51.png',
  'https://i.redd.it/w3ymk48djeo31.jpg',
  'https://i.redd.it/egv5dz77r7j51.jpg',
  'https://i.redd.it/xavbu6poxyv61.jpg',
  'https://i.redd.it/t899coor4ag61.jpg',
  'https://i.redd.it/a5cxn0zsp8061.jpg',
  'https://i.redd.it/5j4hktdqon831.jpg',
  'https://i.redd.it/2g3a5tezh9v31.jpg',
  'https://i.redd.it/j9fyuosx4oo51.jpg',
  'https://i.redd.it/la0jcpyqbkd41.jpg',
  'https://i.redd.it/y3up43369na51.jpg',
  'https://i.redd.it/rlgpu1n19ae31.jpg',
  'https://i.redd.it/77iy1tv7zid61.jpg',
  'https://i.redd.it/il70jrjk7cl31.png',
  'https://i.redd.it/yc87qmwpxsz41.jpg',
  'https://i.redd.it/rk4lbpogb3761.jpg',
  'https://i.redd.it/1hvksoph0rz61.jpg',
  'https://i.redd.it/lw3faag5wrg31.jpg',
  'https://i.redd.it/0qozyh2x40b61.jpg',
  'https://i.redd.it/376654tmoqd61.jpg',
  'https://i.redd.it/8bx145mtwmu51.jpg',
  'https://i.redd.it/utqxfn5otsd51.png',
  'https://i.redd.it/9bdn2ql94a451.jpg',
  'https://i.redd.it/qt2nzqq6x2271.png',
  'https://i.redd.it/doemi8q934h61.jpg',
  'https://i.redd.it/q3bxn1yvspl51.png',
  'https://i.redd.it/09hhs1wyccn51.jpg',
  'https://i.redd.it/w27z2hqo5zh31.jpg',
  'https://i.redd.it/poqqkegj5u931.png',
  'https://i.redd.it/tl9u95717ta51.jpg',
  'https://i.redd.it/4b9jgghvq5o31.jpg',
  'https://i.redd.it/9syqooq9svh41.jpg',
  'https://i.redd.it/yqjpg7go6oc31.png',
  'https://i.redd.it/10nvvmwqkmo41.jpg',
  'https://i.redd.it/n9bk8q6rknl61.jpg',
  'https://i.redd.it/mxn3e3nm0bv31.png',
  'https://i.redd.it/8xyjxp07yxh51.jpg',
  'https://i.redd.it/s0m20stqr8s41.jpg',
  'https://i.redd.it/unjjm6wffsa21.jpg',
  'https://i.redd.it/km48bloq87751.jpg',
  'https://i.redd.it/vicc81y402q51.jpg',
  'https://i.redd.it/ttztwycy2rh31.jpg',
  'https://i.redd.it/9zo7v8m3f7g51.jpg',
  'https://i.redd.it/gimv54r0kgy31.png',
  'https://i.redd.it/evawd4sae5l31.jpg',
  'https://i.redd.it/pgzu9mmbfc541.jpg',
  'https://i.redd.it/38d9k352tz161.jpg',
  'https://i.imgur.com/azSQoeZ.png',
  'https://i.redd.it/em0db54tcol41.jpg',
  'https://i.redd.it/xlx2k731cvj41.jpg',
  'https://i.redd.it/30wutobuphs31.jpg',
  'https://i.redd.it/0zm288h40l061.jpg',
  'https://i.redd.it/dzaofvjtcxq31.png',
  'https://i.redd.it/04v7oqqcm1341.jpg',
  'https://i.redd.it/j8a0irypvtm41.png',
  'https://i.redd.it/6z58u81tf5e51.png',
  'https://i.redd.it/l516b5kjj1y31.jpg',
  'https://i.redd.it/xot15yecfxa51.jpg',
  'https://i.redd.it/xgrpaplwvoj41.jpg',
  'https://i.redd.it/8vlolecsvj751.jpg',
  'https://i.redd.it/nvvmeoq8boe61.jpg',
  'https://i.imgur.com/MV44td5.jpg',
  'https://i.redd.it/vg4he9hm1ym31.jpg',
  'https://i.redd.it/rhanzn14df851.jpg',
  'https://i.redd.it/5x4fofbikpd61.jpg',
  'https://i.redd.it/9nlro9fmbd161.jpg',
  'https://i.redd.it/13qllr63j8d21.png',
  'https://i.redd.it/dpvfo6yk47l51.jpg',
  'https://i.redd.it/3yd2bj3ff0g31.jpg',
  'https://i.redd.it/eyra06n0c2b51.jpg',
  'https://i.redd.it/s4ehlfj6k8e31.jpg',
  'https://i.redd.it/86j1jbet4si51.png',
  'https://i.redd.it/6oz54x849c141.jpg',
  'https://i.redd.it/pf7rowvpq4i51.png',
  'https://i.redd.it/82t7rj78cuj81.jpg',
  'https://i.redd.it/l9t625r5okp31.jpg',
  'https://i.redd.it/w10vxsdnoab51.jpg',
  'https://i.redd.it/837n8k8ptof41.jpg',
  'https://i.redd.it/eya9t6jaqk861.jpg',
  'https://i.redd.it/6wtljp9i4x851.jpg',
  'https://i.redd.it/4z0niji9dyn31.jpg',
  'https://i.redd.it/izgndpafd9c31.jpg',
  'https://i.redd.it/ob0m7q0e7om91.jpg',
  'https://i.redd.it/kuqn3h8rbuz31.png',
  'https://i.redd.it/5duliy99q9x51.jpg',
  'https://i.redd.it/to7l6siyeyi31.jpg',
  'https://i.redd.it/m8fk6kx37gl41.jpg',
  'https://i.redd.it/9g8hgnxfoxd51.jpg',
  'https://i.redd.it/4cmml677w2751.jpg',
  'https://i.redd.it/myd8zexoz0f31.jpg',
  'https://i.redd.it/rnm78goeedc71.jpg',
  'https://i.redd.it/hm30fuc2che41.jpg',
  'https://i.redd.it/wmfijph0fys31.jpg',
  'https://i.redd.it/bj30m5xu8xa61.jpg',
  'https://i.redd.it/ixn0s0jsqrj81.jpg',
  'https://i.redd.it/ntp7ax5vgvk41.jpg',
  'https://i.redd.it/7vri182upav51.jpg',
  'https://i.redd.it/1i8fqturmar51.png',
  'https://i.redd.it/fr650a25uuw31.jpg',
  'https://i.redd.it/bz4r56ch6zz51.jpg',
  'https://i.redd.it/5cy2za12ogc61.jpg',
  'https://i.redd.it/2sl9yw1lnzb21.png',
  'https://i.redd.it/ng3vrvyq3a761.jpg',
  'https://i.redd.it/7w3zknjr5db51.jpg',
  'https://i.redd.it/h3gsx0x5iu541.png',
  'https://i.imgur.com/QJDanSM.png',
  'https://i.redd.it/56kv6oy9vbj51.jpg',
  'https://i.redd.it/cwhuwtvuc6z41.jpg',
  'https://i.redd.it/r1mxfqfi6kl51.jpg',
  'https://i.redd.it/pkwxptglr6141.jpg',
  'https://i.redd.it/phru8v9m3fi51.jpg',
  'https://i.redd.it/z9a3lm2lklk51.png',
  'https://i.redd.it/bbgkf18h3jf51.jpg',
  'https://i.redd.it/o0s15o5z0yh41.png',
  'https://i.redd.it/dmx7o7awtto31.jpg',
  'https://i.redd.it/zl2dvypum8471.jpg',
  'https://i.redd.it/uukzzzuzcvg41.jpg',
  'https://i.redd.it/38ala3hnuo661.jpg',
  'https://i.redd.it/tyy2c6rro7z51.jpg',
  'https://i.redd.it/osr5o5ox5us31.jpg',
  'https://i.redd.it/betnmdvz9y631.jpg',
  'https://i.redd.it/0vrj0dzmld541.jpg',
  'https://i.redd.it/iujjhholr2e61.jpg',
  'https://i.redd.it/lz3xg8gldzh51.png',
  'https://i.redd.it/ifcq90m8cu141.jpg',
  'https://i.redd.it/6b6vtahadiy51.jpg',
  'https://i.redd.it/uh4az9wzwi541.jpg',
  'https://i.imgur.com/RYAzjaq.jpg',
  'https://i.redd.it/epy21jpmtvh31.png',
  'https://i.redd.it/9a7pwh1mkjm51.jpg',
  'https://i.redd.it/6cboxgnvtm061.jpg',
  'https://i.redd.it/rbec2lkvltv51.jpg',
  'https://i.redd.it/58pgd3n4knu31.jpg',
  'https://i.redd.it/my77o17issw41.png',
  'https://i.redd.it/w3ijffyc9jt31.png',
  'https://i.imgur.com/liPMX3a.jpg',
  'https://i.redd.it/gnrbkgh7qj731.jpg',
  'https://i.redd.it/3enk26ixrdp41.jpg',
  'https://i.redd.it/4s192rkwjxb41.jpg',
  'https://i.redd.it/47n2fajsxdu31.jpg',
  'https://i.redd.it/f1mbmhlzgb131.jpg',
  'https://i.redd.it/mj7e9xwv1di51.jpg',
  'https://i.redd.it/9zlv4ndbxf551.jpg',
  'https://i.redd.it/qz0lu8nuz0l41.png',
  'https://i.redd.it/yb7e8ku674l51.png',
  'https://i.redd.it/hlb0y3i3jmr51.jpg',
  'https://i.redd.it/r4afjb0rehg41.jpg',
  'https://i.redd.it/qhoej2nbafh21.jpg',
  'https://i.redd.it/owpdx0x1mxz51.jpg',
  'https://i.redd.it/9j9zt8zkx2341.jpg',
  'https://i.redd.it/3z638nu88yl51.jpg',
  'https://i.redd.it/qk1isrhrnna71.jpg',
  'https://i.redd.it/udenvuzb8y361.jpg',
  'https://i.redd.it/tkiw8ehuibk51.jpg',
  'https://i.redd.it/adku24ylpqh51.png',
  'https://i.redd.it/dkengm6wvzc51.jpg',
  'https://i.redd.it/0rs2vu4ompb31.jpg',
  'https://i.redd.it/7yxqnkv0m5q61.jpg',
  'https://i.redd.it/if7vtzukwcs61.jpg',
  'https://i.redd.it/cuwlg5bikb941.jpg',
  'https://i.redd.it/g2a5eoq1cbt31.jpg',
  'https://i.redd.it/fhixmge904j51.jpg',
  'https://i.redd.it/o1ut05vyvqb41.jpg',
  'https://i.redd.it/3k7gi99aydt61.jpg',
  'https://i.redd.it/6vzqw0rx3co51.jpg',
  'https://i.redd.it/5bnunpxtvqf51.jpg',
  'https://i.redd.it/ames9ycd1zx51.png',
  'https://i.redd.it/xyvmma1dc7251.jpg',
  'https://i.redd.it/l4l4onue19s51.jpg',
  'https://i.redd.it/td6b0rj0v8951.jpg',
  'https://i.redd.it/c3jipjtie1041.jpg',
  'https://i.redd.it/px1bnwf5n2t51.png',
  'https://i.redd.it/iiq7adjq46x31.jpg',
  'https://i.redd.it/5xz4rglongq51.jpg',
  'https://i.redd.it/ob8fd78od6d41.png',
  'https://i.redd.it/brzd5gzzmww41.jpg',
  'https://i.redd.it/8u8uyarrha831.png',
  'https://i.redd.it/kblgjp3e6w751.jpg',
  'https://i.redd.it/7qe0glblnhl41.png',
  'https://i.redd.it/wt4k2pwotif31.jpg',
  'https://i.redd.it/7chgkj30jnw31.jpg',
  'https://i.redd.it/aqrdymx3vgw31.jpg',
  'https://i.redd.it/njjvy59r5jh61.jpg',
  'https://i.redd.it/szg5exh5yfm41.jpg',
  'https://i.redd.it/h9pmtajl30z71.jpg',
  'https://i.redd.it/y3htuge2q7e61.png',
  'https://i.redd.it/y2tqhm216w581.jpg',
  'https://i.redd.it/rmwiq34w0qr31.png',
  'https://i.redd.it/nj95sktxp1s51.jpg',
  'https://i.redd.it/uwlqg1q7m2y51.jpg',
  'https://i.redd.it/7alxg7bf2he31.png',
  'https://i.redd.it/qyvw57hbu4y41.jpg',
  'https://i.redd.it/wniz0hjt85c41.jpg',
  'https://i.redd.it/u60gpgqxwpa31.png',
  'https://i.imgur.com/PuA4FX8.jpg',
  'https://i.redd.it/jg9ghwh1qit51.jpg',
  'https://i.redd.it/bi3e9xjjc0k31.jpg',
  'https://i.imgur.com/twCmJhM.jpg',
  'https://i.redd.it/hspmjxozoch31.jpg',
  'https://i.redd.it/tsqry2uhspt31.jpg',
  'https://i.redd.it/zz3niracj0q31.jpg',
  'https://i.redd.it/crr0315it3p31.jpg',
  'https://i.redd.it/z1e5pnlu37a41.jpg',
  'https://i.redd.it/yab4tvyvx0p61.jpg',
  'https://i.redd.it/xmtpvpap7ka61.jpg',
  'https://i.redd.it/r84olokx5vf61.jpg',
  'https://i.redd.it/f51zuumi0ym51.jpg',
  'https://i.redd.it/joincn6hyor31.png',
  'https://i.redd.it/apttbogjues61.jpg',
  'https://i.redd.it/qheby6028x151.jpg',
  'https://i.redd.it/4ad1rxx1yca41.jpg',
  'https://i.redd.it/nprpsoec0rz51.png',
  'https://i.redd.it/4cvrtwz23nn31.png',
  'https://i.redd.it/6akohz34wji51.jpg',
  'https://i.redd.it/cagm2k0f8s441.jpg',
  'https://i.redd.it/nyeoa3jli7n51.jpg',
  'https://i.imgur.com/CnsmSxk.jpg',
  'https://i.redd.it/i3qbgjvfzaj41.jpg',
  'https://i.redd.it/upchr2tweed51.jpg',
  'https://i.redd.it/abqgcxfp5jr31.jpg',
  'https://i.redd.it/exepcqo2dkg61.jpg',
  'https://i.redd.it/ih84ge2wunt31.jpg',
  'https://i.redd.it/cpemgvq8i6151.jpg',
  'https://i.redd.it/x9fomllpzqt61.png',
  'https://i.redd.it/3p2k8tnstse31.jpg',
  'https://i.redd.it/dh365m11y1v31.jpg',
  'https://i.redd.it/843er7z4hk541.jpg',
  'https://i.redd.it/3rzmswiz22161.png',
  'https://i.redd.it/ccwcoixlaus51.jpg',
  'https://i.redd.it/l8jactzzjz461.jpg',
  'https://i.redd.it/ja4twfg6po551.jpg',
  'https://i.redd.it/ivgo1q7et8u31.jpg',
  'https://i.redd.it/p4beejyyz1h31.jpg',
  'https://i.redd.it/m58ul672cvu51.jpg',
  'https://i.redd.it/8j7oyupoo9261.jpg',
  'https://i.redd.it/0kwqqji5l5b21.png',
  'https://i.redd.it/7s7byec2qu161.jpg',
  'https://i.redd.it/sovk7hp24lx51.jpg',
  'https://i.redd.it/rvuwosmhswb41.jpg',
  'https://i.redd.it/ccgp9bc47cf51.jpg',
  'https://i.redd.it/k8eem0e5abx31.jpg',
  'https://i.redd.it/co5vy7fat9j51.jpg',
  'https://i.redd.it/44c6d6ulro521.jpg',
  'https://i.redd.it/86yslv7tu8541.jpg',
  'https://i.redd.it/bxmtzyonxqu41.jpg',
  'https://i.redd.it/vqu37n5mwqa71.jpg',
  'https://i.redd.it/5ksv9khjmfm51.jpg',
  'https://i.redd.it/ohsyakju8rr61.jpg',
  'https://i.redd.it/idfnkydi04651.jpg',
  'https://i.redd.it/nejexouhmht31.png',
  'https://i.redd.it/9kssmnktfzl41.jpg'];

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