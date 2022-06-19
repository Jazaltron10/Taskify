import styled from "styled-components";

export const InputWrapper = styled.form`
    display: flex;
    width: 90% ;
    position: relative;
    align-items: center;
`
export const InputBox= styled.input`
    width: 100%;
    border-radius:50px;
    padding:20px 30px;
    font-size: 25px;
    border: none;
    transition: all ease .3s;
    box-shadow: inset 0 0 5px black;
    
    &:focus{
        box-shadow: 0 0 10px 1000px rgba(0,0,0,0.5);
        outline: none;
        }
`

