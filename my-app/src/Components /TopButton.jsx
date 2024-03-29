import { useState,useEffect } from "react";
import React from 'react';
import {AiOutlineArrowUp} from "react-icons/ai"
import styled from "styled-components";
import {Link as LinkS} from "react-scroll";
import { animateScroll as scroll } from 'react-scroll';

const Container = styled.div`

`
const Button = styled.button`
z-index: 999;
position: fixed;
bottom: 10px;
right: 10px;
width: 50px;
height: 50px;
border:none;
border: 2px solid #303D57;
 /* border:3px solid #303D57 ; */
 margin-top: 10px;
 font-size: 30px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(92, 219, 149, 0.5);
 border-radius: 50%;
 transition: background-color .3s ease-in;
cursor: pointer;

&:hover{
  background-color:rgba(54, 112, 85,0.4);
}
`
export const NavLinks =styled(LinkS)`

 display:flex;
 align-items: center;
 text-decoration:none;
 padding: 0 1rem;
 height: 100%;
 cursor: pointer;
 user-select: none;

`


const TopButton = () => {
    const [Top,setTop] = useState(true);

    useEffect(()=>{
     window.addEventListener("scroll",()=>{
        if(window.scrollY>600){
               setTop(true);
        }else{
              setTop(false);
        }
     })
    },[])

    const toggleHome = ()=>{
        scroll.scrollToTop();
    }

  return (
  <Container>
  {
    Top && 
    <NavLinks to="home" onClick={toggleHome}>
    <Button><AiOutlineArrowUp/></Button>
        </NavLinks>
    
  }
    
  </Container>
  )
}

export default TopButton
