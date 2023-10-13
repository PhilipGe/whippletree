import React from "react";
import ReactDOMClient from "react-dom/client";
import { BookAnEvent } from "./screens/BookAnEvent";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<BookAnEvent />);
