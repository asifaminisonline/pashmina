// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Container } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container>
//         <Toolbar>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Logo
//           </Typography>
//           <IconButton
//             size="large"
//             edge="end"
//             color="inherit"
//             aria-label="menu"
//             aria-controls="menu-appbar"
//             aria-haspopup="true"
//             onClick={handleMenuOpen}
//             sx={{ display: { xs: 'block', md: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Menu
//             id="menu-appbar"
//             anchorEl={anchorEl}
//             anchorOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             keepMounted
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//             open={Boolean(anchorEl)}
//             onClose={handleMenuClose}
//           >
//             <MenuItem onClick={handleMenuClose}><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link></MenuItem>
//             <MenuItem onClick={handleMenuClose}><Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link></MenuItem>
//             <MenuItem onClick={handleMenuClose}><Link to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>Services</Link></MenuItem>
//             <MenuItem onClick={handleMenuClose}><Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link></MenuItem>
//           </Menu>
//           <div style={{ display: 'none', md: 'flex' }}>
//             <Button color="inherit" component={Link} to="/">Home</Button>
//             <Button color="inherit" component={Link} to="/about">About</Button>
//             <Button color="inherit" component={Link} to="/services">Services</Button>
//             <Button color="inherit" component={Link} to="/contact">Contact</Button>
//           </div>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default Navbar;
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function TopNavbar() {
  return (
    <>
      {[ 'sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary ">
          <Container fluid>
            <Navbar.Brand style={{color:"#ff5733",fontWeight:"bold"}}>Pashmina Designs</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Pashmina Designs
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Designs</Nav.Link>
                  <Nav.Link href="#action2">Add Your Designs</Nav.Link>
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default TopNavbar;