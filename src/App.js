import React from "react";
import ReactDOMClient from "react-dom/client";
// import ReactDOMClient from "react-dom/client";
// import { Home } from "./Home/screens/Home/Home";
// import { OnlineWebStore } from "./screens/OnlineWebStore";
// import { BookAnEvent } from "./screens/BookAnEvent";
// import { Visit } from "./Visit/screens/Visit";
import { Visit } from "./Visit/screens/Visit/Visit";
import { BookAnEvent } from "./BookAnEvent/screens/BookAnEvent/BookAnEvent";
// import { OurHeritage } from "./screens/OurHeritage";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home/screens/Home/Home";
import { OnlineWineStore } from "./OnlineWineStore/screens/OnlineWineStore/OnlineWineStore";
import { OurHeritage } from "./OurHeritage/screens/OurHeritage/OurHeritage";

function App() {
    return (
      <div className="wrapper">
        <HashRouter>
        <Routes>
            <Route path="/" element = {<Home />}>
            </Route>
            <Route path="/online-wine-store" element = {<OnlineWineStore />}>
            </Route>
            <Route path="/book-an-event" element = {<BookAnEvent /> }>
            </Route>
            <Route path="/visit" element = {<Visit > </Visit>}>
            </Route>
            <Route path="/our-heritage" element = {<OurHeritage />}>
            </Route>
            </Routes>
        </HashRouter>
      </div>
    );
  }
  
const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<App/>);