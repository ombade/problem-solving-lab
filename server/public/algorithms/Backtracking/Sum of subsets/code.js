// Import visualization libraries {
    const { Tracer, Array1DTracer, LogTracer, Layout, VerticalLayout } = require('algorithm-visualizer');
    // }
    
    // Define the input set and target sum
    const set = [3, 1, 2, 5];
    const target = 5;
    
    // Tracer setup
    const setTracer = new Array1DTracer('Set');
    const solutionTracer = new Array1DTracer('Subset Solution');
    const logger = new LogTracer('Logs');
    Layout.setRoot(new VerticalLayout([setTracer, solutionTracer, logger]));
    
    // Initialize tracers
    setTracer.set(set);
    solutionTracer.set(Array(set.length).fill(0));
    logger.println(`Target Sum: ${target}`);
    Tracer.delay();
    
    // Recursive function for finding subsets that sum to the target
    function findSubsets(currentIndex, currentSum, subset) {
      // Log the current state
      logger.println(`Exploring index: ${currentIndex}, current sum: ${currentSum}, subset: [${subset}]`);
      
      // Base case: if current sum equals the target, print the solution
      if (currentSum === target) {
        logger.println(`Found a valid subset: [${subset.filter((x) => x === 1).map((x, i) => set[i])}]`);
        solutionTracer.set(subset);
        Tracer.delay();
        return true; // Return true to indicate success
      }
    
      // Base case: if the index is out of bounds or current sum exceeds the target
      if (currentIndex >= set.length || currentSum > target) {
        logger.println(`Backtracking from index: ${currentIndex}, sum: ${currentSum}`);
        return false;
      }
    
      // Include the current element
      logger.println(`Include element ${set[currentIndex]} at index ${currentIndex}`);
      subset[currentIndex] = 1;
      solutionTracer.patch(currentIndex, 1);
      Tracer.delay();
      if (findSubsets(currentIndex + 1, currentSum + set[currentIndex], subset)) {
        return true;
      }
      solutionTracer.depatch(currentIndex);
    
      // Exclude the current element
      logger.println(`Exclude element ${set[currentIndex]} at index ${currentIndex}`);
      subset[currentIndex] = 0;
      solutionTracer.patch(currentIndex, 0);
      Tracer.delay();
      if (findSubsets(currentIndex + 1, currentSum, subset)) {
        return true;
      }
      solutionTracer.depatch(currentIndex);
    
      return false; // Return false if no solution is found
    }
    
    // Initialize the subset array
    const subset = Array(set.length).fill(0);
    
    // Start solving the problem
    logger.println('Starting the Sum of Subset Problem...');
    findSubsets(0, 0, subset);
    logger.println('Solver finished.');
    