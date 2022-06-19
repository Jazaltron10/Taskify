import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
    }

    body {
        /* background-color: darkblue; */
        /* color: hsl(192, 100%, 9%); */
        font-family: 'Poppins', sans-serif;
        font-size: 1.15em;
        margin: 0;
    }

    p {
        /* opacity: .6; */
        line-height: 1.5;   
    }

    img {
        max-width: 100%;
    }
`

export default GlobalStyles






