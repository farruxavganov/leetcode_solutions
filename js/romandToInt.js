function romandToInt(s) {
	let romand = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	}
	
	let res = 0;
	
	for(let i = 0; i < s.length; i++){
		if(i + 1 < s.length && romand[s[i]] < romand[s[i+1]]){
			res -= romand[s[i]];
		}else{
			res += romand[s[i]];
		}
	}
	
	return res;
}

console.log(romandToInt("III"))
console.log(romandToInt("IV"))
