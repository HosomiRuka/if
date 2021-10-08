//if文とは？
//「もし○○ならば●●を行う」の処理のこと
//ifの後ろに条件式を書き、それが「成り立つ」場合の処理を{ }の中に書きます。

let text = document.getElementById("text");
let textBox = document.getElementById("textBox");
let color = document.getElementById("color");
const btn = document.getElementById("btn");
const box = document.getElementById("box");

btn.onclick = function () {
  // console.log(btn);
  let value = text.value;
  let colorValue = color.value;

  console.log(value);
  console.log(colorValue);
  console.log(textBox.innerHTML);

  // console.log(color);
  box.style.backgroundColor = colorValue;
  textBox.innerHTML = text.value;
};
