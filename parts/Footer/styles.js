import styled from 'styled-components';

export const Content = styled.div`
  padding: 30px;
  background-color: #1e2023;

  footer{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 50px 0;

    .title{
      font-size: 30px;
      margin-bottom: 30px;


      @media (max-width: 576px){
        font-size: 20px;
      }
    }

    .text{
      font-size: 40px;
      font-feature-settings: "salt" on;
      font-family: Prophet,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;

      a{
        display: inline-block;
        color: #772ce8;
        line-height: 1.1;
        text-decoration: none;
        padding-bottom: .15em;
        margin-bottom: -.2em;
        box-shadow: transparent 0 -1px 0 inset;
        transition: box-shadow .2s ease;

        &:hover{
          --link-highlight: #772ce8;
          box-shadow: var(--link-highlight) 0 -.33rem 0 inset;
        }

      }

      @media (max-width: 576px){
        font-size: 26px;
      }
    }

    .social-media {
    
      a{
        color: #fff;
        font-size: 36px;
        margin-left: 15px;
        transition: color .2s;

        &:hover{
          color: #772ce8;
        }

        @media (max-width: 768px){
          margin-left:0;
          margin-right: 15px;
        }
      }

      @media (max-width: 768px){
        margin-top: 20px;
      }
    }

    @media (max-width: 768px){
      flex-direction: column;
    }

    @media (max-width: 576px){
      padding: 30px 0;
    }
    
  }

  .copyright{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    .text{
      font-size: 14px;
    }

    p{
      span{
        margin-left: 5px;
      }

      @media (max-width: 576px){
        margin-bottom: 15px;
      }
    }

    @media (max-width: 576px){
      align-items: flex-start;
      flex-direction: column-reverse;
    }
  }

  @media (max-width: 768px){
    padding-left: 0px;
    padding-right: 0px;
  }

`;