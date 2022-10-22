import { AboutPage } from "@/components/About/about"
import { Habilitys } from "@/components/Habilitys/habilitys"
import { HeadBar } from "@/components/HeadBar/headBar"
import { AlignCenter, AlignCollum, AlignRow, BackgroudImage, HomeContainer, HabilityText, HomePageText, Container, ProgramerText, Descreption, FilterDivElipseAbsolute, BottomBarStyle } from "@/components/HomePage/homePageStyle"
import { ProjectsPage } from "@/components/Projects/projects"
import useOnScreen from "helpers/isVisible"
import Head from "next/head"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"



const Home = () => {

  const [actualPage, setAcutualPage] = useState('home')
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);
  const [isHere, setIsHere] = useState(false)
  useEffect(() => {
      if(isOnScreen){
        setIsHere(true)
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
        <FilterDivElipseAbsolute/>
        <FilterDivElipseAbsolute style={{
          transform:'rotate(90deg) translateY(25%)',
        }}/>
        <AlignCenter ref={elementRef}>
        <Image src="/homeImage.svg" alt="home" width={542} height={542}/>

          <AlignCollum style={{
            zIndex:50,
          }}>
            <ProgramerText>Programador</ProgramerText>
            <div className="gap">
              <HomePageText>Gabriel Mesquita</HomePageText>
              <Descreption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non turpis quis felis lacinia condimentum et in dolor.</Descreption>           
            </div>
          </AlignCollum>

        </AlignCenter>
        {
          isHere &&
          <BottomBarStyle>
          <div className="alignCollum" >            
            <Image src="/home/ball.svg" width={16} height={16} alt="line"/>
            <Image src="/home/firstLine.png" width={2} height={70} alt="line"/>
              <span style={{
                position:'absolute',
                top:'-40%',
                left:'100%',
              }}>=<a>=</a></span>
          </div>
          <div className="alignCollum" style={{
            
          }}>            
            <Image src="/home/firstLine.png" width={2} height={110} alt="line"/>

          </div>
          <div className="alignCollum" style={{
            
          }}>        
                      <span style={{
                position:'absolute',
                top:'-70%',
                left:'-200%',
              }}>{"["} {"]"}</span>    
              <Image src="/home/ball.svg" width={16} height={16} alt="line"/>

            <Image src="/home/firstLine.png" width={2} height={102} alt="line"/>
          </div>
          <div className="alignCollum" style={{
            
          }}>          
                  <span style={{
                position:'absolute',
                top:'-10%',
                left:'300%',
              }}>{"<"}{"/"}{">"}</span>     
            <Image src="/home/firstLine.png" width={2} height={100} alt="line"/>
          </div>
          <div className="alignCollum" style={{
            
          }}>            
            <Image src="/home/firstLine.png" width={2} height={85} alt="line"/>
          </div>
          <div className="alignCollum" style={{
            
          }}>          
  
                        <Image src="/home/ball.svg" width={16} height={16} alt="line"/>
  
            <Image src="/home/firstLine.png" width={2} height={102} alt="line"/>
          </div>
          <div className="alignCollum" style={{
            
          }}>         
                       <span style={{
                position:'absolute',
                top:'-80%',
                left:'-100%',
              }}>{"<div>"}</span>      
            <Image src="/home/firstLine.png" width={2} height={72} alt="line"/>
          </div>
          <div className="alignCollum" style={{
            
          }}>           
                                 <span style={{
                position:'absolute',
                top:'-20%',
                left:'-200%',
              }}>{"!="}</span>      
            <Image src="/home/ball.svg" width={16} height={16} alt="line"/>
            <Image src="/home/firstLine.png" width={2} height={47} alt="line"/>
          </div>
          <div className="alignCollum" style={{
            
          }}>            
                                 <span style={{
                position:'absolute',
                top:'-50%',
                left:'100%',
              }}>{"{"}{"}"}</span>     
            <Image src="/home/ball.svg" width={16} height={16} alt="line"/>
            <Image src="/home/firstLine.png" width={2} height={110} alt="line"/>
          </div>
          <div className="alignCollum" style={{
            
          }}>            
                             <span style={{
                position:'absolute',
                top:'-30%',
                left:'200%',
              }}>{"??"}</span>     
            <Image src="/home/firstLine.png" width={2} height={37} alt="line"/>
          </div>
          <div className="alignCollum" style={{
            
          }}>            
                            <span style={{
                position:'absolute',
                top:'-50%',
                left:'100%',
              }}>scr=</span>     
            <Image src="/home/ball.svg" width={16} height={16} alt="line"/>
            <Image src="/home/firstLine.png" width={2} height={132} alt="line"/>
          </div>
          <div className="alignCollum" style={{
            
          }}>            
            <Image src="/home/ball.svg" width={16} height={16} alt="line"/>
            <Image src="/home/firstLine.png" width={2} height={85} alt="line"/>
          </div>
          <div className="alignCollum" style={{
              
          }}>            
                            <span style={{
                position:'absolute',
                top:'-50%',
                left:'100%',
              }}>{"["}{"]"}</span>    
              <Image src="/home/firstLine.png" width={2} height={110} alt="line"/>
          </div>
          <div className="alignCollum">            
          <Image src="/home/ball.svg" width={16} height={16} alt="line"/>

            <Image src="/home/firstLine.png" width={2} height={85} alt="line"/>
          </div>
        </BottomBarStyle>
        }
        
        <BackgroudImage style={{
          backgroundImage:'url(/backgroundHome.jpg)'
        }}/>
      </HomeContainer>
      <AboutPage setAcutualPage={setAcutualPage}/>
      <Habilitys setAcutualPage={setAcutualPage}/>
      <ProjectsPage setAcutualPage={setAcutualPage}/>

   </Container>
  )
}

export default Home
