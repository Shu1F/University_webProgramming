//課題のjavascriptをひたすら書いて行こう!!
// 例
// console.log(Number.MAX_VALUE);

// 課題1
// let s = "にわにはにわにわとりがいる";

//“と”は先頭から何文字目にあるか?
// console.log(s.indexOf("と"));

// let str = s.indexOf("と");
// console.log(str);

// この文字列の長さは?
// console.log(s.length);

// "わ"で文字列を分割せよ
// console.log(s.split("わ"));

// “にわ”は何回出現したか?
// let count = s.split("にわ").length - 1;
// console.log(count);
// //にわで分割してlengthで数える

//“へ”は先頭から何文字目にあるか?
// console.log(s.indexOf("へ"));

// 先頭3文字目から後方4文字目までを得よ
// console.log(s.slice(2, 4));

// “かもしれない”を後方に追加せよ
// console.log(s.concat("かもしれない"));

// 7文字目の文字を得よ
// console.log(s.slice(6, 7));

// 課題2
// let n1 = 255;
// 16進数
// console.log(n1.toString(16));

// 8進数
// console.log(n1.toString(8));

// let n2 = 123.45678;
// // 小数点3桁で四捨五入せよ
// console.log(n2.toFixed(3));
// // 小数点7桁で四捨五入せよ
// console.log(n2.toFixed(7));
// 指数表記
// console.log(n2.toExponential());

// 課題3
// let n4 = -255;
// let n5 = 123.45678;
// let n6 = 81;

// n4の絶対値
// console.log(Math.abs(n4));

// n4, n5, n6の最大値
// console.log(Math.max(n4, n5, n6));

// n5を四捨五入せよ
// console.log(Math.round(n5));

// n6の平方根を得よ
// console.log(Math.sqrt(n6));

// n6の自然対数を得よ
// console.log(Math.log(n6));

// n4の二乗を得よ
// console.log(Math.pow(n4, 2));

// n5 - 円周率を求めよ
// console.log(n5 - Math.PI);

// 課題4
// let a1 = ["Sato", "Takae", "Osada", "Hio", "Saitoh", "Sato"];
// let a2 = ["Yabuki", "Aoki", "Moriyama", "Yamada"];
// a1の長さ
// console.log(a1.length);

// 文字列に変換
// console.log(a1.toString());

// a1にa2を連結
// console.log(a1.concat(a2));

// a1を-で区切って文字列にする
// console.log(a1.join("-"));

// a1の2要素目から4要素目まで取得する
// console.log(slice(1, 4));

// a1の末尾にa2の二番目の要素を追加
// console.log(a1.push(a2[2]));

// 逆順に並び替え
// console.log(a1.reverse());

// 課題5
// let m = new Map();

// 右の表のkeyとvalueを連想配列として,変数mに格納せよ
// m.set("dog", "わんわん");
// m.set("cat", "にゃー");
// m.set("mouse", "ちゅー");

// mにduckのkeyが存在するか確認し,存在すれば値を取得せよ,存在しなければ,duckの値として”がーがー”を格納せよ
// if (m.has("duck")) {
//   console.log(m.get("dog"));
// } else {
//   m.set("duck", "がーがー");
//   console.log(m.get("duck"));
// }

// mよりmouseのkeyを削除せよ
// console.log(m.delete("mouse"));

// mの要素数を得よ
// console.log(m.size);

// mのすべての値を取得し,結合して1つの文字列にせよ
// let str = Array.from(m.values()).join("");
// Array.fromで配列を作成
// valuesですべてのキーを取得
// joinで空文字を挿入して文字列を作成
// console.log(str);

// 課題6
// let today = new Date("2024/10/08 11:21:33");

// todayのミリ秒を得よ
// console.log(today.getTime());

// 40日後を設定せよ
// today.setDate(today.getDate() + 40);
// console.log(today.toLocaleString());

// todayの秒数 = 3の倍数　たこ焼き　そうでなければ味噌カツ
// if (today.getSeconds() % 3 === 0) {
//   console.log("たこ焼き");
// } else {
//   console.log("味噌カツ");
// }

// 1~100000まで加算するのにかかる処理時間
// 参: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/now

// let processTime;
// for (let i = 1; i <= 100000; i++) {
//   if (i === 1) {
//     processTime = Date.now();
//   } else if (i === 100000) {
//     const finish = Date.now() - processTime;
//     console.log(finish);
//   }
// }

// 課題7

// j024402@ns.kogakuin.jp
// j024402@g.kogakuin.jp

// j124402@ns.kogakuin.jp
// j124402@g.kogakuin.jp

// j224402@ns.kogakuin.jp
// j224402@g.kogakuin.jp

// j324402@ns.kogakuin.jp
// j324402@g.kogakuin.jp

// jX24402@ns.kogakuin.jp
// jx24402@g.kogakuin.jp

// j[0-3x]\d{5}@(ns.kogakuin.ac.jp|g.kogakuin.jp)

// 参：
// [1] https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_expressions
// [2] https://www.tohoho-web.com/js/regexp.htm

// 課題8
// let text =
//   "私のアドレスは j324402@ns.kogakuin.ac.jp と j324402@g.kogakuin.jp です。";
// let reg = new RegExp(
//   "j[0-3x]\\d{5}@(ns\\.kogakuin\\.ac\\.jp|g\\.kogakuin\\.jp)",
//   "gi"
// );

// let results = text.match(reg);
// for (let i = 0; i < results.length; i++) {
//   console.log(results[i]);
// }
// 参：https://qiita.com/ue5963/items/bd8e32ac9e6b12aa7fab

// 課題9
let nine = new Map();
let era =
  "令和は2019年5月1日からです。(17)平成は1989年1月8日からです。(34)昭和は1926年12月25日からです。(53)大正は1912年7月30日からです。(71)明治は1968年10月23日からです。";

m.set(nine.slice(0, 1), nine.slice(3, 12));
m.set(nine.slice(17, 19), nine.slice(20, 29));
m.set(nine.slice(34, 36), nine.slice(37, 48));
m.set(nine.slice(53, 55), nine.slice(56, 66));
m.set(nine.slice(71, 73), nine.slice(74, 85));
