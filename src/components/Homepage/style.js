import styled from "styled-components";

const Container = styled.div `
height: 110px;
display: flex;
align-items: center;
justify-content: center;
`;

const Font = styled.span`
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 28px;
letter-spacing: 0.04em;
text-align: center;
color: #293845;
`;

const MoviePics = styled.div `
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
margin-left: 30px;
margin-right:30px;
`;

export {
    Font,
    Container,
    MoviePics
}