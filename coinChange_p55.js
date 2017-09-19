function coinChange(val){
  var q=0;
  var d=0;
  var n=0;
  var p=0;
  while(val>=25){
    val=val-25;
    q++;
  }
  while(val>=10){
    val=val-10;
    d++;
  }
  while(val>=5){
    val=val-5;
    n++;
  }
  while(val>=1){
    val=val-1;
    p++;
  }
  var obj = {
    "quarters": null,
    "dimes" : null,
    "nickels" : null,
    "pennies" : null
  }
  var x="quarters";
  var y="dimes";
  var z="nickels";
  var a="pennies";
  obj[x]=q;
  obj[y]=d;
  obj[z]=n;
  obj[a]=p;
    
console.log(obj)
}
coinChange(99);