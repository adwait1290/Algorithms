
var LinkedList = function(head){
	this.head = head;
	this.length = 0;
};

var Node = function(value){
	this.value = value;
	this.next = null;
};



LinkedList.prototype.add = function (data){
	var thisnode = new Node(data);
	var currentNode = this.head
	this.length++;
	
	if(!currentNode){
		this.head = thisnode;
		
		return thisnode;
		
	}else{
		while(currentNode.next)
			currentNode = currentNode.next;
		
		currentNode.next = thisnode;
		return thisnode;
	}
}

LinkedList.prototype.reverse = function(){
	var prev = null,
		curr = this.head,
		next = null;
	console.log('reversing');
	while(curr.next){
		next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	this.head = prev;
	return node;
}
// Create a function that accepts a ListNode pointer and returns a last value in the list.
LinkedList.prototype.back = function(){
	var prev = null,
		curr = this.head,
		next = null;
		while(curr.next){
			next = curr.next;
			prev = curr;
		}
		return prev;
}
//Create a standalone function that removes the last LIstNode in the list and returns a new list
LinkedList.prototype.removeBack = function(){
	var prev = null,
		curr = this.head,
		next = null;
		while(curr.next){
			next = curr.next;
			prev = curr;
			curr = curr.next
		}
		prev.next = null;
		return this;
}
var newList = new LinkedList();

for(var i = 0; i < 6;i++){
	newList.add(Math.floor(Math.random()*100));
}
for(var i = 0,currentNode = newList.head; i < 5 && newList.head ;i++){
	
	console.log(currentNode.value);
	if(!currentNode.next){
		break;
	}else{
		currentNode = currentNode.next;
	}
	
}
console.log(newList);
newList.back();
console.log(newList);