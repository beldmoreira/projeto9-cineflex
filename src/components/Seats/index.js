import { Container, Input } from "./style";
import useState from "react";
import Button from "../Button";
import { useNavigate } from "react-router";

export default function Seats (){
    const [name, setName] = useState ("");
    const [cpf, setCpf,] = useState ("");
    const navigate = useNavigate();

    function DoneOrder() {
        navigate('/sucesso');
    }
    return (
    <>
    <Container>
    Selecione o(s) assento(s)
    </Container>

    assentos vindos dinamicamente
  
    <span> Nome do comprador:</span>
    <Input type = "text" placeholder="Digite seu nome..." onChange={(e) => setName(e.target.value)} value={name} /> 

    <span>CPF do comprador:</span>
    <Input type = "text" placeholder="Digite seu CPF..." onChange={(e) => setCpf(e.target.value)} value = {cpf}/>

    <Button onClick={DoneOrder}> Reservar assento(s) </Button>
    </>
    );
}