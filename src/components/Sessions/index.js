import { Container, MovieSession } from "./style";
import { getSessions } from "../Axios";
import HoursSessions from '../HoursSessions';
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { useParams}  from "react-router"; 


export default function Sessions(){
    const [movieSessions,setMovieSessions] = useState ("");
    const { movieId } = useParams();

    useEffect(() => {
        const promise = getSessions(movieId);
        promise.then(response => setMovieSessions(response.data));
    }, [movieId]);


    return (
    <>
        <Container>
        Selecione o horário
        </Container>
        
        <MovieSession>
        {
          movieSessions.days.map(day => (
            <HoursSessions key={day.id} {...day} />
          ))
        }
      </MovieSession>

        <Footer poster ={movieSessions.posterURL} title={movieSessions.title} />
    </>
    );
}
