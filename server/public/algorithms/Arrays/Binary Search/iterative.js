// import visualization libraries {
  const { Tracer, Array1DTracer, ChartTracer, LogTracer, Randomize, Layout, VerticalLayout } = require('algorithm-visualizer');
  // }
  
  // define tracer variables {
  const chart = new ChartTracer();
  const tracer = new Array1DTracer();
  const logger = new LogTracer();
  Layout.setRoot(new VerticalLayout([chart, tracer, logger]));
  const D = Randomize.Array1D({ N: 15, value: () => Randomize.Integer({ min: 0, max: 50 }), sorted: true });
  tracer.set(D);
  tracer.chart(chart);
  Tracer.delay();
  // }
  
  function BinarySearch(array, element) { 
    // array = sorted array, element = element to be found
    let minIndex = 0;
    let maxIndex = array.length - 1;
  
    logger.println(`Array: [${array.join(', ')}]`);
    logger.println(`Searching for element: ${element}`);
   
  
    while (minIndex <= maxIndex) {
      const middleIndex = Math.floor((minIndex + maxIndex) / 2);
      const testElement = array[middleIndex];
  
      // Log current step details
      logger.println(`Step: low = ${minIndex}, mid = ${middleIndex}, high = ${maxIndex}`);
      logger.println(`Comparing element at mid (${testElement}) with target (${element})`);
  
      // Visualize current state
      tracer.select(minIndex, maxIndex);
      Tracer.delay();
      tracer.patch(middleIndex);
      Tracer.delay();
      tracer.depatch(middleIndex);
      tracer.deselect(minIndex, maxIndex);
  
      if (testElement < element) {
        logger.println(`Element at mid (${testElement}) is less than target (${element}). Going right.`);
        minIndex = middleIndex + 1;
      } else if (testElement > element) {
        logger.println(`Element at mid (${testElement}) is greater than target (${element}). Going left.`);
        maxIndex = middleIndex - 1;
      } else {
        logger.println(`Element found at index ${middleIndex}!`);
        tracer.select(middleIndex); // Highlight the found element
        return middleIndex;
      }
  
    }
  
    logger.println(`${element} is not found in the array.`);
    return -1;
  }
  
  const element = D[Randomize.Integer({ min: 0, max: D.length - 1 })];
  
  // Log the search process
  logger.println(`Starting Binary Search for element: ${element}`);
  BinarySearch(D, element);
  