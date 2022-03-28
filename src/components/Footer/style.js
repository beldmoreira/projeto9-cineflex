import styled from "styled-components";


const LowerBar = styled.footer`
height: 117px;
width: 100%;
background-color:#DFE6ED;
border: 1px solid #9EADBA;
display: flex;
position:fixed;
bottom: 0;
left: 0;
padding: 14px 10px;
font-size: 26px;
font-style: normal;
font-weight: 400;
line-height: 30px;
letter-spacing: 0em;
text-align: left;
`;

const FooterFont = styled.span `
font-size: 26px;
font-style: normal;
font-weight: 400;
line-height: 30px;
letter-spacing: 0em;
text-align: left;
`;
const PosterImage = styled.div`
padding: 8px;
border-radius: 2px;
background-color: #fff;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
width: 48px;
height: 72px;
`;

const FootInfo = styled.div `
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 16px;
font-size: 26px;
line-height: 120%;
`
export{
    LowerBar,
    FooterFont,
    PosterImage,
    FootInfo
}
