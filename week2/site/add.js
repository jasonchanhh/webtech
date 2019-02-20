"use strict";

var list = [3,9,7,5,10,8];

function add(n) {
  var total = 0;
  for (var i in list) total = total + list[i];
  return total;
}

console.log(add(list));
