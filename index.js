//if文とは？
//「もし○○ならば●●を行う」の処理のこと
//ifの後ろに条件式を書き、それが「成り立つ」場合の処理を{ }の中に書きます。
//if文の練習じゃなくなっちゃた
//createElement = htmlの要素を生成するメソッド

let color = document.getElementById("color"); //#colorを取得してきて変数colorに代入しています
let text = document.getElementById("text"); //#textを取得してきて変数textに代入しています
let textBox = document.getElementById("textBox"); //#textBoxを取得してきて変数testBoxに代入しています
let box = document.getElementById("box"); //#boxを取得してきて変数boxに代入しています
let parent = document.getElementById("menueText"); //#menueTextを取得してきて変数parentに代入しています
let area = document.createElement("h2"); //createElement()でjs内でh1を生成する動作を、変数areaに代入しています
const btn = document.getElementById("btn"); //#btnを取得してきて変数btnに代入しています
const deleteBtn = document.getElementById("deleteBtn"); //#deleteBtnを取得してきて変数deleteBtnに代入しています、delete単体は予約後なので使え無かったです。

//btnが押された時の動作
btn.onclick = function () {
  let textValue = text.value; //変数valueに#textのvalue値を代入しています
  let colorValeu = color.value; //変数colorValueに#colorのvalue値を代入しています

  area.innerHTML = "createElementとappendChildで生成されたh1です";
  parent.appendChild(area);

  box.style.backgroundColor = colorValeu;
  box.style.display = "block";
  textBox.innerHTML = textValue;

  // console.log(value);
  // console.log(colorValue);
  // console.log(textBox.innerHTML);
  // console.log(area);
};

deleteBtn.onclick = function () {
  box.style.display = "none";
};
