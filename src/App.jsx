import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import WorkflowBuilder from "./pages/WorkflowBuilder";
import "./assets/styles.css";  

const App = () => {
    return (
        <Provider store={store}>
            <WorkflowBuilder />
        </Provider>
    );
};

export default App;
