import React from "react";

const Bornes = () => {
    return(
        <div className="bornes-container">
            <h1 className="bornes-title">Nos autres bornes</h1>
            <div className="bornes-list">
                <div className="totem-div">
                    <img src="./img/borne1.jpeg" alt="Borne KIOSK"/>
                    <div className="text">
                        <h2>Borne KIOSK</h2>
                        <p>A partir de 1490,00€ HT<br/><br/>
                        Il s'agit d'un outil d'aide à la vente à la fois simple et efficace, 
                        conçu pour s'intégrer facilement dans tous les points de vente. Il est également très apprécié dans 
                        les musées et les institutions publiques telles que les mairies et les offices de tourisme. Sa petite 
                        taille en fait un choix pratique pour les professionnels qui se déplacent souvent, comme pour les salons 
                        professionnels et autres événements similaires.</p>
                    </div>
                </div>
                <div className="totem-div">
                    <img src="./img/borne2.png" alt="Borne SOFT"/>
                    <div className="text">
                        <h2>Borne tactile SOFT</h2>
                        <p>990,00€ HT<br/><br/>
                        La borne interactive 22 pouces SOFT est un mariage réussi entre simplicité et technologie 
                        avancée. Elle est principalement utilisée comme borne d'information pour présenter des produits 
                        et services. Son apparence simple cache des fonctionnalités efficaces. Cette solution convient à<br/> 
                        tous les espaces d'accueil, offrant une expérience utilisateur intuitive et agréable.</p>
                    </div>
                </div>
                <div className="totem-div">
                    <img src="./img/borne3.png" alt="Borne iSLIM"/>
                    <div className="text">
                        <h2>Borne interactive WAVE</h2>
                        <p>A partir de 2990,00€ HT<br/><br/>
                        Il s'agit d'une nouvelle borne interactive dotée d'un design élégant et de lignes courbes 
                        qui attirent les visiteurs des points de vente. Elle dispose également d'une<br/> configuration 
                        informatique puissante pour déployer des applications <br/>tactiles multitouch. Cette borne est 
                        disponible en trois tailles différentes : 43, 50 et 55 pouces.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bornes