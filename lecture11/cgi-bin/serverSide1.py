#!/usr/bin/python3

import cgi
import cgitb
import os
import sys
import json

if __name__ == "__main__":
    if 'REQUEST_METHOD' in os.environ:
        param = cgi.FieldStorage()  # Formからやってきたデータを受け取る
        x = int(param.getfirst("x", 0))
        y = int(param.getfirst("y", 0))

        print('Content-Type: application/json\n\n') # "\n\n"である点に注意．1つでも動くには動くのだが，お作法で．
        print(
            json.dumps({
                "z": f"{x+y}", #f文字列（フォーマット文字列）．文字列内の波括弧 {} 内に変数や式を記述できる．書式指定子を利用すると数値の表示形式なども指定できる．e.g., f"{x+y:.2f}"
                "debag": "<br/>serverSide1.pyの11行目をコメントアウトして，ターミナルにエラーが表示されていることを確認せよ．"
            })
        )
        print("これはターミナルに出力される", file=sys.stderr)
