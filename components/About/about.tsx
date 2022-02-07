import { BackgroudImage } from "../HomePage/homePageStyle"
import { AboutText, Container, MyProjectsTitle } from "./aboutStyle"

export const AboutPage = () => {
    return(
        <Container  id="about">
            <MyProjectsTitle>Sobre</MyProjectsTitle>
            <AboutText>
                Meu nome é Gabriel Mesquita, sou programador full stack... estou a 8 anos estudando programação. sempre conhecendo novas técnlogias e se atualizando
            </AboutText>
            <BackgroudImage style={{
          backgroundImage:'url(/backgroundHome.jpg)'
        }}/>
        </Container>
    )
}