import React, { useState, useEffect } from "react";
import Home from "./home";
import Welcome from "./welcome";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
    return (
        <div
            className="container-fluid"
            style={{ paddingLeft: 0, paddingRight: 0 }}
        >
            <BrowserRouter>
                <Route exact path="/" render={() => <Welcome />} />
                <Route exact path="/home" render={() => <Home />} />
            </BrowserRouter>
        </div>
    );
}

export default App;