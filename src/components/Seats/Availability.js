import {AvailableSeat, Seat, SeatSelected, SeatStyle, SeatTaken } from "./style";

export default function Availability () {
    return (
        <>
      <Seat>
        <SeatStyle>
          <SeatSelected> </SeatSelected>
          Selecionado
        </SeatStyle>
  
        <SeatStyle>
          <AvailableSeat> </AvailableSeat>
          Disponível
        </SeatStyle>
  
        <SeatStyle>
          <SeatTaken> </SeatTaken>
          Indisponível
          </SeatStyle>
      </Seat>
      </>
    );
  }