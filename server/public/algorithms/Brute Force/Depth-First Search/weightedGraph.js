// import visualization libraries
const { Tracer, GraphTracer, LogTracer, Randomize, Layout, VerticalLayout } = require('algorithm-visualizer');

// define tracer variables
const tracer = new GraphTracer().directed(false).weighted();
const logger = new LogTracer();
Layout.setRoot(new VerticalLayout([tracer, logger]));
tracer.log(logger);
const G = Randomize.Graph({ N: 5, ratio: 1, directed: false, weighted: true });
tracer.set(G);
Tracer.delay();

let D; // D[i] indicates whether the i-th node is discovered or not

// DFS function
function DFS(node, parent, weight) { 
  // Visualize the current node being visited
  tracer.visit(node, parent, weight);
  Tracer.delay();

  // Mark the current node as discovered
  D[node] = true; 

  // Log the discovery of the current node
  logger.println(`Node ${node} discovered with current weight ${weight}.`);

  // Traverse all neighbors of the current node
  for (let i = 0; i < G[node].length; i++) {
    if (G[node][i]) { // If there is an edge from the current node to node i
      if (!D[i]) { // If the neighboring node is not yet discovered
        // Log the recursive call to explore node i
        logger.println(`Exploring edge from node ${node} to node ${i} with weight ${G[node][i]}.`);
        DFS(i, node, weight + G[node][i]); // Recursively visit the neighbor
      }
    }
  }

  // Mark the current node as undiscovered once all neighbors are visited
  D[node] = false; 

  // Visualize the current node leaving the traversal
  tracer.leave(node, parent, 0);
  Tracer.delay();
}

// Start DFS from each node in the graph
for (let i = 0; i < G.length; i++) { 
  logger.println(`Starting DFS traversal from node ${i}.`);
  
  // Initialize the discovery status array for each traversal
  D = [];
  for (let j = 0; j < G.length; j++) D.push(false);

  // Call DFS starting from node i
  DFS(i, undefined, 0);
  logger.println(`Completed DFS traversal starting from node ${i}.`);
}
