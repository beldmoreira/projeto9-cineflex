import styled from 'styled-components';

const NavStyle = styled.header `
height: 67px;
width: 100%;
top: 0;
left: 0;
background-color:#C3CFD9;
display: flex;
align-items: center;
justify-content: center;
position: fixed;
`
const NavFont = styled.span `
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