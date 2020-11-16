import React, { useState, useEffect } from "react";
import Home from "./home";
import Welcome from "./welcome"
import { BrowserRouter, Route } from "react-router-dom";

function App() {


    return (
        <div className="container">
            <BrowserRouter>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <Welcome  />                   
                    )}
                />
                <Route
                exact
                path="/home"
                render={() => (
                    <Home  />                   
                )}
            />
            </BrowserRouter>
        </div>
    );
}

export default App;