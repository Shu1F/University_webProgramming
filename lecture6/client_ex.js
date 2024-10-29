//課題のJavaScriptをひたすら書いて行こう!!
//課題1
let result6_1_1 = document.getElementById("4th");
result6_1_1.textContent = "しーん";
//以下同じように．
document.getElementById("4th").textContent = "しーん";

document.getElementsByClassName("nigiyaka").textContent = "シーン";

document.getElementsByName("odoroki").textContent = "ざわ...ざわ...";

document.querySelectorAll("#macron p").forEach((p) => {
  p.textContent = "しーーーーーん";
});

document.getElementById("repeat");
syokuji.getElementsByClassName("syokuji").textContent = "しんごじら";

document.addEventListener(
  "DOMContentLoaded",
  function () {
    // 課題2
    // ここにかく．
    // 課題3（課題2ができたら，課題2は一旦コメントアウトしておくこと！！）
    // ここにかく．
  },
  false
);
