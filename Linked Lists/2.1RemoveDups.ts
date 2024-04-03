import { NodeItem, deleteNode } from './LinkedList'
/* Write code to remove duplicates from unsorted linked list  */

export function removeDuplicates(head: NodeItem<number>) {
    const map = new Map<number, number>()

    let node = head

    /* Count the repeated chars */
    while (node.next !== null) {
        const value = node.data
        if (map.has(value)) {
            // delete node
            const counter = map.get(value)
            if (counter) {
                map.set(value, counter + 1)
            }
        } else {
            map.set(value, 1)
        }

        node = node.next
    }

    node = head
    map.forEach((value, key) => {
        if (value > 1) {
            // Delete all extra values
            for (let i = 0; i < value - 1; i++) {
                console.log("real", key, value)
                deleteNode(node, key)
            }
        }
    })
    return node
}