function getDigits(str){
  var temp = str.split("");
  console.log(temp);
  var arrnew = [];
  for(var x=0;x<temp.length;x++){
    if(temp[x]<10){
      arrnew.push(temp[x]);
    }
    
  }
  console.log(arrnew);
  var temp2 = arrnew.join("");
  console.log(temp2);
  
}
var str = "0s1a3y5w7h9a2t4?6!8?0";
getDigits(str);