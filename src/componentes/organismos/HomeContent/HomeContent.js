import React from 'react';
import SearchBar from '../../moleculas/SearchBar/SearchBar';
import Card from '../../moleculas/Card/Card'
import FilterBar from '../../moleculas/FilterBar/FilterBar'
import MainTitle from '../../atoms/MainTitle/MainTitle'


import './homeContent.css';

const HomeContent = ({ texto, titulo, onClick, type, placeholder, value, onChange, data, filters, handleFilters }) => {
    return (
        <main className='homeContent--container'>
            
            <MainTitle texto={titulo} />
            <section>
                <div>
                    <SearchBar
                        texto={texto}
                        onClick={onClick}
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange} />
                    <FilterBar filters={filters} onClick={handleFilters} />
                </div>
                <div>
                    <h2>{filters}</h2>
                </div>
            </section>
            <section>
                {data.length ? (
                    data.map(item => {
                        const { logo, company, position, postedAt, contract, location, languages, tools } = item;
                        return (
                            <section>
                                <Card
                                    logo={logo}
                                    company={company}
                                    position={position}
                                    postedAt={postedAt}
                                    contract={contract}
                                    location={location}
                                    languages={languages}
                                    tools={tools}
                                />

                            </section>
                        );
                    })
                ) : (
                        <h2>Nenhuma vaga encontrada </h2>
                    )}


            </section>
        </main>

    )
}

export default HomeContent;