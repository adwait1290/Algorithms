function Node(value){
	this.value = value;
	this.left = null;
	this.right = null;
}
function BinarySearchTree(){
	this.root = null;
}
BinarySearchTree.prototype.print = function() {
  if(!this.root) {
    return console.log('No root node found');
  }
  var newline = new Node('|');
  var queue = [this.root, newline];
  var string = '';
  while(queue.length) {
    var node = queue.shift();
    string += node.value.toString() + ' ';
    if(node === newline && queue.length) {
      queue.push(newline);
    }
    if(node.left) {
      queue.push(node.left);
    }
    if(node.right) {
      queue.push(node.right);
    }
  }
  console.log(string.slice(0, -2).trim());
};
BinarySearchTree.prototype.printByLevel = function() {
  if(!this.root) {
    return console.log('No root node found');
  }
  var newline = new Node('\n');
  var queue = [this.root, newline];
  var string = '';
  while(queue.length) {
    var node = queue.shift();
    string += node.value.toString() + (node.value !== '\n' ? ' ' : '');
    if(node === newline && queue.length) {
      queue.push(newline);
    }
    if(node.left) {
      queue.push(node.left);
    }
    if(node.right) {
      queue.push(node.right);
    }
  }
  console.log(string.trim());
};
BinarySearchTree.prototype.addNode = function(value){
	var newNode = new Node(value);

	if(this.root == null){

		this.root = newNode;

	} else {

		var focusNode = this.root;
		var parent = null;

		while(true){

			parent = focusNode;

			if(value < focusNode.value){

				focusNode = focusNode.left;

				if(focusNode == null){

					parent.left = newNode;
					return;

				}
			} else {

				focusNode = focusNode.right;

				if(focusNode == null){

					parent.right = newNode;
					return;

				}
			}
		}
	}
};
BinarySearchTree.prototype.maxNode = function(){
	var pointer = this.root;
	while (pointer.right.value !== null){
		pointer = pointer.right;
	}
	console.log("your max is: " + pointer.value);
	return pointer.value;
};
BinarySearchTree.prototype.minNode = function(){
	var pointer = this.root;
	while(pointer.left.value !== null){
		pointer = pointer.left;
	}
	console.log("your max is: " + pointer.value);
	return pointer.value;
};
BinarySearchTree.prototype._getHeight = function(node) {
	
	if(!node) {
	return -1;
	}

	var left = this._getHeight(node.left);
	var right = this._getHeight(node.right);
	return Math.max(left, right) + 1;
};
BinarySearchTree.prototype.getHeight = function(node) {
	
	return this._getHeight();
};
BinarySearchTree.prototype._checkHeight = function(node) {
  if(!node) {
    return 0;
  }
  
  var left = this._checkHeight(node.left);
  if(left === -1) {
    return -1;
  }
  var right = this._checkHeight(node.right);
  if(right === -1) {
    return -1;
  }
  var diff = Math.abs(left - right);
  if(diff > 1) {
    return -1;
  } else {
    return Math.max(left, right) + 1;
  }
};
BinarySearchTree.prototype.isBalancedOptimized = function(node) {
  if(!node) {
    return true;
  }
  if(this._checkHeight(node) === -1) {
    return false;
  } else {
    return true;
  }
};
BinarySearchTree.prototype.contains = function(search) {
	var current = this.root;
	while(current) {
		if(search === current.value){
			return true;
		}
		if(search < current.value){
			current = current.left;
		} else {
			current = current.right;
		}
	}
	return false;
};
BinarySearchTree.prototype.arrayToBst = function(ary) {
    var left = null, right = null;
    if (ary[1]) left = createBinaryTreeFromArray(ary[1]);
    if (ary[2]) right = createBinaryTreeFromArray(ary[2]);
    return new BinaryTree(ary[0], left, right);
};
// BinarySearchTree.prototype.remove = function(data){
// 	const removeNode = function(node, data){
// 		if(this.root == null){
// 			return null;
// 		}
// 		var pointer = this.root;
// 		if(data == pointer.value){
// 			// no children
// 			if(pointer.left == null & pointer.right == null){
// 				return null;
// 			}
// 			if(pointer.left == null){
// 				return pointer.right;
// 			}
// 			if(pointer.right == null){
// 				return pointer.left;
// 			}
// 			var tempNode = pointer.rightl
// 			while(tempNode.left !== null){
// 				tempNode = tempNode.left;
// 			}
// 			pointer.value = tempNode.value;
// 			pointer.right = removeNode(pointer.right, tempNode.value);
// 			return pointer;

// 		} else if (data < pointer.value){
// 			pointer.left = removeNode(pointer.left, data);
// 			return pointer;
// 		} else {
// 			pointer.right = removeNode(pointer.right, data);
// 			return pointer;
// 		}
// 	}
// 	this.root = removeNode(this.root, data);
// }
BinarySearchTree.prototype.remove = function(value){
	var focusNode = this.root,
		parent = this.root,
		isItALeftChild = true;
		
		while(focusNode.value != value){
			parent = focusNode;
			//direction
			if(value < focusNode.value){

				isItALeftChild = true;

				focusNode = focusNode.left;
			} else {

				isItALeftChild = false;

				focusNode = focusNode.right;
			}
			//not found
			if(focusNode == null){
				return false;
			}
		}
		//root
		if(focusNode.left == null && focusNode.rightChild == null){
			if(focusNode == this.root){
				this.root = null;
			} else if (isItALeftChild){
				parent.left = null;
			} else {
				parent.right = null;
			}
		}
		//left
		else if (focusNode.right == null){

			if(focusNode == this.root){
				this.root = focusNode.right;
			} else if(isItALeftChild){
				parent.left = focusNode.right;
			} else {
				parent.right = focusNode.left;
			}
		}
		//replace
		else {
			var replacement = getReplacementNode(focusNode);

			if(focusNode == this.root){
				this.root = replacement;
			} else if(isItALeftChild){
				parent.left = replacement;
			} else {
				parent.right = replacement;
			}
			replacement.left = focusNode.left;
		}
		return true;


}
function getReplacementNode(replacedNode){
	var replacementParent = replacedNode;
	var	replacement = replacedNode;
	var	focusNode = replacedNode.right;

		while(focusNode != null){
			replacementParent = replacement;

			replacement = focusNode;
			focusNode = focusNode.leftChild;
		}
		if(replacement != replacedNode.right){
			replacementParent.left = replacement.right;
			replacement.right = replacedNode.right;
		}
		return replacement;
}
BinarySearchTree.prototype.preOrderTraverse = function(node){


	if(node != null){
		console.log(node.value);

		this.preOrderTraverse(node.left);

		this.preOrderTraverse(node.right);
	}
}
BinarySearchTree.prototype.postOrderTraverse = function(node){

	if(node != null){
		this.postOrderTraverse(node.left);
		this.postOrderTraverse(node.right);
		console.log(node.value);
	}
}
BinarySearchTree.prototype.inOrderTraverse = function(node){

	if(node != null){
		this.inOrderTraverse(node.left);
		console.log(node.value);
		this.inOrderTraverse(node.right);
	}
}
var bst = new BinarySearchTree();
bst.addNode(3);
bst.addNode(2);
bst.addNode(4);
bst.addNode(1);
bst.addNode(5);
bst.addNode(6);
bst.addNode(7);
bst.addNode(12);
bst.addNode(11);
bst.printByLevel();
bst.print();

console.log("*********PRE ORDER**************");
bst.preOrderTraverse(bst.root);
console.log("*********POST ORDER**************");
bst.postOrderTraverse(bst.root);
console.log("*********IN ORDER**************");
bst.inOrderTraverse(bst.root);
console.log("*********HEIGHT************");

console.log(bst._getHeight(bst.root));
console.log(bst._checkHeight(bst.root));
bst.print();

bst.remove(3);
bst.print();