import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import ContextExample from "./pages/ContextExample";
import RefsExample from "./pages/RefsExample";
import HOCExample from "./pages/HOCExample";

function App() {
    return (
        <Router>
            <Link to="/context">Context</Link>
            <Link to="/refs">Refs</Link>
            <Link to="/hoc">HOC</Link>

            <Route path="/context" component={ContextExample}/>
            <Route path="/refs" component={RefsExample}/>
            <Route path="/hoc" component={HOCExample}/>
        </Router>
    );
}

export default App;
