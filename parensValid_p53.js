function parensValid(str){
  var count = 0;
  var newarr = str.split("");
  for(var x=0;x<newarr.length;x++){
    if(newarr[x]=='('){
      count++;
    }
    if(newarr[x] ==')'){
      count++;
    }// setup condition for )()( exception and inc/dec for open/close
  }
  if (count % 2 === 0){
    return "True";
 }
  if (count % 2 !== 0){
    return "False";
  }
  console.log(count)
  console.log(newarr)
}
str = "y(3(p)p(3)r)s"
parensValid(str);



function bracesValid(str){
  var count1 = 0;
  var count2 = 0;
  var count3 = 0;
  var newarr = str.split("");
  arrpar = [];
  arrbox = [];
  arrbra = [];
  for(var x=0;x<newarr.length;x++){
    if(newarr[x]=='('){
      count1++;
      console.log(x);
      arrpar.push(x);
    }
    if(newarr[x] ==')'){
      count1++;
      console.log(x);
      arrpar.push(x);
    }
    if(newarr[x]=='{'){
      count2++;
      console.log(x);
      arrbox.push(x);
    }
    if(newarr[x] =='}'){
      count2++;
      console.log(x);
      arrbox.push(x);
    }
    if(newarr[x]=='['){
      count3++;
      console.log(x);
      arrbra.push(x);
    }
    if(newarr[x] ==']'){
      count3++;
      console.log(x);
      arrbra.push(x);
    }
  }
//   if (count1 % 2 === 0){
//     return "True";
// }
//   if (count1 % 2 !== 0){
//     return "False";
//   }
  console.log(count1);
  console.log(count2);
  console.log(count3);
  console.log(newarr);
  console.log(arrpar);
  console.log(arrbox);
  console.log(arrbra);
}
str = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"
bracesValid(str);