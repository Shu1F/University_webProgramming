//課題のJavaScriptをひたすら書いて行こう!!
function getOmikujiFunc() {
  let rndm = Math.random();
  return getOmikujiTest(rndm);
}

function getOmikujiTest(rndm) {
  if (rndm < 0.3) {
    return "大吉";
  } else if (rndm >= 0.3 && rndm < 0.7) {
    return "吉";
  } else if (rndm >= 0.7 && rndm < 0.95) {
    return "凶";
  } else {
    return "大凶";
  }
}
console.log(getOmikujiFunc());