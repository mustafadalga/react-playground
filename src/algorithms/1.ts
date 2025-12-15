class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;

        while (true) {
console.log(value,current.value)
            if (value < current.value) {

                if (current.left) {
                    current = current.left;

                } else {
                    current.left = newNode;
                    return this;
                }

            } else if (value > current.value) {

                if (current.right) {
                    current = current.right;
                } else {
                    current.right = newNode;
                    return this;
                }

            } else {
                console.log(value,current.value)
                return this;
            }
        }
    }

    find(value) {

        if (!this.root || !Number.isInteger(value)) return undefined;

        let current = this.root, found = false;

        while (current && !found) {

            if (value < current.value) {

                current = current.left;
            } else if (value > current.value) {

                current = current.right;
            } else {
                found = true;
            }
        }

        if (!found) return undefined;

        return current;

    }

    contains(value) {

        if (!this.root || !Number.isInteger(value)) return false;

        let current = this.root, found = false;

        while (current && !found) {

            if (value < current.value) {

                current = current.left;
            } else if (value > current.value) {

                current = current.right;
            } else {
                return true;
            }
        }

        return false;
    }

    breadthFirstSearch() {
        if (!this.root) return;
        let node = this.root;
        const data = [], queue = [];

        queue.push(node);

        while (queue.length) {

            node = queue.shift();
            data.push(node.value);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return data;
    }

    depthFirstSearchPreOrder() {
        if (!this.root) return;

        let current = this.root;
        const data = [];

        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(current);

        return data;
    }

    depthFirstSearchPostOrder() {
        if (!this.root) return;

        let current = this.root;
        const data = [];

        function traverse(node) {

            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }

        traverse(current);

        return data;
    }

    deepFirstSearchInOrder() {
        if (!this.root) return;

        const data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);

            data.push(node.value);

            if (node.right) traverse(node.right)
        }

        traverse(this.root);

        return data;
    }

    maximumDepthLevel() {
        if (!this.root) return 0;

        const queue = [ { node: this.root, depth: 1 } ]
        let max = 0

        while (queue.length) {
            const { node, depth } = queue.shift()
            max = Math.max(max, depth)

            if (node.left) queue.push({ node: node.left, depth: depth + 1 })
            if (node.right) queue.push({ node: node.right, depth: depth + 1 })

        }


        return max
    }

    maximumDepthLevelV2() {
        if (!this.root) return 0;

        const queue = [ this.root ]
        let max = 0

        while (queue.length) {
            const level = queue.length
            for (let i = 0; i < level; i++) {
                const node = queue.shift()

                if (node.left) queue.push(node.left)
                if (node.right) queue.push(node.right)
            }
            max++// finished processing one level
        }

        return max
    }

    flip() {
        if (!this.root) return 0

        const copy = structuredClone(this.root);
        const queue = [ copy ]

        while (queue.length) {
            const level = queue.length
            for (let i = 0; i < level; i++) {
                const node = queue.shift()

                const tempLeft = node.left
                node.left = node.right
                node.right = tempLeft
                if (node.left) queue.push(node.left)
                if (node.right) queue.push(node.right)
            }
        }


        return copy
    }

    flipv2() {
        if (!this.root) return null;

        const copy = structuredClone(this.root); // deep copy if you don’t want to mutate original

        const flip = (node) => {
            if (!node) return;
            [ node.left, node.right ] = [ node.right, node.left ]; // swap
            flip(node.left);
            flip(node.right);
        };

        flip(copy);
        return copy;
    }

}

function getBinary1sCount(n) {
    let count = 0
    let arr=[]

    while (n > 0) {
        if (n % 2 === 1) {
            count++
        }
        arr.push(n%2)

        n = Math.floor(n / 2)
    }
    return count
}
// console.log(getBinary1sCount(3))
function bitCounting(n) {
    const arr=[]


    for (let i=0;i<=n;i++){
        arr.push(getBinary1sCount(i))
    }

    return arr
}

 console.log(bitCounting(3))

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(
        val: number,
        left: TreeNode | null = null,
        right: TreeNode | null = null,
    ) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}



// const list=[2,1,3]
const a = [4413]
const b = [-7244]
const treeA = new BinarySearchTree()
const treeB = new BinarySearchTree()
for (const row of a) {
    treeA.insert(row===undefined ? null:row)
}

for (const row of b) {
    treeB.insert(row===undefined ? null:row)
}

