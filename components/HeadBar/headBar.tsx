import { HeadBarContainer, HeaderTitle,AlignCenter, ButtonHeader } from "./headBarStyle"
import {Link} from 'react-scroll'
import { useEffect, useRef, useState } from "react"




interface Props {
    actualPage:string,
    setAcutualPage:any
}

export const HeadBar = ({actualPage, setAcutualPage} : Props) => {  
    
    const pages = [
        {
            name:'Inicio',
            url:'home'
        },
        {
            name:'Projetos',
            url:'projects'
        },
        {
            name:'Sobre',
            url:'about'
        }
    ]

    const changePage = (pageUrl) => {
        let reftp = document.getElementById(pageUrl);
        reftp.scrollIntoView({ behavior: 'smooth',  block: 'start'})
        setTimeout(() => {
            setAcutualPage(pageUrl)

        }, 200);
    }

    return(
        <HeadBarContainer >
            <HeaderTitle>Gabriel Mesquita:FullStack</HeaderTitle>
            <AlignCenter>
                {
                    pages.map((pages, idKey) => (
                        <ButtonHeader key={idKey} active={actualPage === pages.url}  onClick={() => changePage(pages.url)}>{pages.name}</ButtonHeader>

                    ))
                }
              

            </AlignCenter>
        </HeadBarContainer>
    )
}