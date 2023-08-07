import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';
import logo from '../images/logo.png';
import { useLocation } from 'react-router';
import ResumeDL from './ResumeDL';
function MyNavbar() {
  let location = useLocation().pathname.slice(1);
  return (
      <Navbar variant="light" expand="lg" sticky="top">
        <Navbar.Brand href="/" color="light" style={{margin:'auto', fontFamily:"Inknut Antiqua"}}>
          <img height={40} width={40} alt="logo" style={{marginBottom:'1%', marginRight:'1%'}} src={logo}/>
          Raina
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {location === 'project' ?
              <Nav.Link href="/">Home</Nav.Link>
            :
              ['home', 'work', 'about','experience', 'contact'].map((btn, i) => {
                if (btn === 'home') {
                  return <Nav.Link key={i} href='/'>HOME</Nav.Link>
                }
                return (
                  <Nav.Link key={i} href={`#${btn}`}>{btn.toUpperCase()}</Nav.Link>
                )

              })
            }
            <Nav.Link style={{textDecoration:'none'}}>
              <ResumeDL elem="nav"/>
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
  );
}

export default MyNavbar;
