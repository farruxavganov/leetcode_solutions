def longestCommonPrefix(strs: list[str]) -> str:
	prefix = ""
	
	for i in range(len(strs[0])):
		for s in strs:
			if i == len(s) or s[i] != strs[0][i]:
				return prefix
		prefix += strs[0][i]
		
	return prefix

print(longestCommonPrefix(["flowers", "flowe", "flow"]))
print(longestCommonPrefix(["flowers", "flow", "ll"]))
