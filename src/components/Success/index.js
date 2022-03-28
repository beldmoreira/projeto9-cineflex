import { Done, Font, Typography } from "./style";
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

        <Font> Filme e sessão </Font>
        <Typography></Typography>
        <Typography></Typography>

        <Font> Ingressos </Font>
        <Typography></Typography>
        <Typography></Typography>

        <Font> Comprador </Font>
        <Typography></Typography>
        <Typography></Typography>

        <Button onClick={goToHomepage}>
        Voltar pra Home
        </Button>
    </>
    );

    
}