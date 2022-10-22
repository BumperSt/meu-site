
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
                Meu nome é Gabriel Mesquita, sou programador full stack... estou a 8 anos estudando programação. sempre conhecendo novas técnlogias e me atualizando.
                Trabalho de freelancer no workana a 2 anos.
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

            <BackgroudImage style={{
          backgroundImage:'url(/backgroundHome.jpg)'
        }}/>
        </Container>
    )
}