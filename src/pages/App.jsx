import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "@/styles/globals.css";
import Home from "@/pages/Home";

const ROOT_ELEMENT = document.getElementById("root");
const ROOT = ReactDOM.createRoot(ROOT_ELEMENT);

ROOT.render(
    <BrowserRouter>
        <Routes>
            <Route element={<Home />} path="/" />
        </Routes>
    </BrowserRouter>
);
