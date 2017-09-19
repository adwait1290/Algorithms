function revArr(arr) {
	for(var x = 0 , y = (arr.length-1) ; x < y ; x++ , y--){

			var temp=arr[x];
			arr[x]=arr[y];
			arr[y]=temp;
		
		
}

console.log(arr);
}


revArr([1,4,2,3,5,2,1]);