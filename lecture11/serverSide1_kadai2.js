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
            show(data);
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

    document.getElementById("kadai1").addEventListener(
      "click",
      function () {
        // 課題1のボタンが押されたときに発火するイベントリスナー
        let x = document.getElementById("x").value;
        let y = document.getElementById("y").value;

        let url = "./cgi-bin/serverSide1.py?" + "x=" + x + "&y=" + y;
        xhr.open("GET", url);
        xhr.responseType = "json";
        xhr.url = url;
        xhr.send(null);
      },
      false
    );

    document.getElementById("kadai2").addEventListener(
      "click",
      function () {
        let name = document.getElementById("name").value;
        let message = document.getElementById("message").value;
        let url =
          "./cgi-bin/serverSide1.py?x=" +
          encodeURIComponent(name) +
          "&y=" +
          encodeURIComponent(message);
        xhr.open("GET", url);
        xhr.responseType = "json";
        xhr.url = url;
        xhr.send(null);
      },
      false
    );

    let result = document.getElementById("result");
  },
  false
);

function show(data) {
  if (data === null) {
    result.textContent = "メッセージはありません";
  } else {
    result.textContent = data.z;
    result.innerHTML += data.debag;
  }
}
