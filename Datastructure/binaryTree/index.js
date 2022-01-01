class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new Node(value)
  }

  insert(root, value) {
    if (root == null) {
      return new Node(value)
    } else if (root.value > value) {
      root.left = this.insert(root.left, value)
    } else {
      root.right = this.insert(root.right, value)
    }
    return root
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left)
      console.log(root.value)
      this.inOrder(root.right)
    }
  }
  postOrder(root) {
    if (root) {
      this.postOrder(root.left)
      this.postOrder(root.right)
      console.log(root.value)
    }
  }
  preOrder(root) {
    if (root) {
      console.log(root.value)
      this.preOrder(root.left)
      this.preOrder(root.right)
    }
  }
  search(root, value) {
    if (root == null) {
      return 'undifined Number'
    }
    if (root.value == value) {
      return root.value
    } else if (root.value > value) {
      return this.search(root.left, value)
    } else {
      return this.search(root.right, value)
    }
  }
}

let BT = new BinaryTree(1)
BT.insert(BT.root, 3)
BT.insert(BT.root, 4)
BT.insert(BT.root, 5)
BT.insert(BT.root, 6)
BT.insert(BT.root, 7)

console.log(BT.search(BT.root, 5))
