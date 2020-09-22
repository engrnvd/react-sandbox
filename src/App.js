import React, {useContext, useState} from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import ContextExample from "./pages/ContextExample";
import RefsExample from "./pages/RefsExample";

function App() {
    return (
        <Router>
            <Link to="/context">Context</Link>
            <Link to="/refs">Refs</Link>

            <Route path="/context" component={ContextExample}/>
            <Route path="/refs" component={RefsExample}/>
        </Router>
    );
}

export default App;
