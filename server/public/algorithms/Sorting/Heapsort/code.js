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

// Heap Sort function
function heapSort(array, size) {
  logger.println("Building the max heap...");
  // Build max heap
  for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
    logger.println(`Heapifying subtree rooted at index ${i}`);
    heapify(array, size, i);
  }
  logger.println(`Max heap built: [${array.join(', ')}]`);
 

  // Extract elements from heap one by one
  for (let j = size - 1; j >= 0; j--) {
    logger.println(`Swapping root (${array[0]}) with element at index ${j} (${array[j]})`);
    const temp = array[0];
    array[0] = array[j];
    array[j] = temp;

    // Visualize the swap
    tracer.patch(0, array[0]);
    tracer.patch(j, array[j]);
    Tracer.delay();
    tracer.depatch(0);
    tracer.depatch(j);
    tracer.select(j);
    logger.println(`Array after swap: [${array.join(', ')}]`);
    Tracer.delay();

    // Heapify the reduced heap
    logger.println(`Heapifying the reduced heap of size ${j}`);
    heapify(array, j, 0);

    // Deselect the sorted element
    tracer.deselect(j);
    logger.println(`Array after heapify: [${array.join(', ')}]`);
   
  }
}

// Function to maintain the max heap property
function heapify(array, size, root) {
  let largest = root;
  const left = 2 * root + 1;
  const right = 2 * root + 2;

  logger.println(`Heapifying node at index ${root} (value: ${array[root]}) with left child index ${left} and right child index ${right}`);
  if (left < size && array[left] > array[largest]) {
    largest = left;
    logger.println(`Left child (${array[left]}) is larger than root (${array[root]}), updating largest to index ${left}`);
  }

  if (right < size && array[right] > array[largest]) {
    largest = right;
    logger.println(`Right child (${array[right]}) is larger than root (${array[largest]}), updating largest to index ${right}`);
  }

  if (largest !== root) {
    logger.println(`Swapping elements: ${array[root]} (root) and ${array[largest]} (largest)`);
    const temp = array[root];
    array[root] = array[largest];
    array[largest] = temp;

    // Visualize the swap
    tracer.patch(root, array[root]);
    tracer.patch(largest, array[largest]);
    Tracer.delay();
    tracer.depatch(root);
    tracer.depatch(largest);

    // Recursively heapify the affected subtree
    heapify(array, size, largest);
  } else {
    logger.println(`No swap needed at index ${root}`);
  }
}

// Perform Heap Sort
heapSort(D, D.length);

// Log the final sorted array
logger.println(`Final sorted array: [${D.join(', ')}]`);
