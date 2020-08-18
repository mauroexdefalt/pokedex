
import React, { Component } from 'react';
import './style.css';
import Logo from './Components/logo';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
            pokemonname: 'charmander',
            pokemontypes: [],
            imgurl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`,
            poketype: `https://pokeapi.co/api/v2/type/`,
            url: `https://pokeapi.co/api/v2/pokemon/`,


        };     
     
        this.buscar = this.buscar.bind(this);
        this.type = this.type.bind(this);

    }

    componentDidMount() {

        fetch(`${this.state.url}${this.state.pokemonname}/`)
            .then((r) => r.json())
            .then((json) => {
                let state = this.state;
                state.pokemon = json;
                this.setState(state);
                this.type();
            })       
    }
    //peguei valor type 
    type() {
        this.state.pokemon.types.map((item) => {
            return (

                this.setState({ pokemontypes: item.type.name }),
                console.log(item.type.name)

            );
        })
    }

    buscar() {

        console.log(this.state.pokemonname);
        console.log(this.state.pokemon);
        console.log(this.state.pokemon.types)
        //    problema aparenta estar aqui tendo que clicar duas vezes para aparecer imagem
        if (this.state.pokemon !== '') {
        
            this.componentDidMount();
            //this.type();
        } else {
            console.log('array vazio insira o nome do pokemon')
        }
    }

    render() {
        return (

            <div className='container'>
                <Logo />
                <div className='pokemon'>
                    {this.state.pokemon.id !== undefined &&
                        <img className='iconpokemon' alt='img' 
                        src={this.state.imgurl + this.state.pokemon.id + '.png'} />
// src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.pokemon.id}.png`}
                    }

                    <input className='txtbusca' type='text' id='nomepokemon' 
                    placeholder='Digite o nome do Pokemon' onChange={(e) =>
                     { this.setState({ pokemonname: e.target.value }) }} />
                    <br />
                    <button className='botao' onClick={this.buscar} >Buscar</button>
                    <h3>{this.state.pokemonname}</h3>
                    <h3 >Peso:{this.state.pokemon.weight / 10}kg</h3>
                    <h3 >Altura:{this.state.pokemon.height / 10}m</h3>               
                   
                    <h3>{this.state.pokemontypes}</h3><br />                    
                    <br />                   
                </div>
            </div>
        );
    }
}


export default App;