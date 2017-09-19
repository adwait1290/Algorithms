function minmaxAvg(arr){
  var min = arr[0];
  var max = arr[0];
  var temp = 0;
  for(var i=0;i<arr.length;i++){
    if(min>arr[i]){
      min=arr[i];
    }
    else if(max<arr[i]){
      max=arr[i];
    }
    temp+=arr[i];
    }
   var avg = temp/arr.length;
  
  obj = {
    "min":min,
    "max":max,
    "avg":avg,
  }
  console.log(obj);
}
var arr=[1,2,3,17,38,42,12,34];
minmaxAvg(arr);