import React from "react";

const Node = ({ id, label, onDelete }) => {
    return (
        <div className="flex items-center justify-between bg-blue-500 text-white p-2 rounded-md shadow-md w-40">
            <span className="text-sm font-medium truncate">{label}</span>
            <button
                onClick={() => onDelete(id)}
                className="ml-2 px-2 py-1 bg-red-500 hover:bg-red-600 text-xs font-bold rounded transition duration-200"
                aria-label="Delete node"
            >
                ✕
            </button>
        </div>
    );
};

export default Node;
