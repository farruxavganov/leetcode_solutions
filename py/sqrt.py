def sqrt(x: int) -> int:
	l, r = 0, x - 1
	while(l <= r):
		mid = (l + r) // 2

		if mid * mid == x:
			return mid
		if mid * mid > x:
			r = mid - 1
			continue
		l = mid + 1
	return l - 1
