import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/AlimentForm.module.css';

class AlimentForm extends Component{
    state={
        nouvelAliment: ''
    };
    handleChange = (event) =>{
        this.setState({nouvelAliment : event.currentTarget.value})
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const id = new Date().getTime();
        const nom = this.state.nouvelAliment;

        this.props.onClientAdd({id, nom})
        this.setState({nouvelAliment:""})
    };


    render(){

        return <form onSubmit={this.handleSubmit}>
        <div className={"form-group"}>
            <input require value={this.state.nouvelAliment} onChange={this.handleChange} className={"form-control"} type={"text"} placeholder={"Ajouter un aliment"}/>
            <button type={"submit"} className={"btn btn-success m-2"}>Ajouter</button>
        </div>
        </form>
}

}


export default AlimentForm;
