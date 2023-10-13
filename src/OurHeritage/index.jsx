import React from "react";
import ReactDOMClient from "react-dom/client";
import { OurHeritage } from "./screens/OurHeritage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<OurHeritage />);
