import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoDW from '../img/Frame.png'
import './navstyle.css'
import { Link } from 'react-router-dom';

export default function NavbarAdmin() {
  return (
    <>
    <Navbar className='bg-black' sticky="top" bg="dark" variant="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand className='px-10'><Link to='/UserPage'><img src={LogoDW} alt='logo' /></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        </Nav>
        <div className='navGroupAdmin'>
         <button><Link to='/Complain-Admin' className='navP'>Complain</Link></button>
         <button> <Link to='/Category' className='navP'>Category</Link></button> 
         <button> <Link to='/Product' className='navP'>Product</Link></button> 
         <button><Link to='/' className='navP'>Logout</Link></button>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}
