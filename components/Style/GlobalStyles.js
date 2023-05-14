import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
    --font-color: #000000;
    --font-color-hover: #00BFFF;
    --font-color-footer: #ffffff;
    --background-category-color: #Dae2e6;
    --background-category-hover-color: #aeb5b8;
    --background-footer-color: #777777
 
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




    main {
      
        align-self: center;
        width: 80%;
        
       
        
    }
`;

export default GlobalStyles;
