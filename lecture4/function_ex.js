//課題のJavaScriptをひたすら書いて行こう!!
// function getTriangle(base, height) {
//   let area = (base * height) / 2;
//   return area;
// }

// let res = getTriangle(2, 6);
// console.log(res);

function getOmikujiTest() {
  let rndm = Math.random();

  if (rndm < 0.3) {
    console.log(`大吉 ${rndm}`);
  } else if (rndm >= 0.3 && rndm < 0.7) {
    console.log(`吉 ${rndm}`);
  } else if (rndm >= 0.7 && rndm < 0.95) {
    console.log(`凶 ${rndm}`);
  } else {
    console.log(`大凶 ${rndm}`);
  }
}
