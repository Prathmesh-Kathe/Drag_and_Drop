export const saveWorkflow = async (workflow) => {
  localStorage.setItem("workflowData", JSON.stringify(workflow));
};

export const loadWorkflow = async () => {
  const savedData = localStorage.getItem("workflowData");
  return savedData ? JSON.parse(savedData) : { nodes: [], edges: [] };
};
