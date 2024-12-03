// Import visualization libraries
const { Tracer, Array1DTracer, ChartTracer, LogTracer, Randomize, Layout, VerticalLayout } = require('algorithm-visualizer');

// Define tracer variables
const chart = new ChartTracer();
const tracer = new Array1DTracer();
const logger = new LogTracer();
Layout.setRoot(new VerticalLayout([chart, tracer, logger]));
const D = Randomize.Array1D({ N: 7}); // Generate a random array 
tracer.set(D); // Set the array for visualization
tracer.chart(chart); // Link the chart tracer
Tracer.delay();

// Log the original array
logger.println(`Original array: [${D.join(', ')}]`);

// Selection Sort Algorithm
for (let i = 0; i < D.length - 1; i++) {
  let minJ = i;

  // Log the start of a pass
  logger.println(`Starting pass ${i + 1}, current array: [${D.join(', ')}]`);
  logger.println(`Assume element at index ${i} (${D[i]}) is the smallest.`);

  // Highlight the current element
  tracer.select(i);
  chart.select(i);
  Tracer.delay();

  for (let j = i + 1; j < D.length; j++) {
    // Highlight the element being compared
      // Log the comparison
    logger.println(`Comparing element at index ${j} (${D[j]}) with current minimum (${D[minJ]} at index ${minJ}).`);
    tracer.select(j);
    chart.select(j);
    Tracer.delay();

  

    if (D[j] < D[minJ]) {
      minJ = j;
      logger.println(`New minimum found: ${D[j]} at index ${j}.`);

      // Highlight the new minimum
      tracer.patch(j);
      chart.patch(j);
      Tracer.delay();

      // Remove highlight from the previous minimum
      tracer.depatch(j);
      chart.depatch(j);
    }

    // Deselect the compared element
    tracer.deselect(j);
    chart.deselect(j);
  }

  if (minJ !== i) {
    logger.println(`Swapping elements at index ${i} (${D[i]}) and index ${minJ} (${D[minJ]}).`);

    // Perform the swap
    const temp = D[i];
    D[i] = D[minJ];
    D[minJ] = temp;

    // Visualize the swap
    tracer.patch(i, D[i]);
    tracer.patch(minJ, D[minJ]);
    chart.patch(i, D[i]);
    chart.patch(minJ, D[minJ]);
    Tracer.delay();

    tracer.depatch(i);
    tracer.depatch(minJ);
    chart.depatch(i);
    chart.depatch(minJ);
  } else {
    logger.println(`No swap needed for pass ${i + 1}.`);
  }

  // Deselect the current element
  tracer.deselect(i);
  chart.deselect(i);

  // Log the state of the array after the pass
  logger.println(`Array after pass ${i + 1}: [${D.join(', ')}]`);
}

// Log the sorted array
logger.println(`Sorted array: [${D.join(', ')}]`);
