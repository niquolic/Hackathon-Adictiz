import React from "react";

const Navigation = () => {
    return(
        <div className="App-nav">
            <nav>
                <ul>
                    <li className="li-1">
                        <a href="/"><img src="./img/logo.png" alt="Adictiz"/></a>
                        <br/>
                        <p>Découvrez nos bornes</p>
                    </li>
                    <li className="li-2">
                        <a href="/">Nous contacter</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;