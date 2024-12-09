document.addEventListener(
  "DOMContentLoaded",
  function () {
    // 各所にイベントリスナーを設置する．これは，HTML読み込み完了時に動作する．

    class webConnector extends XMLHttpRequest {
      constructor() {
        super();
        this.addEventListener(
          "loadstart",
          function () {
            window.alert(this.url + "と通信を開始しました");
          },
          false
        ); //通信開始時の処理
        this.addEventListener(
          "load",
          function () {
            let data = this.response;

            // 課題3-3で下記構造のリストを作る関数show_kadai3
            // data: [
            //     {'name': name, 'message': message},
            //     {'name': name, 'message': message},
            //     {'name': name, 'message': message},
            // ]
            show_kadai3(data);
          },
          false
        ); //通信成功時処理
        this.addEventListener(
          "error",
          function () {
            window.alert(this.url + "との通信に失敗しました");
          },
          false
        ); //通信失敗時処理
      }
    }
    let xhr = new webConnector();

    // 課題2-2で作成，3-3でも使う
    document.getElementById("kadai2").addEventListener(
      "click",
      function () {
        let name = document.getElementById("name").value;
        let message = document.getElementById("message").value;

        let url =
          "./cgi-bin/serverSide1.py?" + "&name=" + name + "&message=" + message;
        xhr.open("GET", url);
        xhr.responseType = "json";
        xhr.url = url;
        xhr.send(null);
      },
      false
    );
  },
  false
);

// 課題3-3で作成
function show_kadai3(data) {
  // idがkadai3のタグの取得
  let kadai3 = document.getElementById("kadai3");

  if (data === null) {
    kadai3.textContent = "メッセージはありません";
  } else {
    // 今回は表示用にデータを下記のように整形してみる
    // 表示イメージ
    // ● name
    //      〇 「message」
    // ● name
    //      〇 「message」
    // ● name
    //      〇 「message」
    let text = "<ul>";

    // data内構造は下記のようになっている．
    // [{'name': name, 'message': message},{'name': name, 'message': message},{'name': name, 'message': message}]
    for (let dictionary of data) {
      text +=
        "<li>" +
        dictionary["name"] +
        "<ul><li>「" +
        dictionary["message"] +
        "」</li></ul></li>";
    }
    text += "</ul>";

    // htmlへ反映（現状何回送信しても表示されるのはダミーデータと直近の送信データのみ）
    kadai3.innerHTML = text;
  }
}
