import React from 'react'
import styled from 'styled-components'


const DataInfoText = styled.p`
    color: #FFF;
    font-family: 'Nunito Sans';
    font-weight: 600;
    margin: 1em 0;
`

const DataInfoTitle = styled.h2`
    color: #FFF;
    font-family: 'Nunito Sans';
    font-weight: 600;
    margin: 1em 0;
    font-size: 24px;
`


interface CountryCard {
    flag: string
    name: string
    population: number
    region: string
    capital: string
  }
  

const CountrySearch: React.FC<CountryCard>  = ( { flag, name, population, region, capital } ) => { 

    return (   
                <div style={{ width: '23%', height: '450px', marginLeft: '1em'}}>
                    <div style={{ backgroundImage: `url(${flag})`, width: '100%', height: '50%', backgroundSize: 'cover', backgroundPosition: 'center', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}></div>
                    <DataInfoTitle>{name}</DataInfoTitle>
                    <DataInfoText>Population: {population}</DataInfoText>
                    <DataInfoText>Region: {region}</DataInfoText>
                    <DataInfoText>Capital: {capital}</DataInfoText>
                </div> 
    )
}


export default CountrySearch