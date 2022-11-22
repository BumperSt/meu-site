import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width:100vw;
    
`


export const HomeContainer = styled.div`
    width: 100%;
    position: relative;
    margin-top: 15vh;
    height: 100vh;
    @media (max-width:700px ){
        height: fit-content;
        padding-bottom: 15rem;
    }

`
export const AlignCenter = styled.div`
    display:flex;    
    flex-direction: row;
    padding-inline:114px;
    height: 80%;
    justify-content: space-around;

    @media (max-width:700px ){
        padding: 1rem;
    }
`

export const HabilityText = styled.div`
    font-size: 4rem;
    color: white;
    :hover{
        transform: scale(1.2);
        cursor: pointer;
    }
    @media (max-width:1280px ){
        font-size: 2rem;
        padding-inline: .25rem;
    }
    @media (max-width:720px ){
        font-size: 1.5rem;
        padding-inline: .25rem;
    }
    margin-inline:.5rem;
    

`

export const ProgramerText = styled.h1`
    color:#DDB4E4;
    font-size:24px;
    @media (max-width:720px ){
        font-size: 12px;
    }
`

export const  HomePageText = styled.h1`
    font-size:40px;
    @media (max-width:720px ){
        font-size: 20px;
    }
`

export const Descreption = styled.p`
    font-size:40px;
    font-weight: 700;
    width: 80%;
    color:#B8B1BA;
    @media (max-width:720px ){
        font-size: 20px;
    }
`

export const AlignRow = styled.div`
    display:flex;
    flex-direction: row;
    width: 100%;

`
export const AlignCollum = styled.div`
    display:flex;
    flex-direction: column;
    align-self: center;
    text-align: start;
    width: 50%;
    .gap{
        gap:8px;
    }
    @media (max-width:768px ){
        width: 100%;
    }
`

export const BackgroudImage = styled.div`
    -webkit-filter: brightness(50%);
    filter: brightness(50%);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    z-index: -1;
    transition: background-image 0.5s;
`

export const FilterDivElipseAbsolute = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-55%);
    width: 50%;
    height: 80vh;
    filter: blur(350px);
    background-color: #703E78;
    z-index: 1;
    border-radius: 60%;
    @media (max-width:768px){
        left: 0%;
    }

`

export const BottomBarStyle = styled.div`
    @keyframes example {
        from {height: 0}
        to {height: 100%;}
    }
    @keyframes example2 {
        from {font-size: 12px}
        to {font-size: 32px;}
    }
    position: absolute;
    bottom: 0;
    justify-content: space-around;
    width: 100%;
    left: 0;
    display:flex;
    flex-direction: row;
    animation-name: example;
    animation-duration: 15s;
    transition: all .5s;
    max-height:100px;
    .alignCollum{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: flex-end;
        position: relative;
        span{
            color:#703E78;
            font-size: 32px;
            animation-name: example2;
            animation-duration: 3s;
        }

    }
`