import { AboutPage } from "@/components/About/about"
import { HeadBar } from "@/components/HeadBar/headBar"
import { AlignCenter, AlignCollum, AlignRow, BackgroudImage, Container, HabilityText, HomePageText } from "@/components/HomePage/homePageStyle"
import { ProjectsPage } from "@/components/Projects/projects"
import { useEffect, useRef } from "react"



const Home = () => {


  return (
    <>
      <Container   id="home">
        <AlignCenter>
          <HomePageText>DESENVOLVEDOR FULL STACK</HomePageText>
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
      <ProjectsPage/>
      <AboutPage/>

   </>
  )
}

export default Home
