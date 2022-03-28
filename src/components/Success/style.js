import styled from "styled-components";

const Done = styled.div `
height: 110px;
width: 374px;
display: flex;
align-items: center;
justify-content: center;
font-family: Roboto;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 28px;
letter-spacing: 0.04em;
text-align: center;
color: #247A6B;
`;

const Font= styled.span`
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 28px;
letter-spacing: 0.04em;
text-align: left;
`;

const Typography = styled.span`
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: 26px;
letter-spacing: 0.04em;
text-align: left;
`;

const OrderInformation = styled.div`
padding: 0 30px;
display: flex;
flex-direction: column;
font-size: 22px;
`;

export{
    Done,
    Font,
    Typography,
    OrderInformation  
}