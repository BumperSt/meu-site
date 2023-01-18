import { HeadBarContainer, HeaderTitle,AlignCenter, ButtonHeader, MenuInMobile, ButtonInMobile } from "./headBarStyle"
import {Link} from 'react-scroll'
import { useEffect, useRef, useState } from "react"
import useWindowDimensions from "helpers/screenSize"
import {CgMenuRight, CgMenuRightAlt} from 'react-icons/cg'



interface Props {
    actualPage:string,
    setAcutualPage:any
}

export const HeadBar = ({actualPage, setAcutualPage} : Props) => {  
    const [showBar, setShowBar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [openMenu, setOpenMenu] = useState(false);

    const {width} = useWindowDimensions()
    const pages = [
        {
            name:'About',
            url:'about'
        },
        {
            name:'Habilitys',
            url:'habilitys'
        },
        {
            name:'Projects',
            url:'projects'
        },
    ]

    const changePage = (pageUrl) => {
        let reftp = document.getElementById(pageUrl);
        reftp.scrollIntoView({ behavior: 'smooth',  block: 'start'})
        setTimeout(() => {
            setAcutualPage(pageUrl)

        }, 200);
    }


    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setShowBar(false);
        } else {
          setShowBar(true);
        }
  
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
    };
  
    useEffect(() => {
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", controlNavbar);
  
        // cleanup function
        return () => {
          window.removeEventListener("scroll", controlNavbar);
        };
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lastScrollY]);

    return(
        <HeadBarContainer  style={
            showBar
              ? {
                  top: "0",
                }
              : {
                  top: "-100%",
                }
          }>
            <HeaderTitle onClick={() => changePage('home')}><span>{"</"}</span>Gabriel Mesquita<span>{">"}</span></HeaderTitle>

            {
              width > 768 ?
              <AlignCenter>
              {
                  pages.map((pages, idKey) => (
                      <ButtonHeader key={idKey} active={actualPage === pages.url}  onClick={() => changePage(pages.url)}>{pages.name}</ButtonHeader>

                  ))
              }
            

          </AlignCenter>
          :
              <>
                {
                  openMenu ? 
                    <>
                    <MenuInMobile>
                      {
                          pages.map((pages, idKey) => (
                            <ButtonInMobile key={idKey}  onClick={() => {
                              setOpenMenu(false) 
                              changePage(pages.url)}}>{pages.name}</ButtonInMobile>

                      ))
                      }
                      
                    </MenuInMobile>
                    <div style={{
                      position:'fixed',
                      right:'16px',
                      top:'6px'
                    }}>
                    <CgMenuRightAlt onClick={() => setOpenMenu(false)} size={22} style={{ color:'#fff', cursor:'pointer'}}/>
                    </div>
                    </>
                  :
                    <CgMenuRightAlt onClick={() => setOpenMenu(!openMenu)} color="#E6E6E6" size={22}/>
                }
              
              </>
              
            }
  
        </HeadBarContainer>
    )
}