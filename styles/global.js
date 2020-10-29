import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  ::selection {
    background-color: #772ce8;
    color: #ffffff;
  }

  #__next{
    height: 100%;
  }

  body{
    -webkit-font-smoothing: antialiased;
    border-left: 5px solid #222;
    border-right: 5px solid #222;
    background: #0E0F10;
    color: #fff;
    height: 100%;
    font-family: Eina,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;;
    padding: 30px;
    font-weight: 400;
  }

  @media (max-width: 768px){
    body{
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 0;
    }
  }

`;