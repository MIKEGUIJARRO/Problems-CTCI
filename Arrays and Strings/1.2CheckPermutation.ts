/* Given two strings, write a method to decide if one is a permutation of the other */

function getArrStringAsc(str: string): string[] {

    const arrStr = str.split('')
    const arrStrOrdAsc = arrStr.sort((a, b) => a < b ? 1 : -1)
    return arrStrOrdAsc
}

export function checkPermutation(str1: string, str2: string): boolean {
    /* 
        1st approach: Order values on both strings and loop through 
        all of them ensuring that the char is the same on each iteration
    */

    if (str1.length !== str2.length) {
        return false
    }

    const str1OrderAsc = getArrStringAsc(str1)
    const str2OrderAsc = getArrStringAsc(str2)

    for (let i = 0; i < str1.length; i++) {
        const char1 = str1OrderAsc[i]
        const char2 = str2OrderAsc[i]

        console.log(char1, char2)
        if (char1 !== char2) {
            return false
        }
    }

    return true
}