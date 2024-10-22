//課題のJavaScriptをひたすら書いて行こう!!
// [課題１]

function Omikuji() {
  this.rndm = Math.random();
}

Omikuji.prototype.shake = function () {
  this.rndm = Math.random();
};

Omikuji.prototype.getOmikuji = function () {
  if (rndm < 0.3) {
    console.log(`大吉 ${this.rndm}`);
  } else if (rndm >= 0.3 && rndm < 0.7) {
    console.log(`吉 ${this.rndm}`);
  } else if (rndm >= 0.7 && rndm < 0.95) {
    console.log(`凶 ${this.rndm}`);
  } else {
    console.log(`大凶 ${this.rndm}`);
  }
};

const secOmikuji = new Omikuji();
console.log(secOmikuji.getOmikuji());

function getOmikuji() {
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

console.log(getOmikuji());
