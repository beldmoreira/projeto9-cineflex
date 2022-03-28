import {useState,useEffect} from "react";
import Footer from "../Footer";
import { useNavigate,useParams } from 'react-router-dom';
import Availability from "./Availability";
import {getSeats, makeSeatsReservation } from "../Axios";
import { Container, Form, SeatLIst } from "./style";


export default function SeatsRequisition (){
    const [clients,setClients] = useState ([]);
    const [showtime,setShowtime] = useState (null);
    const {sessionId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const promise = getSeats(sessionId);
        promise.then(response => setShowtime(response.data));
    }, [sessionId]);

    function SelectSeat(seat) {
        if (!seat.isAvailable) {
          alert("Escolha outro assento. Este não está mais disponível");
          return;
        }
        const promise = makeSeatsReservation(booking);
        promise.then(() => {
          setBooking({
            title: showtime.movie.title,
            date: showtime.day.date,
            time: showtime.name,
            seats: selectedSeats,
            clients
          });
          navigate('/sucesso');
        });
      }
    
      function addClients(seatId, name, cpf) {
        setClients([...clients, { idAssento: seatId, nome: name, cpf }])
      }

    return(
        <>
        <Container>
          Selecione o(s) assento(s)
        </Container>
  
        <SeatLIst>
          {
            showtime.seats.map(seat => (
              <Seat 
                isUnavailable={!seat.isAvailable}
                isSelected={selectedSeats.includes(seat)}
                onClick={() => SelectSeat(seat)}
              >
                {seat.name}
              </Seat>
            ))
          }
        </SeatLIst>
        <Availability/>    
        <Form>
        {selectedSeats.map(selectedSeat => (
          <SeatBuyer seat={selectedSeat.name} seatId={selectedSeat.id} addClients={addClients} />
        ))}
        </Form>

      <Button onClick={handleCreateBooking}>
        Reservar assento(s)
      </Button>
    <Footer 
        day={showtime.day.weekday}
        time={showtime.name}
        title={showtime.movie.title}
        image={showtime.movie.posterURL}/>
    </>
    );
}
