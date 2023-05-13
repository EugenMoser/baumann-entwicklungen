import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
    --font-color: #000000;
    --font-color-hover: #00BFFF;
    --background-category-color: #Dae2e6;
    --background-category-hover-color: #aeb5b8;
 
}
@font-face {
font-family: 'Rubik';
src: url("/fonts/Rubik-VariableFont_wght.ttf");}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style: none;
    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

}
    html,
    body {
        padding: 0;
        margin: 0;
        
    }



    body {
        margin: 2vw;
        border:2px solid grey;
        
       
    }
    main {
        display: flex;
        flex-direction: column;
        text-align: center; 
        align-items: center;
        margin: 5% 0;
        
    }
`;

export default GlobalStyles;
