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

// BFS algorithm
function BFS(start, end) {
  const W = []; // W[i] indicates the length of the shortest path from the start node to the i-th node
  const Q = [];
  const MAX_VALUE = 0x7fffffff; // Representing infinity for unreachable nodes

  logger.println("Initializing shortest path weights for all nodes.");
  for (let i = 0; i < G.length; i++) {
    W.push(MAX_VALUE);
    // visualize {
    tracer.updateNode(i, MAX_VALUE);
    // }
  }

  logger.println(`Setting the start node (${start}) weight to 0.`);
  W[start] = 0;
  Q.push(start); // Add start node to queue
  // visualize {
  tracer.visit(start, undefined, 0);
  Tracer.delay();
  // }

  logger.println("Starting BFS traversal to find the shortest path.");
  while (Q.length > 0) {
    const node = Q.shift(); // Dequeue the front node
    logger.println(`Dequeued node ${node}. Checking its neighbors.`);
    for (let i = 0; i < G[node].length; i++) {
      if (G[node][i]) { // If an edge exists between the current node and the i-th node
        logger.println(`Edge exists from node ${node} to node ${i} with weight ${G[node][i]}.`);
        if (W[i] > W[node] + G[node][i]) { // If the current path is shorter
          W[i] = W[node] + G[node][i]; // Update the shortest path weight
          Q.push(i); // Add the neighbor node to the queue
          logger.println(`Updated shortest path to node ${i} to ${W[i]}. Adding node ${i} to the queue.`);
          // visualize {
          tracer.visit(i, node, W[i]);
          Tracer.delay();
          // }
        } else {
          logger.println(`No shorter path to node ${i} found.`);
        }
      }
    }
  }

  logger.println(`Completed BFS traversal. Final shortest path weight to node ${end} is ${W[end]}.`);
  return W[end];
}

// Randomly select start and end nodes
let s = Randomize.Integer({ min: 0, max: G.length - 1 }); // s = start node
let e; // e = end node
do {
  e = Randomize.Integer({ min: 0, max: G.length - 1 });
} while (s === e);

// Start BFS and log result
logger.println(`Finding the shortest path from node ${s} to node ${e}.`);
const minWeight = BFS(s, e);

// Log the final result based on whether a path was found
if (minWeight === 0x7fffffff) {
  logger.println(`There is no path from node ${s} to node ${e}.`);
} else {
  logger.println(`The shortest path from node ${s} to node ${e} is ${minWeight}.`);
}
