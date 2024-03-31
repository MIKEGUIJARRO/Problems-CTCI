import { URLify, isUnique, checkPermutation, isPalindromePermutation, isOneEditAway } from "./Arrays and Strings/"

function mainHandler() {
    const str1 = 'aba'
    const str2 = 'mbas'

    const result = isOneEditAway(str1, str2)
    console.log(result)
}

mainHandler()