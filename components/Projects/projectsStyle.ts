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
    @media (max-width:700px ){
        max-width:100%;
        border-right: 0px;
        border-bottom: 10px solid white;
        font-size: 2rem;
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
    margin-right: 5rem;
    margin-top: 5rem;
    :hover{
        transform:scale(1.5);
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
    width: 26.6rem;
    height: 15rem;
    @media (max-width:700px ){
        width: 100%;
        height: 12rem;
    }
    position: relative;

`

export const ProjectTitle = styled.h1`
    margin-top:.5rem;
`

export const ProjectDescreption = styled.p`
    max-width:26rem;
    margin: 0;
    font-size: .9rem;
`

export const AlingIcon = styled.div`
    padding-inline:5rem;
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