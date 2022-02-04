import styled from "styled-components";

export const HeadBarContainer = styled.div`
    align-items: center;

    width:100%;
    background-color:black;
    padding:.5rem;
    @media (max-width:700px ){
        padding:.5rem;

    }
    display: flex;
    flex-direction:row;
    color:white;
    padding-inline:6rem;
    padding-block:1rem;
    justify-content: center;
    text-align: start;
    position: fixed;
    top: 0;
    z-index: 110;

`

export const HeaderTitle = styled.h1`
    font-size: 1.5rem;
    @media (max-width:700px ){
        font-size: .5rem;
    }
    width:40%;
`

export const AlignCenter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const ButtonHeader = styled.button`
    background-color:transparent;
    margin-inline: 3rem;
    border:0px;
    border-left: solid 2px white;
    border-right: solid 2px white;
    font-size: 2rem;
    color:white;
    transition:all .5s;
    :hover{
        cursor:pointer;
        transform:scale(1.2);
        color:black;
        background-color:white;
    }
    @media (max-width:700px ){
        font-size: .5rem;
        margin-inline: 1rem;

    }

`