import React, {Component} from 'react';
//import styles from '../styles/Aliment.module.css';

class Aliment extends Component {
    render() {
        // const details =this.props.details;
        // const onDelete = this.props.onDelete

        const {details, onDelete} = this.props;

        return <li className={"list-group-item d-flex justify-content-between align-items-center"}>
            {details.nom}
            <button onClick={() => onDelete(details.id)} type={"button"} className={"btn btn-primary m-2"}>X</button>
        </li>
    }
}

export default Aliment;
