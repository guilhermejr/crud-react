import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Container fluid>
          <div className="navbar-brand">CRUD</div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
