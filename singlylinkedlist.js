function Node(value) {
    this.value = value;
    this.next = null;
}
 
function SinglyList() {
    this._length = 0;
    this.head = null;
    console.log("new list created");
}
 
SinglyList.prototype.add = function(value) {
    var node = new Node(value),
    	pointer = 1,
        currentNode = this.head;
 
    // 1st use-case: an empty list
    if (currentNode === null) {
        this.head = node;
        this._length++;
        console.log("first node added with value of " + node.value)
        return node;
    }
 	
    // 2nd use-case: a non-empty list
    while (currentNode.next) {
        currentNode = currentNode.next;
        pointer++;
    }
 	console.log("Added Node with value " + node.value + " at index " + pointer);
    currentNode.next = node;
 
    this._length++;
     
    return node;
};
 
SinglyList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};
 
    // 1st use-case: an invalid position
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: a valid position
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }
 
    return currentNode;
};
 
SinglyList.prototype.remove = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 0,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;
 
    // 1st use-case: an invalid position
    if (position < 0 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: the first node is removed
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;
         
        return deletedNode;
    }
 
    // 3rd use-case: any other node is removed
    while (count < position) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;e here
    }
 
    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;
 
    return deletedNode;
};

SinglyList.prototype.back = function(){
	var currentNode = this.head,
	length = this._length;

	if(!currentNode){
		console.log("List is empty.");
		return null;
	}
	else if (currentNode.next === null){
		console.log(currentNode);
		return currentNode;
	}
	while(currentNode.next !== null){
		currentNode = currentNode.next;
	}
	console.log("The back is: " + currentNode.value);
	return currentNode;
};
SinglyList.prototype.removeBack = function(){
	var currentNode = this.head,
		prev = null,
		length = this._length;

	if(!currentNode){
		return null;
	}
	else if (currentNode.next === null){
		return currentNode;
	}
	while(currentNode.next !== null){
		prev = currentNode;
		currentNode = currentNode.next;

	}
		prev.next = null;
		deletedNode = currentNode;
		currentNode = null;
		return deletedNode;
}
SinglyList.prototype.print = function(){
	var runner = this.head;
	if(runner === null){
		console.log("This list is empty.");
	}
	while(runner!== null){
		console.log(runner.value);
		runner = runner.next;
	}

}
SinglyList.prototype.printAsArr = function(){
	var runner = this.head,
		arr = [];
	if(runner === null){
		console.log("This list is empty.");
	}
	while(runner){
		arr.push(runner.value);
		runner = runner.next;
	}
	console.log(arr);
}
SinglyList.prototype.addBack = function(value){
	var runner = this.head,
		prev = null,
		node = new Node(value),
		length = this._length;
	if(!runner){
		console.log("your list is empty");
		return null;
	}
	else if (runner.next === null){
		runner.next = node;
	}
	while(runner.next !== null){
		runner = runner.next;
	}
	runner.next = node;
	console.log("Node inserted at index " + length + " with a value of " + node.value);
}
// prevMin and after are vars used to store nodes if patch is necessary
SinglyList.prototype.moveMinToFront = function(){
	var runner = this.head,
		oldHead = this.head,
		min = this.head.value,
		prev = null,
		prevMin = null,
		after = null,
		length = this._length;
	if(!runner){
		console.log("Your list is empty");
		return null;
	}
	if (runner.next === null){
		console.log("List only has one value.");
		return this;
	}
	while(runner.next !== null){


		if(runner.next.value < min){
			min = runner.next;
			prevMin = runner;
			console.log(min);
			//check if you need to patch 
			if(runner.next.next !== null){
				after = runner.next.next;
			}
		}
		prev = runner;
		runner = runner.next;

	}
	this.head = min;
	min.next = oldHead;
	prevMin.next = after;

}
SinglyList.prototype.moveMaxToBack = function() {
	var runner = this.head,
		max = this.head.value,
		length = this._length,
		tail = null,
		prevMax = null,
		postMax = null;
	if(!runner){
		console.log("Your list is empty");
		return null;
	}
	if (runner.next === null){
		console.log("List only has one value.");
		return this;
	}
	while(runner.next !== null){
		if(runner.next.value > max){
			max = runner.next;
			prevMax = runner;
			console.log(max);
			if(runner.next.next !== null){
				postMax = runner.next.next;
			}
		}
		runner = runner.next;
	}
	prevMax.next = postMax;
	runner.next = max;
	max.next = null;
}
SinglyList.prototype.removeNegatives = function() {
	var runner = this.head,
		prev = null,
		post = null,
		length = this._length;
	if(!runner){
		console.log("Your list is empty");
		return null;
	}
	if (runner.next === null){
		console.log("List only has one value.");
		return this;
	}
	while(runner.next !== null){
		if(runner.value < 0){
			if(!prev){
				this.head = runner.next;
			} else{
				prev.next = runner.next;
			}
		}
		prev = runner;
		runner = runner.next;

	}
}
SinglyList.prototype.secondLargestValue = function(){
	var runner = this.head,
		max = this.head,
		secondMax = null,
		length = this._length;
	if(!runner){
		console.log("Your list is empty");
		return null;
	}
	if (runner.next === null){
		console.log("List only has one value.");
		return this;
	}
	while(runner.next !== null){
		if(runner.next.value > max.value){
			secondMax = max;
			max = runner.next;

		}
		if(runner.next.value > runner.value && runner.value < max.value){
			nextMax = runner;
		}
		runner = runner.next

	}
	console.log("your max is: " + max.value);
	console.log("your second max is: " + secondMax.value);
}
SinglyList.prototype.zipSlists = function(SinglyList) {
	var temp = this.head,
		set = false,
		runner = this.head,
		current = SinglyList.head,
		runner2 = SinglyList.head;
	if(!runner){
		console.log("Your list is empty");
		return null;
	}
	if (runner.next === null){
		console.log("List only has one value.");
		return this;
	}
	if(!runner2){
		console.log("Your list is empty");
		return null;
	}
	if (runner2.next === null){
		console.log("List only has one value.");
		return this;
	}
	while(temp.next !== null){
		if(current.next !== null){
			temp2 = current.next;
			current.next = temp.next;
			temp.next = current;
			this.printAsArr();
		} 
		current = temp2;
		temp = temp.next.next;

		console.log("current = " +current.value);
		console.log("temp=" + temp.value);
	}
	temp.next = current;
}
SinglyList.prototype.deDupeList = function() {
	var pointer = this.head,
		previous = null,
		set = [];
		while(pointer !== null){
			if(set.includes(pointer.value)){
				previous.next = pointer.next;
			} else {
				set.push(pointer.value);
				previous = pointer;
			}
			pointer = pointer.next;
		}


}
SinglyList.prototype.reverse = function(){
	var currNode = this.head,
	prevNode = null,
	nextNode = null,
	head = null,
	length = this._length;

	while(currNode !== null){
		nextNode = currNode.next;
		currNode.next = prevNode;
		prevNode = currNode;
		currNode = nextNode;

	}
	this.head = prevNode;

	return this;
}
SinglyList.prototype.isPalindrome= function(SinglyList){
	var rev = SinglyList.reverse(),
	mainHead = this.head,
	boolean = null,
	revHead = rev.head;
	while(mainHead != null && revHead !== null){
		if(mainHead.value != revHead.value){
			boolean = false;
		}
		mainHead = mainHead.next;
		revHead = revHead.next;
	}
	if(boolean === false){
		return false;
	} else {
		return true;
	}

}
SinglyList.prototype.kthLastNode = function(k){
	var p1 = this.head,
		p2 = this.head;
	for(var i=0; i<k; i++){
		if(!p2){
			return null;
		} else {
			p2 = p2.next;
		}
	}
		while(p2 !== null){
			p1 = p1.next;
			p2 = p2.next;
		}

	
	return p1

}
SinglyList.prototype.shiftRight = function(i){
	var pointer = this.head,
		oldhead = this.head,
		counter = 0,
		prev = null,
		end = null;
	if(i < 0){
		while(pointer.next !== null){
			counter++;
			pointer = pointer.next;

		}
	 	
		var temp = counter + i + 1;
		console.log(counter);
		console.log("temp is " + temp);

		//reset counter and pointer
		counter = 0;
		pointer = oldhead;
		while(counter !== temp && pointer.next !== null){
			counter++;
			prev = pointer;
			pointer = pointer.next;
			console.log("counter at " + counter);
		}
		prev.next = null;
		var temp2 = pointer;
		while(pointer.next !== null){
			pointer = pointer.next;
		}
		pointer.next = oldhead;
		this.head = temp2;


	}
	if(i > 0){
		while(pointer !== null && counter !== i){
			counter++;
			
			console.log("counter is at " + counter);
			console.log(pointer.value);
			prev = pointer;
			pointer = pointer.next;
		}
		prev.next = null;
		console.log("Check" + pointer.value);
		var temp = pointer;
		while(pointer.next !== null){
			pointer = pointer.next;
			console.log("pointer is " + pointer.value);
		}
		pointer.next = oldhead;
		this.head = temp;
		console.log(this.head.value);
	}
}
SinglyList.prototype.detectLoop = function(){
	var slow = this.head,
		pointer = null,
		fast = this.head;
	while(fast !== null && fast.next !== null){
		slow = slow.next;
		fast = fast.next.next;
		if(slow == fast){
			console.log("BREAK");
			break;
			
		}
	}
	if(fast == null || fast.next == null){
		console.log("no loop");
			return null;
	}
	
	slow = this.head;
	while(slow != fast){
		slow = slow.next;
		fast = fast.next;

	}
	console.log("LOOP DETECTED! " + fast.value);
	return fast;

	
}
var sl2 = new SinglyList();
sl2.add(12);
sl2.add(13);
sl2.add(14);
sl2.add(15);
sl2.add(16);
sl2.add(17);

// var sl = new SinglyList();
// sl.add(222);
// sl.add(3);
// sl.add(5);
// sl.add(10);
// sl.printAsArr();
// console.log(sl._length);
// sl.back();
// sl.printAsArr();
// sl.removeBack();
// sl.printAsArr();
// sl.add(5);
// sl.add(-16);
// sl.add(22);
// sl.add(1);
// sl.printAsArr();
// sl.addBack(-69);
// sl.printAsArr();
// sl.moveMinToFront();
// sl.printAsArr();
// sl.moveMaxToBack();
// sl.printAsArr();
// sl.removeNegatives();
// sl.printAsArr();
// sl.secondLargestValue();

// sl.printAsArr();
// sl2.printAsArr();
// sl.zipSlists(sl2);
// sl.printAsArr();

// sl.add(22);
// sl.deDupeList();
// sl.printAsArr();
// sl.reverse();
// sl.printAsArr();
var sl3 = new SinglyList();
var sl4 = new SinglyList();
// sl4.add(12);
// sl4.add(13);
// sl4.add(14);
// sl4.add(15);
// sl4.add(16);
// sl4.add(14);
sl4.add(14);
sl4.head.next = new Node(15);
sl4.head.next.next = new Node(16);
sl4.head.next.next.next = new Node(17);
sl4.head.next.next.next.next = sl4.head;

sl3.add(17);
sl3.add(16);
sl3.add(13);
sl3.add(14);
sl3.add(15);
sl3.add(13);
sl3.add(14);
sl3.add(15);


sl3.printAsArr();
// sl3.isPalindrome(sl2);

// sl4.printAsArr();
// sl4.printAsArr();
// sl4.kthLastNode(3);
// console.log("****************");
// sl4.printAsArr();
// console.log("****************");
// sl4.shiftRight(4);
// console.log("****************");
// sl4.printAsArr();
// sl3.printAsArr();
// sl3.shiftRight(-2);
console.log("end");
sl2.printAsArr();
sl2.detectLoop();
sl4.printAsArr();
sl4.detectLoop();