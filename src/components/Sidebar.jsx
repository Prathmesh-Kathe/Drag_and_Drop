import React from "react";

const Sidebar = () => {
    const nodeTypes = ["Start", "Process", "Decision"];

    return (
        <aside className="w-64 h-screen bg-gray-800 text-white p-4 shadow-lg">
            <h2 className="text-xl font-semibold border-b border-gray-600 pb-2">Node Types</h2>
            {nodeTypes.map((type) => (
                <div
                    key={type}
                    draggable
                    onDragStart={(e) => {
                        e.dataTransfer.setData("application/reactflow", type);
                        e.dataTransfer.effectAllowed = "move";
                    }}
                    className="bg-gray-700 p-3 rounded-md cursor-pointer text-center 
                               hover:bg-blue-500 transition duration-200 mt-3"
                >
                    {type}
                </div>
            ))}
        </aside>
    );
};

export default Sidebar;
