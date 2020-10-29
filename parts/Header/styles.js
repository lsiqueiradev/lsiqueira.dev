import styled, { keyframes } from 'styled-components';

const socialIn = keyframes`
  0% {
    transform: translateX(15px);
  }
`;


const menuLineIn = keyframes`
  0% {
      opacity: 0;
      transform: translateX(500%) scaleX(5)
  }
  1% {
      opacity: 1
  }
  to {
      transform: none
  }
`;

export const Content = styled.div`
  width: 100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  position: relative;
  z-index: 1002;

  @media (max-width: 768px){
    margin-top: 30px;
  }
`;

export const Logo = styled.div``;

export const ButtonMenu = styled.div`
  position: relative;
	display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 20px;
  margin-left: 40px;
  cursor: pointer;

    span{
      position: absolute;
      width: 100%;
      height:2px;
      background-color: #FFFFFF;
      transition: .5s;

      &:first-child{
        top: 0px;
        transform: rotate(0deg)  translate(0px, 0px)
      }
      &:nth-child(2) {
        transform: translate(0px, 0px);
        opacity: 1;
      }
      &:last-child{
        bottom: 0px;
        transform: rotate(0deg)  translate(0px, 0px);
      }
    }

    &.active{
      span{
      position: absolute;
      width: 100%;
      height:2px;
      background-color: #FFFFFF;
      transition: .5s;

        &:first-child{
          top: 0px;
          transform: rotate(-45deg)  translate(-5px, 7px);
        }
        &:nth-child(2) {
          transform: translate(40px, 0px);
          opacity: 0;
        }
        &:last-child{
          bottom: 0px;
          transform: rotate(45deg)  translate(-6px, -8px);
        }
      }
    }

  @media(min-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.ul`
  @media(max-width:768px) {
    display: none;
  }
  li{
    display: inline;
    a{
      position: relative;
      color: #fff;
      padding-bottom: 6px;
      font-size: 20px;
      text-decoration: none;
      transition: box-shadow .2s ease;

      &.active{
        box-shadow: #772ce8 0 -1px 0 inset;
      }

      &:hover{
        box-shadow: #772ce8 0 -.2rem 0 inset;
      }

    }
    & + li{
      a{
        margin-left: 30px;
      }
    }
  }

`;

export const MenuMask = styled.div`
    position: fixed;
    transform-origin: bottom left;
    z-index: 1000;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    backface-visibility: hidden;
    width: 100%;
    height: 100%;
    transform: translateY(-100%);
    transition: transform .7s cubic-bezier(.165,.84,.44,1);

    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.8); 

    &.active{
      transform: none;
    }
`;

export const MenuFloat = styled.div`
  position: fixed;
  backface-visibility: hidden;
  z-index: 1001;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;

  .social-links{
    position: relative;
    margin: 0 0 30px;
    padding-left: 100px;

    li{
      display: inline-block;
      vertical-align: middle;
      margin: 0 15px 0 0!important;

      a{
        position: relative;
        top: 5px;
        opacity: 0;
        font-size: 28px;
        color: #fff;
      }
    }

    &::after{
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      height: 3px;
      width: 80px;
      margin-top: -2px;
      background-color: #772ce8;
    }
  }

  .primary-links{
    display: flex;
    flex-direction: column;
    height: 100%;

    li{
      opacity: 0;
      transform: translateY(-5px);
      list-style: none;

      a{
        text-decoration: none;
        color: #ffffff;
        font-size: 40px;
        line-height: 80px;
        display: block;
        font-feature-settings: "salt" on;
        font-family: Prophet,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
      }
    }

    @media (min-height: 700px){
      max-height: 460px;
    }
  }

  &.active{
    .social-links{
        li{ 
          a{
            opacity: 1;
          }

          &:nth-child(1) a{
            transition: opacity .5s ease-out .3s;
            animation: ${socialIn} .2s cubic-bezier(.175,.885,.32,1.575) .3s backwards;
          }
          &:nth-child(2) a{
            transition: opacity .5s ease-out .35s;
            animation: ${socialIn} .2s cubic-bezier(.175,.885,.32,1.575) .35s backwards;
          }
          &:nth-child(3) a{
            transition: opacity .5s ease-out .4s;
            animation: ${socialIn} .2s cubic-bezier(.175,.885,.32,1.575) .4s backwards;
          }
        }

        &::after{
          animation: ${menuLineIn} .40s cubic-bezier(.45,.85,.35,.85) both;
        }
    }

    .primary-links{
        display: flex;
        flex-direction: column;
        height: 100%;

        li{
          opacity: 1;
          transform: none;
          transition: .7s ease-out;

          &:nth-child(1){
            transition-delay: .75s;
          }
          &:nth-child(2){
            transition-delay: 1s;
          }
          &:nth-child(3){
            transition-delay: 1.25s;
          }
          &:nth-child(4){
            transition-delay: 1.5s;
          }
        }

      @media (min-height: 700px){
        max-height: 460px;
      }
    }
  }

  @media (max-width: 768px){
    padding: 100px 30px 50px;
  }

  @media (max-width: 768px){
    padding: 100px 20px 50px;
  }

  @media (min-width: 769px){
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 150px 55px 80px 65px;
  }

  @media (min-height: 700px) and (min-width: 512px){
    padding: 180px 55px 80px 65px;
  }

  &.active{
    display: block;
  }
`;