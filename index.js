//if文とは？
//「もし○○ならば●●を行う」の処理のこと
//ifの後ろに条件式を書き、それが「成り立つ」場合の処理を{ }の中に書きます。

const text = document.getElementById("text");

document.getElementById("btn").onclick = function () {
  let value = text.value;
  // document.getElementById("box__red").style.display = "none";
  if (value == "赤") {
    document.getElementById("box__red").style.display = "block";
  }

  if (value == "黄色") {
    document.getElementById("box__yellow").style.display = "block";
  }

  if (value == "青") {
    document.getElementById("box__blu").style.display = "block";
  }

  console.log(value);
};

const level = 12;
const a = 14;

// 条件式を「level > 10」とするif文を作ってください
if (level > 10) {
  console.log("レベルが10より大きいです");
}

if (a == 14) {
  console.log("同じです！");
}
