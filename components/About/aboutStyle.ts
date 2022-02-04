import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height:100vh;
    background-color:black;
    padding:4rem;
    text-align:start;

`

export const MyProjectsTitle = styled.h1`
    font-size: 6rem;
    color: white;
    @media (max-width:700px ){
        max-width:100%;
        border-right: 0px;
        border-bottom: 10px solid white;
        font-size: 2rem;
    }
    margin-bottom: 1rem;
`