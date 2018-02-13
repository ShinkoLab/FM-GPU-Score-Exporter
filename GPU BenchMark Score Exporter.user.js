// ==UserScript==
// @name         GPU BenchMark Score Exporter
// @namespace    Shinko Lab.
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://www.futuremark.com/hardware/gpu*
// @match        https://www.futuremark.com/hardware/gpu*
// @grant        none
// ==/UserScript==

var product = document.querySelectorAll("[class=productnameBold]");
var score = document.querySelectorAll("[class=barHolder]");
var plength = product.length;
var slength = score.length;

for (var i = 0; i < plength; i++) {
  var p = product[i].innerText;
  var s = score[i].innerText;
  console.log(p);
  console.log(s);
}

var fetch = null;
if (plength == slength) {
    fetch = plength;
    console.log("取得に成功しました。\n取得数は " + fetch + " 件です。");
} else if (plength != slength) {
    fetch = 0;
    console.log("取得に失敗しました。");
} else {
    console.log("エラーが発生しました。");
}

(function() {
    'use strict';

    // Your code here...

})();
