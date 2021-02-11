import { createGlobalStyle } from 'styled-components';

import OpenSansRegular from '../assets/fonts/open-sans/open-sans-regular.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansRegular}) format("truetype");
    font-weight: 400;
  }

  body {
    margin: 0;
    overflow-y: scroll;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    
    #root {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 100vh;

      main {
        padding: 20px;
        box-sizing: border-box;
        width: 100%;
        max-width: 1170px;
        margin: 105px auto 20px auto;
        
        .loading {
          display: flex;
          justify-content: center;
          align-items: center;
          height: calc(100vh - 125px - 40px - 64px);
          
          .MuiCircularProgress-colorPrimary {
            color: #0d0d0d;
          }
        }
      }

      a {
        text-decoration: none;
        color: #000
      }
    }
`;

export default GlobalStyles;
