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

const Seat = styled.div `
width: 320px;
padding: 0 57px;
display: flex;
justify-content: space-between;
margin: -1px auto 0;
`
const SeatStyle = styled.div`
width: 320px;
padding: 0 57px;
display: flex;
justify-content: space-between;
margin: -1px auto 0;
`;
const SeatTaken = styled.div`
background-color: #FBE192;
border-color: #F7C52B;
`;
const SeatSelected = styled.div `
background-color: #8DD7CF;
border-color: #1AAE9E;
`;

const AvailableSeat = styled.div `
width: 22px;
height: 22px;
border: 1px solid #808F9D;
background-color: #C3CFD9;
border-radius: 50%;
color: #000000;
display: flex;
align-items: center;
justify-content: center;
font-size: 11px;
margin-bottom: 18px;
`
const SeatLIst = styled.div`
padding: 0 24px;
display: flex;
flex-wrap: wrap;
width: 320px;
margin: -20px auto 0;
`;

const Form = styled.div`
margin-top: 31px;
padding: 0 24px;
`
export{
    Input,
    Container,
    Seat,
    SeatStyle,
    SeatTaken,
    SeatSelected,
    AvailableSeat,
    SeatLIst,
    Form
}