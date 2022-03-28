import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";
import Success from "./components/Success";

export default function App (){
    const [booking, setBooking] = useState(null);
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Homepage/>}/> 
                <Route path="/sessoes:idFilme" element={<Sessions />} /> 
                <Route path="/assentos:idSessao" element={<Seats setBooking={setBooking}/>} /> 
                <Route path="/sucesso" element = {<Success {...booking} setBooking={setBooking} />}/>
            </Routes>
        </BrowserRouter>
    );
}