class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }
  isNull() {
    if (this.head) {
      return false
    } else {
      return true
    }
  }
  append(value) {
    if (this.isNull()) {
      this.head = new Node(value)
    } else {
      let currentNode = this.head
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = new Node(value)
    }
  }

  printList(head) {
    let currentNode = head
    let str = ''
    while (currentNode) {
      if (currentNode.next) {
        str += `${currentNode.value} -> `
      } else {
        str += String(currentNode.value)
      }
      currentNode = currentNode.next
    }
    return str
  }

  reverse() {
    let refNode = new Node(null)
    while (this.head != null) {
      let next_Node = this.head.next
      this.head.next = refNode
      refNode = this.head
      this.head = next_Node
    }
    return refNode
  }
}

let list = new LinkedList()
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.append(7)
console.log(list.printList(list.reverse()))
