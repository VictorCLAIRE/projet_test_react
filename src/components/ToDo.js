import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ToDo.module.css';

const aliments=[
    "Lait",
    "Oeuf",
    "Farine",
    "Levure"
]

function ToDo() {
    return<div className={styles.ToDo}>
    <h1>TODO</h1>
      <ul className={"list-group"}>
          {aliments.map((aliment,index) =>(
              <li className={"list-group-item d-flex justify-content-between align-items-center"} key={`${aliment}-${index}`}>{aliment}<button type={"button"} className={"btn btn-primary m-2"}>X</button></li>
          ))}
      </ul>
      <form>
          <div className={"form-group"}>
              <input className={"form-control"} type={"text"} placeholder={"Ajouter un aliment"}/>
              <button type={"button"} className={"btn btn-success m-2"}>Ajouter</button>
          </div>
      </form>
  </div>
}


export default ToDo;
