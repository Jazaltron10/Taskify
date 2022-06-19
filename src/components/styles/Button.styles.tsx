import styled from "styled-components";

export const BtnStyles = styled.button`
    width: 5rem;
    height: 2.5rem;
    padding: .25rem;
    outline: none;
    border: none;
    border-radius: 0.5rem;
    background-color: ${({theme})=> theme.colors.limecols};
    
    &:hover{
        background-color:black;
        color:${({theme})=> theme.colors.limecols};
        cursor: pointer;
    }
    `
export const InputSubmitBtn = styled.button`
    position: absolute;
    width:50px;
    height:50px;
    margin:12px;
    border-radius: 50px;
    right:0;
    border:none;
    font-size:15px;
    background-color: #2f74c0;
    color:white;
    transition: all ease-in .2s;
    box-shadow: 0 0 10px black ;

    &:hover{
        background-color: #388ae2;
    }
    &:active{
        transform:scale(.8);
        box-shadow: 0 0 5px black;
    }
`