import { Done, Font, OrderInformation, Typography } from "./style";
import Button from "../Button";
import { useNavigate } from "react-router-dom";


export default function Success({title,date,time,seats,clients}){
    const navigate = useNavigate();

    function goToHomepage(){
        navigate('/');
    }
    return(
    <>
        <Done> 
            Pedido feito com sucesso!
        </Done>

        <OrderInformation>
            <Font> Filme e sessão </Font>
            <Typography>{title}</Typography>
            <Typography>{date} {time}</Typography>
        </OrderInformation>

        <OrderInformation>
            <Font> Ingressos </Font>
            <Typography>
            {seats.map(seat => (
            <div key={seat.id}>
            Assento {seat.name}
            </div>
            ))}
            </Typography>
        </OrderInformation>

        <OrderInformation>
            <Font> Comprador </Font>
            <Typography>
            {clients.map(client => (
            <>
            <div>Nome: {client.name}</div>
            <div>CPF: {client.cpf}</div>
            </>
            ))}
            

            </Typography>
        
        </OrderInformation>


        <Button onClick={goToHomepage}>
            Voltar pra Home
        </Button>
    </>
    );
   
}
