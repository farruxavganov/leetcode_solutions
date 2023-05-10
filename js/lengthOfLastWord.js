function lengthOfLastWord(s){
	let len = s.length - 1;
	let count = 0;

	while(s[len] == " "){
		len--;
	}
	while(s[len] !== " " && len >= 0){
		count++;
		len--;
	}

	return count;
}