import {
    URLify,
    isUnique,
    checkPermutation,
    isPalindromePermutation,
    isOneEditAway,
    stringCompression,
    rotateMatrix
} from "./Arrays and Strings/"

function mainHandler() {
    const str1 = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ]

    const result = rotateMatrix(str1)
    console.log(result)
}

mainHandler()