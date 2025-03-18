import React, { useCallback, useRef } from "react";
import ReactFlow, { addEdge, Background, ReactFlowProvider } from "reactflow";
import { useDispatch, useSelector } from "react-redux";
import { setNodes, setEdges } from "../store/workflowSlice";
import "reactflow/dist/style.css";

const Canvas = ({ setSelectedNode }) => {
    const dispatch = useDispatch();
    const { nodes, edges } = useSelector((state) => state.workflow);
    const reactFlowWrapper = useRef(null);

    const onConnect = useCallback(
        (params) => dispatch(setEdges([...edges, addEdge(params, edges)])),
        [dispatch, edges]
    );

    const onDrop = useCallback(
        (event) => {
            event.preventDefault();
            const type = event.dataTransfer.getData("application/reactflow");
            if (!type || !reactFlowWrapper.current) return;

            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
            const position = {
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            };

            const newNode = {
                id: `${Date.now()}`,
                type: "default",
                position,
                data: { label: `${type} Node` },
            };

            dispatch(setNodes([...nodes, newNode]));
        },
        [dispatch, nodes]
    );

    const onNodeClick = (event, node) => setSelectedNode(node);

    return (
        <ReactFlowProvider>
            <div 
                ref={reactFlowWrapper}
                className="w-full h-screen md:h-[80vh] rounded-lg overflow-hidden shadow-md bg-gray-50"
                onDrop={onDrop}
                onDragOver={(e) => e.preventDefault()}
            >
                <ReactFlow 
                    nodes={nodes} 
                    edges={edges} 
                    onConnect={onConnect} 
                    onNodeClick={onNodeClick}
                    fitView
                    className="bg-gray-100 touch-none"
                    style={{ width: "100%", height: "100%" }}
                >
                    <Background />
                </ReactFlow>
            </div>
        </ReactFlowProvider>
    );
};

export default Canvas;
