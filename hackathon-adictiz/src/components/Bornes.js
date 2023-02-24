import React from "react";

const Bornes = () => {
    return(
        <div className="bornes-container">
            <h1 className="bornes-title">Nos autres bornes</h1>
            <div className="bornes-list">
                <div className="totem-div">
                    <img src="./img/borne1.jpeg" alt="Totem"/>
                    <div className="text">
                        <h2>Borne KIOSK</h2>
                        <p>A partir de 1490,00€ HT<br/>
                        Il s'agit d'un outil d'aide à la vente à la fois simple et efficace, 
                        conçu pour s'intégrer facilement dans tous les points de vente. Il est également très apprécié dans 
                        les musées et les institutions publiques telles que les mairies et les offices de tourisme. Sa petite 
                        taille en fait un choix pratique pour les professionnels qui se déplacent souvent, comme pour les salons 
                        professionnels et autres événements similaires.</p>
                    </div>
                </div>
                <div className="totem-div">
                    <img src="./img/borne2.png" alt="Totem"/>
                    <div className="text">
                        <h2>Borne tactile SOFT</h2>
                        <p>990,00€ HT<br/>
                        La borne interactive 22 pouces SOFT est un mariage réussi entre simplicité et technologie 
                        avancée. Elle est principalement utilisée comme borne d'information pour présenter des produits 
                        et services. Son apparence simple cache des fonctionnalités efficaces. Cette solution convient à<br/> 
                        tous les espaces d'accueil, offrant une expérience utilisateur intuitive et agréable.</p>
                    </div>
                </div>
                <div className="totem-div">
                    <img src="./img/borne3.png" alt="Totem"/>
                    <div className="text">
                        <h2>Borne totem iSLIM</h2>
                        <p>A partir de 2590,00€ HT<br/>
                        Alliant des composants électroniques performants à un design robuste et ultra-fin. Il offre une 
                        résolution d'image 4K époustouflante, mettant en valeur vos contenus multimédia. Disponible en 4 
                        tailles (32, 40, 50 et 58 pouces) et 2 couleurs (noir ou blanc), il encourage l'interaction avec 
                        le public grâce à son application multitouch. Ce totem est idéal pour les salons professionnels ou 
                        pour intégrer un nouvel agencement d'espace commercial digitalisé dans votre point de vente.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bornes