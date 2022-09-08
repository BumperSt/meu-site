import useOnScreen from "helpers/isVisible";
import Image from "next/image"
import { useEffect, useRef } from "react";
import { BackgroudImage } from "../HomePage/homePageStyle"
import { AlignProjects, AlingIcon, Container, MyProjectsTitle, OpenProjectByUrl, ProjectDescreption, ProjectDiv, ProjectImageDiv, ProjectTitle } from "./projectsStyle"



interface Props {
    setAcutualPage:any
}


export const ProjectsPage = ({setAcutualPage} : Props) => {

    const elementRef = useRef<HTMLDivElement>(null);
    const isOnScreen = useOnScreen(elementRef);
  
    console.log({isOnScreen});

    useEffect(() => {
        if(isOnScreen){
            setAcutualPage('projects')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOnScreen])

    const myProject = [
        {
            name:"Liga das lendas",
            descreption:"Liga das lendas é um site para ver dados em gerais sobre o jogo league of legends.",
            indexImage:"/ligadaslendas/capa.PNG",
            github:"https://github.com/BumperSt/liga-das-lendas-client",
            projectUrl:"https://ligadaslendas.vercel.app/",

        },
        {
            name:"Watch Together",
            descreption:"Watch Together é um aplicativo desktop para assistir filmes/séries usando o sistema torrent",
            indexImage:"/watchtogether/capa.png",
            github:"https://github.com/BumperSt/SeeMovieBack",
            projectUrl:null,

        },
    ]

    const freelaProject = [
        {
            name:"Giro Blaze",
            descreption:"Giro Blaze é um site que mostra o histórico do site blaze dos jogos double e crash.",
            indexImage:"/giroblaze/capa.png",
            github:"",
            projectUrl:"https://giroblaze.com/",
        }
    ]


    return(
        <Container id="projects">
            <MyProjectsTitle>Meus Projetos</MyProjectsTitle>
            <AlignProjects  ref={elementRef}>
                {
                    myProject.map((project, index) => (
                        <ProjectDiv key={index}>
                            <ProjectImageDiv>
                                <Image src={project.indexImage} layout="fill" title={project.name} alt="Imagem do projeto"/>
                            </ProjectImageDiv>
                            <ProjectTitle>{project.name}</ProjectTitle>
                            <ProjectDescreption>
                                {project.descreption}
                            </ProjectDescreption>
                            <AlingIcon>
                                {
                                    project.github != "" &&
                                    <Image title="Abrir GitHub"  onClick={()=> window.open(project.github, "_blank")} src="/github.png" width="80" height="50" alt="link do github"/>

                                }
                                {
                                    project.projectUrl && 
                                    <OpenProjectByUrl onClick={()=> window.open(project.projectUrl, "_blank")}>Abrir Site</OpenProjectByUrl>


                                }

                            </AlingIcon>
                            
                        </ProjectDiv>
                    ))
                }
               
            </AlignProjects>
            <MyProjectsTitle>Projetos Freelancer</MyProjectsTitle>
            <AlignProjects  ref={elementRef}>
                {
                    freelaProject.map((project, index) => (
                        <ProjectDiv key={index}>
                            <ProjectImageDiv>
                                <Image src={project.indexImage} layout="fill" title={project.name} alt="Imagem do projeto"/>
                            </ProjectImageDiv>
                            <ProjectTitle>{project.name}</ProjectTitle>
                            <ProjectDescreption>
                                {project.descreption}
                            </ProjectDescreption>
                            <AlingIcon>

                                {
                                    project.github != "" &&
                                    <Image title="Abrir GitHub"  onClick={()=> window.open(project.github, "_blank")} src="/github.png" width="80" height="50" alt="link do github"/>

                                }                                {
                                    project.projectUrl && 
                                    <OpenProjectByUrl onClick={()=> window.open(project.projectUrl, "_blank")}>Abrir Site</OpenProjectByUrl>


                                }

                            </AlingIcon>
                            
                        </ProjectDiv>
                    ))
                }
               
            </AlignProjects>
            <BackgroudImage style={{
          backgroundImage:'url(/backgroundHome.jpg)'
        }}/>
        </Container>
    )
}