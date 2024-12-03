// import visualization libraries {
    const { Array2DTracer, Layout, LogTracer, GraphTracer, Tracer, VerticalLayout } = require('algorithm-visualizer');
    // }
    
    // Define the ListNode class
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    
    // Define linked list nodes
    const node0 = new ListNode(0);
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    const node4 = new ListNode(4);
    const node5 = new ListNode(5);
    const node6 = new ListNode(6);
    
    // Create a linked list with a cycle
    const list = node0;
    list.next = node1;
    list.next.next = node2;
    list.next.next.next = node3;
    list.next.next.next.next = node4;
    list.next.next.next.next.next = node5;
    list.next.next.next.next.next.next = node6;
    list.next.next.next.next.next.next.next = node2;
    
    // Initialize tracers and layout
    const graphTracer = new GraphTracer("Linked List").directed();
    const logTracer = new LogTracer("Console");
    Layout.setRoot(new VerticalLayout([graphTracer, logTracer]));
    
    // Add nodes and edges to graph tracer
    graphTracer.addNode(node0.val);
    graphTracer.addNode(node1.val);
    graphTracer.addNode(node2.val);
    graphTracer.addNode(node3.val);
    graphTracer.addNode(node4.val);
    graphTracer.addNode(node5.val);
    graphTracer.addNode(node6.val);
    graphTracer.addEdge(node0.val, node1.val);
    graphTracer.addEdge(node1.val, node2.val);
    graphTracer.addEdge(node2.val, node3.val);
    graphTracer.addEdge(node3.val, node4.val);
    graphTracer.addEdge(node4.val, node5.val);
    graphTracer.addEdge(node5.val, node6.val);
    graphTracer.addEdge(node6.val, node2.val);
    Tracer.delay();
    
    // Function to detect cycle, find start, and length
    var listHasCycle = function(head) {
        // Step 1: Check if there is a cycle
        logTracer.print("Step 1: Checking for a cycle...\n");
        let slow = head.next;
        let fast = head.next.next;
        
        while (slow !== fast) {
            if (!fast || !fast.next) {
                logTracer.print("No cycle detected.\n");
                return null;
            }
            // Visualize movement of pointers
            graphTracer.select(slow.val);
            graphTracer.visit(fast.val);
            Tracer.delay();
            graphTracer.deselect(slow.val);
            graphTracer.leave(fast.val);
    
            logTracer.print(`Moving slow to ${slow.next.val}, fast to ${fast.next.next.val}\n`);
            slow = slow.next;
            fast = fast.next.next;
        }
        logTracer.print("Cycle detected!\n");
    
        // Step 2: Find the start of the cycle
        logTracer.print("Step 2: Finding the start of the cycle...\n");
        let cycleStartPosition = 0;
        slow = head;
        while (slow !== fast) {
            graphTracer.select(slow.val);
            graphTracer.visit(fast.val);
            Tracer.delay();
            graphTracer.deselect(slow.val);
            graphTracer.leave(fast.val);
    
            logTracer.print(`Moving slow to ${slow.next.val}, fast to ${fast.next.val}\n`);
            slow = slow.next;
            fast = fast.next;
            cycleStartPosition += 1;
        }
        logTracer.print(`Cycle starts at position ${cycleStartPosition} (value: ${slow.val}).\n`);
    
        // Step 3: Find the length of the cycle
        logTracer.print("Step 3: Finding the length of the cycle...\n");
        let cycleLength = 1;
        fast = slow.next;
        while (slow !== fast) {
            graphTracer.select(slow.val);
            graphTracer.visit(fast.val);
            Tracer.delay();
            graphTracer.deselect(slow.val);
            graphTracer.leave(fast.val);
    
            logTracer.print(`Visiting node ${fast.val}\n`);
            fast = fast.next;
            cycleLength += 1;
        }
        logTracer.print(`Cycle length is ${cycleLength}.\n`);
    
        return {
            cycleLength,
            cycleStartPosition,
        };
    };
    
    // Execute and log results
    const res = listHasCycle(list);
    if (res) {
        logTracer.print(`Cycle start position: ${res.cycleStartPosition}\n`);
        logTracer.print(`Cycle length: ${res.cycleLength}\n`);
    }
    