# 課題4
# function getOmikujiTest(rndm) {
#     if (rndm <= 0.3) {
#         return "大吉";
#     }
#     else if (rndm <= 0.7) {
#         return "吉";
#     }
#     else if (rndm <= 0.95) {
#         return "凶";
#     }
#     else {
#         return "大凶";
#     }
# }

import random


# def getOmikujiTest(rndm):
#     if rndm <= 0.3:
#         return "大吉"
#     elif rndm <= 0.7:
#         return "吉"
#     elif rndm <= 0.95:
#         return "凶"
#     else:
#         return "大凶"


# rndm = random.random()
# result = getOmikujiTest(rndm)
# print(result)


# function getOmikuji() {
#     //すごい手抜き実装
#     return getOmikujiTest(Math.random());
# }

# def getOmikujiTest(rndm):
#     if rndm <= 0.3:
#         return "大吉"
#     elif rndm <= 0.7:
#         return "吉"
#     elif rndm <= 0.95:
#         return "凶"
#     else:
#         return "大凶"

# rndm = random.random()
# def getOmikuji():
#     return getOmikujiTest(rndm)


# print(getOmikuji())


# 課題5
# let pikapika = function (...nobinobi) {
#     let biyoon = "";
#     for (let i = 0; i < nobinobi.length; i++) {
#         biyoon += "ー";
#     }
#     return "ぴ" + biyoon + "かちゅう";
# }


def pikapika(*nobinobi):
    biyoon = ""
    for _ in range(len(nobinobi)):
        # 変数不要nobinobiの要素数だけ繰り返す
        biyoon += "ー"
    return "ぴ" + biyoon + "かちゅう"
