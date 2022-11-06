import useOnScreen from "helpers/isVisible";
import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import { BackgroudImage, FilterDivElipseAbsolute } from "../HomePage/homePageStyle"
import { AlignHabilitys, Container, HabilitysContainer, HabilityTitle, MyProjectsTitle, BarSize, LeftBackground } from "./habilitysStyle"
import {FaReact} from 'react-icons/fa'
import { Line } from "rc-progress";


interface Props {
    setAcutualPage:any
}


export const Habilitys = ({setAcutualPage} : Props) => {

    const elementRef = useRef<HTMLDivElement>(null);
    const isOnScreen = useOnScreen(elementRef);
  
    const [loadPercente, setLoadPercente] = useState([]);

    

    useEffect(() => {
        if(isOnScreen){
            console.log(loadPercente)
            setAcutualPage('habilitys')
            if(loadPercente.length === 0){
                let temp = []
                let waitTimeout = []
                Habilitys.forEach((hability) =>{
                    waitTimeout.push(hability.percent)
                    temp.push(0)
                })
                setLoadPercente(temp)
                setTimeout(() => {
                    console.log(waitTimeout)
                    setLoadPercente(waitTimeout)
                }, 200);
            }
        }else{
            setLoadPercente([])
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOnScreen])

    

    const Habilitys = [
        {
            name:"React",
            percent:90,
            icon: <FaReact fill="#61DAFB" size={100}/>,
            color: '#83CD29'
        },
        {
            name:"Next",
            percent:90,
            icon: <FaReact size={100}/>,
            color:'#61DAFB',
        },
        {
            name:"Node",
            percent:80,
            icon: <FaReact size={100}/>,
            color:'#FFDD55'

        },
        {
            name:"Typescript",
            percent:80,
            icon: <FaReact size={100}/>,
            color:'#000000'

        },

    ]




    return(
        <Container id="habilitys" style={{
            paddingTop:'300px'
        }}>

            <LeftBackground>
                <Image src="/leftBackground.png" width={412} height={558} alt="background"/>
                <div style={{
                    width:'100%',
                    height:'40px',
                    marginTop:'5%',
                    borderStyle:'dotted none dashed none',
                    borderColor:'#703E78',
                    borderWidth:"5px",
                
                }}>

                </div>
                <Image src="/rigthBackground.png" width={412} height={558} alt="background"/>
            </LeftBackground>

            <MyProjectsTitle ref={elementRef}><span>{"["}</span>Habilidades<span>{"]"}</span></MyProjectsTitle>

            <AlignHabilitys>
                    {
                        Habilitys.map((hability, index) => (
                            <HabilitysContainer key={index}>
                                <HabilityTitle><span>{"<"}</span>{hability.name}<span>{">"}</span></HabilityTitle>
                                {hability.icon}
                                <Line style={{
                                    width:'116px'
                                }} percent={loadPercente[index] }  transition="all 20s"  strokeWidth={8} strokeColor={hability.color} trailColor={'#BA68C8'} trailWidth={8} />
                            </HabilitysContainer>
                        ))
                    }                
            </AlignHabilitys>

        </Container>
    )
}