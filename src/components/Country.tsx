import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'


// const size = {
//     mobile: '375px',
//     desktop: '1280px'
// }

// const device = {
//     mobile: `(max-width: ${size.mobile})`,
//     tablet: `(min-width: ${size.mobile}) and (max-width: ${size.desktop})`
// }

const Wrapper = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background-color: hsl(209,23%,22%);
`

const Flag = styled.img `
    width: 50%;
    height: auto;
    object-fit: contain;
    margin: 2em 0;
`

const StateName = styled.h1`
    color: white;
    font-family: 'Nunito Sans';
    font-weight: 800;
    font-size: 24px;
    margin-bottom: 1em;
`

const StateText = styled.p`
    color: white;
    font-family: 'Nunito Sans';
    font-weight: 300;
    margin-bottom: 1em;
`

const BorderCountry = styled.div`
    background-color: hsl(207,26%,17%);
    width: 100px;
    height: 40px;
    color: white;
    font-family: 'Nunito Sans';
    font-weight: 300;
    box-shadow: 2px 8px 7px -7px #000;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1em;
`


interface Country {
    name: string
    nativeName: string
    population: number
    region: string
    subregion: string
    capital: string
    topLevelDomain: string
    currencies: Array<{code: string}>
    languages: Array<{name: string}>
    flag: string
    borders: string[]
}

const Country: React.FC = () => {
    const [drzava,setDrzava] = useState<Country>({
        name:"",
        nativeName: "",
        population: 0,
        region: "",
        subregion: "",
        capital: "",
        topLevelDomain: "",
        currencies: [],
        languages: [],
        flag: "",
        borders: []
    })

      const getStates = async (name: string) => {
    
        let api = `https://restcountries.eu/rest/v2/name/${name}`
    
        await axios.get(api)
             .then( res => {
                 setDrzava(res.data[0])
             })
    
    }

    useEffect(() => {
        getStates('serbia')
    }, [])

    console.log(drzava.borders)


    return (
        <Wrapper>
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around'
        }}>
            <button type="submit" style={{
                backgroundColor: 'hsl(207,26%,17%)',
                color: '#fff',
                border: 'none',
                width: '150px',
                height: '50px',
                margin: '1em 0',
                boxShadow: '2px 8px 7px -7px #000'
            }}>Back</button>

            <div style={{
                 display: 'flex', 
                 flexDirection: 'column'
                 }}>
                <Flag src={drzava.flag} alt="Flag"/>
                
                <div>
                    <StateName>{drzava.name}</StateName>
                    <div style={{display: 'flex', alignItems: 'flex-start'}}>
                        <div>
                            <StateText><span style={{fontWeight: 600}}>Native Name: </span>{drzava.nativeName}</StateText>
                            <StateText><span style={{fontWeight: 600}}>Population: </span>{drzava.population}</StateText>
                            <StateText><span style={{fontWeight: 600}}>Region: </span>{drzava.region}</StateText>
                            <StateText><span style={{fontWeight: 600}}>Sub Region: </span>{drzava.subregion}</StateText>
                            <StateText><span style={{fontWeight: 600}}>Capital: </span>{drzava.capital}</StateText>
                        </div>
                        <div>
                            <StateText><span style={{fontWeight: 600}}>Top Level Domain: </span>{drzava.topLevelDomain}</StateText>
                            {drzava.currencies.map(currency => <StateText key={currency.code}><span style={{fontWeight: 600}}>Currency: </span> {currency.code}</StateText>)}
                            <StateText>
                                <span style={{fontWeight: 600}}>Languages: </span>
                                {drzava.languages.map( lang => lang.name + ', '  )}
                            </StateText>
                        </div>
                    </div>
                    <p style={{ fontFamily: 'Nunito Sans', fontWeight: 600, color: 'white', fontSize: '20px', display: 'block'}}>Borders: </p>
                    <div style={{display: 'flex',alignItems: 'flex-start', justifyContent: 'flex-start', flexWrap: 'wrap'}}>
                        {drzava.borders.map( border => <BorderCountry key={border}>{border}</BorderCountry> )}
                    </div>
                </div>

            </div>
          
        </div>
        </Wrapper>
    )
}


export default Country
