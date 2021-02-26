import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Navbar.Brand href="/">Alpha Note</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <NavLink to="/" style={{ color: 'white' }} className='mr-3' >Home</NavLink>
          <NavLink to="/notes" style={{ color: 'white' }} className='mr-3' >Notes</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
