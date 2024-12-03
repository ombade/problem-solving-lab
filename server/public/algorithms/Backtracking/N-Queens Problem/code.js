// Import visualization libraries {
  const { Tracer, Array2DTracer, LogTracer, Layout, VerticalLayout } = require('algorithm-visualizer');
  // }
  
  // Initialize variables
  const N = 4; // Change this value to solve for different board sizes
  
  // Create an N x N chessboard and initialize it with 0s
  const board = Array.from({ length: N }, () => Array(N).fill(0));
  
  // Create an array to store queen positions (-1 means no queen placed yet)
  const queens = Array.from({ length: N }, () => [-1, -1]);
  
  // Define tracers for visualization
  const boardTracer = new Array2DTracer('Chessboard');
  const queenTracer = new Array2DTracer('Queen Positions');
  const logger = new LogTracer('Logs');
  Layout.setRoot(new VerticalLayout([boardTracer, queenTracer, logger]));
  
  // Set initial tracer values
  boardTracer.set(board);
  queenTracer.set(queens);
  logger.println(`Starting N-Queens problem for a ${N}x${N} board.`);
  Tracer.delay();
  
  // Function to check if placing a queen is valid
  function isValid(row, col, currentQueen) {
    for (let q = 0; q < currentQueen; q++) {
      const [qRow, qCol] = queens[q];
      // Check row, column, and diagonals
      if (qRow === row || qCol === col || Math.abs(qRow - row) === Math.abs(qCol - col)) {
        logger.println(`Conflict detected for Queen ${currentQueen} at (${row}, ${col}).`);
        return false;
      }
    }
    return true;
  }
  
  // Recursive function to place queens
  function solveNQueens(currentQueen, currentCol) {
    logger.println(`Placing Queen ${currentQueen} in Column ${currentCol}...`);
  
    // Base case: all queens placed
    if (currentQueen >= N) {
      logger.println('All queens have been placed successfully!');
      return true;
    }
  
    // Try placing the current queen in all rows of the current column
    for (let row = 0; row < N; row++) {
      logger.println(`Trying Queen ${currentQueen} at (${row}, ${currentCol})...`);
  
      // Highlight the current cell
      boardTracer.select(row, currentCol);
      Tracer.delay();
  
      if (isValid(row, currentCol, currentQueen)) {
        // Place the queen
        board[row][currentCol] = 1;
        queens[currentQueen] = [row, currentCol];
        logger.println(`Queen ${currentQueen} placed at (${row}, ${currentCol}).`);
  
        // Visualize queen placement
        boardTracer.patch(row, currentCol, 1);
        Tracer.delay();
        queenTracer.patch(currentQueen, 0, row);
        queenTracer.patch(currentQueen, 1, currentCol);
        Tracer.delay();
  
        // Recur to place the next queen
        if (solveNQueens(currentQueen + 1, currentCol + 1)) {
          return true; // Solution found
        }
  
        // Backtrack: remove the queen
        board[row][currentCol] = 0;
        queens[currentQueen] = [-1, -1];
        logger.println(`Backtracking: Removed Queen ${currentQueen} from (${row}, ${currentCol}).`);
  
        // Visualize removal
        boardTracer.depatch(row, currentCol);
        queenTracer.patch(currentQueen, 0, -1);
        queenTracer.patch(currentQueen, 1, -1);
        Tracer.delay();
      }
  
      // Deselect the current cell
      boardTracer.deselect(row, currentCol);
      Tracer.delay();
    }
  
    logger.println(`No valid position found for Queen ${currentQueen} in Column ${currentCol}. Backtracking.`);
    return false; // No solution found for this configuration
  }
  
  // Start solving the N-Queens problem
  logger.println('Starting the solver...');
  solveNQueens(0, 0);
  logger.println('Solver finished.');
  