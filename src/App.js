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
import RenderPropsExample from "./pages/RenderPropsExample";
import UseEffectExample from "./pages/UseEffectExample";

function App() {
    return (
        <Router>
            <Link to="/context">Context</Link>
            <Link to="/refs">Refs</Link>
            <Link to="/hoc">HOC</Link>
            <Link to="/render-props">RenderProps</Link>
            <Link to="/use-effect">UseEffect</Link>

            <Route path="/context" component={ContextExample}/>
            <Route path="/refs" component={RefsExample}/>
            <Route path="/hoc" component={HOCExample}/>
            <Route path="/render-props" component={RenderPropsExample}/>
            <Route path="/use-effect" component={UseEffectExample}/>

        </Router>
    );
}

export default App;
