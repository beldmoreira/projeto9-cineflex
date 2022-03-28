import { Done, Font, OrderInformation, Typography } from "./style";
import Button from "../Button";
import { useNavigate } from "react-router-dom";


export default function Success(){
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
        <Typography></Typography>
        <Typography></Typography>
        </OrderInformation>

        <OrderInformation>
        <Font> Comprador </Font>
        <Typography></Typography>
        <Typography></Typography>
        </OrderInformation>


        <Button onClick={goToHomepage}>
        Voltar pra Home
        </Button>
    </>
    );

    
}