import React, {Component} from 'react';
import axios from "axios";

class ArtistesList extends Component{
    state = {
        artistes:[],
        artisteID:""
    }
    afficherArtiste = () =>{
        axios.get('http://localhost:3000/artistes')
            .then(response => {
                const artistes = response.data
                this.setState({
                    artistes
                })
            })
            .catch(err =>{
                console.log("erreur + err")
            })
    }
    artisteById = id =>{
        const  artisteID = this.state.artistes.filter(artiste => artiste.id !== id)
        axios.get(`http://localhost:3000/artistes/${id}`)
            .then(response => {
                const artisteID = response.data
                this.setState({
                    artisteID
                })
                 console.log(artisteID)
            })
            .catch(err => {
                console.log("pas de titre + err");
            })
    }
    componentDidMount() {
        this.afficherArtiste();
    }
    render() {
        return (
            <div>
                <div>
                    <h1>Liste des artistes</h1>
                </div>
                <div className={"row"}>
                {this.state.artistes.map(artiste =>
                   <div className={"col-4"}>
                       <div className="card text-white bg-primary mb-3">
                           <div className="card-header">{artiste.name}</div>
                           <div className="card-body">
                               <p className="card-text">Countrie : {artiste.countrie}</p>
                               <p className="card-text">Style : {artiste.style}</p>
                           </div>
                       </div>
                   </div>
                )}
                </div>
            </div>
        );
    }
}

export default ArtistesList;
