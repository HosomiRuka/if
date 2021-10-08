//if文とは？
//「もし○○ならば●●を行う」の処理のこと
//ifの後ろに条件式を書き、それが「成り立つ」場合の処理を{ }の中に書きます。

let value = document.getElementById("text").value;
console.log(value);

const btn = document.getElementById("btn");

btn.onclick = function () {
  console.log(btn);
};
const colors = [
  { name: "赤", colorCode: "red" },
  { name: "青", colorCode: "bule" },
  { name: "緑", colorCode: "green" },
];

const color = colors.find((value) => {
  return value.name === "赤";
});

console.log(color);
