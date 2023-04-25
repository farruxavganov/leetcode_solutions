// TC = O(n);
// SP = O(n);

function twoSum(nums, target) {
	const map = {};
	for(let i = 0; i < nums.length; i++){
		let value = nums[i];
		let complementPair = target - value;
		if(map[complementPair] !== undefined){
			return [map[complementPair], i];
		}else{
			map[value] = i;
		}
	}
}
