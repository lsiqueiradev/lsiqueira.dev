import Layout from '../components/layout';
import Container from '../components/Container';
import Button from '../components/Button';

import {
  Banner
} from '../styles/pages/home';

export default function Home() {
  return (
    <Layout>
      <Container>
        <Banner>
          <span>Hi, my name is</span>
          <h1>Lucas Siqueira. <br/><span>I build things for the web.</span></h1>
          <p>I'm a software engineer based in São Paulo, Brazil specializing in building exceptional websites, applications, and everything in between.</p>
          <Button href="/contact">Get In Touch</Button>
        </Banner>
      </Container>
    </Layout>
  )
}
