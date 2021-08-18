import React from 'react';
import Aside from "./Aside";
import styles from "../styles/List.module.css";

function Accueil(){
    return <div className={styles.contenu}>
        <div className={styles.contenuDetail}>
            <h1>Page d'accueil</h1>
            <div className={"row"}>
                <div className={"col-6"}>
                    colone1
                </div>
                <div className={"col-6"}>
                    colone2
                </div>
            </div>
        </div>
        <div className={styles.aside}>
            <Aside/>
        </div>
    </div>
}
export default Accueil;
