import { createSlice } from "@reduxjs/toolkit";

const workflowSlice = createSlice({
    name: "workflow",
    initialState: { nodes: [], edges: [] },
    reducers: {
        setNodes: (state, action) => {
            state.nodes = action.payload;
        },
        setEdges: (state, action) => {
            state.edges = action.payload;
        },
        addNode: (state, action) => {
            state.nodes.push(action.payload);
        },
        removeNode: (state, action) => {
            state.nodes = state.nodes.filter(n => n.id !== action.payload);
        },
    },
});

export const { setNodes, setEdges, addNode, removeNode } = workflowSlice.actions;
export default workflowSlice.reducer;
