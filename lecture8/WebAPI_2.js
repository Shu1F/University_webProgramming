//課題1で使う配列
let testdata = [54, 40, 10, 5, 21, 49, 30, 54, 10, 30, 35, 30, 100, 18, 60, 48, 36, 60, 9, 36, 40, 35, 35, 40, 70, 12, 30, 21, 4, 24, 18, 45, 27, 28, 50, 70, 90, 9, 40, 54, 30, 2, 18, 60, 15, 56, 56, 64, 56, 24, 18, 36, 70, 28, 28, 50, 20, 12, 28, 3, 21, 72, 18, 45, 12, 56, 15, 50, 10, 54, 18, 40, 20, 40, 56, 8, 40, 54, 6, 14, 60, 90, 40, 81, 48, 80, 50, 90, 15, 50, 3, 27, 16, 70, 24, 54, 7, 30, 70, 40];

// ここに課題1の解をじゃんじゃん書いていく．
// 課題1-1
const maxNum = (testdata) => {
  for(i = 0, i < testdata.length, i++) {
    let max = testdata[0]
    if (max > testdata[i]) {
      max = max;
    } else if {
      max = testdata[i];
    }
  }
}
// 課題1-2

// 課題1-3

// 課題1-4

// 課題1-5

// 課題1-6


//課題2,3用イベントリスナー
document.addEventListener('DOMContentLoaded', function () {
    // 各所にイベントリスナーを設置する．これは，HTML読み込み完了時に動作する．

    // 課題2-1用(課題3-1でも使える）
    document.getElementById('kadai2-1').addEventListener('click', function () {
    	let result = document.getElementById('result2-1');

		//以下いろいろ書いていくこと．
		
    }, false);
    
    
   // 課題2-2用（課題3-2でも使える）
 	document.getElementById('kadai2-2').addEventListener('click',function(){
		let result = document.getElementById('result2-2');
		let ul = document.createElement('ul');
		
		//以下いろいろ書いていくこと．
		
    }, false);
    
 	// 課題2-3用（課題3-3でも使える）
 	document.getElementById('kadai2-3').addEventListener('click',function(){
        let result = document.getElementById('result2-3');
        let ul = document.createElement('ul');

		//以下いろいろ書いていくこと．

    },false);
}, false);

//　その他必要な（複数のイベントリスナーで使用する）関数などはこれ以降に書いていく．
		