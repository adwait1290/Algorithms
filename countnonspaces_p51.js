function countNonSpace(str) {
  var temp = str.split("");
  console.log(temp);
  var temp2 = str.split(" ");
  console.log(temp2);
  var temp3 = temp2.join("");
  console.log(temp3);
  var temp4 = temp3.length;
  console.log(temp4);
  
}
var str = "Honey pie, you are driving me crazy";
countNonSpace(str);