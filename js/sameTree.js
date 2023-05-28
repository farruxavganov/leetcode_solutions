const sameTree = function (p,q){
	if(!p && !q)
		return false;
	if((!p || !q) || p.val != q.val)
		return false;
	
	return p.val == q.vall && sameTree(p.left, q.left) && sameTree(p.right, q.right);
}
