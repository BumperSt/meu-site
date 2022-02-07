import Image from "next/image"
import { BackgroudImage } from "../HomePage/homePageStyle"
import { AlignProjects, AlingIcon, Container, MyProjectsTitle, ProjectDescreption, ProjectDiv, ProjectImageDiv, ProjectTitle } from "./projectsStyle"



export const ProjectsPage = () => {

    const myProject = [
        {
            name:"Liga das lendas",
            descreption:"Liga das lendas é um site para ver dados em gerais sobre o jogo league of legends.",
            indexImage:"/ligadaslendas/capa.PNG",
            github:"https://github.com/BumperSt/liga-das-lendas-client",
            projectUrl:"https://ligadaslendas.vercel.app/",
            id:0
        },
        {
            name:"Watch Together",
            descreption:"Watch Together é um aplicativo desktop para assistir filmes/séries usando o sistema torrent",
            indexImage:"/watchtogether/capa.png",
            github:"https://github.com/BumperSt/SeeMovieBack",
            projectUrl:null,
            id:1
        },
    ]


    return(
        <Container id="projects">
            <MyProjectsTitle>Meus Projetos</MyProjectsTitle>

            <AlignProjects>
                {
                    myProject.map((project) => (
                        <ProjectDiv key={project.id}>
                            <ProjectImageDiv>
                                <Image src={project.indexImage} layout="fill" title={project.name} alt="Imagem do projeto"/>
                            </ProjectImageDiv>
                            <ProjectTitle>{project.name}</ProjectTitle>
                            <ProjectDescreption>
                            {project.descreption}
                            </ProjectDescreption>
                            <AlingIcon>

                                <Image  onClick={()=> window.open(project.github, "_blank")} src="/github.png" width="80" height="50" alt="link do github"/>
                                {
                                    project.projectUrl && 
                                    <Image onClick={()=> window.open(project.projectUrl, "_blank")}  src="/siteIcon.png" width="50" height="0" alt="link do projeto"/>

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