import { NodeItem } from './LinkedList'

export function returnKthToLastValue(head: NodeItem<number>, kToLast: number) {
    // [2] > [5] > [4] > [1] > [9] > null
    if (kToLast === 0) {
        throw new Error('Zero not supported')
    }
    return recursiveTravel(head, kToLast)
}

interface RecursiveReturnI {
    counter: number
    value: null | number
}

function recursiveTravel(node: NodeItem<number>, kToLast: number): RecursiveReturnI {
    if (node.next === null) {
        if (1 === kToLast) {
            return { counter: 1, value: node.data }
        }
        return { counter: 1, value: null }
    }

    const response = recursiveTravel(node.next, kToLast)
    response.counter = response.counter + 1
    if (kToLast === response.counter) {
        response.value = node.data
    }

    return response
}