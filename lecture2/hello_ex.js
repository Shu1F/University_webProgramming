//課題2
// 課題2の回答をここに書いていく
// window.alert("やったるでWebプログラミング");
//課題3
// 課題3の回答をここに書いていく．以下同様．

// [課題3]コード
// let x = 10;
// let y = 20;
// console.log(x + y);

//[課題4]コード
// let boo = 20;
// boo -= 30;

// for (let i = 0; i < 5; i++) {
//   boo++;
// }

// let fuu;
// fuu = boo % 8;

// console.log(fuu * boo);

//[課題5]コード
// const RII = 3.4;
// RII = 56;
// console.log(RII);

// let data1 = [0, 1, 2];
// let data2 = data1;
// data1[0] = 5;
// console.log(data2);

// [課題6]コード
// let rndm = Math.random();

// テンプレートリテラル ``と&{}を使う
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Template_literals

// if (rndm < 0.3) {
//   console.log(`大吉 ${rndm}`);
// } else if (rndm >= 0.3 && rndm < 0.7) {
//   console.log(`吉 ${rndm}`);
// } else if (rndm >= 0.7 && rndm < 0.95) {
//   console.log(`凶 ${rndm}`);
// } else {
//   console.log(`大凶 ${rndm}`);
// }

//[課題7]のコード
// let daikichi = 0;
// let kichi = 0;
// let kyou = 0;
// let daikyou = 0;

// for (let i = 0; i < 10; i++) {
//   let rndm = Math.random();
//   if (rndm < 0.3) {
//     console.log(`大吉 ${rndm}`);
//     daikichi++;
//   } else if (rndm >= 0.3 && rndm < 0.7) {
//     console.log(`吉 ${rndm}`);
//     kichi++;
//   } else if (rndm >= 0.7 && rndm < 0.95) {
//     console.log(`凶 ${rndm}`);
//     kyou++;
//   } else {
//     console.log(`大凶 ${rndm}`);
//     daikyou++;
//   }
// }
// テンプレートリテラルを使用する
// console.log("～集計結果～");
// console.log(`大吉 × ${daikichi}`);
// console.log(`吉 × ${kichi}`);
// console.log(`凶 × ${kyou}`);
// console.log(`大凶 × ${daikyou}`);

//[課題8]のコード

// let fortune = [];
// let point = 0;
//配列に入れるときはpushを使う（pushは配列の末尾）
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// for (let i = 0; i < 10; i++) {
//   let rndm = Math.random();
//   if (rndm < 0.3) {
//     fortune.push("大吉");
//   } else if (rndm >= 0.3 && rndm < 0.7) {
//     fortune.push("吉");
//   } else if (rndm >= 0.7 && rndm < 0.95) {
//     fortune.push("凶");
//   } else {
//     fortune.push("大凶");
//   }
// }

// for (let f of fortune) {
//   if (f === "大吉") {
//     point += 3;
//   } else if (f === "吉") {
//     point += 1;
//   } else if (f === "凶") {
//     point += 0;
//   } else if (f === "大凶") {
//     point -= 1;
//   }
// }
// console.log(point);

//課題9

document.getElementById("text-button").onclick = function () {
  let luck = "";
  let rndm = Math.random();

  if (rndm < 0.3) {
    console.log(`大吉 ${rndm}`);
    luck = "大吉";
  } else if (rndm >= 0.3 && rndm < 0.7) {
    console.log(`吉 ${rndm}`);
    luck = "吉";
  } else if (rndm >= 0.7 && rndm < 0.95) {
    console.log(`凶 ${rndm}`);
    luck = "凶";
  } else {
    console.log(`大凶 ${rndm}`);
    luck = "大凶";
  }
  document.getElementById("text").innerHTML = luck;
};
