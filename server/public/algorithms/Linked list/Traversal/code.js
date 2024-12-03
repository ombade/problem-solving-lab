// import visualization libraries {
    const { Array2DTracer, Layout, LogTracer, GraphTracer, Tracer, VerticalLayout } = require('algorithm-visualizer');
    // }
    
    // define tracer variables {
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    
    const node0 = new ListNode(0);
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    const node4 = new ListNode(4);
    
    const list = node0;
    list.next = node1;
    list.next.next = node2;
    list.next.next.next = node3;
    list.next.next.next.next = node4;
    
    const graphTracer = new GraphTracer("Linked List Traversal").directed();
    const logTracer = new LogTracer("Console");
    Layout.setRoot(new VerticalLayout([graphTracer, logTracer]));
    
    graphTracer.addNode(node0.val);
    graphTracer.addNode(node1.val);
    graphTracer.addNode(node2.val);
    graphTracer.addNode(node3.val);
    graphTracer.addNode(node4.val);
    graphTracer.addEdge(node0.val, node1.val);
    graphTracer.addEdge(node1.val, node2.val);
    graphTracer.addEdge(node2.val, node3.val);
    graphTracer.addEdge(node3.val, node4.val);
    
    Tracer.delay();
    // }
    
    function traverseLinkedList(head) {
        let current = head;
        while (current !== null) {
            // visualize {
            graphTracer.select(current.val);
            logTracer.println(`Visiting node with value: ${current.val}`);
            Tracer.delay();
            
            graphTracer.deselect(current.val);
            // }
            current = current.next;
        }
        logTracer.print("\nTraversal Complete.");
    }
    
    traverseLinkedList(list);
    
    