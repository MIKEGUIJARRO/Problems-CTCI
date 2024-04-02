/* 
    Given an image represented by an NXN matrix, where each pixel 
    in the image is 4 bytes. Write a method to rotate the image by 90 degrees.
    Can you do this in place?
*/

export function rotateMatrix(matrix: number[][]) {
    /* 
        Example (Rotation clockwise): 
        0102
        1314
        2526
        3738
        
        Result:
        3210
        7531
        3210
        8642
    */

    /* 
        It is important to mention that this approach rotates the matrix clockwise
        and creates a new instance of a matrix 

        Time Space Complexity: O(n2)
    */

    let matrixRow: number[] = []
    let newMatrix: number[][] = []
    /* Horizontal search */
    for (let i = 0; i < matrix.length; i++) {
        /* Vertical search */
        for (let j = matrix.length - 1; j >= 0; j--) {
            /* Load matrix row */
            matrixRow.push(matrix[j][i])
        }
        newMatrix.push(matrixRow)
        matrixRow = []
    }
    printMatrix(matrix)
    console.log('----------------')
    printMatrix(newMatrix)
    return newMatrix
}

function printMatrix(matrix: number[][]) {
    matrix.forEach((row) => {
        console.log(row)
    })
}

interface Point {
    x: number
    y: number
}

function recursiveLayerTransformation(matrix: number[][], layer: number) {
    const point1: Point = { x: 0, y: 0 }
    const point2: Point = { x: 0, y: 0 }

}