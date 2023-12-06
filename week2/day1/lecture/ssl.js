
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

// let node1 = new Node(10)

// console.log(node1.value)

class SLL {
    constructor(){
        this.head = null
    }

    addEnd(val) {
        let newNode = new Node(val)
        if(this.head == null) {
            this.head = newNode
            return this
        }
        // this.head.next = newNode
        let pointer = this.head
        while( pointer.next != null ){
            pointer = pointer.next
        }
        pointer.next = newNode
        return this
    }

    printNodeVals(){
        if(!this.head){
            console.log("List is empty")
            return null
        }
        let pointer = this.head
        while( pointer != null){
            console.log(pointer.value)
            pointer = pointer.next
        }
        // console.log(pointer.value)
    }

    removeEnd(){
        if(!this.head){
            console.log("List is empty")
            return null
        }
        let pointer = this.head
        while( pointer.next.next != null ){
            pointer = pointer.next
        }
        pointer.next = null
    }
}

let myList1 = new SLL()
// myList1.addEnd(10)
// myList1.addEnd(20)
// myList1.addEnd(40)
myList1.printNodeVals()
myList1.removeEnd()
console.log("##########")
myList1.printNodeVals()
// console.log(myList1)
