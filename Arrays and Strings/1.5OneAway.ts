/* 
    There is three types of edits that can be performed on strings:
    - Insert a character
    - Remove a character
    - Replace a character
    Given two strings, write a function to check if they are one edits
    (or zero edits) away
*/

export function isOneEditAway(str1: string, str2: String): boolean {

    /* 
        Example:

        Case    String1     String2     Notes
        ---------------------------------
        Insert  house       houses      One extra total char (s)
        Remove  house       hous        One extra total char (e)
        Replace house       housi       Two extra total chars (e & i)
        Error   house       mousi       Four extra total chars (h, m, e & i)
    */

    /* 
        We can solve this via a Map (again)...
        But let's change the approach.
        Let's try to "cancel" chars from both strings if they are the same
        If the left chars from both strings is less or equial than 2, then 
        it is one edit away based on our business rules.        
    */


    const fullStr = str1 + str2

    const fullStrArr = fullStr.split('')

    /* 
       It should return a number where:
       A positive value indicates that a should come after b.
       A negative value indicates that a should come before b.
       Zero or NaN indicates that a and b are considered equal.
   */

    fullStrArr.sort((a, b) => a > b ? 1 : -1)

    let letterCounter = 0
    for (let i = 1; i < fullStrArr.length; i++) {
        if (fullStrArr[i] !== fullStrArr[i - 1]) {
            letterCounter++
        }
    }

    if (letterCounter <= 2) {
        return true
    }
    return false
}