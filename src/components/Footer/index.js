import { LowerBar, FootInfo, PosterImage } from "./style";

export default function Footer({ image, title, day, time }){
    return(
    <LowerBar>
        <PosterImage>
        <img src={image} alt={title} />  
        </PosterImage>
        <FootInfo>
        <span>{title}</span>
        {(day && time) && <span> {day} - {time} </span>}  
        </FootInfo>
    </LowerBar>
        );
}

 