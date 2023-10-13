import React from "react";
import ReactDOMClient from "react-dom/client";
import { Visit } from "./screens/Visit";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Visit />);
