...function removeBlank(str){
var newarr = str.split(" ");
console.log(newarr);

var temp = newarr.join("");
console.log(temp);
}
// var temp2 = str.join("");
// console.log(temp2);
// }
var str = " Pl    ayTha   tF   u  nkyM  usi      c   ";
removeBlank(str);