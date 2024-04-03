export class NodeItem<T> {
    public next: NodeItem<T> | null = null
    public prev: NodeItem<T> | null = null
    constructor(public data: T) { }

    appendToTail(data: T) {
        const end = new NodeItem<T>(data)
        let n: NodeItem<T> = this
        while (n.next !== null) {
            n = n.next
        }
        n.next = end
    }
}

export function deleteNode<T>(head: NodeItem<T>, value: T) {
    let n = head

    if (n.data === value) {
        return head.next
    }

    while (n.next !== null) {
        if (n.next.data === value) {
            n.next = n.next.next
            return head
        }
        n = n.next
    }

    return head

}
