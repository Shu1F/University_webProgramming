// //課題のJavaScriptをひたすら書いて行こう!!

// 課題１

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

function getOmikuji() {
  let rndm = Math.random();
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
console.log(getOmikuji());

// 課題２
// [関数リテラル]

let getOmikujiTestByLit = function () {
  let rndm = Math.random();
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
console.log(getOmikujiTestByLit());

let getOmikujiByLit = function () {
  let rndm = Math.random();
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
console.log(getOmikujiByLit());

// [アロー関数]

let getOmikujiTestByArr = () => {
  let rndm = Math.random();
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
console.log(getOmikujiTestByArr());

let getOmikujiByArr = () => {
  let rndm = Math.random();
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
console.log(getOmikujiByArr());

// 課題３

// [作業A]
let scopeA = "ぴかちゅう";
function viewValue() {
  let scope = "いーぶい";
  console.log(scopeA);
}
viewValue();
console.log(scopeA);

// [作業B]
let scopeB = "ぴかちゅう";
function viewValue() {
  scope = "いーぶい";
  console.log(scopeB);
}
viewValue();
console.log(scopeB);

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

// // 可変長引数 Ver.1
// function max() {
//   let v = Number.MIN_VALUE;
//   for (let a of arguments) {
//     if (v < a) {
//       v = a;
//     }
//   }
//   return v;
// }
// console.log(max(-10, 3, 6, 9));

// // 可変長引数 Ver.2
// function max(...values) {
//   let v = Number.MIN_VALUE;
//   for (let a of values) {
//     if (v < a) {
//       v = a;
//     }
//   }
//   return v;
// }
// console.log(max(-10, 3, 6, 9));

// 課題４
// // [A]
function pikapika(...poke) {
  let count = poke.length;
  // lengthで引数の個数を取得
  let symbol = "ー".repeat(count);
  // repeat()メソッドでlengthで取得した引数の個数を受け取り、"ー"の個数を保持
  let pika = `ぴ${symbol}かちゅう`;
  // repeat()で保持した"ー"の個数を、テンプレートリテラルで代入
  console.log(pika);
}
pikapika(1, 2, 3);
pikapika(1, 2, 3, 4, 5, 6, 9);

// [B]
function manyNumbers(...num) {
  let sum = (first, second) => {
    return first + second;
    // 加算結果をreduce()メソッドに渡す
  };
  return num.reduce(sum);
  // reduce()で要素を累積的に処理する
  // 最後の値を返す
}

const result = manyNumbers(1, 2, 3, 4);
console.log(result);

// [課題 5-1]
function getOmikujiArray(n) {
  let daikichi = 0;
  let kichi = 0;
  let kyou = 0;
  let daikyou = 0;

  for (let i = 0; i < n; i++) {
    let result = getOmikuji();
    if (result === "大吉") {
      daikichi++;
    } else if (result === "吉") {
      kichi++;
    } else if (result === "凶") {
      kyou++;
    } else if (result === "大凶") {
      daikyou++;
    }
  }
  return [
    `${n}回引いた結果は`,
    `大吉 × ${daikichi}`,
    `吉 × ${kichi}`,
    `凶 × ${kyou}`,
    `大凶 × ${daikyou}`,
  ];
}

function getOmikuji() {
  let rndm = Math.random();
  // let n = 0;
  for (let i = 0; i < 10; i++) {
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
}
console.log(getOmikujiArray(10));

function calculateOmikujiPoint(ary) {
  let sum = 0;

  const points = ary.map((f) => {
    if (f === "大吉") {
      return 3;
    } else if (f === "吉") {
      return 1;
    } else if (f === "凶") {
      return 0;
    } else if (f === "大凶") {
      return -1;
    }
  });

  points.forEach((point) => {
    sum += point;
  });

  return sum;
}

// [課題 5-2]
function getRandomOmikuji(n) {
  const fortune = [];
  for (let i = 0; i < n; i++) {
    let rndm = Math.random();
    if (rndm < 0.3) {
      fortune.push("大吉");
    } else if (rndm >= 0.3 && rndm < 0.7) {
      fortune.push("吉");
    } else if (rndm >= 0.7 && rndm < 0.95) {
      fortune.push("凶");
    } else {
      fortune.push("大凶");
    }
  }
  return fortune;
}

let times = getRandomOmikuji(10);
console.log(times);
console.log(calculateOmikujiPoint(times));

// console.log(point);
// console.log(fortune);
// let points = fortune.map();
// console.log(points);
// console.log(sum);
