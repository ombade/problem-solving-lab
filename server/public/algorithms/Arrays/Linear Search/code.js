// Import visualization libraries
const { Tracer, Array1DTracer, LogTracer, Randomize, Layout, VerticalLayout } = require('algorithm-visualizer');

// Define tracer variables
const tracer = new Array1DTracer(); // To visualize the array
const logger = new LogTracer();    // To log messages
Layout.setRoot(new VerticalLayout([tracer, logger])); // Set the layout
const D = Randomize.Array1D({ N: 15, value: () => Randomize.Integer({ min: 0, max: 50 }) }); // Generate a random array
tracer.set(D); 
Tracer.delay(); // Add delay to start visualization

// Linear Search Function
function LinearSearch(array, element) {
  logger.println(`Starting Linear Search for ${element} in array: [${array.join(', ')}]`);
  
  for (let i = 0; i < array.length; i++) {
    // Visualize the current element being checked
    tracer.select(i);
    logger.println(`Checking index ${i}, value: ${array[i]}`);
    Tracer.delay();

    if (array[i] === element) {
      // If the element is found
      logger.println(`${element} is found at index ${i}!`);
      tracer.patch(i); // Highlight the found element
      Tracer.delay();
      tracer.depatch(i); // Remove the highlight
      tracer.deselect(i);
      return i;
    }

    // Deselect the current element if not matched
    tracer.deselect(i);
  }

  // If the element is not found
  logger.println(`${element} is not found in the array.`);
  return -1;
}

// Select a random element from the array to search
const element = D[Randomize.Integer({ min: 0, max: D.length - 1 })];

// Logger message before search begins
logger.println(`Using Linear Search to find ${element}`);
Tracer.delay();

// Execute the Linear Search
LinearSearch(D, element);
