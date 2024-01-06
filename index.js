import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./src/pages/home/home";
import Checkout from "./src/pages/checkout/checkout";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const App = () => {
    return <div>
        <Router>
            <Routes>
            <Route path="/" Component={Home} />
            <Route path="/checkout" Component={Checkout} />
            </Routes>
        </Router>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);