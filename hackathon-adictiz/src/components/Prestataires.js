import React from "react";

const Prestataires = () => {
    return(
        <div>
            <h1 className="presta-title">Prestataires</h1>
            <div className="presta-list">
                <div className="presta-div">
                    <img className="img-bw" src="./img/comforyou.png" alt="ComForYou"/>
                </div>
                <div className="presta-div">
                    <img className="img-bw" src="./img/ezion.png" alt="Ezion"/>
                </div>
                <div className="presta-div">
                    <a href="https://www.digilor.fr">
                        <img src="./img/digilor.png" alt="Digilor"/>
                    </a>
                </div>
                <div className="presta-div">
                    <img className="img-bw" src="./img/lagona.png" alt="Lagona"/>
                </div>
                <div className="presta-div">
                    <img className="img-bw" src="./img/tactiz.png" alt="Tactiz"/>
                </div>
            </div>
        </div>
    );
};

export default Prestataires;