import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    position: relative;
    min-height:100vh;
    @media (max-width:700px ){
        padding: 1rem;
        
    }
`

export const MyProjectsTitle = styled.h1`
    font-size: 56px;
    color: white;


    @media (max-width:1280px ){
        max-width:100%;
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
    gap:100px;
    padding-block: 3rem;
    @media (max-width:700px ){
        flex-direction: column;
        flex-wrap: nowrap;
        width: 100%;
        
        align-items: center;

    }
`

export const AcessButton = styled.button`
    width: 100%;
    background-color: #2C1246;
    font-size:32px;
    border:none;
    border-radius: 6px;
    @media (max-width:768px ){
        font-size: 20px;
    }
    transition:all .2s;
    :hover{
        cursor: pointer;
        background-color: #2C123A;

    }
    
`

export const ProjectAbsoluteDiv = styled.div`
    position: absolute;
    width: 95%;
    left:50%;
    transform: translateX(-50%);
    height:20px;
    top:-20px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background-color: #B12AC7;
`


export const ProjectDiv = styled.div`
    display:flex;
    filter:drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.25));
    z-index:1;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-right: .5rem;
    transition: all .2s;
    margin-top:1rem;
    :hover{
        transform:scale(1.2);
        z-index: 100;
        background-color:#703E78;
    }
    background-color:#703E78;
    border-radius: 6px;
    text-align:center;
    padding: 1rem;
    @media (max-width:700px ){
        margin-right: 0rem;
        margin-top: 0rem;
        :hover{
            transform:scale(1.2);
        z-index: 100;
        background-color:#703E78;
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
    flex-direction: column;    
    align-items: center;
    margin-top:10px;
    gap:10px;
    width:100%;
    span{

        :hover{
            cursor:pointer;
            transform:scale(1.2);
        }
    }   
`

export const OpenProjectByUrl = styled.h3`

    :hover{
        cursor:pointer;
        transform:scale(1.5);
    }

`