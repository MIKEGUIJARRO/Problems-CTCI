import { URLify, isUnique, checkPermutation, isPalindromePermutation } from "./Arrays and Strings/"

function mainHandler() {
    const str1 = 'Anita lava la tina'
    const result = isPalindromePermutation(str1)
    console.log(result)
}

mainHandler()