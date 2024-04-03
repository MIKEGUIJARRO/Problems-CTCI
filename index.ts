import {
    URLify,
    isUnique,
    checkPermutation,
    isPalindromePermutation,
    isOneEditAway,
    stringCompression,
    rotateMatrix
} from "./Arrays and Strings/"

import {
    NodeItem,
    deleteNode,
    removeDuplicates
} from './Linked Lists'

function mainHandler() {
    const head = new NodeItem<number>(1)
    head.appendToTail(2)
    head.appendToTail(3)
    head.appendToTail(3)
    head.appendToTail(3)
    head.appendToTail(3)
    head.appendToTail(3)
    head.appendToTail(4)
    head.appendToTail(5)

    removeDuplicates(head)
    let node = head
    while (node.next !== null) {
        console.log(node.data)
        node = node.next
    }
}

mainHandler()