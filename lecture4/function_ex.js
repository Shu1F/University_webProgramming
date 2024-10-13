// //課題のJavaScriptをひたすら書いて行こう!!

// 課題１

// function getOmikujiFunc() {
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
// console.log(getOmikujiFunc());

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

// 課題２
// 関数リテラル

// let getOmikujiTestByLit = function () {
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
// };
// console.log(getOmikujiTestByLit());

// let getOmikujiByLit = function () {
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
// };
// console.log(getOmikujiByLit());

// アロー関数
// let getOmikujiTestByArr = () => {
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
// };
// console.log(getOmikujiTestByArr());

// let getOmikujiByArr = () => {
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
// };
// console.log(getOmikujiByArr());

// 課題３

// 作業A
// let scope = "ぴかちゅう";
// function viewValue() {
//   let scope = "いーぶい";
//   console.log(scope);
// }
// viewValue();
// console.log(scope);

// 作業B
// let scope = "ぴかちゅう";
// function viewValue() {
//   scope = "いーぶい";
//   console.log(scope);
// }
// viewValue();
// console.log(scope);

// [説明];
// "ぴかちゅう"の文字列が入ってる let scope はグローバルスコープで、viewValue関数の"いーぶい"はローカルスコープである。
// 関数内でのconcole.logはローカルスコープが優先されるのでviewValue関数での出力は"いーぶい"となる。
// viewValue関数外のconsole.logはローカルスコープの影響を受けないのでグローバルスコープの"ぴかちゅう"が出力される。

// if (true) {
//   let a = "ぴかちゅう";
// }
// console.log(a);

// function showMessage(value) {
//   console.log(value);
// }
// showMessage();
// showMessage("ぴかちゅう");
// showMessage("ぴかちゅう", "いーぶい");

// function showMessage(value) {
//   console.log(arguments[1]);
//   console.log(arguments.length);
// }
// showMessage("ぴかちゅう", "イーブイ");

// 可変長引数 Ver.1
function max() {
  let v = Number.MIN_VALUE;
  for (let a of arguments) {
    if (v < a) {
      v = a;
    }
  }
  return v;
}
console.log(max(-10, 3, 6, 9));

// 可変長引数 Ver.2
function max(...values) {
  let v = Number.MIN_VALUE;
  for (let a of values) {
    if (v < a) {
      v = a;
    }
  }
  return v;
}
console.log(max(-10, 3, 6, 9));
