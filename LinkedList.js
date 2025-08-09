class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    apeendNode(newNode) {
        let node = this.head;
        if (node == null) {
            this.head = newNode
            return;
        }

        while (node.next) {
            node = node.next
        }

        node.next = newNode
    }

    printList() {
        let node = this.head
        console.log('HEAD->')
        while (node) {
            console.log(node.data + '->')
            node = node.next
        }
        console.log('NULL')
    }

    insertAt(index, newNode) {
        let node = this.head;
        if (index == 0) {
            newNode.next = node
            this.head = newNode
            return;
        }

        while (--index) {
            if (node.next !== null) {
                node = node.next
            }
        }
        let tempVal = node.next
        node.next = newNode
        newNode.next = tempVal
    }

    removeFrom(index) {
        let node = this.head;
        if (index == 0) {
            if (node.next != null) {
                this.head = node.next
            } else {
                throw Error('Out of bound')
            }
            return;

        }
        while (--index) {
            if (node.next != null) {
                node = node.next
            }
        }
        node.next = node.next.next
    }

    getNode(index) {
        let node = this.head;
        if (index === 0) {
            return this.head
        }

        while (index--) {
            if (node.next != null) {
                node = node.next

            } else {
                throw Error("Out of bound")
            }
        }
        return node
    }

    clear() {
        this.head = null
    }

    indexOf(data) {
        let index = -1
        let node = this.head
        while (node) {
            index += 1
            if (node.data === data) return index

            node = node.next
        }
        return index
    }

    isEmpty() {
        return (this.head == null)
    }

    listSize() {
        let len = 0;
        let node = this.head
        while (node) {
            len += 1
            node = node.next
        }
        return len
    }

    getFirst() {
        return this.head
    }

    getLast() {
        let node = this.head;
        if (node)
            while (node.next) {
                node = node.next
            }
        return node
    }


}

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}


let myList = new LinkedList()
let node = new Node(5)
myList.apeendNode(node)
myList.apeendNode(new Node(10))
// myList.printList()
myList.insertAt(2, new Node('abby'))
// myList.printList()
// myList.removeFrom(1)
myList.printList()
// console.log(myList.getNode(5))
// console.log(myList.indexOf(5))
// console.log(myList.printList())


