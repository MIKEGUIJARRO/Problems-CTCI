/* 
    1.1 - Is Unique: Implement an algorithn to determine if a string has all unique characters.
    What if you cannot use additional data structures?
*/

/* 
    Time Space Complexity:
    O(n)
*/

/* 
    Comments:
    My first approach is to use a Map to keep track of all keys (letters) and ensure that their sum per key is 1, else return false
    My second approach involves sorting out the string by letters and ensuring that no values are repeated consecutively
*/

export function isUnique(str: string): boolean {

    /* When another data structure is valid - Use Map */

    /* let mapSet = new Map<string, boolean>()

    for (let i = 0; i < str.length; i++) {
        let val = str.charAt(i)
        if (mapSet.has(val)) {
            return false
        }
        mapSet.set(val, true)
    } 
    return true
    */

    /* When no other DS is valid - Use sort */
    const arrVals = str.split('')
    /* 
        It should return a number where:
            A negative value indicates that a should come before b.
            A positive value indicates that a should come after b.
            Zero or NaN indicates that a and b are considered equal.
    */
    const arrValsSortAsc = arrVals.sort((a, b) => a > b ? 1 : -1)
    console.log(arrValsSortAsc)
    for (let i = 0; i < arrValsSortAsc.length; i++) {
        if (i === 0) {
            continue
        }

        if (arrValsSortAsc[i] === arrValsSortAsc[i - 1]) {
            return false
        }
    }
    return true
}