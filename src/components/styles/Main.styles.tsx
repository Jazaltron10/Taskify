import styled from 'styled-components'

export const ContainerStyles = styled.article`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: #2f74c0; */
    background-color: rgb(0,0,30);
    `
export const HeadingStyles =  styled.span`
    color: white;
    font-size: 40px;
    font-family: cursive;
    margin:30px 0;
    text-align: center;
    text-transform: uppercase;
    z-index: 1;

    @media(max-width: ${({theme})=>theme.IpadMobile}){
        margin: 15px 0;
        font-size: 35px;
    }
`
