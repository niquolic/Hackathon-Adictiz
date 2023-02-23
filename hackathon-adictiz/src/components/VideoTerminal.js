import React from "react";

const VideoTerminal = () => {
    return(
        <div className="App-video">
            <div className="video-container">
                <div className="video">
                    <iframe title="borne_video" width="750" height="400" src="https://www.youtube.com/embed/JezwwvHetpg?autoplay=1" frameborder="0" allowfullscreen></iframe>
                </div>
                <div>
                    <button>
                        <span className="business">LE BUSINESS PLAN</span>
                        <span className="material-icons">
                            arrow_forward
                        </span>
                    </button>
                </div>
            </div>
            <div className="terminal-container">
                <div className="terminal-header">
                    <span>Meilleure vente</span>
                </div>
                <div className="terminal-img">
                    <img src="./img/borne.png" alt="borne"/>
                </div>
                <div className="terminal-desc">
                    <div>
                        Disponible en 22, 27, 32 et 43 pouces
                    </div>
                    <div>
                        Dès 1490,00€ HT
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoTerminal;