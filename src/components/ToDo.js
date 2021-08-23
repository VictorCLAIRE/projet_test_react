import React from 'react';
import styles from '../styles/ToDo.module.css';
import Aliment from "./Aliment";
import AlimentForm from "./AlimentForm";

class ToDo extends React.Component{
    state = {
        aliments :[
            {id: 1, nom:"Lait"},
            {id: 2, nom:"Oeuf"},
            {id: 3, nom:"Farine"},
            {id: 4, nom:"Levure"}
        ],
    };
    handleDelete = id => {
        const aliments = [...this.state.aliments];
        const index = aliments.findIndex(aliment => aliment.id === id);
        aliments.splice(index, 1)
        this.setState({aliments})
    };
    handleAdd = aliment =>{
        const aliments = [...this.state.aliments];
        aliments.push(aliment);

        this.setState({aliments})
    }
    render() {
        return<div className={styles.ToDo}>
            <h1>TODO</h1>
            <ul className={"list-group"}>
                {this.state.aliments.map(aliment =>(
                    <Aliment details={aliment} onDelete={this.handleDelete}/>
                ))}
            </ul>
            <AlimentForm onClientAdd={this.handleAdd}/>
        </div>
    }
}
export default ToDo;
