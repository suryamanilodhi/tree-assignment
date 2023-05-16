// 1. Implement Binary tree
// 2. Find height of a given tree
// 3. Perform Pre-order, Post-order, In-order traversal
// 4. Function to print all the leaves in a given binary tree
// 5. Implement BFS (Breath First Search) and DFS (Depth First Search)
// 6. Find sum of all left leaves in a given Binary Tree
// 7. Find sum of all nodes of the given perfect binary tree
// 8. Count subtress that sum up to a given value x in a binary tree
// 9. Find maximum level sum in Binary Tree
// 10.Print the nodes at odd levels of a tree




// 1.Implement Binary tree?

// A binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child.
// Left child is always less than it's parent and the right child is always bigger than it's parent.

class Node {
    constructor(value) {
      this.value = value;
      this.right = null;
      this.left = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    //inserts a number into the tree. Returns the entire tree.
    insert(value) {
      const newNode = new Node(value);
      if (!this.root) {
        this.root = newNode;
        return this;
      }
      let current = this.root;
      const rnLoop = true;
      while (rnLoop) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
    //finds the given number and returns it. If its not found, returns `null` or `undefined`.
    find(value) {
      if (!this.root) return null;
      let current = this.root;
      const rnLoop = true;
      while (rnLoop) {
        if (!current) return undefined;
        if (value === current.value) return current;
        if (value < current.value) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
    }
    //checks if a given number exists in the tree. If its in the tree, returns `true`, otherwise `false`
    contains(value) {
      if (!this.root) return null;
      let current = this.root;
      const rnLoop = true;
      while (rnLoop) {
        if (!current) return false;
        if (value === current.value) return true;
        if (value < current.value) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
    }
  }
  
  
  
  
  //EXAMPLES ->
  
  const binarySearchTree = new BinarySearchTree();
  binarySearchTree.insert(10); //returns the entire list
  binarySearchTree.insert(6); //returns the entire list
  binarySearchTree.insert(2);
  binarySearchTree.insert(34);
  binarySearchTree.insert(69);
  binarySearchTree.insert(4);
  binarySearchTree.find(4); //returns `Node {value: 2, right: Node, left: null}`
  
  

//------------------------------------------------------------------------------------------------------------------------------


//Q 2. Find height of a given tree?

class Node{
  
    constructor(){
        this.key = 0
        this.left = null
        this.right = null
    }
  
}
  
function newNode(key){
  
    let temp = new Node()
    temp.key = key
    temp.left = null
    temp.right = null
    return temp
  
}
  
// Function to find the height(depth) of the tree
function height(root){
  
    let depth = 0
  
    let q = []
      
    // pushing first level element along with null
    q.push(root)
    q.push(null)
    while(q.length>0){
        let temp = q.shift()
      
        // When null encountered, increment the value
        if(temp == null)
            depth += 1
          
        if(temp != null){
            if(temp.left)
                q.push(temp.left)
              
            if(temp.right)
                q.push(temp.right)
        }
              
        else if(q.length>0)
            q.push(null)
    }
    return depth
  
}
  

let root = newNode(1)
root.left = newNode(2)
root.right = newNode(3)
  
root.left.left = newNode(4)
root.left.right = newNode(5)
root.right.right = newNode(3)
  
console.log(`Height(Depth) of tree is => ${height(root)} `, );



//------------------------------------------------------------------------------------------------------------------------------

//Q 3. Perform Pre-order, Post-order, In-order traversal?

class BinarySearchTreeNode {
    constructor(key, value = key, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }
  
}

class BinarySearchTree {
    constructor(key, value = key) {
        this.root = new BinarySearchTreeNode(key, value);
    }

    //inOrderTraversal --> L-Root-R
    *inOrderTraversal(node = this.root) {
        if (node.left) yield* this.inOrderTraversal(node.left);
        yield node;
        if (node.right) yield* this.inOrderTraversal(node.right);
    }

    //postOrderTraversal --> L-R-Root
    *postOrderTraversal(node = this.root) {
        if (node.left) yield* this.postOrderTraversal(node.left);
        if (node.right) yield* this.postOrderTraversal(node.right);
        yield node;
    }

    //preOrderTraversal --> Root-Left-Right
    *preOrderTraversal(node = this.root) {
        yield node;
        if (node.left) yield* this.preOrderTraversal(node.left);
        if (node.right) yield* this.preOrderTraversal(node.right);
    }

    //insert a node
    insert(key, value = key) {
        let node = this.root; //root-node
        while (true) {
            if (node.key === key) return false;
            if (node.key > key) {
                if (node.left != null) {
                    node = node.left;
                } else {
                    node.left = new BinarySearchTreeNode(key, value, node);
                    return true;
                }
            } else if (node.key < key) {
                if (node.right != null) {
                    node = node.right;
                } else {
                    node.right = new BinarySearchTreeNode(key, value, node);
                    return true;
                }
            }
        }
    }

    //to find a node using node-key
    find(key) {
        for (let node of this.postOrderTraversal()) {
            if (node.key === key) return node;
        }
        return undefined;
    }

    //if node exists for a given key
    has(key) {
        for (let node of this.postOrderTraversal()) {
            if (node.key === key) return true;
        }
        return false;
    }

}

//create binary tree with root node key&value 30;
const tree = new BinarySearchTree(30);

tree.insert(10);
tree.insert(15);
tree.insert(20);
tree.insert(40);
tree.insert(35);
tree.insert(50);

//preOrderTraversal
 console.log('preOrderTraversal: ', [...tree.preOrderTraversal()].map(x => x.value));

//inOrderTraversal
 console.log('inOrderTraversal: ', [...tree.inOrderTraversal()].map(x => x.value));

// //postOrderTraversal
 console.log('postOrderTraversal: ', [...tree.postOrderTraversal()].map(x => x.value));


//-------------------------------------------------------------------------------------------------------------------------



// Q 4. Function to print all the leaves in a given binary tree?

class Node
{
    constructor()
    {
        this.data = 0;
        this.left = null;
        this.right = null;
    }
};
 

// nodes from left to right //
function printLeafNodes(root)
{
     
    // If node is null, return //
    if (root == null)
        return;
     
    // If node is leaf node, print its data //   
    if (root.left == null &&
        root.right == null)
    {
        console.log(root.data + " ");
        return;
    }
     
    // If left child exists, check for leaf //
    if (root.left != null)
        printLeafNodes(root.left);
         
    // If right child exists, check for leaf //
    if (root.right != null)
        printLeafNodes(root.right);
}
 

function newNode(data)
{
    var temp = new Node();
    temp.data = data;
    temp.left = null;
    temp.right = null;
    return temp;
}

 
// Let us create binary tree shown in

var root = newNode(1);
root.left = newNode(2);
root.right = newNode(3);
root.left.left = newNode(4);
root.right.left = newNode(5);
root.right.right = newNode(8);
root.right.left.left = newNode(6);
root.right.left.right = newNode(7);
root.right.right.left = newNode(9);
root.right.right.right = newNode(10);
 
// Print leaf nodes of the given tree

console.log(printLeafNodes(root));

//----------------------------------------------------------------------------------------------------------------



//Q 5. Implement BFS (Breath First Search) and DFS (Depth First Search) ?

//BFS (Breath First Search) ->
class Graph
    {
         
        constructor(v)
        {
            this.V = v;
            this.adj = new Array(v);
            for(let i = 0; i < v; i++)
                this.adj[i] = [];
        }
         
        addEdge(v, w)
        {
             
            this.adj[v].push(w);
        }
         
        // prints BFS traversal //
        BFS(s)
        {
            // Mark all the vertices as not visited(By defaultset as false)
          
            let visited = new Array(this.V);
            for(let i = 0; i < this.V; i++)
                visited[i] = false;
             
            // Create a queue for BFS
            let queue=[];
             
            visited[s]=true;
            queue.push(s);
             
            while(queue.length>0)
            {
                
                s = queue[0];
                
              console.log(s+" ");
                queue.shift();
                 
                this.adj[s].forEach((adjacent,i) => {
                    if(!visited[adjacent])
                    {
                        visited[adjacent]=true;
                        queue.push(adjacent);
                    }
                });
            }
        }
    }
     

    g = new Graph(4);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
    g.addEdge(2, 0);
    g.addEdge(2, 3);
    g.addEdge(3, 3);
     
     
    console.log("Following is Breadth First Traversal " +
                "(starting from vertex 2)");
      g.BFS(2);




// DFS (Depth First Search) ->

class Graph
{
     
    // Constructor
    constructor(v)
    {
        this.V = v;
        this.adj = new Array(v);
        for(let i = 0; i < v; i++)
            this.adj[i] = [];
    }
     
    // Function to add an edge into the graph //
    addEdge(v, w)
    {
         
        // Add w to v's list. //
        this.adj[v].push(w);
    }
     
    // A function used by DFS //
    DFSUtil(v, visited)
    {
         
      visited[v] = true;
       console.log(v + " ");
  
     
        for(let i of this.adj[v].values())
        {
            let n = i
            if (!visited[n])
                this.DFSUtil(n, visited);
        }
    }
     
   
    DFS(v)
    {
        
        let visited = new Array(this.V);
        for(let i = 0; i < this.V; i++)
            visited[i] = false;
  
        this.DFSUtil(v, visited);
    }
}
 

g = new Graph(4);
  
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);
 
  console.log("Following is Depth First Traversal " +
               "(starting from vertex 2)");
 
  g.DFS(2);

//------------------------------------------------------------------------------------------------------------------
    

// 6. Find sum of all left leaves in a given Binary Tree ?

class Node
    {
        constructor(k)
        {
            this.data = k;
            this.left = null;
            this.right = null;
        }
         
    }
     
    // A utility function to check if a given node is leaf or not //

    function isLeaf(node)
    {
        if (node == null)
            return false;
        if (node.left == null && node.right == null)
            return true;
        return false;
    }
     
    // This function returns sum of all left leaves in a given  binary tree
    
    function leftLeavesSum(node)
    {
     
        let res = 0;
   
        
        if (node != null)
        {
         
            // If left of root is NULL, then add key of
           
            if (isLeaf(node.left))
                res += node.left.data;
            else // Else recur for left child of root
                res += leftLeavesSum(node.left);
   
            // Recur for right child of root and update res
            res += leftLeavesSum(node.right);
        }
   
        // return result //
      
        return res;
    }
     

    root = new Node(20);
    root.left = new Node(9);
    root.right = new Node(49);
    root.left.right = new Node(12);
    root.left.left = new Node(5);
    root.right.left = new Node(23);
    root.right.right = new Node(52);
    root.left.right.right = new Node(12);
    root.right.right.left = new Node(50);
     
    console.log("The sum of leaves is " +leftLeavesSum(root));



// 7. Find sum of all nodes of the given perfect binary tree?

function sumNodes(l)
    {
        // No of leaf nodes //
        let leafNodeCount = Math.pow(2, l - 1);
 
        // list of vector to store 
        let vec = [];
      
        for (let i = 1; i <= l; i++)
        {
            vec.push([]);
        }
 
        // store the nodes of last level //   
        for (let i = 1; i <= leafNodeCount; i++)
        {
            vec[l - 1].push(i);
        }
 
        // store nodes of rest of
        // the level by moving in
        // bottom-up manner
        for (let i = l - 2; i >= 0; i--)
        {
            let k = 0;
 
            // children nodes of lower level
            while (k < vec[i + 1].length - 1)
            {
               // node as sum of children nodes //
                vec[i].push(vec[i + 1][k] + vec[i + 1][k + 1]);
                k += 2;
            }
        }
 
        let sum = 0;
      
        // and calculate the sum //
        for (let i = 0; i < l; i++)
        {
            for (let j = 0; j < vec[i].length; j++)
            {
                sum += vec[i][j];
            }
        }
 
        return sum;
    }
     
    let l = 5;
  
    console.log(" Sum of all nodes of the given  binary tree is -> " 
                +  sumNodes(l));


//---------------------------------------------------------------------------------------------------------------



// 8. Count subtress that sum up to a given value x in a binary tree?

class Node
    {
        constructor(data) {
           this.left = null;
           this.right = null;
           this.data = data;
        }
    }
     
    let v;
     
    // function to get a new node
    function getNode(data)
    {
      
        let newNode = new Node(data);
        return newNode;
    }
 
   
    // sum up to a given value x
    function countSubtreesWithSumX(root, x)
    {
        // if tree is empty
        if (root == null)
            return 0;
 
        // sum of nodes in the left subtree
      
        let ls = countSubtreesWithSumX(root.left, x);
 
        // sum of nodes in the right subtree
      
        let rs = countSubtreesWithSumX(root.right, x);
 
        // sum of nodes in the subtree
      
        let sum = ls + rs + root.data;
 
        // if true
        if (sum == x)
            v++;
 
        // return subtree's nodes sum
        return sum;
    }

    function countSubtreesWithSumXUtil(root, x)
    {
        // if tree is empty
        if (root == null)
            return 0;
 
        v = 0;
 
        // sum of nodes in the left subtree
        let ls = countSubtreesWithSumX(root.left, x);
 
        // sum of nodes in the right subtree
        let rs = countSubtreesWithSumX(root.right, x);
 
        // if tree's nodes sum == x
        if ((ls + rs + root.data) == x)
            v++;
 
        // required count of subtrees
        return v;
    }
     
 
    let root = getNode(5);
    root.left = getNode(-10);
    root.right = getNode(3);
    root.left.left = getNode(9);
    root.left.right = getNode(8);
    root.right.left = getNode(-4);
    root.right.right = getNode(7);
  
    let x = 7;
  
  console.log(" Count = " +
           countSubtreesWithSumXUtil(root, x));


//-------------------------------------------------------------------------------------------------------------------


// 9. Find maximum level sum in Binary Tree ?

class Node
    {
        constructor(data)
        {
            this.data = data;
            this.left = this.right = null;
        }
    }
      
// Function to find the maximum //
   
function maxLevelSum(root)
{
    
    if (root == null)
        return 0;
   
    // Initialize result //
    let result = root.data;
   
    
    let q = [];
    q.push(root);
    while (q.length!=0)
    {
           
        let count = q.length;
   
        // Iterate for all the nodes
        // in the queue currently
      
        let sum = 0;
        while (count-- > 0)
        {
               
            // Dequeue an node from queue //
            let temp = q.shift();
   
            // Add this node's value to current sum //
             
            sum = sum + temp.data;
   
            // Enqueue left and right children of dequeued node //
            if (temp.left != null)
                q.push(temp.left);
            if (temp.right != null)
                q.push(temp.right);
        }
   
        result = Math.max(sum, result);
    }
    return result;
}
  
  
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(8);
root.right.right.left = new Node(6);
root.right.right.right = new Node(7);
  
 
console.log(" Maximum level sum is " + maxLevelSum(root));

//--------------------------------------------------------------------------------------------------------------


// 10.Print the nodes at odd levels of a tree?


class Node
    {
        constructor(data) {
           this.left = null;
           this.right = null;
           this.data = data;
        }
    }
     
    function printOddNodes(root, isOdd)
    {
        // If empty tree //
        if (root == null)
        return;
 
        // If current node is of odd level //
        if (isOdd == true)
    console.log(root.data + " ");
 
        // Recur for children with isOdd  switched //
        printOddNodes(root.left, !isOdd);
        printOddNodes(root.right, !isOdd);
    }
 
    // Utility method to create a node //
    function newNode(data)
    {
        let node = new Node(data);
        return (node);
    }
     
    let root = newNode(1);
    root.left = newNode(2);
    root.right = newNode(3);
    root.left.left = newNode(4);
    root.left.right = newNode(5);

   console.log("The nodes at odd levels of a tree is "  );
   printOddNodes(root, true);


 //------------------------