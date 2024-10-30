document.addEventListener("DOMContentLoaded",function(){
	document.getElementById("submit").addEventListener("click", function() {

		// 1つめ
		let name = ??? ;	// idがchar_nameであるテキストボックスの内容（プロパティはvalue）をnameに代入するように???の部分を埋める．資料35ページ参照．
		let names = ??? ;	// idがstatusのタグの下にぶら下がっているpタグの内容を得てnamesに代入．なおgetElementByXXメソッドは続けさまに呼べる．getElementByXXX(YYY).getElementsByZZZ(WWW)といった具合に．

		names.xxxx(m).xxxxXxxxxxx = "名前：" + name ;	 // xxxx, m, xxxxXxxxxxx を適切に埋める．今回namesで得られるpタグの数は1個なのでmは固定値でOK

		// 2つめ
		let type_name = ??? ;	// p要素を作るために???部分を埋める（以下同じ）
		let personality = ??? ; // 同上
		let flavor = = ??? ; // 同上
		let type_name_for_status = "";	// 3つめの課題で使うのであらかじめtype_name_for_statusを用意しておく．

    	let temp = ??? ;	// name属性がtypeの要素をゲットする．document.getElementsByName("type");
    	for (let i = 0, len = temp.length; i < len; i++) {	// name属性が複数ある可能性があるのでfor文で1個ずつチェックしていく．
            if (???) {
                type_name.xxxxXxxxxxx = "種族：" + temp[i].value;	// xxxxXxxxxxxを適切に埋める．
                type_name_for_status = ???;	// 3つめの課題で使うのであらかじめ用意しておく．
                break;
            }
        }
        
        temp = document.getElementsByName("personality")[0].options;	// 今回はname属性がpersonalityなのは1つだけなので0で決め打ち．
	    personality.xxxxXxxxxxx = "性格：";
	        for (let i = 0, len = temp.length; i < len; i++) {
	            if (???) {
	                personality.xxxxXxxxxxx += ??? ;
	            }
	        }

        flavor.xxxxXxxxxxx = "フレーバー：" + document.getElementsByName("flavor")[0].value;

        let status = document.getElementById('status');
        status.appendXxxxx(type_name);
        status.appendXxxxx(personality);
        status.appendXxxxx(flavor);

		// 3つめ
		// 考えてみて．
		
	}, false);
}, false);