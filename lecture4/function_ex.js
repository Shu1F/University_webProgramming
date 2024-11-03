//課題のJavaScriptをひたすら書いて行こう!!
// function getTriangle(base, height) {
//   let area = (base * height) / 2;
//   return area;
// }

// let res = getTriangle(2, 6);
// console.log(res);

// <1>
// function getOmikujiDo() {
//   let rndm = Math.random();
//   return getOmikujiTest(rndm);
// }

// function getOmikujiTest(rndm) {
//   if (rndm < 0.3) {
//     return "大吉";
//   } else if (rndm >= 0.3 && rndm < 0.7) {
//     return "吉";
//   } else if (rndm >= 0.7 && rndm < 0.95) {
//     return "凶";
//   } else {
//     return "大凶";
//   }
// }
// console.log(getOmikujiDo());

// // <2>
// function getOmikuji() {
//   let rndm = Math.random();
//   if (rndm < 0.3) {
//     return "大吉";
//   } else if (rndm >= 0.3 && rndm < 0.7) {
//     return "吉";
//   } else if (rndm >= 0.7 && rndm < 0.95) {
//     return "凶";
//   } else {
//     return "大凶";
//   }
// }
// console.log(getOmikuji());

function getOmikuji() {
  let rndm = Math.random();
  return getOmikujiByLit(rndm);
}
let getOmikujiByLit = function (rndm) {
  if (rndm < 0.3) {
    return "大吉";
  } else if (rndm >= 0.3 && rndm < 0.7) {
    return "吉";
  } else if (rndm >= 0.7 && rndm < 0.95) {
    return "凶";
  } else {
    return "大凶";
  }
};
