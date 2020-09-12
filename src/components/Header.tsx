import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background-color: hsl(209,23%,22%);
`


const Text = styled.h2`
    color: white;
    font-family: 'Nunito Sans';
    font-weight: 800;
    font-size: 24px;
    margin: 1em 0;
`

const Header = () => {
    return (
        <Wrapper>
            <Text style={{ marginLeft: '1em'}}>Where in the world ?</Text>
        </Wrapper>
    )
}

export default Header
