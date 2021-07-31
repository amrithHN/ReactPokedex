import React, { Component } from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'


export function img_get(val) {
    let img = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";


    console.log(val);
    let gen = String(val).padStart(3, '0');
    let img_url = img + String(gen) + ".png";
    console.log("image :" + img_url);

    return img_url;

}

export class Pokedex extends Component {


    render() {

        return (
            <div className="Pokedex">
                <h1 className="Pokedex-title" >Pokedex</h1>
                <div className="Pokedex-cards">
                    {
                        this.props.pokemons.map(
                            (pok) => (<Pokecard name={pok.Name} type={pok['Type 1']} exp={pok.HP} img={img_get(pok['#'])}>
                            </Pokecard>)
                        )
                    }

                </div>

            </div>
        )
    }
}

export default Pokedex
