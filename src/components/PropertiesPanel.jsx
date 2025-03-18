import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNodes } from "../store/workflowSlice";

const PropertiesPanel = ({ selectedNode }) => {
    const dispatch = useDispatch();
    const nodes = useSelector((state) => state.workflow.nodes);

    if (!selectedNode) return null;

    const updateLabel = (id, label) => {
        const updatedNodes = nodes.map(node =>
            node.id === id ? { ...node, data: { ...node.data, label } } : node
        );
        dispatch(setNodes(updatedNodes));
    };

    return (
        <div className="absolute top-10 left-10 bg-white shadow-lg p-4 rounded">
            <h3 className="text-lg font-bold">Node Properties</h3>
            <label className="block mt-2 text-sm">Label:</label>
            <input
                type="text"
                className="border p-2 w-full"
                value={selectedNode.data.label}
                onChange={(e) => updateLabel(selectedNode.id, e.target.value)}
            />
        </div>
    );
};

export default PropertiesPanel;
