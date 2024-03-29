import { isUnique } from './Arrays and Strings'
import { checkPermutation } from './Arrays and Strings/1.2CheckPermutation'
import { URLify } from './Arrays and Strings/1.3URLify'

function mainHandler() {
    const str1 = 'lorem  ipsun    '
    const result = URLify(str1)
    console.log(result)
}

mainHandler()