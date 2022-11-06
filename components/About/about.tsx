
import useOnScreen from "helpers/isVisible";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { BackgroudImage } from "../HomePage/homePageStyle"
import { AboutText, AlignCollum, Container, ImageDiv, ImageDivExternal, MyProjectsTitle, SubTitle } from "./aboutStyle"

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
        <Container style={{
            backgroundColor:'#703E7880'
        }}id="about">
            <AlignCollum>
            <MyProjectsTitle ref={elementRef}><span>{"{"}</span>Sobre<span>{"}"}</span></MyProjectsTitle>

            <SubTitle style={{
                fontSize:'32px'
            }}><span>{"<"}</span>Um pouco sobre mim<span>{">"}</span></SubTitle>

            <AboutText>
                Meu nome é Gabriel Mesquita tenho 19 anos, sou programador full stack. Estou a 9 anos estudando programação. Sempre conhecendo novas técnlogias e me atualizando.
                Trabalho de freelancer no workana a 3 anos.
            </AboutText>
            </AlignCollum>
            <AlignCollum style={{
                alignItems:'center'
            }}>
                <ImageDivExternal>
                    <ImageDiv>
                        <Image src={"/myImage.jfif"} layout={"fill"} alt="My User Image"/>
                        </ImageDiv>
                </ImageDivExternal>
            </AlignCollum>

 
        </Container>
    )
}