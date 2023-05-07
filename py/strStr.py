def strStr(heystack: str, needle: str) -> str:
	if(heystack == ''):
		return ''

	for i in range(len(heystack) + 1 - len(needle)):
		for j in len(needle):
			if heystack[i + j] != needle[j]:
				break
			if j == len(needle) - 1:
				return str(i)
	return str(-1)