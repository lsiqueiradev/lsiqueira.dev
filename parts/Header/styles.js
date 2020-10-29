import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  position: relative;
  z-index: 1;
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

    @media(min-width: 768px) {
      display: none;
    }
    span{
      position: absolute;
      width: 100%;
      height:2px;
      background-color: #FFFFFF;
      transition: .5s;
      &:first-child{
        top: 0px;
        transform: ${({ open }) => open ? 'rotate(-45deg)  translate(-5px, 7px)' : 'rotate(0deg)  translate(0px, 0px)'};
      }
      &:nth-child(2) {
        transform: ${({ open }) => open ? 'translate(40px, 0px)' : 'translate(0px, 0px)'};
        opacity: ${({ open }) => open ? '0' : '1'};
      }
      &:last-child{
        bottom: 0px;
        transform: ${({ open }) => open ? 'rotate(45deg)  translate(-6px, -8px)' : 'rotate(0deg)  translate(0px, 0px)'};
      }
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