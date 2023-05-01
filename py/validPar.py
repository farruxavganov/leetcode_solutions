def isValid(s: str) -> bool:
	map = {
		")": "(",
		"}": "{",
		"]": "["
	}
	stack = []
	
	for char in s:
		if char in map:
			if stack and map[char] == stack[-1]:
				stack.pop()
			else:
				return False
		else:
			stack.append(char)
	return not stack
	
test = "{}{}"
test2 = "()"
test3 = "(({}))"
test4 = "(]"

print(isValid(test), "true")
print(isValid(test), "true")
print(isValid(test), "true")
print(isValid(test), "false")
