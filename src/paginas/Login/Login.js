import React, {Component} from 'react';
import GeneralTemplate from '../../templates/GeneralTemplate/GeneralTemplate'


import './login.css';
import LoginContent from '../../componentes/organismos/LoginContent/LoginContent';

class Login extends Component {
    render(){
        return(
            <GeneralTemplate>
                <LoginContent titulo='Acesse sua conta'/>
            </GeneralTemplate>

        )
    }
}


export default Login;