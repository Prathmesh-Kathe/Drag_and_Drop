import React, { useEffect, useState, useCallback } from "react";
import ReactFlow, {
  addEdge,
  Background,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  Controls,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";
import Sidebar from "../components/Sidebar";

const initialNodes = [];
const initialEdges = [];

const WorkflowBuilder = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState("");
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedWorkflow = JSON.parse(localStorage.getItem("workflow"));
    if (savedWorkflow) {
      setNodes(savedWorkflow.nodes);
      setEdges(savedWorkflow.edges);
    }
  }, [setNodes, setEdges]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow");
      if (!type) return;

      const position = { x: event.clientX, y: event.clientY };
      const newNode = {
        id: `${Date.now()}`,
        type: "default",
        position,
        data: { label: `${type} Node`, description: "" },
        draggable: true,
      };

      setHistory([...history, { nodes, edges }]);
      setNodes((nds) => [...nds, newNode]);
    },
    [setNodes, nodes, edges, history]
  );

  const deleteNode = (id) => {
    setHistory([...history, { nodes, edges }]);
    setNodes((nds) => nds.filter((node) => node.id !== id));
    setEdges((eds) =>
      eds.filter((edge) => edge.source !== id && edge.target !== id)
    );
    setSelectedNode(null);
  };

  const updateNodeData = (id, newData) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, ...newData } } : node
      )
    );

    // 🔥 Ensure `selectedNode` gets updated
    setSelectedNode((prev) =>
      prev && prev.id === id ? { ...prev, data: { ...prev.data, ...newData } } : prev
    );
  };


  const saveWorkflow = () => {
    localStorage.setItem("workflow", JSON.stringify({ nodes, edges }));
    alert("Workflow saved!");
  };

  const loadWorkflow = () => {
    const savedData = JSON.parse(localStorage.getItem("workflow"));
    if (savedData) {
      setNodes(savedData.nodes);
      setEdges(savedData.edges);
    }
  };

  return (
    <div
      className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        } h-screen flex`}
    >
      <Sidebar />
      <main className="flex-1 flex flex-col items-center p-4">
        <ReactFlowProvider>
          <div
            className="w-full h-[80vh] rounded-lg shadow-lg relative overflow-hidden"
            onDrop={onDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onNodeClick={(event, node) => setSelectedNode(node)}
              fitView
            >
              <Background />
              <Controls />
              <MiniMap />
            </ReactFlow>

            <div className="absolute bottom-4 left-4 flex space-x-2">
              <button
                onClick={saveWorkflow}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                onClick={loadWorkflow}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Load
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="bg-gray-700 text-white px-4 py-2 rounded"
              >
                Toggle Dark Mode
              </button>
            </div>
          </div>
        </ReactFlowProvider>

        {selectedNode && selectedNode.data && (
          <div className="absolute top-10 right-10 bg-white shadow-lg p-4 rounded">
            <h3 className="text-lg font-bold">Node Properties</h3>
            <input
              type="text"
              className="border p-2 w-full"
              value={selectedNode.data.label || ""}
              onChange={(e) =>
                updateNodeData(selectedNode.id, { label: e.target.value })
              }
            />
            <textarea
              className="border p-2 w-full"
              value={selectedNode.data.description || ""}
              onChange={(e) =>
                updateNodeData(selectedNode.id, { description: e.target.value })
              }
            />
            <button
              className="bg-red-500 text-white px-4 py-2 rounded mt-2"
              onClick={() => deleteNode(selectedNode.id)}
            >
              Delete Node
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default WorkflowBuilder;
