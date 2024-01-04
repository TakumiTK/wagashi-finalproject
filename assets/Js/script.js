/*index.html */
window.addEventListener('load', function () {
   viewSlide('.slide img');
});

function viewSlide(className, slideNo = -1) {
   let imgArray = document.querySelectorAll(className);
   if (slideNo >= 0) {
      imgArray[slideNo].style.opacity = 0;
   }
   slideNo++;
   if (slideNo >= imgArray.length) {
      slideNo = 0;
   }
   imgArray[slideNo].style.opacity = 1;
   // 時間を固定したい場合、ここでミリ秒を指定する
   let msec = 4000; //4秒
   setTimeout(function () {
      viewSlide(className, slideNo);
   }, msec);
}

/*product-detail */

var field = document.getElementById("number-field");
var typeName = document.getElementById("type");

var setType = function(val) {
  typeName.innerText = typeof val;
}

field.addEventListener("input", function(e) {
  var value = e.target.value;
  if (value < 0) {
    e.target.value = 0; // 値が0未満の場合、値を0に設定します
    value = 0; // 値の変数を更新します
  }else if (value > 10) {
   e.target.value = 10; // 値が10を超える場合、値を10に設定します
   value = 10; // 値の変数を更新します
 }
  setType(value);
})

window.onload = function() {
  field.value = 1;// 1からスタート
  setType(field.value);
}

