import React from 'react';
import styles from '../styles/List.module.css';
import Aside from "./Aside";

const productList = [
    "Nekfeu",
    "Orelsan",
    "BigFlo-Oli",
    "Lomepal",
    "Eminem",
    "Dr.Dre",
    "Drake",
    "Pop-Smoke"
]
function List(){
    return <div className={styles.contenu}>
        <ul>
            {productList.map((product, index) => (
                <li key={`${product}-${index}`}>{product}</li>
            ))}
        </ul>
        <div className={styles.aside}>
            <Aside/>
        </div>
    </div>
}

export default List;
