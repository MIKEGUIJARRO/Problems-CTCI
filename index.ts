import { URLify, isUnique, checkPermutation } from "./Arrays and Strings/"

URLify
function mainHandler() {
    const str1 = 'lorem  ipsun    '
    const result = URLify(str1)
    console.log(result)
}

mainHandler()