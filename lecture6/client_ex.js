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
    document.getElementById("submit").addEventListener(
      "click",
      function () {
        // 課題2
        // const charNameInput = document.getElementById("char_name");
        // const submitButton = document.getElementById("submit");
        // charNameInput.addEventListener("input", function () {
        //   submitButton.value = "命名!";
        // });
        // submitButton.addEventListener("mouseover", function () {
        //   charNameInput.size = 60; // テキストボックスのサイズを60に変更
        // });

        // 課題3（課題2ができたら，課題2は一旦コメントアウトしておくこと！！）
        let name = document.getElementById("char_name").value;
        let names = document.getElementById("status").getElementsByTagName("p");

        names[0].innerText = "名前：" + name;

        let type_name = document.createElement("p");
        let personality = document.createElement("p");
        let flavor = document.createElement("p");
        let type_name_for_status = "";

        let temp = document.getElementsByName("type");
        for (let i = 0, len = temp.length; i < len; i++) {
          if (temp[i].checked) {
            type_name.innerText = "種族：" + temp[i].value;
            type_name_for_status = temp[i].value;
            break;
          }
        }

        temp = document.getElementsByName("personality")[0].options;
        personality.innerText = "性格：";
        for (let i = 0, len = temp.length; i < len; i++) {
          if (temp[i].selected) {
            personality.innerText += temp[i].value;
          }
        }

        flavor.innerText =
          "フレーバー：" + document.getElementsByName("flavor")[0].value;

        let status = document.getElementById("status");
        status.appendChild(type_name);
        status.appendChild(personality);
        status.appendChild(flavor);

        let power, intelligence, agility, speed;
        switch (type_name_for_status) {
          case "人間":
            power = Math.floor(Math.random() * 10) + 1;
            intelligence = Math.floor(Math.random() * 10) + 1;
            agility = Math.floor(Math.random() * 10) + 1;
            speed = Math.floor(Math.random() * 10) + 1;
            break;
          case "エルフ":
            power = Math.floor(Math.random() * 10) + 1;
            intelligence = Math.floor(Math.random() * 20) + 2;
            agility = Math.floor(Math.random() * 10) + 1;
            speed = Math.floor(Math.random() * 10) + 1;
            break;
          case "ドワーフ":
            power = Math.floor(Math.random() * 20) + 2;
            intelligence = Math.floor(Math.random() * 10) + 1;
            agility = Math.floor(Math.random() * 10) + 1;
            speed = Math.floor(Math.random() * 10) + 1;
            break;
          case "獣人":
            power = Math.floor(Math.random() * 10) + 1;
            intelligence = Math.floor(Math.random() * 10) + 1;
            agility = Math.floor(Math.random() * 10) + 1;
            speed = Math.floor(Math.random() * 20) + 2;
            break;
          default:
            power = intelligence = agility = speed = 0;
        }

        let stats = document.createElement("p");
        stats.innerText = `体力：${power} 知力：${intelligence} 腕力：${agility} 素早さ：${speed}`;
        status.appendChild(stats);
      },
      false
    );
  },
  false
);
