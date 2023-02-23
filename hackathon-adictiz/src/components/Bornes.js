import React from "react";

const Bornes = () => {
    return(
        <div className="bornes-container">
            <h1 className="bornes-title">Nos autres bornes</h1>
            <div className="bornes-list">
                <div className="totem-div">
                    <img src="./img/totem-borne.png" alt="Totem"/>
                    <div><h2>Borne Totem</h2></div>
                </div>
                <div className="totem-div">
                    <img src="./img/totem-borne.png" alt="Totem"/>
                    <h2>Borne Totem</h2>
                </div>
                <div className="totem-div">
                    <img src="./img/totem-borne.png" alt="Totem"/>
                    <h2>Borne Totem</h2>
                </div>
            </div>
        </div>
    );
};

export default Bornes