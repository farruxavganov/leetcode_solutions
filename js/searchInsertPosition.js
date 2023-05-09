function searchInsertPositon(arr, target){
	let low = 0;
	let high = arr.length - 1;
	while(low <= high){
		let mid = Math.floor((low + high) / 2);

		if(target == arr[mid]){
			return  mid;
		}

		if(target > arr[mid]){
			low = mid + 1;
		}else{
			high = mid - 1;
		}
	}

	return low;
}

console.log(searchInsertPositon([1,2,4,5],2))