import React, { Component } from 'react';
import GeneralTemplate from '../../templates/GeneralTemplate/GeneralTemplate';
import HomeContent from '../../componentes/organismos/HomeContent/HomeContent';
import './home.css'


class Home extends Component {
    constructor() {
        super();
        this.state = {
            inputValue:''
        }
    }
    onClick = () =>{
        console.log('clicado')
    }
    onChange = () =>{
        console.log('mudado')
    }
    render() {
        return (
            <GeneralTemplate>
                <HomeContent
                    texto='Buscar'
                    onClick={this.onClick}
                    type='text'
                    placeholder='O que você procura?'
                    value={this.state.inputValue}
                    onChange={this.onChange}
                />
            </GeneralTemplate>
        )
    }

}


export default Home;