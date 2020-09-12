import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background-color: hsl(209,23%,22%);
    display: flex;
    flex-wrap: wrap;
`

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


const CountrySearch  = ( { drzave }: any ) => { 
    

    return (
        <Wrapper>
            {drzave.map( (drzava: any) => <div style={{ width: '23%', height: '450px', marginLeft: '1em'}} key={drzava.name}>
                <div style={{ backgroundImage: `url(${drzava.flag})`, width: '100%', height: '50%', backgroundSize: 'cover', backgroundPosition: 'center', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}></div>
                <DataInfoTitle>{drzava.name}</DataInfoTitle>
                <DataInfoText>Population: {drzava.population}</DataInfoText>
                <DataInfoText>Region: {drzava.region}</DataInfoText>
                <DataInfoText>Capital: {drzava.capital}</DataInfoText>
            </div> )}
        </Wrapper>
    )
}


export default CountrySearch