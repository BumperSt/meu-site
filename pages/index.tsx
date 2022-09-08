import { AboutPage } from "@/components/About/about"
import { HeadBar } from "@/components/HeadBar/headBar"
import { AlignCenter, AlignCollum, AlignRow, BackgroudImage, HomeContainer, HabilityText, HomePageText, Container } from "@/components/HomePage/homePageStyle"
import { ProjectsPage } from "@/components/Projects/projects"
import useOnScreen from "helpers/isVisible"
import Head from "next/head"
import { useEffect, useRef, useState } from "react"



const Home = () => {

  const [actualPage, setAcutualPage] = useState('home')
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  useEffect(() => {
      if(isOnScreen){
          setAcutualPage('home')
      }
  }, [isOnScreen])

  return (
    <Container>
      <Head>
        <title>Gabriel Mesquita</title>
      </Head>
      <HeadBar actualPage={actualPage} setAcutualPage={setAcutualPage}/>
      
      <HomeContainer id="home">
        <AlignCenter>
          <HomePageText ref={elementRef}>DESENVOLVEDOR FULL STACK</HomePageText>
          <AlignCollum>
            <AlignRow>
              <HabilityText>React</HabilityText>
              <HabilityText>NodeJs</HabilityText>
              <HabilityText>TypeScript</HabilityText>
            </AlignRow>
            <AlignRow>
              <HabilityText>Next</HabilityText>
              <HabilityText>Css</HabilityText>
              <HabilityText>Html</HabilityText>
            </AlignRow>
          </AlignCollum>

        </AlignCenter>
        <BackgroudImage style={{
          backgroundImage:'url(/backgroundHome.jpg)'
        }}/>
      </HomeContainer>
      <ProjectsPage setAcutualPage={setAcutualPage}/>
      <AboutPage setAcutualPage={setAcutualPage}/>

   </Container>
  )
}

export default Home
