import {Container, Font, MoviePics} from './style';
import { useState, useEffect } from "react";
import { getAllMovies } from '../Axios';
import Movies from "../Movies";



export default function Homepage(){
    const [movieImages, setMoviesImages] = useState([]);

    useEffect(() => {
    const promise = getAllMovies();
    promise.then(response => setMoviesImages(response.data));
    }, []);

    return(
        <>
            <Container>       
                <Font> Selecione o filme </Font>
            </Container> 
            <MoviePics>
            {movieImages.map(poster => (
                <Movies key={poster.id} {...poster} />
                  ))
                }
            </MoviePics>
        </>
        );
    }
