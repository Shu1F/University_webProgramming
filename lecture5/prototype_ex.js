//課題のJavaScriptをひたすら書いて行こう!!
// [課題１]

// function Omikuji() {
//   //初期値で適当な数値を代入
//   this.rndm = Math.random();
//   this.shake = function () {
//     this.rndm = Math.random();
//   };
// }

// Omikuji.prototype.getOmikuji = function () {
//   // this.rndm を参照
//   if (this.rndm < 0.3) {
//     return `大吉 ${this.rndm}`;
//   } else if (this.rndm >= 0.3 && this.rndm < 0.7) {
//     return `吉 ${this.rndm}`;
//   } else if (this.rndm >= 0.7 && this.rndm < 0.95) {
//     return `凶 ${this.rndm}`;
//   } else {
//     return `大凶 ${this.rndm}`;
//   }
// };

// const secOmikuji = new Omikuji();
// console.log(secOmikuji.getOmikuji());

// function getOmikuji() {
//   let rndm = Math.random();
//   if (rndm < 0.3) {
//     return `大吉 ${rndm}`;
//   } else if (rndm >= 0.3 && rndm < 0.7) {
//     return `吉 ${rndm}`;
//   } else if (rndm >= 0.7 && rndm < 0.95) {
//     return `凶 ${rndm}`;
//   } else {
//     return `大凶 ${rndm}`;
//   }
// }

// console.log(getOmikuji());

// [課題2]

// function Omikuji() {
//   //初期値で適当な数値を代入
//   this.rndm = Math.random();
// }

// Omikuji.prototype.shake = function () {
//   //shakeメソッドで値を更新するたびに math.randomを実行
//   this.rndm = Math.random();
// };

// Omikuji.prototype.getOmikuji = function () {
//   // this.rndm を参照
//   if (this.rndm < 0.3) {
//     return `大吉 ${this.rndm}`;
//   } else if (this.rndm >= 0.3 && this.rndm < 0.7) {
//     return `吉 ${this.rndm}`;
//   } else if (this.rndm >= 0.7 && this.rndm < 0.95) {
//     return `凶 ${this.rndm}`;
//   } else {
//     return `大凶 ${this.rndm}`;
//   }
// };

// const secOmikuji = new Omikuji();
// console.log(secOmikuji.getOmikuji());

// [オブジェクトリテラル]

// const Omikuji = {
//   rndm: Math.random(),

//   shake: function () {
//     this.rndm = Math.random();
//   },

//   getOmikuji: function () {
//     if (this.rndm < 0.3) {
//       return `大吉 ${this.rndm}`;
//     } else if (this.rndm >= 0.3 && this.rndm < 0.7) {
//       return `吉 ${this.rndm}`;
//     } else if (this.rndm >= 0.7 && this.rndm < 0.95) {
//       return `凶 ${this.rndm}`;
//     } else {
//       return `大凶 ${this.rndm}`;
//     }
//   },
// };

// console.log(Omikuji.getOmikuji());

// [課題３]

// function Omikuji() {
//   this.rndm = Math.random();
// }

// Omikuji.prototype.shake = function () {
//   this.rndm = Math.random();
// };

// Omikuji.prototype.getOmikuji = function () {
//   if (this.rndm < 0.3) {
//     return `大吉 ${this.rndm}`;
//   } else if (this.rndm >= 0.3 && this.rndm < 0.7) {
//     return `吉 ${this.rndm}`;
//   } else if (this.rndm >= 0.7 && this.rndm < 0.95) {
//     return `凶 ${this.rndm}`;
//   } else {
//     return `大凶 ${this.rndm}`;
//   }
// };

// function Fukubiki() {
//   Omikuji.call(this);
// }

// Fukubiki.prototype = new Omikuji();

// Fukubiki.prototype.getFukubiki = function () {
//   const rank = Math.floor(Math.random() * 10) + 1;
//   return `福引の結果は: ${rank}等`;
// };

// Fukubiki.prototype.getOmikuji = function () {
//   return 'これはふくびきだよ';
// };

// const fukubikiInstance = new Fukubiki();
// console.log(fukubikiInstance.getOmikuji());
// console.log(fukubikiInstance.getFukubiki());

// const omikujiInstance = new Omikuji();
// console.log(omikujiInstance.getOmikuji());

[課題4];

// // [1]
// class Omikuji {
//   constructor() {
//     this.rndm = Math.random();
//     this.shake = function () {
//       this.rndm = Math.random();
//     };
//   }

//   getOmikuji() {
//     if (this.rndm < 0.3) {
//       return `大吉 ${this.rndm}`;
//     } else if (this.rndm >= 0.3 && this.rndm < 0.7) {
//       return `吉 ${this.rndm}`;
//     } else if (this.rndm >= 0.7 && this.rndm < 0.95) {
//       return `凶 ${this.rndm}`;
//     } else {
//       return `大凶 ${this.rndm}`;
//     }
//   }
// }

// const secOmikuji = new Omikuji();
// console.log(secOmikuji.getOmikuji());

// // [2]
// class Omikuji {
//   constructor() {
//     this.rndm = Math.random();
//   }

//   shake() {
//     this.rndm = Math.random();
//   }

//   getOmikuji() {
//     if (this.rndm < 0.3) {
//       return `大吉 ${this.rndm}`;
//     } else if (this.rndm >= 0.3 && this.rndm < 0.7) {
//       return `吉 ${this.rndm}`;
//     } else if (this.rndm >= 0.7 && this.rndm < 0.95) {
//       return `凶 ${this.rndm}`;
//     } else {
//       return `大凶 ${this.rndm}`;
//     }
//   }
// }

// const secOmikuji = new Omikuji();
// console.log(secOmikuji.getOmikuji());

// // [4]
// class Omikuji {
//   constructor() {
//     this.rndm = Math.random();
//   }

//   shake() {
//     this.rndm = Math.random();
//   }

//   getOmikuji() {
//     if (this.rndm < 0.3) {
//       return `大吉 ${this.rndm}`;
//     } else if (this.rndm >= 0.3 && this.rndm < 0.7) {
//       return `吉 ${this.rndm}`;
//     } else if (this.rndm >= 0.7 && this.rndm < 0.95) {
//       return `凶 ${this.rndm}`;
//     } else {
//       return `大凶 ${this.rndm}`;
//     }
//   }
// }

// class Fukubiki extends Omikuji {
//   getFukubiki() {
//     const rank = Math.floor(Math.random() * 10) + 1;
//     return `福引の結果は: ${rank}等`;
//   }

//   getOmikuji() {
//     return 'これはふくびきだよ';
//   }
// }

// const fukubikiInstance = new Fukubiki();
// console.log(fukubikiInstance.getOmikuji());
// console.log(fukubikiInstance.getFukubiki());

// const omikujiInstance = new Omikuji();
// console.log(omikujiInstance.getOmikuji());
