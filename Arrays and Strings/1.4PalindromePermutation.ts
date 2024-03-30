export function isPalindromePermutation(str: string) {

    /* 
        Note:
        Replace does not replace spaces with this syntax: str.replace(" ", '')
        You must use the regex expresion: str.replace(/ /g, '')
    */
    const lowerCaseStr = str.replace(/ /g, '').toLowerCase()
    const map = new Map<string, number>()

    for (let i = 0; i < lowerCaseStr.length; i++) {
        if (map.has(lowerCaseStr[i])) {
            const currentCounter = map.get(lowerCaseStr[i])
            if (currentCounter) {
                map.set(lowerCaseStr[i], (currentCounter + 1))
            }
        } else {
            map.set(lowerCaseStr[i], 1)
        }
    }

    let isSingleLetterFound = false
    let isValid = true

    /* 
        Note:
        forEach() cannot return a value
     */
    map.forEach((value, key) => {
        if (value % 2 === 1) {
            if (isSingleLetterFound) {
                isValid = false
            }
            isSingleLetterFound = true
        }
    })

    return isValid
}