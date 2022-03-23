import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";
import Success from "./components/Success";

export default function App (){
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Homepage/>}/> 
                <Route path="/sessoes:idFilme" element={<Sessions/>} /> 
                <Route path="/assentos:idSessao" element={<Seats/>} /> 
                <Route path="/sucesso" element = {<Success/>}/>
            </Routes>
        </BrowserRouter>
    );
}