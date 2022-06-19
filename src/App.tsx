import { useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import InputField from './components/InputField';
import GlobalStyles from './components/styles/Global';
import { ContainerStyles, HeadingStyles } from './components/styles/Main.styles';

const theme = {
  colors:{
    pinkcols: "#f1356d",
    PrimoCols:  "hsl(192, 100%, 9%)",
    TransCols:  "rgba(0,250,0,0.055)",
    limecols:  "limegreen",
  },
  IpadMobile:"768px",
  SduoMobile:"540px",
  PixelMobile:"420px",
  IphoneMobile:"360px",
  GfoldMobile:"280px",

  assets:{
    font_fam: "Poppins",
    radius: "0.5rem",
    radius_2: "1rem",
    padding: "1rem",
    h: "100vh",
    w: "100vw",
    padding_2: "0.5rem",
    fontSizeSmallest: "1rem",
    fontSizeSmall: "2rem",
    fontSizeMid: "3.5rem",
    fontSizeLarge: "5rem",
    color_a: "#18ffff",
    color_b: "#6fffd2",
    color_c: "#0affad",
    color_d: "#08a573",
    color_e: "#1de9b6",
    color_f: "#004d40",
    color_g: "#84ffff",
    color_h: "#0b6953",
    color_i: "#fcfc18",
    color_j: "#f71111",
    color_0: "#0ed80e",
    color_1: "#2885db",
    color_2: "#f56980",
    color_3: "#07075f",
    color_4: "#8f2c2cbe",
    color_5: "#00ff00",
    color_6: "#807676",
    color_7: "#ff7b00",
    color_8: "#dd06dd",
    color_9: "#FBF9F9",
    color_10: "rgba(50, 50, 50, 0.3)",   
    box_shadow: "0px 2px 5px 1px black",     
  },
}



const App: React.FC =()=> {

  const[todo, setTodo] = useState<string>("");



  return (
    <ThemeProvider theme = {theme}>
      <ContainerStyles>
        <GlobalStyles/>
          <HeadingStyles>
              Taskify  
          </HeadingStyles>
          <InputField todo={todo} setTodo={setTodo}/>

        </ContainerStyles>
    </ThemeProvider>
  )
}

export default App
