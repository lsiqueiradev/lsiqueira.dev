import Link from 'next/link';
import Image from 'next/image';

import Container from '../../components/Container';
import NavLink from '../../components/ActiveLink';

import {
  Content,
  Logo,
  ButtonMenu,
  Menu,
} from './styles';

export default function Header() {
  return (
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
          <ButtonMenu>
            <span></span>
            <span></span>
            <span></span>
          </ButtonMenu>
          <Menu>
            <li><NavLink href="/" activeClassName="active"><a>Home</a></NavLink></li>
            <li><NavLink href="/works" activeClassName="active"><a>Works</a></NavLink></li>
            <li><a href="#">Blog</a></li>
            <li><NavLink href="/contact" activeClassName="active"><a>Contact</a></NavLink></li>
          </Menu>
      </Content>
    </Container>
  );
}