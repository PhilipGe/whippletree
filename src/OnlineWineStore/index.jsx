import React from "react";
import ReactDOMClient from "react-dom/client";
import { OnlineWineStore } from "./screens/OnlineWineStore";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<OnlineWineStore />);
