import Link from 'next/link';

import Container from '../../components/Container'; 

import {
  FaInstagram,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';

import {
  Content
} from './styles';

export default function Footer(){
  return (
    <Content>
      <Container>
        <footer>
          <div className="footer-content">
            <div className="title">Got a project you'd like to talk about?</div>
            <div className="text">Call us on <a href="tel:+5511964638781" title="Call Me">96463 8781</a></div>
            <div className="text">Or fill in our <Link href="/contact"><a title="Send me a contact">project form</a></Link></div>
          </div>
          <div className="social-media">
            <a href="https://www.instagram.com/lucassiqueiram/" target="_BLANK" rel="noopener noreferrer" title="Facebook" ><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/lsiqueiradev/" target="_BLANK" rel="noopener noreferrer" title="Linkedin" ><FaLinkedin /></a>
            <a href="https://www.github.com/lsiqueiradev/" target="_BLANK" rel="noopener noreferrer" title="Github" ><FaGithub /></a>
          </div>

        </footer>
        <div className="copyright">
          <div className="text">&copy; 2020 Lucas Siqueira</div>
          <p>Behind The Code <span role="img" aria-label="img">&#x1F91F;</span></p>
        </div>
      </Container>
    </Content>
  );
}