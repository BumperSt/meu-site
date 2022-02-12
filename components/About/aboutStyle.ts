import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height:100vh;
    padding:4rem;
    text-align:start;
    @media (max-width:700px ){
        padding: 1rem;
    }
`

export const MyProjectsTitle = styled.h1`
    font-size: 6rem;
    color: white;
    border-bottom: 10px solid white;
    margin-top: 1%;

    @media (max-width:1280px ){
        max-width:100%;
        border-bottom: 10px solid white;
        font-size: 2.5rem;

    }
    @media (max-width:700px ){
        margin-top: 20%;

    }
    margin-bottom: 1rem;
`

export const AboutText = styled.h1`
    font-size: 3rem;
    color: white;
    @media (max-width:1280px ){
        font-size: 2rem;

    }
`