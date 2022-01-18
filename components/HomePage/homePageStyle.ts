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
    @media (max-width:700px ){
        flex-direction: column;
        text-align: center;

    }
    

`

export const HabilityText = styled.div`
    font-size: 4rem;
    padding: 1rem;
    margin-inline: 1rem;
    color: white;
    transition: all 0.5s;
    :hover{
        transform: scale(1.2);
        cursor: pointer;
    }
    @media (max-width:700px ){
        font-size: 1.5rem;
        padding: .5rem;
    }
    

`

export const  HomePageText = styled.h1`
    font-size: 6rem;
    color: white;
    max-width:50%;
    border-right: 20px solid white;
    align-self: center;
    @media (max-width:700px ){
        max-width:100%;
        border-right: 0px;
        border-bottom: 15px solid white;
        font-size: 2rem;
    }

`
export const AlignRow = styled.div`
    display:flex;
    flex-direction: row;

`
export const AlignCollum = styled.div`
    display:flex;
    flex-direction: column;
    align-self: center;
    
`

export const BackgroudImage = styled.div`
    -webkit-filter: brightness(60%);
    filter: brightness(60%);
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