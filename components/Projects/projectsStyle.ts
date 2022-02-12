import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding:4rem;
    text-align:start;
    min-height:100vh;
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


export const AlignProjects = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width:700px ){
        flex-direction: column;
        flex-wrap: nowrap;
        width: 100%;
        align-items: center;

    }
`


export const ProjectDiv = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-right: .5rem;
    margin-top:1rem;
    :hover{
        transform:scale(1.2);
        z-index: 100;
        background-color:rgba(0,0,0);
    }
    background-color:rgba(0,0,0,0.5);
    transition: all .5s;
    text-align:center;
    padding: 1rem;
    @media (max-width:700px ){
        margin-right: 0rem;
        margin-top: 0rem;
        :hover{
            transform:scale(1);
            z-index: 100;
            background-color:rgba(0,0,0);
        }
    }

`


export const ProjectImageDiv = styled.div`
    width: 100%;
    height: 15rem;
    @media (max-width:1280px ){
        width: 100%;
        height: 9rem;
    }
    position: relative;

`

export const ProjectTitle = styled.h1`
    margin-top:.5rem;
`

export const ProjectDescreption = styled.p`
    max-width:25rem;
    margin: 0;
    @media (max-width:1280px ){
        max-width:15rem;

    }
    font-size: .9rem;
`

export const AlingIcon = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:space-around;
    width:100%;
    span{
        transition: all .5s;

        :hover{
            cursor:pointer;
            transform:scale(1.2);
        }
    }

    
`