function removeSortedDups(arr){
  console.log(arr);
  for(var i=j=0;j<arr.length;i++){
    arr[i]=arr[j];
    while(arr[i] == arr[j]){
      j++;
    }
    
  }
  console.log(arr);
  arr.length=i;
  console.log(i);
  console.log(arr);
}
arr=[1,3,7,7,8,8,9]
removeSortedDups(arr)