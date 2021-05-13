import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="fixed-bottom mt-auto py-3 bg-light">
      <Container>
        <div className="text-center">Desenvolvido por <a href="https://github.com/guilhermejr" target="_blank" rel="noreferrer">Guilherme Jr.</a></div>
      </Container>
    </footer>
  );
};

export default Footer;
