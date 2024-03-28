import { isUnique } from './Arrays and Strings'
import { checkPermutation } from './Arrays and Strings/1.2CheckPermutation'

function mainHandler() {
    const str1 = 'lorem ipsun'
    const str2 = 'ipsun lorem'
    const result = checkPermutation(str1, str2)
    console.log(result)
}

mainHandler()