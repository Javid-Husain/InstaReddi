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
  const memes = 
  ['https://i.redd.it/bq54d2yu1ss91.jpg',
   'https://i.redd.it/g37eb3qivuv81.jpg',
   'https://i.redd.it/5cxgt5dhtzz91.png',
   'https://i.redd.it/hwurhp7crzf81.png',
   'https://i.redd.it/cz9vaej8tqd21.jpg',
   'https://i.redd.it/2ialma4xoiv41.jpg',
   'https://i.redd.it/5yhx7zsi7ug81.jpg',
   'https://i.redd.it/o5zoemo155491.jpg',
   'https://i.imgur.com/05wcwhq.png',
   'https://i.imgur.com/D7smfwb.jpg',
   'https://i.redd.it/xgfs4jad9r391.jpg',
   'https://i.redd.it/u5jwlxt1k43a1.jpg',
   'https://i.redd.it/7ptrlc47tuc51.jpg',
   'https://i.redd.it/ghpaxx5r5cu91.jpg',
   'https://i.redd.it/ic9982toyhf91.jpg',
   'https://i.redd.it/rlwzi9sjpt141.jpg',
   'https://i.imgur.com/Dsi1ScU.png',
   'https://i.redd.it/jd25yqv8xsf31.jpg',
   'https://i.redd.it/i7uualgitie91.jpg',
   'https://i.redd.it/pkcsunr302m61.jpg',
   'https://i.redd.it/kxxzpnl02mx81.jpg',
   'https://i.redd.it/zr1k32o10e2a1.png',
   'https://i.redd.it/fngcmqwmeor81.jpg',
   'https://i.redd.it/n5fs9ijaglk81.jpg',
   'https://i.redd.it/8sl1co8az3t81.png',
   'https://i.redd.it/yug2tpbwqzi81.png',
   'https://i.redd.it/lofkaar0cis91.png',
   'https://i.imgur.com/5DlqfCl.jpg',
   'https://i.redd.it/d4t9eiln5s691.jpg',
   'https://i.imgur.com/d7oJuUd.jpg',
   'https://i.redd.it/x4xsrmg4bad91.jpg',
   'https://i.redd.it/bffwlmuzcur71.jpg',
   'https://i.redd.it/3rw4z6030wq91.jpg',
   'https://i.redd.it/p2wsv4ssa6691.png',
   'https://i.redd.it/kflfysh17d541.jpg',
   'https://i.redd.it/qovb8y2b1ft51.png',
   'https://i.redd.it/qwt83g5vv9l51.png',
   'https://i.redd.it/l8ts2vmr85y71.png',
   'https://i.redd.it/xjyw030edpt81.jpg',
   'https://i.redd.it/a5vltfk0xvw81.jpg',
   'https://i.redd.it/yj253q39kop81.jpg',
   'https://i.redd.it/6rbq35occu441.jpg',
   'https://i.redd.it/0mjeyq8tyfp91.jpg',
   'https://i.redd.it/tn1wn7i44jb51.jpg',
   'https://i.redd.it/e3w944wmyma01.png',
   'https://i.imgur.com/EWQ3mPq.jpg',
   'https://i.redd.it/zyawehyvd5r91.jpg',
   'https://i.redd.it/pemh62mcplj91.jpg',
   'https://i.redd.it/k8mso9pn9lr91.jpg',
   'https://i.redd.it/m63ph6fgiyp81.jpg',
   'https://i.redd.it/jxbvq7ibzcs91.png',
   'https://i.redd.it/d48lmbmiq4f91.jpg',
   'https://i.redd.it/030yqqqlpn821.jpg',
   'https://i.redd.it/ze2brzxzr2w81.png',
   'https://i.imgur.com/7toPXUr.jpg',
   'https://i.redd.it/hyyapbqpp3v91.jpg',
   'https://i.redd.it/mnghlm1xbc411.png',
   'https://i.redd.it/uf9dbih1wcq91.png',
   'https://i.redd.it/bkqo0isyeqt91.jpg',
   'https://i.redd.it/moc56tjmeyr91.png',
   'https://i.redd.it/97p4ob5aebj51.png',
   'https://i.redd.it/2ry044pdv2141.jpg',
   'https://i.redd.it/vrrcvqiy17x51.png',
   'https://i.redd.it/dqwj29huhaa81.jpg',
   'https://i.redd.it/vgo85g9ozfj91.jpg',
   'https://i.redd.it/ig5u8ke5qo421.png',
   'https://i.redd.it/zh3t7shlgjp91.jpg',
   'https://i.redd.it/es3mcnjwani01.png',
   'https://i.redd.it/pfk3p4fuk4f21.jpg',
   'https://i.redd.it/0vva3sr4pnq61.jpg',
   'https://i.redd.it/bo8pac9hfer41.png',
   'https://i.redd.it/5gdrr6b0fnl51.jpg',
   'https://i.redd.it/qsbkmaqnplm11.jpg',
   'https://i.redd.it/l1p8pyh3dim51.jpg',
   'https://i.redd.it/9tjyw7jfs2m81.jpg',
   'https://i.redd.it/jvbr9lrvdw3a1.jpg',
   'https://i.redd.it/kiigonnqy6t91.png',
   'https://i.imgur.com/Qj6ttXA.png',
   'https://i.redd.it/gph4zwsp6hu61.jpg',
   'https://i.redd.it/5vvpn6tlghw41.jpg',
   'https://i.redd.it/8a5ccw86uvc11.jpg',
   'https://i.redd.it/gph4rp6drvo41.jpg',
   'https://i.imgur.com/FVmdQXS.jpg',
   'https://i.redd.it/7zpf9y8kfoa51.png',
   'https://i.redd.it/cq5m8tzg8az41.png',
   'https://i.redd.it/z90u8hbr5w571.jpg',
   'https://i.redd.it/3iln2afoz3e71.jpg',
   'https://i.redd.it/7hbdjp8z3mp91.png',
   'https://i.redd.it/x9vlbv8frut01.jpg',
   'https://i.redd.it/wxsjilwm1vg91.jpg',
   'https://i.redd.it/u3i60r4vf7701.png',
   'https://i.redd.it/31i8o3bvl3h51.png',
   'https://i.redd.it/e8k3k4u0nqv41.png',
   'https://i.redd.it/xpdj1usn85561.png',
   'https://i.redd.it/qxf13d8lvyg51.jpg',
   'https://i.redd.it/pj78wa90wbl71.jpg',
   'https://i.redd.it/htqfson2wzk81.png',
   'https://i.imgur.com/fEMAhAK.jpg',
   'https://i.redd.it/1ttdn61rybc91.jpg',
   'http://i.imgur.com/oqVSVYu.png',
   'https://i.redd.it/3u2efcn9yuo91.jpg',
   'https://i.redd.it/w653aqlzpwc91.jpg',
   'https://i.redd.it/g12gje7mi5w31.jpg',
   'https://i.redd.it/cy1556a3o9s81.png',
   'https://i.redd.it/h6bzblr0emf51.jpg',
   'https://i.redd.it/k27xl646ork61.png',
   'https://i.redd.it/9wld1if2xdx81.jpg',
   'https://i.redd.it/1elsoz9j0pd91.png',
   'https://i.redd.it/z1kdnjsyxy261.jpg',
   'https://i.imgur.com/Cw7KIM1.jpg',
   'https://i.redd.it/2oxb3ovgg0v81.png',
   'https://i.redd.it/ytitd72wz2b11.jpg',
   'https://i.redd.it/8009e2mxvox51.jpg',
   'https://i.redd.it/exmzrxcygy391.jpg',
   'https://i.redd.it/6963hvmjz22a1.png',
   'https://i.redd.it/qifvkymhebh71.jpg',
   'https://i.redd.it/rvu5gerceil51.png',
   'https://i.redd.it/5kabvtyr8v371.png',
   'https://i.redd.it/acc8ej2n8qh51.jpg',
   'https://i.redd.it/kkcsusrt77181.jpg',
   'https://i.redd.it/hs8gn7v38ly81.jpg',
   'https://i.redd.it/jvjv3q3xh7551.jpg',
   'https://i.imgur.com/IDfBUo4.jpg',
   'https://i.redd.it/dcuj4sradth51.jpg',
   'https://i.redd.it/s0pqkp49zcv61.jpg',
   'https://i.redd.it/mce15g6e25w91.jpg',
   'https://i.redd.it/hjh7wwiurey81.jpg',
   'https://i.redd.it/tgcfodwupqu81.jpg',
   'https://i.redd.it/733evqt0w4y41.jpg',
   'https://i.redd.it/agocbaqa0h341.jpg',
   'https://i.redd.it/33zxh2st02b21.png',
   'https://i.redd.it/1pdh7x3pcbp61.png',
   'https://i.redd.it/4ywl9am870h81.jpg',
   'https://i.imgur.com/QEOYcAD.png',
   'https://i.redd.it/gu82h5nuhjc91.jpg',
   'https://i.redd.it/q2voz6a7a5v91.png',
   'https://i.redd.it/7m2m2up0mz991.jpg',
   'https://i.redd.it/9wytuq6cbly91.jpg',
   'https://i.redd.it/pow1shl5zfh91.jpg',
   'https://i.redd.it/949yuwp6rvk91.jpg',
   'https://i.redd.it/rkczpah5u2c41.jpg',
   'https://i.redd.it/org2j5jv4v3z.jpg',
   'https://i.redd.it/jk2ddtjxv6b01.jpg',
   'https://i.redd.it/in9la9cdxva91.jpg',
   'https://i.redd.it/ckrq525hxzw81.jpg',
   'https://i.redd.it/jd8kg2f04f1a1.jpg',
   'https://i.redd.it/llnaqehdi7j91.png',
   'https://i.redd.it/dp6jpk4trx2a1.jpg',
   'https://i.redd.it/wvwkk0k5r2491.jpg',
   'https://i.redd.it/ec0rj2os0w181.jpg',
   'https://i.imgur.com/aUIJYKk.png',
   'https://i.redd.it/qqmijfkr6g591.jpg',
   'https://i.redd.it/h8uhxvhurdh51.jpg',
   'https://i.redd.it/2k1ut81gpcl01.png',
   'https://i.redd.it/em04jhw9d6p81.jpg',
   'https://i.redd.it/su7tsddd0fl61.jpg',
   'https://i.redd.it/upwx8r9ibk391.jpg',
   'https://i.redd.it/3ptwg6qt3gl91.jpg',
   'https://i.redd.it/qkfit20y26f91.jpg',
   'https://i.redd.it/m9fxdvh4frf81.jpg',
   'https://i.redd.it/k67k9dg3qi5a1.jpg',
   'https://i.redd.it/c0tb52f8rrk81.jpg',
   'https://i.redd.it/kk6ghtkywrq41.png',
   'https://i.redd.it/lzl4apr5lwj81.png',
   'https://i.redd.it/0wap3cp4khm01.jpg',
   'https://i.redd.it/nvrpt44due141.jpg',
   'https://i.redd.it/3l1d55j3k1m71.jpg',
   'https://i.redd.it/2gsvmb9ti3461.jpg',
   'https://i.redd.it/n2b8kncjtbw91.jpg',
   'https://i.redd.it/w5zm53zvf8c41.jpg',
   'https://i.redd.it/kw57rfkgrb581.jpg',
   'https://i.redd.it/rh977vd6pvb41.jpg',
   'https://i.redd.it/1h80h3tuk2c91.jpg',
   'https://i.redd.it/xuwcl2v7xrm11.png',
   'https://i.redd.it/1vzngifwett91.png',
   'https://i.redd.it/xdeuvueutd511.jpg',
   'https://i.redd.it/pxrun0ev2og61.jpg',
   'https://i.redd.it/08sz26e91k841.jpg',
   'https://i.redd.it/bj66nv9ewff91.png',
   'https://i.redd.it/5ec9lgrmfaz91.jpg',
   'https://i.redd.it/69n01j4sbl751.jpg',
   'https://i.redd.it/gyufhogm52l91.jpg',
   'https://i.redd.it/th44b0a1dn041.jpg',
   'https://i.redd.it/q9cov32d2bq51.jpg',
   'https://i.redd.it/wudbck9rhuw61.jpg',
   'https://i.redd.it/w546ujwux4m01.png',
   'https://i.redd.it/6wksqjmmyw321.jpg',
   'https://i.redd.it/667kkk6q2lz91.png',
   'https://i.redd.it/m3vxtt66jsg61.jpg',
   'https://i.redd.it/d9s2ipcf741a1.jpg',
   'https://i.redd.it/w91y04ly6xa91.jpg',
   'https://i.redd.it/pasoyucdh0e11.jpg',
   'https://i.redd.it/a5skfy5y88x11.jpg',
   'https://i.redd.it/q5wrtpy5d7591.jpg',
   'https://i.redd.it/5mfbi6v63ir41.jpg',
   'https://i.imgur.com/s973BpL.jpg',
   'https://i.redd.it/9lixgcosw1k91.jpg',
   'https://i.redd.it/4tfvkds3qge81.jpg',
   'https://i.redd.it/th80i7i6pja71.jpg',
   'https://i.redd.it/mar8p5zhhm131.jpg',
   'https://i.redd.it/uxs5wnj01ev41.jpg',
   'https://i.redd.it/3qzjx2s1nl971.png',
   'https://i.imgur.com/VUr8vVs.png',
   'https://i.imgur.com/meO8sYA.jpg',
   'https://i.redd.it/1a05gwl5tpc91.jpg',
   'https://i.redd.it/esxm869802w81.png',
   'https://i.redd.it/o1gnotfxi4k01.png',
   'https://i.redd.it/zk1j1a5fsi1a1.png',
   'https://i.redd.it/o9r6qjo023j91.jpg',
   'https://i.redd.it/bhygiq0k1a6a1.jpg',
   'https://i.redd.it/oj0d8xjamnk91.jpg',
   'https://i.redd.it/ybx0e644pvf71.jpg',
   'https://i.redd.it/p4xh021ahll61.png',
   'https://i.redd.it/2vw1ybxtl3v81.jpg',
   'https://i.redd.it/foqebz0nsj091.png',
   'https://i.redd.it/qszkl08hx9261.jpg',
   'https://i.redd.it/b0d1t2xaej351.jpg',
   'https://i.redd.it/5k8op67vq7j61.jpg',
   'https://i.redd.it/iid9hxgeo1x41.jpg',
   'https://i.redd.it/5swxqkypwhm91.jpg',
   'https://i.imgur.com/0wQ5jqx.jpg',
   'https://i.redd.it/7eig9158mb891.jpg',
   'https://i.redd.it/bma1iny1ziv91.png',
   'https://i.redd.it/0q2zn88dg2m91.jpg',
   'https://i.redd.it/nszm4bab9dr61.jpg',
   'https://i.redd.it/vszzw6r45hd81.jpg',
   'https://i.redd.it/rhs7em88p6711.jpg',
   'https://i.redd.it/w5vqrxxz19v91.jpg',
   'https://i.redd.it/ys0rgiff4p5a1.jpg',
   'https://i.imgur.com/8spsUjN.jpg',
   'https://i.redd.it/alurg76lz6n81.png',
   'https://i.redd.it/frjiu6gdfi391.jpg',
   'https://i.redd.it/s0nb3l5tb8a51.png',
   'https://i.imgur.com/jOo627t.jpg',
   'https://i.imgur.com/TOcRdNw.jpg',
   'https://i.redd.it/quivmsklxszz.jpg',
   'https://i.redd.it/fpqa619vdhg81.jpg',
   'https://i.redd.it/88o6i571hlk91.jpg',
   'https://imgur.com/ss0eq27.png',
   'https://i.redd.it/mhgny8grtgi91.jpg',
   'https://i.redd.it/asoi7irayc691.jpg',
   'https://i.redd.it/yegqyujcvpj81.jpg',
   'https://i.redd.it/fo76qwzpw9f91.jpg',
   'https://i.redd.it/imwrqiirxc4z.jpg',
   'https://i.redd.it/959mpgut1lx51.jpg',
   'https://i.redd.it/53n9ct4k5w021.jpg',
   'https://i.redd.it/zaohbsrakhc91.jpg',
   'https://i.imgur.com/yC7WGC5.jpg',
   'https://i.imgur.com/trLTkbz.jpg',
   'https://i.redd.it/x6snxvaykg301.jpg',
   'https://i.redd.it/8tdny8922ex71.jpg',
   'https://i.redd.it/528sy02dtqs81.jpg',
   'https://i.redd.it/bka1gb843z7z.jpg',
   'https://i.redd.it/hk54ti5n6tk11.png',
   'https://i.redd.it/sx9am12h78f81.jpg',
   'https://i.redd.it/ipy3vvkma2501.jpg',
   'https://i.redd.it/2ohly4ex2hy41.jpg',
   'https://i.redd.it/o0hr3le7b6a71.png',
   'https://i.redd.it/1d1vcexiezsz.jpg',
   'https://i.redd.it/0rrilc61q4281.jpg',
   'https://i.redd.it/gs08w5jy0r581.jpg',
   'https://i.imgur.com/pt6Hrfo.png',
   'https://i.redd.it/28qdng3e6pb91.png',
   'https://i.imgur.com/qsgN7f5.jpg',
   'https://i.redd.it/qw1bd4xxeqa11.jpg',
   'https://i.redd.it/4niaylcgdb021.jpg',
   'https://i.redd.it/de1sgiuj40b81.jpg',
   'https://i.redd.it/8ceh0d66fdz51.jpg',
   'https://i.redd.it/ck5ovob0mgv81.jpg',
   'https://i.redd.it/tg6itcen4pjz.jpg',
   'https://i.redd.it/57ywpcqla1991.jpg',
   'https://i.redd.it/cfkgkauvr8w01.jpg',
   'https://i.redd.it/auszw0gmuel81.png',
   'https://i.redd.it/40t7alhvlac91.png',
   'https://i.redd.it/ksdcw8su27h61.png',
   'https://i.redd.it/y9nmw0smgxd61.png',
   'https://i.redd.it/cylq8lxamb1a1.png',
   'https://i.redd.it/kgmmygh5z1i41.jpg',
   'https://i.redd.it/4b18ug1wef161.jpg',
   'https://i.redd.it/7khgt29lp1121.jpg',
   'https://i.redd.it/7rbpfabj3uy81.jpg',
   'https://i.redd.it/yq7iani93zk81.jpg',
   'https://i.redd.it/qwlrr7v51qe61.jpg',
   'https://i.redd.it/pp6g720uvn891.jpg',
   'https://i.redd.it/xnuqlq859ot01.png',
   'https://i.redd.it/dfvbkvoccyn01.jpg',
   'https://i.redd.it/cwpd4r68dci81.jpg',
   'https://i.redd.it/4nxizfmnqi691.jpg',
   'https://i.redd.it/xkbxy30pd6091.png',
   'https://i.redd.it/zrr848ielkm91.png',
   'https://i.redd.it/umv2amy9ae5z.png',
   'https://i.imgur.com/mAqm6vU.jpg',
   'https://i.redd.it/cmxk0u7q7nm41.png',
   'https://i.redd.it/x9beyhadxyq81.jpg',
   'https://i.redd.it/rngjgqcmhh4a1.jpg',
   'https://i.redd.it/0xonwsltbok11.png',
   'https://i.redd.it/lpik03matda41.jpg',
   'https://i.redd.it/a5qdc8jie1351.jpg',
   'https://i.imgur.com/p4VzTa4.jpg',
   'https://i.imgur.com/xJM6ZNi.jpg',
   'https://i.redd.it/te08kcy3f8b91.jpg',
   'https://i.redd.it/ktei1uwglpp61.jpg',
   'https://i.redd.it/lrh0o7bfnb971.jpg',
   'https://i.redd.it/h4g6zukhlio81.jpg',
   'https://i.redd.it/etuvl3owc7081.jpg',
   'https://i.redd.it/x2d2akh160b91.png',
   'https://i.redd.it/htp8nd9yd1f51.jpg',
   'https://i.redd.it/0wq3g64w8d591.jpg',
   'https://i.redd.it/12japg5ropl81.png',
   'https://i.redd.it/jcs8pe4nsyw91.png',
   'https://i.imgur.com/OjnRkW8.png',
   'https://i.redd.it/cg9bejmfsiz91.jpg',
   'https://i.redd.it/aqikqeae7gz61.jpg',
   'https://i.redd.it/42gyr1spwoq31.jpg',
   'https://i.imgur.com/f1l8FIB.jpg',
   'https://i.redd.it/rmls1erhf24a1.jpg',
   'https://i.redd.it/c8cw76gmohy11.jpg',
   'https://i.redd.it/ku1neu504sh01.jpg',
   'https://i.redd.it/myd50mpyl8351.jpg',
   'https://i.redd.it/n0f8xxe763a81.png',
   'https://i.imgur.com/4NfB9AI.png',
   'https://i.redd.it/23plzwhjl1w31.jpg',
   'https://i.redd.it/66ap5fx1iji01.png',
   'https://i.redd.it/mkj6a0p8s8391.jpg',
   'https://i.redd.it/5rjreh3czg821.jpg',
   'https://i.redd.it/g8x1f8tbcdw21.png',
   'https://i.redd.it/96irozk7ae761.jpg',
   'https://i.redd.it/f9ahnejy2bi91.png',
   'https://i.imgur.com/UYJIm2E.jpg',
   'https://i.redd.it/e42h95zg0qk81.jpg',
   'https://i.redd.it/sok5wlg4x7o91.jpg',
   'https://i.imgur.com/z697v24.jpg',
   'https://i.redd.it/mltqiyxfjy291.jpg',
   'https://i.redd.it/tqw70yuu782a1.jpg',
   'https://i.redd.it/g0xy6yv8liu91.jpg',
   'https://i.imgur.com/SAMw7Pw.jpg',
   'https://i.redd.it/kk3jvgy0p9481.jpg',
   'https://i.redd.it/9rkrx2x285x91.jpg',
   'https://i.redd.it/zodqvtcmm0q71.jpg',
   'https://i.redd.it/oy3531gq4wb81.jpg',
   'https://i.redd.it/7dzo1rbokj871.jpg',
   'https://www.monkeyuser.com/assets/images/2018/103-building-a-raft.png',
   'https://i.redd.it/w0x3wuhfwgt31.png',
   'https://i.redd.it/eavntc7357q71.jpg',
   'https://i.redd.it/d4xara56w1x91.jpg',
   'https://i.redd.it/cea01zi83dn81.jpg',
   'https://i.redd.it/60xwyyqy98d51.jpg',
   'https://i.redd.it/dvrd5zwr7kv01.jpg',
   'https://i.redd.it/6apwvu1282a01.jpg',
   'https://i.redd.it/5jgtjvdbirk51.png',
   'https://i.redd.it/6ihfuz3c6q251.jpg',
   'https://i.redd.it/oh5iruwwi1j81.png',
   'https://i.redd.it/yplk6t23ljd81.jpg',
   'https://i.redd.it/96jx653vfni91.jpg',
   'https://i.redd.it/dd858tcec5w61.jpg',
   'https://i.redd.it/1c04384clp521.png',
   'https://i.redd.it/5fova2u8nl761.png',
   'https://i.redd.it/fhknkr58kry81.jpg',
   'https://i.redd.it/s3hzxgb2yqw91.png',
   'https://i.imgur.com/eANE39G.png',
   'https://i.imgur.com/EHAg39B.jpg',
   'https://i.redd.it/9vnhc3vj7mz51.png',
   'https://i.redd.it/9jde8sxby7r21.png',
   'https://i.redd.it/nqba0k4lutc91.jpg',
   'https://i.redd.it/w5qmglor1bh91.jpg',
   'https://i.redd.it/ocpk67fp6tx81.jpg',
   'https://i.redd.it/v7moo6oma00a1.jpg',
   'https://i.redd.it/9lgwmswfi5361.png',
   'https://i.redd.it/o6r6voylvy411.png',
   'https://i.redd.it/n5s58pnm48q91.jpg',
   'https://i.redd.it/wuxlazynzdu41.png',
   'https://i.redd.it/lhny6673kn471.jpg',
   'https://i.redd.it/bxvnc7xyi7871.png',
   'https://i.redd.it/191sp9bfe90a1.png',
   'https://i.redd.it/2gzr4u6fvrv51.jpg',
   'https://i.redd.it/iz5mpbbsdct91.jpg',
   'https://i.redd.it/172zlftegfy91.jpg',
   'https://i.redd.it/y1bhx3gq3yy51.jpg',
   'https://i.redd.it/b2nuxx6kbjk81.png',
   'https://i.redd.it/9pa3zrwqggq51.jpg',
   'https://i.redd.it/pd3g4aymod071.jpg',
   'https://i.redd.it/hw75ug3h4ze71.jpg',
   'https://i.redd.it/0x5iyakk4g041.jpg',
   'https://i.redd.it/5iue845oa8x01.png',
   'https://i.redd.it/0ja6uu2a8f701.jpg',
   'https://i.redd.it/a2n75ff2gvk41.jpg',
   'https://i.redd.it/i19b839iqdk91.jpg',
   'https://i.redd.it/v4vh850c5tb31.jpg',
   'https://i.redd.it/8a16xve5nzs81.jpg',
   'https://i.redd.it/mz4dneroram71.jpg',
   'https://i.redd.it/xrnxl5w3rat81.jpg',
   'https://i.redd.it/rcimg6j9oex61.jpg',
   'https://i.redd.it/xz7amqd1z6l41.png',
   'https://i.redd.it/jrc1plsv9pi21.png',
   'https://i.redd.it/7t0snu46bpy91.jpg',
   'https://i.redd.it/gqrmliotyyx81.jpg',
   'https://i.redd.it/y4rxif9n9sl91.jpg',
   'https://i.redd.it/ugn6wwuq6eh41.png',
   'https://i.redd.it/ispz7zo0kcn91.png',
   'https://i.redd.it/ln618pt684b71.jpg',
   'https://i.redd.it/2rav6yql6u1a1.jpg',
   'https://i.redd.it/4rxxlxtkre861.jpg',
   'https://i.redd.it/9nxwv2c0fsaz.jpg',
   'https://i.redd.it/obfojf3jfe751.png',
   'https://i.redd.it/7o0ck7yalbv91.jpg',
   'https://i.redd.it/oxn1q6iayv0a1.jpg',
   'https://i.redd.it/2xvkq3z3z2t71.jpg',
   'https://i.redd.it/v0pj6vfr7hm11.png',
   'https://imgur.com/aD6y11r.jpg',
   'https://i.redd.it/hqz0luk4wjc71.jpg',
   'https://i.redd.it/mpcghc71tc0a1.jpg',
   'https://i.redd.it/0qjto10dh6c01.png',
   'https://i.redd.it/kg83pypbw6b31.jpg',
   'https://i.redd.it/3p1nwstb69t61.jpg',
   'https://i.redd.it/7tqdz8zkjk191.jpg',
   'https://i.redd.it/29c679dlan7z.jpg'];
  
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