import React, {useState, useEffect} from 'react';
import axios from 'axios'
import styled from 'styled-components'

import Header from './components/Header'
import CountrySearch from './components/CountrySearch'

interface CountryCard {
  flag: string
  name: string
  population: number
  region: string
  capital: string
}


const Input = styled.input`
    background-color: hsl(207,26%,17%);
    font-family: 'Nunito Sans';
    font-weight: 600;
    font-size: 16px;
    width: 50%;
    height: 50px;
    border: none;
    margin: 1em;
    outline: none;
    color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 0 2em;

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
`

const App:React.FC = () => {

  const [drzave, setDrzave] = useState<Array<CountryCard>>([{
    flag: "",
    name: "",
    population: 0,
    region: "",
    capital: ""
  }])

  const [q,setQ] = useState("")


  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
         .then((res) => {
             setDrzave(res.data) 
         })
  },[setDrzave])


  const Search = (country: Array<CountryCard>) => {
       return country.filter((country: any) => 
       country.name.toLowerCase().indexOf(q) > -1 ||  
       country.name.indexOf(q) > -1)
  }

  return (
    <Wrapper>
      <Header />
      <Input placeholder="⌕   Search for a country" value={q} onChange={(e:any) => setQ(e.target.value )}/>
      <CountrySearch drzave={Search(drzave)} />
    </Wrapper>
  )
}

export default App;
