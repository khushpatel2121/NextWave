import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    display: flex;
    padding: 20px;
    flex-direction: column;
    background-color:#5CDB95 ;
    justify-content: center;
    align-items: center;
    gap: 30px;
`
const Wrapper = styled.div`
height: 60%;
width: 80%;
border-radius: 20px;
background-color: white;
`
const Title = styled.h1`
color: white;
margin-bottom: 20px;
font-size: 40px;
font-family: 'Roboto', sans-serif;
`



const Portfolio = () => {
  return (
    <div>
        <Container id='protfolio'>
         <Title>TRUSTED BY</Title>
            <Wrapper>

            </Wrapper>
        </Container>
    </div>
  )
}

export default Portfolio
