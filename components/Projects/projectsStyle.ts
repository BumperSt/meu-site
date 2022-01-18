import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height:100vh;
    background-color:black;
    padding:4rem;
    text-align:center;
`

export const MyProjectsTitle = styled.h1`
    font-size: 6rem;
    color: white;
    max-width:50%;
    @media (max-width:700px ){
        max-width:100%;
        border-right: 0px;
        border-bottom: 10px solid white;
        font-size: 2rem;
    }
`