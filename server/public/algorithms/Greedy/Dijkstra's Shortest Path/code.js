// import visualization libraries
const { Tracer, Array1DTracer, GraphTracer, LogTracer, Randomize, Layout, VerticalLayout } = require('algorithm-visualizer');

// Generate a weighted undirected graph
const G = Randomize.Graph({ N: 5, ratio: 1, directed: false, weighted: true });
const MAX_VALUE = Infinity;
const S = []; // S[node] stores the shortest distance from the source node to each node
for (let i = 0; i < G.length; i++) S[i] = MAX_VALUE;

// Define tracer variables
const tracer = new GraphTracer().directed(false).weighted();
const tracerS = new Array1DTracer();
const logger = new LogTracer();
Layout.setRoot(new VerticalLayout([tracer, tracerS, logger]));
tracer.log(logger);
tracer.set(G);
tracerS.set(S);
Tracer.delay();

function Dijkstra(start) {
  let minIndex;
  let minDistance;
  const D = []; // D[i] indicates whether the i-th node is discovered or not
  for (let i = 0; i < G.length; i++) D.push(false);
  S[start] = 0; // Starting node is at distance 0 from itself

  // Visualize the initial state
  tracerS.patch(start, S[start]);
  Tracer.delay();
  tracerS.depatch(start);
  tracerS.select(start);

  let k = G.length;
  while (k--) {
    // Find a node with the shortest distance that hasn't been visited
    minDistance = MAX_VALUE;
    for (let i = 0; i < G.length; i++) {
      if (S[i] < minDistance && !D[i]) {
        minDistance = S[i];
        minIndex = i;
      }
    }
    if (minDistance === MAX_VALUE) break; // If no reachable nodes remain, exit
    D[minIndex] = true;

    // Visualize visiting the node
    tracerS.select(minIndex);
    tracer.visit(minIndex);
    Tracer.delay();

    // Update distances for neighbors
    for (let i = 0; i < G.length; i++) {
      if (G[minIndex][i] && S[i] > S[minIndex] + G[minIndex][i]) {
        S[i] = S[minIndex] + G[minIndex][i];
        // Visualize the updated distance
        tracerS.patch(i, S[i]);
        tracer.visit(i, minIndex, S[i]);
        Tracer.delay();
        tracerS.depatch(i);
        tracer.leave(i, minIndex);
        Tracer.delay();
      }
    }

    // Visualize leaving the node
    tracer.leave(minIndex);
    Tracer.delay();
  }

  // Log the shortest distances
  for (let i = 0; i < G.length; i++) {
    if (S[i] === MAX_VALUE) {
      logger.println(`No path exists from node ${start} to node ${i}`);
    } else {
      logger.println(`Shortest path from node ${start} to node ${i}: ${S[i]}`);
    }
  }
}

// Define the source node
const s = Randomize.Integer({ min: 0, max: G.length - 1 });

// Log the source node
logger.println(`Finding shortest paths from source node ${s}`);
Tracer.delay();

// Run Dijkstra's algorithm
Dijkstra(s);

