// Import visualization libraries
const { Tracer, Array1DTracer, ChartTracer, LogTracer, Randomize, Layout, VerticalLayout } = require('algorithm-visualizer');

// Define tracer variables
const chart = new ChartTracer(); // To visualize as a chart
const tracer = new Array1DTracer(); // To visualize the array
const logger = new LogTracer();    // To log messages
Layout.setRoot(new VerticalLayout([chart, tracer, logger])); // Set the layout
const D = Randomize.Array1D({ N: 7}); // Generate a random array
tracer.set(D); 
tracer.chart(chart); // Link the array tracer with the chart tracer
Tracer.delay(); 

// Log the original array
logger.println(`Original array: [${D.join(', ')}]`);

// Start Insertion Sort
for (let i = 1; i < D.length; i++) {
  const key = D[i];
  logger.println(`Iteration ${i}: Inserting ${key} into the sorted portion of the array.`);

  // Visualize selection of the key element
  tracer.select(i);
  Tracer.delay();

  let j;
  for (j = i - 1; (j >= 0) && (D[j] > key); j--) {
    // Log the comparison
    logger.println(`Comparing ${D[j]} (index ${j}) > ${key} (key), moving ${D[j]} to the right.`);

    // Move the current element to the next position
    D[j + 1] = D[j];

    // Visualize the movement
    tracer.patch(j + 1, D[j + 1]);
    Tracer.delay();
    tracer.depatch(j + 1);
  }

  // Place the key in the correct position
  D[j + 1] = key;
  logger.println(`Placed ${key} at index ${j + 1}. Current array state: [${D.join(', ')}]`);

  // Visualize the placement of the key
  tracer.patch(j + 1, D[j + 1]);
  Tracer.delay();
  tracer.depatch(j + 1);
  tracer.deselect(i);

  // Log the state of the array after the current iteration
  logger.println(`Array after iteration ${i}: [${D.join(', ')}]`);

}

// Log the final sorted array
logger.println(`Sorted array: [${D.join(', ')}]`);
