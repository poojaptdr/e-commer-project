import styled from "styled-components";

export const Button = styled.button`
text-decoration: none;
background-color: rgb(98 86 243);
color: rgb(255 255 255);
padding: 1rem;
border: none;
text-transform: upperCase;
text-align: center;
cursor: pointer;
-webkit-transition: all 0.3s ease 0s;
-moz-transition: all 0.3s ease 0s;
-o-transition: all 0.3s ease 0s;

&:hover,
&:active{
    box-shadow: 0 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({theme})=> theme.colors.shadowSupport};
    transform: scale(0.96);
}

a{
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1rem;
}
`;