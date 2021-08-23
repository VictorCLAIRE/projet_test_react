import React, {Component} from 'react';
import styles from '../styles/Add-artistes.module.css';
import ArtistesDataService from "../services/artistes.service";

class AddArtistes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: null,
            name: "",
            countries: "",
            style: ""
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            id: event.target.value
        })
        console.log(this.state.name)
    }
}

export default AddArtistes

