import axios from "axios";

const url = "https://mock-api.driven.com.br/api/v5/cineflex";

function getAllMovies(){
    const promise = axios.get(`${url}/movies`)
    return promise;
}

function getSessions(movieId){
    const promise = axios.get(`${url}/movies/${movieId}/showtimes`)
    return promise;
}

function getSeats(sessionId){
    const promise = axios.get(`${url}/showtimes/${sessionId}/seats`)
    return promise;
}


function makeSeatsReservation(){
    const promise = axios.post(`${url}/seats/book-many`)
    return promise;
}

export{
    makeSeatsReservation,
    getAllMovies,
    getSessions,
    getSeats

}