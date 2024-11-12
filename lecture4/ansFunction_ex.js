//課題1

let rndm = Math.random();

function getOmikujiTest(rndm) {
  if (rndm <= 0.3) {
    return "大吉";
  } else if (rndm <= 0.7) {
    return "吉";
  } else if (rndm <= 0.95) {
    return "凶";
  } else {
    return "大凶";
  }
}
console.log(getOmikujiTest(rndm));

function getOmikuji() {
  let rndm = Math.random();

  if (rndm <= 0.3) {
    return "大吉";
  } else if (rndm <= 0.7) {
    return "吉";
  } else if (rndm <= 0.95) {
    return "凶";
  } else {
    return "大凶";
  }
}
console.log(getOmikuji());

// 課題2
// 関数リテラル表現
let getOmikujiTestByLit = function (rndm) {
  if (rndm <= 0.3) {
    return "大吉";
  } else if (rndm <= 0.7) {
    return "吉";
  } else if (rndm <= 0.95) {
    return "凶";
  } else {
    return "大凶";
  }
};
console.log(getOmikujiTestByLit(rndm));

let getOmikujiByLit = function () {
  let rndm = Math.random();

  if (rndm <= 0.3) {
    return "大吉";
  } else if (rndm <= 0.7) {
    return "吉";
  } else if (rndm <= 0.95) {
    return "凶";
  } else {
    return "大凶";
  }
};
console.log(getOmikujiByLit());

// アロー関数
let getOmikujiTestByArr = (rndm) => {
  if (rndm <= 0.3) {
    return "大吉";
  } else if (rndm <= 0.7) {
    return "吉";
  } else if (rndm <= 0.95) {
    return "凶";
  } else {
    return "大凶";
  }
};
console.log(getOmikujiTestByArr(rndm));

let getOmikujiByArr = () => {
  let rndm = Math.random();

  if (rndm <= 0.3) {
    return "大吉";
  } else if (rndm <= 0.7) {
    return "吉";
  } else if (rndm <= 0.95) {
    return "凶";
  } else {
    return "大凶";
  }
};
console.log(getOmikujiByArr());

// 課題3A
//let scope = "ぴかちゅう";
//
//function viewValue()　{
//	let scope = "いーぶい";
//	console.log(scope);
//}
//
//viewValue();
//console.log(scope);

// 課題3B
let scope = "ぴかちゅう";

function viewValue() {
  scope = "いーぶい";
  console.log(scope);
}

viewValue();
console.log(scope);

// 3BのviewValue内のscopeは，先に定義されたscopeを指す（つまり，グローバル変数）ので，"いーぶい"が上書きされる．

// 課題4
function pikapika(...values) {
  console.log(values.length);
  let text = "ぴ";
  for (let i = 0; i < values.length; i++) {
    text = text.concat("ー");
  }
  text = text.concat("かちゅう");
  return text;
}

console.log(pikapika(1, 2, 3, 4));

// 課題5A
let n = 10;

function getOmikujiArray(n) {
  let data = new Array(n);

  for (let i = 0; i < n; i++) data[i] = getOmikuji();

  return data;
}

console.log(getOmikujiArray(n));

// 課題5B
console.log("課題5B");
let ary = getOmikujiArray(n);
console.log(ary);

function calculateOmikujiPoint(ary) {
  let points = ary.map(function (value, index, array) {
    if (value == "大吉") return 3;
    else if (value == "吉") return 1;
    else if (value == "凶") return 0;
    else if (value == "大凶") return -1;
  });
  console.log(points);

  let sum = 0; // 初期化しておかないとNaNになる．
  points.forEach(function (value, index, array) {
    sum += value;
  });

  return sum;
}

console.log(calculateOmikujiPoint(ary));
