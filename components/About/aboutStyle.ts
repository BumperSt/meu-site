import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height:100vh;
    padding-inline:114px;
    @media (max-width:700px ){
        padding: 1rem;
    }
    text-align: start;
    align-items: center;
    display:flex;
    flex-direction: row;
    box-shadow: 1px 100px 250px rgba(0, 0, 0, 0.5);
`

export const AlignCollum = styled.div`
    display:flex;
    flex-direction: column;
    width:50%;
    gap:17px;
    @media (max-width:700px ){
        width: 100%;
    }
`

export const MyProjectsTitle = styled.h1`
    font-size: 40px;
    color: #E6E6E6;
    span{
        color:#2C1246;
    }
    margin-bottom: 1rem;
    @media(max-width: 768px){
        font-size: 30px;
    }
`

export const SubTitle = styled.h1`
    font-size: 32px;
    color: #FFFFFF;
    span{
        color:#BA68C8;
    }
    @media(max-width: 768px){
        font-size: 24px;
    }
`

export const AboutText = styled.p`
    font-size: 32px;
    color: #FFFFFF;
    @media (max-width:1280px ){
        font-size: 20px;

    }
`

export const ImageDivExternal = styled.div`
    border:10px solid #2C1246;
    border-radius: 50%;
    display:flex;
    padding:15px;
`

export const ImageDiv = styled.div`
    position: relative;
    width: 400px;
    height: 400px;
    display:flex;
    border-radius: 50%;
    span{
        border-radius: 50%;
    }
    @media (max-width:768px){
        width:250px;
        height:250px;

    }
`