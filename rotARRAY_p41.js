function arrRotate(arr,shiftBy) {
	for(var j=0;j<shiftBy;j++){
		var temp=arr.pop();
  
		for(var i=arr.length;i>0;i++){
			arr[i]=arr[i-1];
		}
		arr[0]=temp;
	}
}