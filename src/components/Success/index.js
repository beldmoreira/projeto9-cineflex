import { Done, Font, Typography } from "./style";
import Button from "../Button";


export default function Success(){
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

        <Button>
        Voltar pra Home
        </Button>
    </>
    );

    
}