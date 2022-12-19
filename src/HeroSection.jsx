import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from './styles/Button';
import {AppContext, useGlobalContext} from './Context';

const HeroSection = () => {

    const {name, image} = useGlobalContext();

  return (
    <Wrapper>
    <div className="container grid">
    <div className="section-hero-data">
    <p className='hero-top-data'>THIS IS ME</p>
    <h1 className='hero-heading'>{name}</h1>
    <p className='hero-para'>I'm {name}. A frontend Developer.</p>
    <Button className='btn hireme-btn'>
    <NavLink to='/contact'>hire me</NavLink>
    </Button>
    </div>
    <div className="section-hero-img">
    <picture>
    <img className='hero-img' src={image} /> 
    </picture> 
    </div>
</div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
padding: 9rem 0;

.section-hero-data{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.btn{
    max-width: 16rem;
}

.hero-top-data{
    text-transform: upperCase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({theme})=> theme.colors.helper}
}

.hero-heading{
    text-transform: upperCase;
    font-size: 3rem;
}

.hero-para{
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
}

.section-hero-img{
    display: flex;
    justify-content: center;
    align-items: center;
}

picture{
    text-align: center;
}

.hero-img{
    max-width: 80%;
}
`;
export default HeroSection
