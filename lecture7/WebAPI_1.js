document.addEventListener('DOMContentLoaded', function () {
    // 各所にイベントリスナーを設置する．これは，HTML読み込み完了時に動作する．

    class webConnector extends XMLHttpRequest{
        constructor(){
            super();
            this.addEventListener('loadstart', function () {
                window.alert(this.url + "と通信を開始しました");
            }, false); //通信開始時の処理
            this.addEventListener('load', function () {
                window.alert(this.responseText + "を取得しました");
            }, false); //通信成功時処理
            this.addEventListener('error', function () {
                window.alert(this.url + "との通信に失敗しました");
            }, false); //通信失敗時処理
        }
    }
    let xhr = new webConnector();
    let xhr2 = new webConnector();

    document.getElementById('kadai2').addEventListener('click', function () {
        // 課題2のボタンが押されたときに発火するイベントリスナー
        let url = "./content.txt";
        xhr.open("GET", url);
        xhr.url = url;
        xhr.send(null);
        let url2 = "https://www.kogakuin.ac.jp/important/efforts.html"
        xhr2.open("GET", url2);
        xhr2.url = url2
        xhr2.send(null);
    }, false);

    //==========課題4のためのコード==========
    let result = document.getElementById('result');
    // 出力先のためのタグ
    document.getElementById('btn').addEventListener('click', function () {
        // 検索ボタンが押されたときに発火するイベントリスナー
        let target_url = document.getElementById('url').value; //HTML上で入力されたURLを受け取る
        let url = 'https://b.hatena.ne.jp/entry/jsonlite/?callback=show&url=' + encodeURIComponent(target_url);
        //callbackパラメータには，結果を処理する関数を指定する（いまは【show】関数）
        //urlパラメータには，ブックマーク情報を受け取りたいURLを指定する
        //urlはencodeURIComponentを使って，getのパラメータとして適切な文字になるように変換する（変な記号とかを変換）
        let scr = document.createElement('script');
        //はてぶからJavaScriptコードを受け取るための<script>要素を作成する．
        scr.src = url; //はてぶから受け取るためのURLをここで指定している．
        document.getElementsByTagName('body').item(0).appendChild(scr);
        //<script>として追加する．（追加された時点で実行開始する）
    }, false);
}, false);

//==========課題4のためのコード==========
// show関数とおなじように他の関数,showTags関数やcountTags関数を作成していく．
function show(data) {
    if (data === null) {
        result.textContent = 'ブックマークは存在しませんでした';
    } else {
        let bms = data.bookmarks;
        //返ってきたjsonはjavascriptのオブジェクトとして扱える
        //bookmarksラベルのデータ（配列）にアクセスしていると考えればよい
        let ul = document.createElement('ul');
        for (let i = 0, len = bms.length; i < len; i++) {
            let li = document.createElement('li');
            let anchor = document.createElement('a');
            anchor.href = 'http://b.hatena.ne.jp/' + bms[i].user;
            let text = document.createTextNode(bms[i].user + '：' + bms[i].comment);
            anchor.appendChild(text);
            li.appendChild(anchor);
            ul.appendChild(li);
        }
        result.appendChild(ul);
        //どんな感じでHTMLにタグを追加しているのか想像しながら読もう
    }
}
