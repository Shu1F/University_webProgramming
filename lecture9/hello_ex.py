# 課題6用
import random

# 課題1
# print("がんばるでサーバサイドプログラミング（python）")

# //課題2 JavaScript版 どんどんpythonに書き換えていこう．
# print("やったるでWebプログラミング")


# //課題3 JavaScript版
# x = 10
# y = 20
# print(x + y)


# //課題4 JavaScript版
# boo = 30
# boo -= 20
# boo += 5
# fuu = boo % 8
# print(boo * fuu)


# //課題5 JavaScript版
# RII = 3.4
# RII = 56
# data1 = [0, 1, 2]
# data2 = data1
# data1[0] = 5
# print(data2)


# //課題6 JavaScript版
# let rndm = Math.random();
# if (rndm <= 0.3) {
#     console.log("大吉");
# }
# else if (rndm <= 0.7) {
#     console.log("吉");
# }
# else if (rndm <= 0.95) {
#     console.log("凶");
# }
# else {
#     console.log("大凶");
# }
# console.log(rndm); //この時の値と判定したおみくじが合わないなら，なにか間違っている

# rndm = random.random()
# if rndm <= 0.3:
#     print("大吉")

# elif rndm <= 0.7:
#     print("吉")

# elif rndm <= 0.95:
#     print("凶")

# else:
#     print("大凶")

# print(rndm)


# //課題7
omikujis = []
for i in range(10):
    rndm = random.random()
    if rndm <= 0.3:
        omikujis.append("大吉")
    elif rndm <= 0.7:
        omikujis.append("吉")
    elif rndm <= 0.95:
        omikujis.append("凶")
    else:
        omikujis.append("大凶")

# //課題8 JavaScript版
# let point = 0;
# for (let omi of omikujis) {
#     switch (omi) {
#         case "大吉":
#             point += 3;
#             break;
#         case "吉":
#             point += 1;
#             break;
#         case "凶":
#             break;
#         case "大凶":
#             point -= 1;
#             break;
#     }
# }
# console.log(point);
point = 0
for omi in omikujis:
    if omi == "大吉":
        point += 3
    elif omi == "吉":
        point += 1
    elif omi == "凶":
        pass
    # 何もしない
    # https://note.nkmk.me/python-pass-usage/
    elif omi == "大凶":
        point -= 1
print(point)
