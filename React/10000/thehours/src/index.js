import React from "react";
import '../src/index.css'
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import './index.css'
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
