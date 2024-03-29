/* 
    Write a method to replace all spaces in a string with '%20'. 
    You may assume that the string has sufficient space at the end 
    to hold the additional characters, and that you are given 
    the "true" length of string. 
*/

export function URLify(str: string) {
    // %20 for every space
    // Let's assume that all the "spaces" are provided at the end of the string

    const strArr = str.split('')
    let spacesCounter = 0

    strArr.forEach((char) => {
        if (char === ' ') {
            spacesCounter++
        }
    })

    const modSpaceURL = spacesCounter % 3;

    if (modSpaceURL != 0) {
        throw new Error('Invalid URL')
    }

    let remainingSpaces = spacesCounter / 3;

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === ' ' && remainingSpaces != 0) {
            strArr.splice(i, 1, '%')
            strArr.splice(i + 1, 0, '2')
            strArr.splice(i + 2, 0, '0')

            strArr.pop()
            strArr.pop()

            remainingSpaces--
        }
    }

    return strArr.join("")
}