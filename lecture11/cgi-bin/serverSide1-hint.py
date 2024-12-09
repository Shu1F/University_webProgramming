#!/usr/bin/python3

import cgi
import cgitb
import os
import sys
import json

if __name__ == "__main__":
    if 'REQUEST_METHOD' in os.environ:
        param = cgi.FieldStorage()  # Formからやってきたデータを受け取る
        x = int(param.getfirst("x", 0))					##課題2のヒント： <- xをnameに．
        y = int(param.getfirst("y", 0))					##課題2のヒント： <- yをmessageに．

		##この辺に名前nameとメッセージmassageをターミナルで表示させる．
		print("名前:"     , file=        );				# 空欄に適切なコードを書くこと．
		print("メッセージ:"     , file=        );		# 空欄に適切なコードを書くこと．

		print('Content-Type: application/json\n\n') # "\n\n"である点に注意．1つでも動くには動くのだが，お作法で．
		print(				##課題2のヒント：<- json.dumps({})の中にnameとmassageを連想配列形式で書く．だけど課題2では使っていないのでこのprint文は消してもよい．が課題3ではまた使う．
			json.dumps({													
				"z": f"{x+y}",													
	            "debag": "<br/>serverSide1.pyの11行目をコメントアウトして，ターミナルにエラーが表示されていることを確認せよ．"
			})
		)
	    print("これはターミナルに出力される", file=sys.stderr)
