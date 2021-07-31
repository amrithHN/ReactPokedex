import React, { Component } from 'react'
import "./Pokecard.css"

export class Pokecard extends Component {
    render() {
        
        return (
            <div className="Pokecard">
                    <img className="Pokecard-img" src={this.props.img} alt="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" />
                    <div className="Pokecard-name">{this.props.name}</div>
                    <div className="Pokecard-item">Type : {this.props.type}</div>
                    <div className="Pokecard-item">Exp : {this.props.exp}</div>
                              

            </div>
        )
    }
}

export default Pokecard
