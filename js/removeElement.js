function removeElement(nums, val){
	let l = 0;
	for(let i = 0; i < nums.length; i++){
		if(nums[i] != v){
			nums[l] = nums[i];
			l++;
		}
	}
	return l;
}