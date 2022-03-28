import { Container, Input } from "./style";
import useState from "react";
import Button from "../Button";


export default function Seats ({ seat, seatId, clientOrder }){
    const [name, setName] = useState ("");
    const [cpf, setCpf,] = useState ("");
    
   
    return (
    <>
    <Container>
    Selecione o(s) assento(s)
    </Container>
       
    <span> Nome do comprador:</span>
    <Input type = "text" placeholder="Digite seu nome..." onChange={(e) => setName(e.target.value)} value={name} /> 

    <span>CPF do comprador:</span>
    <Input type = "text" placeholder="Digite seu CPF..." onChange={(e) => setCpf(e.target.value)} value = {cpf}/>

    <Button onClick={() => clientOrder (seatId, name, cpf)}> Reservar assento(s) </Button>
    
    </>
    );
}