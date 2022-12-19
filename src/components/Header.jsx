import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'

const Header = () => {
  return (
    <MainHeader>
    <NavLink to='/'>
        <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIGfafD_BE-xf3kib2jqS_DxgW5yD8pmEqgQ&usqp=CAU'/>
    </NavLink>
    
    <Navbar />
    </MainHeader>
  )
}

const MainHeader = styled.header`
padding: 0 4.8rem;
height: 10rem;
background-color: ${({theme}) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;

.logo{
    max-width: 30%;
    height: auto;
}

`;

export default Header
