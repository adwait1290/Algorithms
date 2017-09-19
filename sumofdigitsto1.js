function sumToOne(ent) {
  var sum=0;
  var length=Math.floor((Math.log(10))+1);
  console.log(length);
  var arr= [];
  for (var x=length-1;x>=0;x--){
  var mul = Math.pow(10,x);
  console.log(mul);
  arr[x]=Math.floor((ent/mul)%10);
  console.log(arr[x]);
  }
  
  // for (var x=0;x<length;x++) {
  //   var q = (ent/mul)%10;
  //   console.log(q);
  //   var p =
  //   var z = Math.floor((ent/mul)% 10);
  //   arr[x]= z;
    
  // }
  console.log(arr);
  for (var y=0;y<arr.length;y++) {
    sum += arr[y];

  
  if (sum == 1) {
    console.log(sum);
  }
  else {
    console.log(arr[arr.length]);
  }
}
}
sumToOne(928);