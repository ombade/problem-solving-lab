// Import visualization libraries
const { Tracer, Array1DTracer, ChartTracer, LogTracer, Randomize, Layout, VerticalLayout } = require('algorithm-visualizer');

// Define tracer variables
const chart = new ChartTracer(); // To visualize as a chart
const tracer = new Array1DTracer(); // To visualize the array
const logger = new LogTracer();    // To log messages
Layout.setRoot(new VerticalLayout([chart, tracer, logger])); // Set the layout
const D = Randomize.Array1D({ N: 7 }); // Generate a random array
tracer.set(D); // Set the array for visualization
tracer.chart(chart); // Link the array tracer with the chart tracer
Tracer.delay(); // Add delay to start visualization

// Log the original array
logger.println(`Original array: [${D.join(', ')}]`);

let N = D.length;
let swapped;
let iteration = 1; // Counter for iterations

// Bubble Sort Algorithm with Iteration Logs
do {
  swapped = false;

  // Log the current iteration
  logger.println(`Starting Iteration ${iteration}:`);
  logger.println(`Current array state: [${D.join(', ')}]`);

  // Highlight the last sorted element
  tracer.select(N - 1);
  chart.select(N - 1);
  Tracer.delay();

  for (let i = 1; i < N; i++) {
    // Highlight elements being compared
    logger.println(`Comparing (${D[i - 1]}) and (${D[i]})`);

    tracer.select(i);
    tracer.select(i - 1);
    chart.select(i);
    chart.select(i - 1);
    Tracer.delay();

    if (D[i - 1] > D[i]) {
      // Log the swap
      logger.println(`Swapping (${D[i - 1]}) and (${D[i]})`);

      // Perform the swap
      const temp = D[i - 1];
      D[i - 1] = D[i];
      D[i] = temp;
      swapped = true;

      // Visualize the swap in the tracers
      tracer.patch(i - 1, D[i - 1]);
      tracer.patch(i, D[i]);
      chart.patch(i - 1, D[i - 1]);
      chart.patch(i, D[i]);
      Tracer.delay();
      tracer.depatch(i - 1);
      tracer.depatch(i);
      chart.depatch(i - 1);
      chart.depatch(i);
    } else {
      logger.println(`No swap needed.`);
    }

    // Deselect the compared elements
    tracer.deselect(i);
    tracer.deselect(i - 1);
    chart.deselect(i);
    chart.deselect(i - 1);
  }

  // Deselect the last sorted element
  tracer.deselect(N - 1);
  chart.deselect(N - 1);

  // Reduce the range of comparison for the next pass
  N--;
  iteration++; // Increment the iteration counter

  // Log the array state at the end of this iteration
  logger.println(`Array after Iteration ${iteration - 1}: [${D.join(', ')}]`);
  
} while (swapped);

// Log the sorted array
logger.println(`Sorted array: [${D.join(', ')}]`);
