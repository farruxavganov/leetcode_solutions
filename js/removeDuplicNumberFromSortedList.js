function removeDuplNumbersFromSortetList(nums){
	let l = 1;
	for(let i = 1; i < nums.length; i++){
		if(nums[i] != nums[i-1){
			nums[l] = nums[i];
			l++;
		}
	}
	return l
}


