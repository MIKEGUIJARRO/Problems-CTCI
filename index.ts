import {
    URLify,
    isUnique,
    checkPermutation,
    isPalindromePermutation,
    isOneEditAway,
    stringCompression
} from "./Arrays and Strings/"

function mainHandler() {
    const str1 = 'aaabbb'

    const result = stringCompression(str1)
    console.log(result)
}

mainHandler()