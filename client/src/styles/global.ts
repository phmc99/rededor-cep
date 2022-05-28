import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #0784b5;
    --light-blue: #39ace7;
    --black: #192428;
    --aux: #2d383c;
    --gray: #414c50;
    --dark-gray: #151515;
    --light-gray: #d5d5d5
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
  }
  html, body {
    height: 100%;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: var(--black);
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }
  
`;
