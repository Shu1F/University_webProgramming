# 課題1
# s = "にわにはにわにわとりがいる"

# // “と”は先頭から何文字目にあるか？
# console.log(s.indexOf('と'));
# print(s.find("と"))
# ８番目

# // この文字列の長さは？
# console.log(s.length);
# print(len(s))
# 13

# // “にわ”は何回出現したか？
# console.log(s.split('にわ').length - 1);
# print(s.count("にわ"))
# 3回

# // “へ”は先頭から何文字目にあるか？
# console.log(s.indexOf('へ')); //-1が出力される = 該当する文字はない
# print(s.find("へ"))
# -1（みつからない）

# // “わ”で文字列を分割せよ
# console.log(s.split('わ'));
# print(s.split("わ"))
# ['に', 'にはに', 'に', 'とりがいる']

# // 先頭3+1文字目から後方4文字目までを得よ
# console.log(s.slice(3, -4));
# print(s[3:-4])
# はにわにわと

# // “かもしれない”を後方に追加せよ
# console.log(s.concat("かもしれない"));
# print(s + "かもしれない")
# にわにはにわにわとりがいるかもしれない

# // 7文字目の文字を得よ
# console.log(s[7]);
# print(s[6])
# に

# 課題2
# // 以下の変数に対して次の処理をせよ
a1 = ["Sato", "Takae", "Osada", "Hio", "Saitoh", "Sato"]
a2 = ["Yabuki", "Aoki", "Moriyama", "Yamada"]
# // a1の長さを得よ
# console.log(a1.length);
# print(len(a1))
# 6

# // a1にa2を連結せよ
# console.log(a1.concat(a2));
# extendを使おうとしたら"None"が返されました
# print(a1 + a2)
# [
#     "Sato",
#     "Takae",
#     "Osada",
#     "Hio",
#     "Saitoh",
#     "Sato",
#     "Yabuki",
#     "Aoki",
#     "Moriyama",
#     "Yamada",
# ]

# // a1を'-'で連結して文字列にせよ
# console.log(a1.join('-'));
# print("-".join(a1))
# Sato-Takae-Osada-Hio-Saitoh-Sato

# // a1の2要素目から4要素目までを得よ
# console.log(a1.slice(2, 4));
# print(a1[1:4])
# ['Takae', 'Osada', 'Hio']

# // a1の末尾にa2の2番目の要素を追加せよ
# a1.push(a2[2]);
# console.log(a1);
# a3 = a2[1]
# a1.extend([a3])
# print(a1)
# ["Sato", "Takae", "Osada", "Hio", "Saitoh", "Sato", "Aoki"]

# // a1を降順に並べよ
# a1.sort().reverse();
# console.log(a1);
# a1.sort(reverse=True)
# ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh', 'Sato', 'Aoki']

# 課題3
# // 右の表のkeyとvalueを連想配列として，変数songsに格納せよ
# let m = new Map();
# m.set('dog', 'わんわん');
# m.set('cat', 'にゃー');
# m.set('mouse', 'ちゅー');
# // songsにduckのkeyが存在するか確認し，存在すれば値を取得せよ，存在しなければ，duckの値として”がーがー”を格納せよ．
# if (m.has('duck')) {
#     console.log(m.get('duck'));
# }
# else {
#     m.set('duck', 'がーがー');
# }

songs = {"dog":"わんわん", "cat":"にゃー", "mouse":"ちゅー"}
# print(songs)

# // songsよりmouseのkeyを削除せよ
# m.delete('mouse');
del songs.keys()
print (songs)

# // songsの要素数を得よ
# console.log(m.size);
# // songsのすべての値を取得し，結合して１つの文字列にせよ
# let temp = '';
# for (let v of m.values()) {
#     temp += v;
# }
# console.log(temp);

# 課題4以降は別ファイル（function_ex.py）へ


