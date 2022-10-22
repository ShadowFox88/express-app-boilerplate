import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import "@/client/styles/globals.css";
import Home from "@/client/pages/Home";

const ROOT_ELEMENT = document.getElementById("root");
const ROOT = ReactDOM.createRoot(ROOT_ELEMENT);

ROOT.render(
    <Router>
        <Routes>
            <Route element={<Home />} path="/" />
        </Routes>
    </Router>
);
