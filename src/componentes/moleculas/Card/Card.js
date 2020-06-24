import React from 'react';
import CompanyInfos from '../CompanyInfos/CompanyInfos'
import RoleInfos from '../RoleInfos/RoleInfos'

import './card.css';



const Card = ({ logo, company, position, postedAt, contract, location, languages, tools }) => {
    return (
        <>
            <CompanyInfos
                logo={logo}
                company={company}
                position={position}
                postedAt={postedAt}
                contract={contract}
                location={location}
            />

            <RoleInfos languages={languages} tools={tools} />
        </>
    )


}


export default Card;