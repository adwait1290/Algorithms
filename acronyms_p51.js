function Acromyns(str) {
  var temp = str.split(" ");
  console.log(temp);
  var newarr = [];
  for(x=0;x<temp.length;x++){
    newarr.push(temp[x].charAt(0));
  }
  console.log(newarr);
  var temp2 = newarr.join("");
  console.log(temp2.toUpperCase());
}
var str = " there's no free lunch - gotta pay yet way. ";
Acromyns(str);
