// Import visualization libraries
const { Tracer, Array1DTracer, LogTracer, Randomize, Layout, VerticalLayout } = require('algorithm-visualizer');

// Define tracer variables
const tracer = new Array1DTracer();
const logger = new LogTracer();
Layout.setRoot(new VerticalLayout([tracer, logger]));

// Generate a random array of integers between -5 and 5
const D = Randomize.Array1D({ N: 10, value: () => Randomize.Integer({ min: -5, max: 5 }) });
tracer.set(D);
logger.println("Initial array: " + D);
Tracer.delay();

// Initialize variables
let sum = D[0] + D[1] + D[2];
let max = sum;

// Log initial sum calculation
logger.println(`Step 1: Calculate the sum of the first 3 elements (D[0] + D[1] + D[2]).`);
logger.println(`Initial sum = ${sum}`);
logger.println(`Initialize max to the initial sum: max = ${max}`);
// Visualize initial selection
tracer.select(0, 2);
Tracer.delay();

// Slide through the array, updating the sum and finding the maximum
for (let i = 3; i < D.length; i++) {
  logger.println(`Step 2: Slide the window by adding D[${i}] and removing D[${i - 3}] from the sum.`);
  
  // Update the sum
  sum += D[i] - D[i - 3];
  logger.println(`Updated sum = ${sum} (sum = previous sum + D[${i}] - D[${i - 3}])`);
  
  // Check if the new sum is the maximum
  if (max < sum) {
    max = sum;
    logger.println(`New max found: max = ${max}`);
  } else {
    logger.println(`Max remains unchanged: max = ${max}`);
  }

  // Visualize the sliding window
  tracer.deselect(i - 3);
  tracer.select(i);
  Tracer.delay();
}

// Final log and visualization
logger.println("Step 3: The sliding window iteration is complete.");
logger.println(`Final maximum sum of any 3 consecutive elements = ${max}`);
tracer.deselect(D.length - 3, D.length - 1);
