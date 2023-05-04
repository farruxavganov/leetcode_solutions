function Node(){
	this.val = null;
	this.next = null;
}

function margeTwoSortedList(list1, list2){
	let node = new Node()
	let tail = node;
	
	while(list1 && list2){
		if(list1.val < list2.val){
			tail.next = list1;
			list1 = list1.next;
		}else{
			tail.next = list2;
			list2 = list2.next;
		}
		
		tail = tail.next;
	}
	
	if(list1){
		tail.next = list1;
	}else if(list2){
		tail.next = tail2;
	}
	
	return node.next;
}
