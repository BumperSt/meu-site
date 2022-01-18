import { HeadBarContainer, HeaderTitle,AlignCenter, ButtonHeader } from "./headBarStyle"
import {Link} from 'react-scroll'



export const HeadBar = () => {
    return(
        <HeadBarContainer >
            <HeaderTitle>Gabriel Mesquita:FullStack</HeaderTitle>
            <AlignCenter>
                <ButtonHeader><Link to="home" spy={true} smooth={true}>Inicio</Link></ButtonHeader>
                <ButtonHeader><Link to="projects" spy={true} smooth={true}>Projetos</Link></ButtonHeader>
                <ButtonHeader><Link to="about" spy={true} smooth={true}>Sobre</Link></ButtonHeader>

            </AlignCenter>
        </HeadBarContainer>
    )
}