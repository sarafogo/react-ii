import React from 'react';
import MainTitle from '../../atoms/MainTitle/MainTitle';

import './loginContent.css';


const loginContent = ({titulo}) => {
    return (
        <div className='LoginContent--container'>
            <MainTitle texto={titulo} />
        </div>
    )
}

export default loginContent;