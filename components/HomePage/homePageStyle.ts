import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`
export const AlignCenter = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    text-align: start;
    height: 80%;
    padding: 1rem;
    @media (max-width:1280px){
        flex-direction: column;
        text-align: center;

    }
    

`

export const HabilityText = styled.div`
    font-size: 4rem;
    color: white;
    transition: all 0.5s;
    :hover{
        transform: scale(1.2);
        cursor: pointer;
    }
    @media (max-width:1280px ){
        font-size: 2rem;
        padding-inline: .25rem;
    }
    margin-inline:.5rem;
    

`

export const  HomePageText = styled.h1`
    font-size: 5rem;
    color: white;
    max-width:40%;
    margin-right: 1rem;
    align-self: center;
    border-right: 15px solid white;
    padding-inline:1rem;
    @media (max-width:1280px ){
        margin-top: 5rem;
        border-right: 0px;
        border-bottom: 15px solid white;
        font-size: 3rem;
        max-width:100%;

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