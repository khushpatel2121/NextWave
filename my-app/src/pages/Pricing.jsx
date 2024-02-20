import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
/* display: flex;
flex-direction: column; */

`
const CTitles = styled.div`
display: flex;
`
const CTitle = styled.h1
`
`
const Cdesc = styled.p`

`


const Wrapper = styled.div`
display: flex;
padding: 50px;
height: 80vh;

`
const Left = styled.div`
flex: 1;
display: flex ;
flex-direction: column;
justify-content: space-between;
padding: 30px;
`
const Right = styled.div`
flex: 1;
border: 1px solid lightgrey;
`
const Center = styled.div`
flex: 1;
border: 1px solid lightgrey;
`
const Title = styled.h1`
width: 80%;
`
const Desc = styled.p`
width: 80%;

`
const PriceContainer = styled.div`
text-align: start;
width: 80%;

`
const Starting = styled.p`
width: 80%;

`

const Price = styled.span`

`
const Month = styled.h1`

`
const Pdesc = styled.p`

`
const Button = styled.button`


`
const List = styled.ul`
width: 80%;

`
const ListItem = styled.li``
const Icon = styled.i``



const Pricing = () => {
  return (
    <div>
      <Container>
        <CTitles>
       <CTitle>
       Choose Your Plan
       </CTitle>
       <Cdesc>Let's choose the package that is best for you and explore it happily and cheerfully.</Cdesc>
        </CTitles>
        
        <Wrapper>
          <Left>
            <Title>Basic</Title>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Desc>
            <PriceContainer>
                <Starting>Starting at</Starting>
               
                <Month> <Price>$9.99</Price>/month</Month>
                <Pdesc>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Pdesc>
            </PriceContainer>
            <Button>Join Now</Button>
            <List>
                <ListItem>
                    <Icon>check</Icon>
                    200 Hand-Crafted Templates
                </ListItem>
                <ListItem>
                    <Icon>check</Icon>
                    Exclusive Support
                </ListItem>
                <ListItem>
                    <Icon>check</Icon>      
                    50+ PreBuilt Websites
                </ListItem>
                <ListItem>
                    <Icon>check</Icon>
                    Premium Plugins
                </ListItem>
            </List>

          </Left>
          <Center>
               center
          </Center>
          <Right>
               right
          </Right>
        </Wrapper>
        </Container>
    </div>
  )
}

export default Pricing
