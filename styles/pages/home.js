import styled from 'styled-components';

export const Banner = styled.div`
  padding: 70px 0;

  background-image: url('/web-programming.svg');
  background-repeat: no-repeat;
  background-position: center right 50px;
  background-size: 400px; 

  span{
    color: #772ce8;
    font-size: 24px;

    @media (max-width: 576px){
      font-size: 20px;
    }
  }

  h1{
    font-feature-settings: "salt" on;
    font-size: 70px;
    line-height: 1.1;
    font-family: Prophet,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;

    span{
      font-size: 70px;
      color: #cccccc;

      @media(max-width: 768px){
        font-size: 54px;
      }

      @media(max-width: 576px){
        font-size: 32px;
      }
    }
    
    @media(max-width: 768px){
      font-size: 54px;
    }

    @media(max-width: 576px){
      font-size: 32px;
      line-height: 1.3;
    }
  }
  
  p{
    width: 100%;
    max-width: 600px;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 30px;
    line-height: 1.6;

    @media(max-width: 576px){
      margin-top: 10px;
    }
  }

  @media(max-width: 768px){
    background: none;
  }

  @media(max-width: 576px){
    background-position: center right -220px;
  }

`;