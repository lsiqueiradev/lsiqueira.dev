import Link from 'next/link';
import Image from 'next/image';

import Container from '../../components/Container';
import NavLink from '../../components/ActiveLink';

import {
  FaInstagram,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';

import {
  Content,
  Logo,
  ButtonMenu,
  Menu,
  MenuMask,
  MenuFloat,
} from './styles';

export default function Header() {

  function change_menu(){
    var btn = document.getElementById("button-menu");
    var menu_mask = document.getElementById("menu-mask");
    var menu_float = document.getElementById("menu-float");
    if (btn.classList.contains('active')) {
      btn.classList.remove("active");
      menu_mask.classList.remove("active");
      menu_float.classList.remove("active");
      // document.getElementsByTagName("body")[0].style.overflowY = "auto";
      // document.getElementsByTagName("html")[0].style.overflowY = "auto";
    } else {
      btn.classList.add("active");
      menu_mask.classList.add("active")
      menu_float.classList.add("active")
      // document.getElementsByTagName("body")[0].style.overflowY = "hidden";
      // document.getElementsByTagName("html")[0].style.overflowY = "hidden";
    }

  }

  return (
    <>
    <Container>
      <Content>
          <Logo>
            <Link href="/">
              <a>
                <Image 
                  src="/logo.svg" 
                  width={139.53} 
                  height={40}
                  alt="LSIQUEIRA.DEV"
                  quality={100}
                />
              </a>
            </Link>
          </Logo>
          <ButtonMenu id="button-menu" onClick={change_menu}>
            <span></span>
            <span></span>
            <span></span>
          </ButtonMenu>
          <Menu>
            <li><NavLink href="/" activeClassName="active"><a title="Back to the home page">Home</a></NavLink></li>
            <li><NavLink href="/works" activeClassName="active"><a title="My diverse works developed">Works</a></NavLink></li>
            <li><a href="https://blog.lsiqueira.dev" title="Lucas Siqueira Blog">Blog</a></li>
            <li><NavLink href="/contact" activeClassName="active"><a title="What’s Next?">Contact</a></NavLink></li>
          </Menu>
      </Content>
    </Container>
    <MenuMask id="menu-mask"/>
    <MenuFloat id="menu-float">
      <div className="wrap">
        <ul className="social-links">
            <li><a href="https://www.instagram.com/lucassiqueiram/" target="_BLANK" title="Instagram" ><FaInstagram /></a></li>
            <li><a href="https://www.linkedin.com/in/lsiqueiradev/" target="_BLANK" title="Linkedin" ><FaLinkedin /></a></li>
            <li><a href="https://www.github.com/lsiqueiradev/" target="_BLANK" title="Github" ><FaGithub /></a></li>
        </ul>
        <ul className="primary-links">
          <li><Link href="/"><a title="Back to the home page">Home</a></Link></li>
          <li><Link href="/works"><a title="My diverse works developed">Works</a></Link></li>
          <li><a href="https://blog.lsiqueira.dev" title="Lucas Siqueira Blog">Blog</a></li>
          <li><Link href="/contact"><a title="What’s Next?">Contact</a></Link></li>
        </ul>
      </div>
    </MenuFloat>
    </>
  );
}