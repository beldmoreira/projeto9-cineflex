import styled from 'styled-components';

const NavStyle = styled.header `
height: 67px;
width: 375px;
background-color:#C3CFD9;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
position: fixed;
z-index= 1
`
const NavFont = styled.span `
font-family: Roboto;
font-size: 34px;
font-style: normal;
font-weight: 400;
line-height: 40px;
letter-spacing: 0em;
text-align: center;
color: #E8833A;
`


    


export{
    NavStyle,
    NavFont
}