import React from "react";

const Enjeux = () => {
    return(
        <div className="container-enjeux">
            <div className="caroussel">
                <div className="enjeux">
                    <div className="rounded-background">
                        <span className="material-icons">
                            celebration
                        </span>
                    </div>
                    <div className="title">ANIMATION IN STORE</div>
                    <div className="description">
                        Animer, offrir du divertissement, faire rêver, événementialiser… 
                        la borne de jeu est un média instore puissant pour animer, 
                        interagir avec vos clients/visiteurs et leur faire vivre une expérience positive en point de vente.
                    </div>
                </div>
                <div className="enjeux">
                    <div className="rounded-background">
                        <span className="material-icons">
                            analytics
                        </span>
                    </div>
                    <div className="title">COLLECTE DE DATA</div>
                    <div className="description">
                    Recueillir des données clients ou prospects, embaser, qualifier votre base de données… 
                    Adictiz vous conseille pour optimiser votre parcours jeu et 
                    mettre en place des formulaires optimisés datas afin d’obtenir les meilleurs taux d’optin. 
                    </div>
                </div>
                <div className="enjeux">
                    <div className="rounded-background">
                        <span className="material-icons">
                        volunteer_activism
                        </span>
                    </div>
                    <div className="title">FIDÉLISATION</div>
                    <div className="description">
                    Animation de la carte de fidélité, mécanique d’incitation trafic, parcours seconde chance pour les clients cartés… 
                    de nombreuses solutions existent pour travailler la fidélisation et faire revenir vos clients.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enjeux;