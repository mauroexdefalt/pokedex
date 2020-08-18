import React, { Component } from 'react';
import Todoitens from './Todoitems'
class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tarefa: '',
            itens: []
        }
        this.addItem = this.addItem.bind(this);
        this.deleteitem = this.deleteitem.bind(this);
    }

    deleteitem(key) {
        console.log(key)
        let filtro = this.state.itens.filter((item) => {
            return (item.key !== key);
        })
        this.setState({ itens: filtro });

    }

    addItem(e) {
        let state = this.state;
        if (this._tarefainput.value !== "") {
            let newitem = {
                text: this._tarefainput.value,
                key: Date.now()
            };
            this.setState({ itens: [...state.itens, newitem] });
        }
        e.preventDefault();
        this.setState({ tarefa: '' });
    }


    render() {
        return (
            <div>
                <form onSubmit={this.addItem}>
                    <input type='texte' placeholder='Nova tarefa' name='tarefa' value={this.state.tarefa}
                        onChange={(e) => this.setState({ tarefa: e.target.value })} ref={(event) => this._tarefainput = event} />

                    <button type='submit'>  Adicionar
    </button>

                </form>

                <Todoitens lista={this.state.itens} delete={this.deleteitem} />
            </div>
        );
    }
}


export default Todolist;