import React, { Component } from "react";
import Axios from "axios";

class AnecdotePokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listPokemonAnecdote: [],
            pokemonAnecdote: "Venusaur is a combination of the words Venus which refers to the Venus Flytrap plant, and the Greek word saur, meaning lizard.",
            actualAnecdote: 0,
            anecdoteLoading: true
        };
    }

    searchAnecdote = () => {
        this.setState({ anecdoteLoading: true });
        Axios.get(`http://localhost:5000/api/anecdotes/`)
            .then(res => {
                if (res.status === 200 && res != null) {

                    this.setState({ listPokemonAnecdote: res.data });

                    console.log(this.state.listPokemonAnecdote);

                    this.setState({ anecdoteLoading: false });
                } else {
                    console.log('problem in call');
                }
            })
            .catch(error => {
                console.log(error);
            });
        this.setState({ anecdoteLoading: false });
    }

    chooseAnecdote = () => {
        let actualNumberOfAnecdote = this.state.actualAnecdote;
        while (actualNumberOfAnecdote === this.state.actualAnecdote) {
            let max = this.state.listPokemonAnecdote.length - 1;
            var randomNumber = Math.floor(Math.random() * max) + 1;
            actualNumberOfAnecdote = randomNumber
            console.log(randomNumber);
            this.setState({ pokemonAnecdote: this.state.listPokemonAnecdote[randomNumber].description });
            console.log(this.state.pokemonAnecdote);
        }
        this.setState({ actualAnecdote: randomNumber });
    }

    render() {
        return (
            <div className="DisplayOnePokemon">
                <div className="TitleSection">
                    <h1>Pokemon Anecdote</h1>
                    <button onClick={this.searchAnecdote}>Charge anecdote</button>
                    <button onClick={this.chooseAnecdote}>Change anecdote</button>
                </div>
                <div className="DisplaySection">

                    <h1>Fun fact </h1>

                    <div>{this.state.pokemonAnecdote}</div>

                </div>
            </div >
        );
    }
}

export default AnecdotePokemon;