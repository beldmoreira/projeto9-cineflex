import styled from "styled-components";

const Input = styled.input `
::placeholder {
    font-size: 18px;
    font-style: italic;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: #AFAFAF;
  }`;   

const Container = styled.div `
height: 110px;
display: flex;
align-items: center;
justify-content: center;
`;

export{
    Input,
    Container
}