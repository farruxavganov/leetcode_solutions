function addBinary(a, b) {
	let l = a.length - 1;
	let r = b.length - 1;
	let res = "";
	let carry = 0;


	while(l >= 0 || r >= 0){
		let sum = carry;
		if(l >= 0){
			sum += +a[l--];
		}
		if(r >= 0){
			sum += +b[r--]
		}

		res = (sum % 2) + res;
		carry = Math.floor(sum / 2);
	}

	if(carry > 0){
		res = 1 + res;
	}

	return res;
}