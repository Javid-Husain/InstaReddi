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
  const memes = ['https://i.redd.it/lbby86da25351.jpg',
  'https://i.redd.it/pewl2ajqkwb61.jpg',
  'https://i.redd.it/knaqlah1uux51.jpg',
  'https://i.redd.it/avkpw7wrrqd61.jpg',
  'https://i.redd.it/b76ak34zozy51.jpg',
  'https://i.redd.it/3ck48z6w68k81.jpg',
  'https://i.redd.it/bn4s2ax3dlc51.jpg',
  'https://i.redd.it/y5l88fs0yyj81.jpg',
  'https://i.redd.it/3yk4v5j2g0561.jpg',
  'https://i.redd.it/2aajk9g8x4g61.jpg',
  'https://i.redd.it/ximlf0jj5tt61.png',
  'https://i.redd.it/eskiwiwod2e61.png',
  'https://i.redd.it/ayg3bniwl4761.jpg',
  'https://i.redd.it/gp8m80y7r8s51.png',
  'https://i.imgur.com/j8I7Tcx.png',
  'https://i.imgur.com/10ZqWtO.jpg',
  'https://i.redd.it/4a70otxcqqb61.jpg',
  'https://i.redd.it/v7b8a6uhb1v41.jpg',
  'https://i.redd.it/jnwm8fylzgl61.jpg',
  'https://i.redd.it/8g04gvo0nsa11.jpg',
  'https://i.redd.it/wus40w35jco51.jpg',
  'https://i.imgur.com/zcqssh0.jpg',
  'https://i.redd.it/820oxmezs8b61.jpg',
  'https://i.redd.it/pc827i97ttw51.jpg',
  'https://i.redd.it/vqu22tam3p771.jpg',
  'https://imgur.com/5dyDfz4.jpg',
  'https://i.redd.it/5o8r54s693k81.jpg',
  'https://i.redd.it/d0bqvaa8si191.png',
  'https://i.redd.it/5ud00vtk2s161.png',
  'https://i.redd.it/2vs6b9tip9o61.jpg',
  'https://i.redd.it/s65dmcbdj5w41.jpg',
  'https://imgur.com/Wyx0NVA.jpg',
  'https://i.redd.it/bggf12sghsr41.jpg',
  'https://i.redd.it/putojnmpz6r41.jpg',
  'https://i.redd.it/vmm1h65b53o61.jpg',
  'https://i.redd.it/j4503itqyqz61.png',
  'https://i.redd.it/g5ezs5ob4wf91.jpg',
  'https://i.redd.it/jzglhqj1d9551.jpg',
  'https://i.redd.it/cfxpuk9gyor51.jpg',
  'https://i.redd.it/7ny5tub714q71.jpg',
  'https://i.redd.it/0jffkbftn6961.jpg',
  'https://i.redd.it/w09yg9qxqpe41.jpg',
  'https://i.redd.it/dlkjht1uzyn61.jpg',
  'https://i.redd.it/zvhm3ag3om951.jpg',
  'https://i.redd.it/azq3td2hmch51.jpg',
  'https://i.redd.it/scdrwpui7xr51.jpg',
  'https://i.redd.it/59gk7lx88ap91.png',
  'https://i.redd.it/8tk3henzy94a1.jpg',
  'https://i.redd.it/b2sc4zhkp3j31.jpg',
  'https://i.redd.it/dtvzqahygi961.jpg',
  'https://i.redd.it/wcx208fvwol71.jpg',
  'https://i.redd.it/cnxxq68hrao51.jpg',
  'https://i.redd.it/i28hkq9zzhm51.jpg',
  'https://i.redd.it/s8cui0x3w2h61.jpg',
  'https://i.redd.it/4xtp87hnr6161.jpg',
  'https://i.redd.it/gaue9bltekk81.jpg',
  'https://i.redd.it/6mubpu2up9361.jpg',
  'https://i.redd.it/d5k54fjgtqe61.jpg',
  'https://i.redd.it/vc7smzw31dt41.jpg',
  'https://i.redd.it/sojp46mm8pa61.jpg',
  'https://i.imgur.com/PF7WBNI.jpg',
  'https://i.redd.it/g0z55mxmycy61.png',
  'https://i.redd.it/n55z0ajyedf61.jpg',
  'https://i.redd.it/lyh197yejfx81.jpg',
  'https://i.redd.it/4v55uxwmwqh71.png',
  'https://i.redd.it/byu482xu09i31.jpg',
  'https://i.redd.it/n2x5zv04ra351.jpg',
  'https://i.redd.it/qp2d9weo7qf61.jpg',
  'https://i.redd.it/i8av4cqp2kb61.jpg',
  'https://imgur.com/w0le9EV.jpg',
  'https://i.redd.it/edfs9wst2tu61.jpg',
  'https://i.redd.it/nxm19edlmmi61.jpg',
  'https://i.redd.it/cpbq837530i81.jpg',
  'https://i.redd.it/0ngd70hg1kn41.jpg',
  'https://i.redd.it/mti1388ttdd61.jpg',
  'https://i.redd.it/iue1cm78c0x71.jpg',
  'https://i.redd.it/qvvar9n4thq31.png',
  'https://i.redd.it/t0f0diwzftj61.jpg',
  'https://i.redd.it/5iwv0ydjyyb71.jpg',
  'https://i.redd.it/6jvhossp42c51.jpg',
  'https://i.redd.it/6kumt458lh251.jpg',
  'https://i.redd.it/kso4315iocd71.jpg',
  'https://i.redd.it/ollvg5on24d91.jpg',
  'https://i.redd.it/o911rhahj40a1.jpg',
  'https://i.redd.it/l9uh2cekssk61.jpg',
  'https://i.redd.it/nnfrmoxbwiy41.jpg',
  'https://i.imgur.com/MfwPTXY.jpg',
  'https://i.redd.it/nrzt6lipt2m71.jpg',
  'https://i.redd.it/8jew6124u0081.jpg',
  'https://i.redd.it/1dqyqii9l3061.jpg',
  'https://i.redd.it/8uxrkvfgg9171.jpg',
  'https://i.redd.it/c1fssy1d00i51.jpg',
  'https://i.redd.it/nlccqxf6x9c61.jpg',
  'https://i.redd.it/s7mdybiihid51.jpg',
  'https://i.redd.it/zk1mv1agefg61.jpg',
  'https://i.redd.it/g7xkrqwo7iu61.jpg',
  'https://i.redd.it/704qkd3d1sf41.jpg',
  'https://i.imgur.com/jFa3B4n.png',
  'https://i.redd.it/t3pw1gstou161.jpg',
  'https://i.redd.it/u3a0k0544ar71.jpg',
  'https://i.imgur.com/X0wp81W.jpg',
  'https://i.redd.it/6fe1qx0hcqy81.jpg',
  'https://i.imgur.com/bW9Wcvo.jpg',
  'https://i.redd.it/qwg3dkczkgl81.jpg',
  'https://i.redd.it/kq9cqvyq2ho61.jpg',
  'https://i.imgur.com/RRBTUaU.jpg',
  'https://i.redd.it/tvwv2bduas761.jpg',
  'https://i.redd.it/cagtwavi3xq51.jpg',
  'https://i.imgur.com/sBPqeDM.jpg',
  'https://i.redd.it/gl2vprsi77d51.jpg',
  'https://i.redd.it/ql8yiysgzic61.png',
  'https://i.redd.it/x4hk7mpj91i61.jpg',
  'https://i.redd.it/zm5s21wtq9b71.jpg',
  'https://i.redd.it/n78o71lo3gz31.jpg',
  'https://i.redd.it/43omj3ildvp51.jpg',
  'https://i.imgur.com/wW2y4Ls.jpg',
  'https://i.redd.it/w38wbmmkuku61.jpg',
  'https://i.redd.it/sg3w888ziip71.jpg',
  'https://i.redd.it/t9431un6gs251.jpg',
  'https://i.imgur.com/KZfk5J8.png',
  'https://i.redd.it/6c4no4zxn8p41.jpg',
  'https://i.redd.it/0dshtkc01ph61.jpg',
  'https://i.redd.it/bcbdutikecs61.jpg',
  'https://i.redd.it/pbcbuercn9z51.jpg',
  'https://i.redd.it/cgsgty8te9t51.jpg',
  'https://i.redd.it/a3u23rff0yt51.jpg',
  'https://i.redd.it/kj0ghbjbl8m41.jpg',
  'https://i.redd.it/kx9aexfhwjj61.jpg',
  'https://i.imgur.com/23z0pvR.jpg',
  'https://i.redd.it/yc5p244843j61.png',
  'https://i.redd.it/zgbc0aqxsdo61.jpg',
  'https://i.imgur.com/1oOG3GV.jpg',
  'https://i.redd.it/t1ljh3n4y8p71.jpg',
  'https://imgur.com/0kTPC9s.jpg',
  'https://i.redd.it/i64ozxijmb851.jpg',
  'https://i.redd.it/4be7y47rpe091.jpg',
  'https://i.redd.it/2kqxcqrdry161.jpg',
  'https://i.redd.it/ij53tzxbvc941.jpg',
  'https://i.imgur.com/1e2syBX.jpg',
  'https://i.imgur.com/9IPfuGW.jpg',
  'https://i.imgur.com/irRFiLo.jpg',
  'https://i.imgur.com/RQYF8iw.png',
  'https://i.redd.it/cojn90hx2n361.jpg',
  'https://i.redd.it/r23mh0bu7u751.jpg',
  'https://i.imgur.com/k80s14e.jpg',
  'https://i.redd.it/l63pi1zkgod61.jpg',
  'https://i.redd.it/2ddk07mtbet61.jpg',
  'https://i.imgur.com/y4jjx0q.jpg',
  'https://i.redd.it/kea9cm6myuj81.jpg',
  'https://i.redd.it/9xpedy2zk1k91.jpg',
  'https://i.redd.it/2pkch49bkxzz.jpg',
  'https://i.redd.it/kkabw7p8kyf41.jpg',
  'https://i.redd.it/o9rkdbrlehp51.jpg',
  'https://i.redd.it/1542qmk2cq251.jpg',
  'https://i.redd.it/zj16h0gh57a61.png',
  'https://i.redd.it/weiqljs9brx71.jpg',
  'https://i.imgur.com/wVGrVhl.jpg',
  'https://i.redd.it/w7s3akpbjyl71.jpg',
  'https://i.redd.it/568dmgn1dtk81.jpg',
  'https://i.redd.it/5mt8cejiu6t81.png',
  'https://i.redd.it/xgi41sha12g61.jpg',
  'https://i.redd.it/y7jog658hwx51.jpg',
  'https://i.redd.it/jluu1nxffkh41.jpg',
  'https://i.imgur.com/fF3n7Ik.png',
  'https://i.redd.it/c04ro5eleo691.jpg',
  'https://i.redd.it/mly0kpvyyot41.jpg',
  'https://i.redd.it/v11y8ge4a9m31.jpg',
  'https://i.redd.it/yy0xa0ythdq51.jpg',
  'https://i.redd.it/xqx0duj43a451.png',
  'https://i.redd.it/4tefq30x4gt51.jpg',
  'https://i.redd.it/eprqttsvnsb61.jpg',
  'https://i.redd.it/bbty79t574v71.jpg',
  'https://i.redd.it/emroqp7k98v51.jpg',
  'https://i.redd.it/hkfkrwp4z81a1.jpg',
  'https://i.redd.it/ekr36vcqb9i61.jpg',
  'https://i.redd.it/9dx5edlqd4f61.jpg',
  'https://i.redd.it/nphkk1h9cdk21.jpg',
  'https://i.redd.it/c6xczkqwc6a71.jpg',
  'https://i.redd.it/7neogxob62551.jpg',
  'https://i.redd.it/72n1ldcxyy691.jpg',
  'https://i.redd.it/h9hj56xji8f81.jpg',
  'https://i.redd.it/d999pf3vpgb21.jpg',
  'https://i.redd.it/zwt9nqmbp4b91.png',
  'https://i.redd.it/clkkrbxjyqh61.jpg',
  'https://i.imgur.com/WfMWxj0.jpg',
  'https://i.redd.it/vmgvh4e69ve61.jpg',
  'https://i.imgur.com/joehJBW.jpg',
  'https://i.redd.it/44titi69mlx51.jpg',
  'https://i.imgur.com/WG6NFgc.jpg',
  'https://i.imgur.com/rliCVSD.jpg',
  'https://i.redd.it/6vpkf4u3r4651.jpg',
  'https://i.redd.it/je4uqjvff7771.jpg',
  'https://i.imgur.com/hQYpfnV.jpg',
  'https://i.imgur.com/dJ2FnDb.jpg',
  'https://i.redd.it/e811mez4f8951.jpg',
  'https://i.imgur.com/FonepGN.png',
  'https://i.redd.it/ur0hjweq6ly51.jpg',
  'https://i.redd.it/qd311glqq7251.jpg',
  'https://i.imgur.com/F0XFVhC.jpg',
  'https://i.redd.it/b81ovu6h6m641.jpg',
  'https://i.redd.it/s545xt40vb961.jpg',
  'https://i.redd.it/6lglkwcapic41.jpg',
  'https://i.redd.it/yixug566a2o51.jpg',
  'https://i.redd.it/iniryfn4esk51.png',
  'https://i.redd.it/lyzht5eu0bg61.jpg',
  'https://i.imgur.com/OOOAnQf.jpg',
  'https://i.redd.it/2asahwm18qf71.jpg',
  'https://i.redd.it/4700k933mge21.jpg',
  'https://i.redd.it/ixeq8lmce6y61.png',
  'https://i.redd.it/s8rwecrivqi51.jpg',
  'https://i.redd.it/gge7pkuhynx51.jpg',
  'https://i.redd.it/c035yhhowog41.jpg',
  'https://i.redd.it/dzi30gug4hk81.jpg',
  'https://i.redd.it/zbwrwtp7wc461.jpg',
  'https://i.redd.it/l4rr3gcyxk791.jpg',
  'https://i.redd.it/q3hsd6lfons51.jpg',
  'https://i.imgur.com/iNdFp4H.png',
  'https://i.redd.it/qnrs1z61inl81.jpg',
  'https://i.redd.it/c1y73ebkn3y51.jpg',
  'https://i.imgur.com/F5NRfj5.jpg',
  'https://i.redd.it/7akmedegbz991.jpg',
  'https://i.redd.it/ic8ayd4vynj91.jpg',
  'https://i.redd.it/1zvd7jfis5381.jpg',
  'http://i.imgur.com/LhTdY2K.jpg',
  'https://i.redd.it/2bbajafozvs81.jpg',
  'https://i.imgur.com/v2AvML0.jpg',
  'https://i.redd.it/fxlx8musv6q51.jpg',
  'https://i.redd.it/olftlpfg5gg51.jpg',
  'https://i.imgur.com/MJnGrpJ.jpg',
  'https://i.redd.it/7k4yk5bj1s691.jpg',
  'https://i.redd.it/wijnij99scq61.png',
  'https://i.imgur.com/sd4pNVj.jpg',
  'https://i.redd.it/9rva679otmy91.jpg',
  'https://i.redd.it/a0cpeen2yhg41.jpg',
  'https://i.redd.it/1fohhb445nk41.jpg',
  'https://i.redd.it/ofmnjhprg5j41.jpg',
  'https://i.redd.it/vztcfi63fgz51.jpg',
  'https://i.redd.it/uufgsy3zte861.jpg',
  'https://i.redd.it/uploowb2gjd81.png',
  'https://i.redd.it/gqik99fb1mp31.jpg',
  'https://i.redd.it/w1gasnibkm181.jpg',
  'https://i.redd.it/yufsw2h7qg161.png',
  'https://i.redd.it/q5j7bxkv1io41.png',
  'https://i.redd.it/q7zpbmjnhc561.jpg',
  'https://i.redd.it/7rzyfxgsb4e61.jpg',
  'https://i.redd.it/nss6gzu2vnw51.jpg',
  'https://i.redd.it/uhmfo0u1pxp61.jpg',
  'https://i.redd.it/49m3pfb9h3i61.jpg',
  'https://i.redd.it/ri5sk1r7vhd61.jpg',
  'https://i.redd.it/2wzzco52yke51.jpg',
  'https://i.redd.it/j7byq07hwqm31.jpg',
  'https://i.redd.it/8wnkx4ox0ys61.png',
  'https://i.redd.it/ktdted888fy41.jpg',
  'https://i.redd.it/47b83avgfsq91.jpg',
  'https://i.imgur.com/Mza7Vx4.jpg',
  'https://i.redd.it/iuiwy7oxtby41.jpg',
  'https://i.redd.it/k87t78s5dk741.jpg',
  'https://i.redd.it/h9j35p4bis791.png',
  'https://i.redd.it/kj82wh6fsf461.jpg',
  'https://i.imgur.com/L5j8ysr.jpg',
  'https://i.redd.it/c2h9pw0zy7m51.jpg',
  'https://i.redd.it/z3q4c58806e61.jpg',
  'https://i.redd.it/nnv0yqdd0r561.jpg',
  'https://i.redd.it/2zsoxdsbcgu01.jpg',
  'https://i.redd.it/68edmetbxwl51.jpg',
  'https://i.redd.it/4hdozgqe2dm31.jpg',
  'https://i.redd.it/tbw4lewn8cn21.jpg',
  'https://i.redd.it/z0i8hjpz2to41.png',
  'https://i.redd.it/f35n2o01ljp51.jpg',
  'https://i.redd.it/ifwgcg8e88j51.jpg',
  'https://i.redd.it/minsepejpxc61.jpg',
  'https://i.redd.it/resle1fenzl61.jpg',
  'https://i.redd.it/2i2ts9omgm191.jpg',
  'https://i.redd.it/kuww1p3au7a51.jpg',
  'https://i.redd.it/ohg1il3zustz.jpg',
  'https://i.redd.it/qjr2h9kektf51.jpg',
  'https://i.redd.it/d6cwp8ea4ha21.jpg',
  'https://i.redd.it/hrkfzf7sd7y51.jpg',
  'https://i.redd.it/gl1kbnmhxm861.png',
  'https://i.redd.it/acikjga5irg91.jpg',
  'https://i.redd.it/8ar13ojh00061.jpg',
  'https://i.redd.it/6r83md4tacy81.png',
  'https://i.redd.it/cxnlf43px7n91.jpg',
  'https://i.redd.it/dx7v8wkux1z51.jpg',
  'https://i.redd.it/rflq0oc8mqa81.jpg',
  'https://i.redd.it/jp2u3n3b7kt41.jpg',
  'https://i.redd.it/0u92bkwh4jt61.jpg',
  'https://i.redd.it/et6s9x7iohs71.jpg',
  'https://i.redd.it/1gsd0e4sx1u21.jpg',
  'https://i.redd.it/j269c8k5cq761.png',
  'https://i.redd.it/yje2r5u48zk81.jpg',
  'https://i.redd.it/nxzvumlv5l161.jpg',
  'https://i.redd.it/w06typx73vs61.jpg',
  'https://i.redd.it/ck4oo3re79l91.jpg',
  'https://i.redd.it/0b6fszotv7351.jpg',
  'https://i.redd.it/ggnr6mwj7xo91.jpg',
  'https://i.redd.it/11ie66kq2no71.png',
  'https://i.redd.it/mh3q2228xbs51.png',
  'https://i.redd.it/b70ypp9q6xw51.jpg',
  'https://i.redd.it/5jofqb18pdd21.jpg',
  'https://i.redd.it/mr6tq7lhcgb31.jpg',
  'https://i.redd.it/ndf1yft0sz351.jpg',
  'https://i.imgur.com/NjQJq7R.jpg',
  'https://i.imgur.com/jUqAuAU.jpg',
  'https://i.redd.it/wdn2udcqudp01.jpg',
  'https://imgur.com/g7qtjoK.jpg',
  'https://i.redd.it/f11yw64upgg61.jpg',
  'https://i.redd.it/k6gl8jzez1651.jpg',
  'https://i.redd.it/smhjphzc5m571.jpg',
  'https://i.redd.it/529bkkohye951.jpg',
  'https://i.redd.it/1bss6f7y5tq51.jpg',
  'https://i.redd.it/vne01pimryd61.jpg',
  'https://i.redd.it/2a1tn5v4i1r61.jpg',
  'https://i.redd.it/nezlvs60lhl71.jpg',
  'https://i.redd.it/8vtkw6z9j5c91.jpg',
  'https://i.redd.it/ed6pawngenb51.jpg',
  'https://i.redd.it/fqv9l4sdovl71.jpg',
  'https://i.redd.it/8vg1zcozvf751.jpg',
  'https://i.redd.it/ujku6t2wb8l51.jpg',
  'https://i.redd.it/crkoyco3maa61.jpg',
  'https://i.redd.it/vnnzc0cdge871.jpg',
  'https://i.imgur.com/FXiwX1c.jpg',
  'https://i.imgur.com/zTFRt72.jpg',
  'https://i.redd.it/yoedbydv32l81.jpg',
  'https://i.redd.it/biri1c92vfi51.jpg',
  'https://i.redd.it/rsl3cvlffpx51.jpg',
  'https://i.redd.it/v6zjadkwhs461.jpg',
  'https://i.redd.it/qeileje5k6791.jpg',
  'https://i.redd.it/pgy59dyhbkh51.jpg',
  'https://i.redd.it/6wdu3qngriy91.jpg',
  'https://i.redd.it/nxg0k5yxqe541.jpg',
  'https://i.redd.it/4tujqoneb9061.jpg',
  'https://i.redd.it/uujh1axqh9c51.jpg',
  'https://i.redd.it/whxptcobasj81.jpg',
  'https://i.redd.it/b4idt2c4g0t61.jpg',
  'https://i.redd.it/hlbrm4fvfhv51.jpg',
  'https://i.redd.it/0oe3wc0hg0661.jpg',
  'https://i.redd.it/df786rbymg161.jpg',
  'https://i.redd.it/fovz43i6f1i21.jpg',
  'https://i.redd.it/n2d5hv42to991.jpg',
  'https://i.imgur.com/9xhV3kB.jpg',
  'https://i.redd.it/dczo97kymof11.jpg',
  'https://i.redd.it/xs3d7rwwdbi61.jpg',
  'https://i.redd.it/teusmnoiqj841.jpg',
  'https://i.redd.it/9loc00ohbaz61.jpg',
  'https://i.redd.it/86y3fjyq6yi61.jpg',
  'https://i.redd.it/p4hnw2ipcmd01.jpg',
  'https://i.redd.it/5qyar8x97qb51.png',
  'https://i.redd.it/bsmt48f9b4r31.jpg',
  'https://i.redd.it/el9zlpl7gbdz.jpg',
  'https://i.redd.it/av11tn8odyx41.jpg',
  'https://i.redd.it/uaf7pjre86v91.jpg',
  'https://i.redd.it/toa23nvn7fd41.png',
  'https://i.redd.it/zlvkzxaujtpz.jpg',
  'https://i.redd.it/priclg55d5w31.jpg',
  'https://i.redd.it/8mfr35x86su41.jpg',
  'https://i.redd.it/jdcpy6df1pc61.jpg',
  'https://i.redd.it/04xowb1cv9x51.jpg',
  'https://i.redd.it/x7kqlsw6ihg91.png',
  'https://i.redd.it/o9otdchoxi481.jpg',
  'https://i.imgur.com/WTjdhYL.jpg',
  'https://i.redd.it/rlvl77npaut51.jpg',
  'https://i.redd.it/yedq4umqd5q51.jpg',
  'https://i.redd.it/rgjk7cshmky61.jpg',
  'https://i.redd.it/uaqq4q136ms61.jpg',
  'https://i.redd.it/ah0ugukzxvf61.jpg',
  'https://i.redd.it/ndk4ys7isl291.jpg',
  'https://i.imgur.com/4Vc87Be.jpg',
  'https://i.redd.it/649a1h558de21.jpg',
  'https://i.redd.it/kf6i9p44go881.jpg',
  'https://i.redd.it/vdwad0yczs451.png',
  'https://i.redd.it/3ts0656laks41.jpg',
  'https://i.imgur.com/Zost4J8.jpg',
  'https://i.redd.it/vbqx5wkfy4f71.png',
  'https://i.redd.it/coiydxcwn3t71.png',
  'https://i.redd.it/jnkt4p4hany31.jpg',
  'https://i.redd.it/gddd7jiprcw31.png',
  'https://i.redd.it/4rflo8uc6kf61.jpg',
  'https://i.imgur.com/OMvyMsW.jpg',
  'https://i.redd.it/72sslgmc9dr51.jpg',
  'https://i.redd.it/p3m6yo0gnhc61.jpg',
  'https://i.redd.it/a7x0gmtonng61.jpg',
  'https://i.redd.it/j3ogczyccbj61.jpg',
  'https://i.redd.it/e2sf1g3gn5251.jpg',
  'https://i.redd.it/qsed80tngyi41.jpg',
  'https://i.redd.it/0mda40x5yv781.jpg',
  'https://i.redd.it/7wip1nicj8z31.jpg',
  'https://i.redd.it/kpdh7ogmt6051.jpg',
  'https://i.redd.it/z3r8xv4uon341.jpg',
  'https://i.redd.it/3rndb1ycj7h81.jpg',
  'https://i.redd.it/5n82yxqu5o451.jpg',
  'https://i.redd.it/v4co6lols1a71.jpg',
  'https://i.redd.it/537ddl50h3p61.jpg',
  'https://i.redd.it/qv80d64ogap51.jpg',
  'https://i.redd.it/sg9t6rzc9lg41.png',
  'https://i.redd.it/wb0t08toomc31.jpg',
  'https://i.redd.it/kbsseukf0ii61.jpg',
  'https://i.redd.it/ho71az913lo61.jpg',
  'https://i.redd.it/9ubol4i4x7821.jpg',
  'https://i.imgur.com/vIaoSbX.jpg',
  'https://i.redd.it/zn2t7h1mmvv51.jpg',
  'https://i.redd.it/gfybbwk3hsl11.jpg',
  'https://i.imgur.com/iQCnDnR.jpg',
  'https://i.redd.it/z2b6r890dkc11.jpg',
  'https://i.redd.it/fjnarapgtbg71.jpg',
  'https://i.imgur.com/UBjwNqJ.png',
  'https://i.redd.it/acu9mlro63t51.jpg',
  'https://i.redd.it/9nrwi2bz1ok61.jpg',
  'https://i.imgur.com/I9c7Zvd.jpg',
  'https://i.redd.it/tpol2qnzwlg71.jpg',
  'https://i.redd.it/j95su7kthc761.jpg',
  'https://i.redd.it/rlk3ecg5ct721.jpg',
  'https://i.imgur.com/vy0NqMT.jpg',
  'https://i.redd.it/5qitc0am2pi61.jpg',
  'https://i.redd.it/fsss1glrs6g71.jpg',
  'https://i.imgur.com/aZjgMqr.jpg',
  'https://i.redd.it/5cea4pki4h041.jpg',
  'https://i.redd.it/91g1gtvjvnn71.jpg',
  'https://imgur.com/s32TZKC.jpg',
  'https://i.imgur.com/Mhx8iOV.jpg',
  'https://i.redd.it/ho1jlrmj6ht31.jpg',
  'https://i.redd.it/yanjfgcfvp151.jpg',
  'https://i.redd.it/lxlepe8ymsy51.jpg',
  'https://i.imgur.com/YLkx5iR.jpg',
  'https://i.redd.it/0n5nzkyr1jwx.jpg',
  'https://i.redd.it/1x78mllvyk691.jpg',
  'https://i.redd.it/7bj85vahbs391.jpg',
  'https://i.redd.it/gozudwm8tnz51.jpg',
  'https://i.redd.it/pihjaji8g4d11.jpg',
  'https://i.redd.it/714easqauqo71.jpg',
  'https://i.redd.it/m452c2t1ovg81.jpg',
  'https://i.redd.it/7hdu2gp7zef81.jpg',
  'https://i.redd.it/mgv8pwngcl761.jpg',
  'https://i.redd.it/f65togp8m7q41.jpg',
  'https://i.redd.it/pxbsgvscmbz51.jpg',
  'https://i.redd.it/10epleo53h931.jpg',
  'https://i.redd.it/7un0yrp6mq861.jpg',
  'https://i.redd.it/gwuc1fnvx3u51.png',
  'https://i.redd.it/tpa48ukod7561.jpg',
  'https://i.redd.it/111s5169e3s31.jpg',
  'https://i.redd.it/fx4zstzqh4i21.jpg',
  'https://i.redd.it/2xwanrv3wdg31.jpg',
  'https://i.redd.it/843l7krwkdc61.jpg',
  'https://i.redd.it/498brlbw9vl21.jpg',
  'https://i.redd.it/zy40r1vhtzz41.jpg',
  'https://i.redd.it/8olt6rgva0s71.jpg',
  'https://i.redd.it/siv5csdd60771.jpg',
  'https://i.redd.it/sirh9gu188511.jpg',
  'https://i.redd.it/6eunicks0qo51.jpg',
  'https://i.imgur.com/sxLVzFj.jpg',
  'https://i.redd.it/9tfpl88e3lp81.jpg',
  'https://i.redd.it/a3o6wynsz1661.jpg',
  'https://i.redd.it/fkkpamfb1fb51.jpg',
  'https://i.redd.it/q6xiy6oxkgb81.jpg',
  'https://i.redd.it/6sl3rgd8b9w91.jpg',
  'https://i.redd.it/ajlgfy81hsb11.jpg',
  'https://i.imgur.com/6XUDgdk.png',
  'https://i.redd.it/xsesrygul6j81.png',
  'https://i.redd.it/nkrryo9e0v931.jpg',
  'https://i.redd.it/yv7vy0yrccm81.jpg',
  'https://i.redd.it/8ga4dma9prb71.png',
  'https://i.redd.it/q18glqmaz8j81.jpg',
  'https://i.redd.it/wzkjuwogr2w81.jpg',
  'https://i.imgur.com/kvmTJkc.jpg',
  'https://i.redd.it/n3rl931mcxq71.jpg',
  'https://i.redd.it/fznodyoxwmx71.jpg',
  'https://i.redd.it/6pg8nblnh7b71.jpg',
  'https://i.redd.it/oatzt01yco151.jpg',
  'https://i.redd.it/ddtfgevjgwd11.jpg',
  'https://i.redd.it/x0e9f81oj8g61.jpg',
  'https://i.imgur.com/YfU0sj4.jpg',
  'https://i.redd.it/dqjnbsmkfvr71.jpg',
  'https://i.redd.it/leyjc1zn9ik61.jpg',
  'https://i.redd.it/ifmmi9w0vul61.jpg',
  'https://i.redd.it/47y96kavnjb41.png',
  'https://i.redd.it/ttowkl5jpyv41.png',
  'https://i.redd.it/gyveh8fqane21.jpg',
  'https://i.redd.it/v5bb9gggjjm91.jpg',
  'https://i.imgur.com/V6iClzZ.jpg',
  'https://i.redd.it/0wbmp7q9tss71.jpg',
  'https://i.redd.it/85zw2hjvv5w61.jpg',
  'https://i.redd.it/ryqbmqbrhzg91.jpg',
  'https://i.redd.it/5xn6g47nxqi61.jpg',
  'https://i.redd.it/8tq4ba6kshh61.jpg',
  'https://i.redd.it/n5fkifk3wv621.jpg',
  'https://i.redd.it/mrwymzpve2221.jpg',
  'https://i.redd.it/5gvr3drcuj961.jpg',
  'https://i.redd.it/ku34e9q2pxv61.jpg',
  'https://i.redd.it/60iv7rscu4z61.jpg',
  'https://i.redd.it/adwl5ri53mk61.jpg',
  'https://i.redd.it/omevyntzyti41.jpg',
  'https://i.redd.it/3ptds0qehiv61.jpg',
  'https://i.redd.it/wo9gb4oslba61.jpg',
  'https://i.redd.it/69yw55cvwnv81.png',
  'https://i.redd.it/bi8smvqx5uq71.jpg',
  'https://i.redd.it/eqpzirdk6dc71.jpg'];
  
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