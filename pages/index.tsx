import { AboutPage } from "@/components/About/about"
import { HeadBar } from "@/components/HeadBar/headBar"
import { AlignCenter, AlignCollum, AlignRow, BackgroudImage, Container, HabilityText, HomePageText } from "@/components/HomePage/homePageStyle"
import { ProjectsPage } from "@/components/Projects/projects"
import useOnScreen from "helpers/isVisible"
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
    <>
      <HeadBar actualPage={actualPage} setAcutualPage={setAcutualPage}/>

      <Container id="home">
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
      </Container>
      <ProjectsPage setAcutualPage={setAcutualPage}/>
      <AboutPage setAcutualPage={setAcutualPage}/>

   </>
  )
}

export default Home
