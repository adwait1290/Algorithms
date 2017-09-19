function minmaxAvg(arr){
  var min = arr[0];
  var max = arr[0];
  var temp = 0;
  for(var i=0;i<arr.length;i++){
    if(min>arr[i]){
      min=arr[i];
    }
    if(max<arr[i]){
      max=arr[i];
    }
  }
    for(var j=0;j<arr.length;j++){
      temp+=arr[j];
    }
   var avg = temp/arr.length;
  
  obj = {
    "min":null,
    "max":null,
    "avg":null,
  }
  var x="min";
  var y="max";
  var z="avg";
  obj[x]=min;
  obj[y]=max;
  obj[z]=avg;
  console.log(obj);
}
var arr=[1,2,3,17,38,42,12,34];
minmaxAvg(arr);