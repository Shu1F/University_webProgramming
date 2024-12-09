#!/usr/bin/python3

import cgi
import cgitb
import os
import sys
import json

if __name__ == "__main__":
    if "REQUEST_METHOD" in os.environ:
        param = cgi.FieldStorage()  # Formからやってきたデータを受け取る

        # 課題2-3で作成,3-1でも使う
    name = param.getfirst("name", 0)
    message = param.getfirst("message", 0)

    if name != 0 and message != 0:

        # 課題3-1で作成
        # 送信用のリストsend_listを作成
        send_list = []

        # リストに辞書を追加
        # appendメソッドを使うと，htmlからの入力が，name = '田吾作’, message = ’耕すぞー’だったとしたら，
        # send_listは，[{‘name’:’田吾作’,’message’:’耕すぞー’}]となる．
        send_list.append({"name": name, "message": message})

        # 赤いきつねを追加する．nameに「きつね」を，messageに「赤！」を直接書き込む．
        # send_listは，[{‘name’:’田吾作’,’message’:’耕すぞー’}, {‘name’:’きつね’,’message’:’赤！’}]となる．
        send_list.append({"name": "きつね", "message": "赤！"})

        # 赤いきつねと同じように緑のたぬきを追加する．
        # send_listは，[{‘name’:’田吾作’,’message’:’耕すぞー’}, {‘name’:’きつね’,’message’:’赤！’}, {‘name’:’たぬき’,’message’:’緑！’}]となる
        send_list.append({"name": "たぬき", "message": "緑！"})

        print("Content-Type: application/json\n\n")

        print(
            json.dumps(
                # 返送するのは作成したリストsend_list．中身は [{‘name’:’田吾作’,’message’:’耕すぞー’}, {‘name’:’きつね’,’message’:’赤！’}, {‘name’:’たぬき’,’message’:’緑！’}]である．
                send_list
            )
        )
