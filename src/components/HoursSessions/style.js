import styled from "styled-components";


const Container = styled.div`
height: 110px;
display: flex;
align-items: center;
justify-content: center;
`;

const Font = styled.span`
font-family: Roboto;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 28px;
letter-spacing: 0.04em;
text-align: center;
color: #293845;
`
const HoursButton = styled.button `
height: 43px;
width: 82px;
background-color: #E8833A;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 21px;
letter-spacing: 0.02em;
text-align: center;
`;

const PrintStyle = styled. span `
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 23px;
letter-spacing: 0.02em;
text-align: left;
`;
export{
    HoursButton,
    Container,
    Font,
    PrintStyle

}