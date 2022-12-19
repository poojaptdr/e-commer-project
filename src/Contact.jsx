import React from 'react'
import styled from 'styled-components'

const Contact = () => {

const Wrapper = styled.section`
.common_heading{
  margin: 4rem;
}

.container{
  margin: 3rem;
  text-align: center;

  .contact-form{
    max-width: 50rem;
    margin: auto;
  }

  .contact-inputs{
    display: flex;
    flex-direction: column;
    gap: 30px;

    input[type='submit']{
      cursor: pointer;
      transition: all 0.2s;

      &:hover{
        background-color: ${({theme})=> theme.colors.white};
        border: 1px solid ${({theme})=> theme.colors.btn};
        color: ${({theme})=> theme.colors.btn};
        transform: scale(0.9);
      }
    }
  }
}

`;

  return (
    <Wrapper>
     <h2 className='common_heading'>Feel Free To Contact Use</h2>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.004115052628!2d75.80165457448507!3d22.7280884272552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd68a509e857%3A0xbe479e2a364f67c0!2sIndore%20Airport!5e0!3m2!1sen!2sin!4v1669213513531!5m2!1sen!2sin" width="100%" 
height="450" 
style={{border:0}} 
allowfullscreen="" 
loading="lazy" referrerpolicy="no-referrer-when-downgrade">
</iframe>

<div className="container">
  <div className="contact-form">
    <form action='https://formspree.io/f/xkneaovn' method='POST' className='contact-inputs'>
    
      <input type='text' name='username' placeholder='username' autoComplete='off' required />

      <input type='email' name='Email' placeholder='enter your email' autoComplete='off' required />

      <textarea name='message' cols='30' rows='6' required></textarea>

      <input type='submit' value='send' required />
    </form>
  </div>
</div>

    </Wrapper>
  )
}

export default Contact