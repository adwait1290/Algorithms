function zipMap(arr1,arr2){
  var newobj = {};
  for(var idx in arr1){
    newobj[arr1[idx]]=arr2[idx]
  }
  return newobj;
  
}
arr1 =[1,2,4,6];
arr2 =["as","a","cookie","Creme"];
zipMap(arr1,arr2);