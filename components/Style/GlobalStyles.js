import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
    --font-color: #000000;
    --font-color-hover: #0068ad;
    --font-color-varant: #86868b;
    --background-category-color: #e9e9ec;
    --background-category-hover-color: #bcbcc5;
    --background-showSelection-color: #e9e9ec;
    --background-showSelection-border: #bcbcc5;
    --white: #ffffff;
    --red: #ff0000;
    
 
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

body {
    padding: 0;
    margin: 0 5rem;
    max-width: 100%;
}




main {
    align-self: center;
    padding-bottom: 1rem;
    
}




`;

export default GlobalStyles;
