import React, {useState, useEffect} from 'react';
import axios from 'axios'
import styled from 'styled-components'

import Header from './components/Header'
import CountrySearch from './components/CountrySearch'


const Input = styled.input`
    background-color: hsl(207,26%,17%);
    font-family: 'Nunito Sans';
    font-weight: 600;
    font-size: 16px;
    width: 40%;
    height: 50px;
    border: none;
    margin: 1em;
    outline: none;
    color: white;
    padding: 0 2em;

    &::placeholder {
        color: white;
    }
`

const Select = styled.select`
    background-color: hsl(207,26%,17%);
    font-family: 'Nunito Sans';
    font-weight: 600;
    font-size: 16px;
    width: 30%;
    height: 50px;
    border: none;
    margin: 1em;
    outline: none;
    color: white;
    padding: 0 1em;
    margin-left: auto;

    &::placeholder {
        color: white;
    }
`

const Wrapper = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background-color: hsl(209,23%,22%);
    display: flex;
    flex-wrap: wrap;
    margin: 1em auto;
`

const Option = styled.option`
    border: 0;
    background-color: hsl(207,26%,17%);
    font-family: 'Nunito Sans';
    font-weight: 600;
    font-size: 16px;
    outline: none;
`

const App:React.FC = () => {

  const [drzave, setDrzave] = useState([{
    flag: "",
    name: "",
    population: 0,
    region: "",
    capital: ""
  }])

  const [q,setQ] = useState("")
  const [s, setS] = useState("")
  const [filteredCountries, setFilteredCountries] = useState([{
    flag: "",
    name: "",
    population: 0,
    region: "",
    capital: ""
  }])


  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
         .then((res) => {
             setDrzave(res.data) 
         })
  },[setDrzave])


  useEffect(() => {
    setFilteredCountries(
    drzave.filter((country: any) => 
       country.name.toLowerCase().indexOf(q.toLowerCase()) > -1 ))
  }, [q, drzave])


  useEffect(() => {
    setFilteredCountries(
    drzave.filter((country: any) => 
       country.region.toLowerCase().indexOf(s.toLowerCase()) > -1 ))
  }, [s, drzave])


  // unikatne regije (ne ponavljaju se iz niza objekata {drzave})
  const unique = [...new Set(drzave.map(item => item.region))]; 

  return (
    <Wrapper>
      <Header />
      <Wrapper>
        <Input placeholder="⌕   Search for a country" value={q} onChange={(e:any) => setQ(e.target.value )}/> 
        <Select defaultValue={'default'} onChange={(e: any) => 
          setS(e.target.value)
          }>
        <Option  disabled value={'default'}>Sort by region: </Option>
        {unique.map( (region: any) => 
        <Option
                key = { region }
                value ={ region }>
                { region }
        </Option> )}
        </Select>
      </Wrapper>
      { filteredCountries.map((drzava:any) => 
          <CountrySearch 
            key = {drzava.name}
            flag = {drzava.flag}
            name = {drzava.name}
            population = {drzava.population}
            region = {drzava.region}
            capital = {drzava.capital}
          />
        )
      }
    </Wrapper>
  )
}

export default App;
