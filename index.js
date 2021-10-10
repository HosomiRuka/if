//if文とは？
//「もし○○ならば●●を行う」の処理のこと
//ifの後ろに条件式を書き、それが「成り立つ」場合の処理を{ }の中に書きます。
//if文の練習じゃなくなっちゃた
let text = document.getElementById("text");
let textBox = document.getElementById("textBox");
let color = document.getElementById("color");
let area = document.createElement("div");
const btn = document.getElementById("btn");
const deleteBtn = document.getElementById("deleteBtn");
const box = document.getElementById("box");

btn.onclick = function () {
  let value = text.value;
  let colorValue = color.value;

  area.id = "menueBox";
  area.innerHTML = "追加された要素です。";

  var parent = document.getElementById("menueText");
  parent.appendChild(area);
  let menueBox = document.getElementById("menueBox");

  box.style.backgroundColor = colorValue;
  menueBox.style.backgroundColor = colorValue;

  box.style.display = "block";
  textBox.innerHTML = text.value;

  // console.log(value);
  // console.log(colorValue);
  // console.log(textBox.innerHTML);
  // console.log(area);
};

deleteBtn.onclick = function () {
  box.style.display = "none";
};
