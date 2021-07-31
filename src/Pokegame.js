import React, { Component } from 'react'
import Pokecard from './Pokecard'
import pokemondb from './pokemondb'
import './Pokegame.css'
import { img_get } from './Pokedex'
import swal from 'sweetalert';


function cardsSelect() {

    let array1 = [];
    for (let i = 0; i < 6; i++) {
        let val = Math.floor((Math.random() * pokemondb.length) + 1);
        console.log(val)
        array1.push(pokemondb[val])
        // pokemondb.map((arr) => { if (arr['#'] === val) { } })
    }
    return array1;


}


export class Pokegame extends Component {
    render() {
        let player1 = cardsSelect();
        let player1_score = 0;
        player1_score = player1.reduce(((a, poke) => poke.HP + a), 0);
        console.log("score 1:" + player1_score);

        let player2 = cardsSelect();
        let player2_score = 0;
        player2_score = player2.reduce(((a, poke) => poke.HP + a), 0);
        console.log("score 2:" + player2_score);

        return (
            <div className="Pokegame">
                <div className="Pokegame-title">Pokegame</div>
                <div className="Pokegame-user">
                    <div className="Pokegame-user-title">Your 6 cards</div>
                    <div className="user-cards">
                        {player1.map((poke) => <Pokecard name={poke.Name} type={poke['Type 1']} exp={poke.HP} img={img_get(poke['#'])} />)}
                    </div>
                </div>
                <div className="Pokegame-computer">
                    <div className="Pokegame-computer-title">computer 6 cards</div>
                    <div className="computer-cards">
                        {player2.map((poke) => <Pokecard name={poke.Name} type={poke['Type 1']} exp={poke.HP} img={img_get(poke['#'])} />)}
                    </div>
                </div>
                <div className="scores">Your score:{player1_score}</div>
                <div className="scores">Computer score:{player2_score}</div>
                <div className="Result">{(player1_score > player2_score) ? setTimeout(function () {
                    swal({
                        title: "Good job!",
                        text: "You win!",
                        icon: "success",
                    });
                }, 1000) : setTimeout(function () {
                    swal({
                        title: "Better luck next time!",
                        text: "You loose!",
                        icon: "error",
                    });
                }, 1000)}</div>
            </div>
        )
    }
}

export default Pokegame
