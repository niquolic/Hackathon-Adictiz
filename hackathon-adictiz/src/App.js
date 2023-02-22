import React from "react";
import Navigation from "./components/Navigation";
import Bornes from "./components/Bornes";
import Concept from "./components/Concept";
import VideoTerminal from "./components/VideoTerminal";
import "./asset/styles/layouts/index.scss";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <img className="background_wave" src="./img/background_wave.png" alt="background_wave"/>
            <Concept/>
            <VideoTerminal/>
            <Bornes/>
        </div>
    );
}

export default App;