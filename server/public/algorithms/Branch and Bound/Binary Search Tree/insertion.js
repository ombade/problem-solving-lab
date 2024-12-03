// import visualization libraries {
  const { Tracer, Array1DTracer, GraphTracer, LogTracer, Layout, VerticalLayout } = require('algorithm-visualizer');
  // }
  
  const T = {}; // To store tree nodes and their children
  const elements = [5, 8, 10, 3, 1, 6, 9, 7, 2, 0, 4]; // elements to be inserted
  
  // define tracer variables {
  const graphTracer = new GraphTracer(' BST - Elements marked red indicate the current status of the tree ');
  const elemTracer = new Array1DTracer(' Elements ');
  const logger = new LogTracer(' Log ');
  Layout.setRoot(new VerticalLayout([graphTracer, elemTracer, logger]));
  elemTracer.set(elements);
  graphTracer.log(logger);
  Tracer.delay();
  // }
  
  function bstInsert(root, element, parent) {
    // visualize visiting the root node
    graphTracer.visit(root, parent);
    Tracer.delay();
  
    const treeNode = T[root];
    let propName = '';
    
    // Decide where to insert the element: left or right
    if (element < root) {
      propName = 'left';  // insert in the left child
    } else if (element > root) {
      propName = 'right'; // insert in the right child
    }
  
    // If we found an empty spot (either left or right), insert the element
    if (propName !== '') {
      if (!(propName in treeNode)) { 
        treeNode[propName] = element;
        T[element] = {}; // initialize the new node
  
        // visualize adding a new node and edge
        graphTracer.addNode(element);
        graphTracer.addEdge(root, element);
        graphTracer.select(element, root);
        Tracer.delay();
        graphTracer.deselect(element, root);
  
        logger.println(`${element} Inserted as ${propName} child of ${root}`);
      } else {
        // Recursively insert in the left or right subtree
        logger.println(`${element} already exists in the ${propName} of ${root}, moving to next level`);
        bstInsert(treeNode[propName], element, root);
      }
    }
    
    // visualize exiting the current node
    graphTracer.leave(root, parent);
    Tracer.delay();
  }
  
  const Root = elements[0]; // take the first element as the root of the BST
  T[Root] = {}; // initialize root node
  
  // visualize root insertion
  graphTracer.addNode(Root);
  graphTracer.layoutTree(Root, true);
  logger.println(`${Root} Inserted as root of tree`);
  Tracer.delay();
  
  // Start inserting the rest of the elements one by one
  for (let i = 1; i < elements.length; i++) {
    // visualize selecting the current element for insertion
    elemTracer.select(i);
    logger.println(`Inserting ${elements[i]} into the tree...`);
    Tracer.delay();
  
    // Call the bstInsert function to insert the current element
    bstInsert(Root, elements[i]); 
  
    // visualize deselecting the current element after insertion
    elemTracer.deselect(i);
    Tracer.delay();
  }
  
  // Final Log Message
  logger.println('Tree construction completed. All elements have been inserted.');
  