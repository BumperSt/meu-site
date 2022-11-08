import styled from "styled-components";

export const HeadBarContainer = styled.div`
    align-items: center;
    width:100%;
    padding-block:60px;
    padding-inline: 112px;
    transition: all .5s;
    display: flex;
    flex-direction:row;
    color:white;
    height:100px;
    justify-content: center;
    text-align: start;
    position: fixed;
    top: 0;
    z-index: 110;
    @media (max-width:700px ){
        padding:.5rem;
        padding-inline: 1rem;
        justify-content: space-between;
        height:auto;
    }

`

export const HeaderTitle = styled.h1`
    font-size: 36px;
    color:#E6E6E6;
    font-weight: 700;
    span{
        color:#BA68C8;
    }
    @media (max-width:1280px ){
        font-size: 1rem;
    }
    @media (max-width:700px ){
        font-size: .8rem;
    }
    width:40%;
`

export const AlignCenter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const ButtonHeader = styled.button<{active:boolean}>`
    background-color:transparent;
    margin-inline: 3rem;
    border:0;
    font-size: 36px;
    color:#C4C4C4;
    font-weight: 700;
    
    color:white;
    :hover{
        cursor:pointer;
        color:#BA68C8;
        border-bottom: 4px solid #BA68C8;
    }
    ${({active}) => active &&`
        cursor:pointer;
        color:#BA68C8;
        border-bottom: 4px solid #BA68C8;
    `}
    @media (max-width:1280px ){
        font-size: 1rem;
        margin-inline: 1rem;

    }
    @media (max-width:700px ){
        font-size: .8rem;
    }

`

export const MenuInMobile = styled.div`
    position: fixed;
    display:flex;
    flex-direction: column;
    gap:20px;
    padding-top: 20%;
    padding-inline: 10%;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background-color: #2C1246;
`

export const ButtonInMobile = styled.button `
    border-radius: 6px;
    border:none;
    padding:1rem;
    background-color: #BA68C8;
    :hover{
        cursor: pointer;
    }
`