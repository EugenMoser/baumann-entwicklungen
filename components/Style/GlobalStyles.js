import { createGlobalStyle } from 'styled-components';

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
    --large-device-width: 1200px;
    --medium-device-width: 768px;
    --small-device-width: 480px;

    --small-product-headline: 1rem;
    --small-product-description: 0.8rem;

    --medium-product-headline: 1.25rem;
    --medium-product-description: 1rem;

    --large-product-headline: 1.5rem;
    --large-product-description: 1.25rem;

    
   
 
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
    @media (max-width: 768px) {
        margin: 0 2rem;
    }
    @media (max-width: 480px) {
        margin: 0 1rem;
    }
}

main {
    width: 100%;
    align-self: center;
    padding-bottom: 1rem;
    
}

button {
    color:#000000; 
    text-decoration: none;
}

`;

export default GlobalStyles;
