// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// function TopNavbar() {
//   return (
//     <>
//       {[ 'sm'].map((expand) => (
//         <Navbar key={expand} expand={expand} className="bg-body-tertiary ">
//           <Container fluid>
//             <Navbar.Brand style={{color:"#ff5733",fontWeight:"bold"}}>Pashmina Designs</Navbar.Brand>
//             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-${expand}`}
//               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//               placement="end"
//             >
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                 Pashmina Designs
//                 </Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                   <Nav.Link href="#action1">Designs</Nav.Link>
//                   <Nav.Link href='/add-design'>Add Your Designs</Nav.Link>
//                 </Nav>
//                 <Form className="d-flex">
//                   <Form.Control
//                     type="search"
//                     placeholder="Search"
//                     className="me-2"
//                     aria-label="Search"
//                   />
//                   <Button variant="outline-success">Search</Button>
//                 </Form>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//         </Navbar>
//       ))}
//     </>
//   );
// }

// export default TopNavbar;


import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function TopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" style={{ color: "#ff5733", fontWeight: "bold" }}>
          Pashmina Designs
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/designs" className="nav-links" onClick={() => setIsMenuOpen(false)}>
              Designs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-design" className="nav-links" onClick={() => setIsMenuOpen(false)}>
              Add Your Designs
            </Link>
          </li>
          <li className="nav-item">
            <form className="search-form">
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
              <button type="submit" className="search-button">
                Search
              </button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default TopNavbar;
