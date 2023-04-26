def palindrom(x: int) -> int:
	if x < 0: return False
	
	div = 1
	while x >= 10 * div:
		div *= 10
		
	while x:
		right = x % 10
		left = x // div
		
		if right != left: return False
		
		x = (x % div) // 10
		div = div // 100
		
	return True

print(palindrom(121))
print(palindrom(0))
print(palindrom(122))
print(palindrom(10001))
print(palindrom(-121))
