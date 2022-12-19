import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;

    html{
    font-size: 62.5%;
    overflow-x: hidden;
  }

  body{
    overflow-x: hidden;
  }

  ::-webkit-scrollbar{
    width: 1.5rem;
  }

  ::-webkit-scrollbar-track{
    background-color: rgb(24 24 29)
  }

  ::-webkit-scrollbar-thumb {
    background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
  }

  h1{
    color: ${({theme})=> theme.colors.heading};
    font-size: 3rem;
    font-weight: 600;
  }

  h2{
    color: ${({theme}) => theme.colors.heading};
    font-size: 2.2rem;
    font-weight: 300;
    text-align: center;
  }

  h3{
    font-size: 1.8rem;
    font-weight: 400;
  }

  p{
    color: ${({theme}) => theme.colors.text};
    font-size: 1.1rem;
    font-weight: 300;
    margin-top: 1rem;
    line-height: 1.5;
  }

  a{
    text-decoration: none;
  }

  li{
    list-style: none;
  }

  .container{
    max-width: 1000px;
    margin: 0 auto;
  }

  .grid{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input, textarea{
    max-width: 30rem;
    color: ${({theme})=> theme.colors.black};
    padding: .8rem 2rem;
    border: 1px solid ${({theme})=> theme.colors.black};
    text-transform: uppercase;
    box-shadow: ${({theme})=> theme.colors.shadowSupport}; 
  }

  input[type='submit']{
  max-width: 16rem;
  margin-top: 2rem;
  background-color: ${({theme})=>theme.colors.btn};
  color: ${({theme})=> theme.colors.white};
  padding: 1rem 2.2rem;
  border-style: solid;
  border-width: .1rem;
  text-transform: uppercase;
  font-size: 1.4rem;
  cursor: pointer;
 }
}

@media(max-width: ${({theme})=> theme.media.tab}){
  .container{
    padding: 0 3.2rem;
  }
}

@media(max-width: ${({theme})=> theme.media.mobile}){

html{
  font-size: 62.5%;
  overflow-x: hidden;
}

body{
    overflow-x: hidden;
  }



  .container{
    text-align: center;
  }

  .grid{
    flex-wrap: wrap;
    gap: 7.2rem;
  }

}
`;

