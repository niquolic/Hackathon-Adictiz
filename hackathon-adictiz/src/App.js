import React from "react";
import Navigation from "./components/Navigation";
import "./asset/styles/layouts/index.scss";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <img className="background_wave" src="./img/background_wave.png" alt="background_wave"/>
        </div>
    );
}

export default App;