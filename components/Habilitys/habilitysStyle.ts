import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding-block:4rem;
    display:flex;
    flex-direction: column;
    align-items: center;
    min-height:100vh;
    gap:60px;
    position: relative;
    @media (max-width:700px ){
        padding: 1rem;
        
    }
`
export const MyProjectsTitle = styled.h1`
    margin-top: 200px;
    font-size: 40px;
    color: #E6E6E6;
    span{
        color:#BA68C8;
    }
    margin-bottom: 1rem;
    @media(max-width: 768px){
        margin-top: 100px;
        margin-bottom: 5rem;
    }
`


export const AlignHabilitys = styled.div`
    display:flex;
    flex-direction: row;
    width:80%;
    gap:100px;
    justify-content: center;
    align-items: center;
    @media (max-width:700px ){
        gap:30px;
        width: 100%;
        flex-wrap: wrap;
    }
`

export const HabilitysContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:10px;
`

export const LeftBackground = styled.div`
    position: absolute;
    left:0;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

export const HabilityTitle = styled.h1`
    font-size:32px;
    font-weight: 700;
    color:#FFFFFF;
    span{
        color: #ba68c8;
    }
    @media (max-width:700px ){
        font-size: 16px;
    }
`
export const BarSize = styled.div`
    display:flex;
    align-items: flex-start;

    @keyframes barSize{
        from{
            width:0;
        }
        to{
            width:10px;
        }
    }
    animation: barSize 1s;
    height: 10px;
    transition: all .5s;
`