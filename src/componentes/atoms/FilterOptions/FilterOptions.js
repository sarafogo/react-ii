import React from 'react';
import './filterOptions.css';



const filterOptions = ({filters, onClick}) => {
    return(
        <div className='filterOptions--container' >

        {filters.map(item => {
            return (
                <div className='filterOption--filter' onClick={onClick}>
                    <h3 id={item}>{item}</h3>
                </div>
            )
        })}

        </div>

    )
}



export default filterOptions;