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
    removeDuplicates,
    returnKthToLastValue
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

    const response = returnKthToLastValue(head, 0)
    console.log(response)
}

mainHandler()