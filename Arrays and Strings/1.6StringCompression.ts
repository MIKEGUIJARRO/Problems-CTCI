
/* 
    Implement a method to perform basic string using the counts of repeated characters. 
    For example: the string aabccccaaa would become a2b1c5a3. 
    If the compressed string would not become smaller than original string your method 
    should return the original string. You can assume the string has only uppercase and lowercase letters (a-z)
*/

export function stringCompression(str: string) {

    if (str.length <= 1) {
        return str
    }

    let strCompressed = ''
    let counter = 0
    for (let i = 1; i < str.length; i++) {
        const currChar = str.charAt(i)
        const prevChar = str.charAt(i - 1)
        counter++

        if (currChar !== prevChar) {
            // Append prev char
            strCompressed = strCompressed.concat(counter.toString(), prevChar)
            counter = 0
        }

        if (i === str.length - 1) {
            counter++
            strCompressed = strCompressed.concat(counter.toString(), currChar)
        }
    }

    if (strCompressed.length < str.length) {
        return strCompressed
    }

    return str
}