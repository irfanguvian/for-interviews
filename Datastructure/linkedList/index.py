class Node():
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList():
    def __init__(self):
        self.head = None

    def isListNull(self):
        if self.head == None:
            return True
        else:
            return False

    def itterationList(self, beforeEnd=False):
        if self.isListNull():
            return Exception("Cant Itterate List")
        if beforeEnd:
            currentNode = self.head
            while (currentNode.next != None):
                currentNode = currentNode.next
                if currentNode.next:
                    break
            return currentNode
        else:
            print("s")

    def append(self, value):
        if self.isListNull():
            self.head = Node(value)
            return
        else:
            currentNode = self.head
            while (currentNode.next):
                currentNode = currentNode.next
            currentNode.next = Node(value)

    def pop(self):
        if self.isListNull():
            return Exception("Cannot Pop because list is null")
        else:
            endbeforeList = self.itterationList(beforeEnd=True)
            temp = endbeforeList
            endbeforeList = None
            return temp

    def printList(self):
        if self.isListNull():
            return Exception("Cannot itterate List")
        else:
            currentNode = head
            while (currentNode):
                if(currentNode.next):
                    print(currentNode.value, end=" -> ")
                else:
                    print(currentNode.value)
                currentNode = currentNode.next

    def reverseList(self):
        prev = Node(None)
        while (self.head != None):
            nextNode = self.head.next
            self.head.next = prev
            prev = self.head
            self.head = nextNode
        return prev


myNode = LinkedList()
myNode.append(3)
myNode.append(2)
myNode.append(4)
myNode.append(5)
myNode.append(6)
newNode = myNode.reverseList()

currentNode = newNode
while (currentNode):
    if(currentNode.next):
        print(currentNode.value, end=" -> ")
    else:
        print(currentNode.value)
    currentNode = currentNode.next
