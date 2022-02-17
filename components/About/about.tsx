
import useOnScreen from "helpers/isVisible";
import { useEffect, useRef } from "react";
import { BackgroudImage } from "../HomePage/homePageStyle"
import { AboutText, Container, MyProjectsTitle } from "./aboutStyle"

interface Props {
    setAcutualPage:any
}


export const AboutPage = ({setAcutualPage} : Props) => {

    const elementRef = useRef<HTMLDivElement>(null);
    const isOnScreen = useOnScreen(elementRef);
  
    useEffect(() => {
        if(isOnScreen){
            setAcutualPage('about')
        }
    }, [isOnScreen])


    return(
        <Container id="about">
            <MyProjectsTitle ref={elementRef}   >Sobre</MyProjectsTitle>
            <AboutText>
                Meu nome é Gabriel Mesquita, sou programador full stack... estou a 8 anos estudando programação. sempre conhecendo novas técnlogias e me atualizando.
                Trabalho de freelancer no workana a 2 anos.
            </AboutText>
            <BackgroudImage style={{
          backgroundImage:'url(/backgroundHome.jpg)'
        }}/>
        </Container>
    )
}