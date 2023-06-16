import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

const NavbarPanel = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Container fluid className='container'>
                    <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
                    <Nav>
                        <Nav.Link to="/" as={Link}>Product</Nav.Link>
                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className='justify-content-end'>
                        <Navbar.Text>
                            <Nav.Link to="/cart" as={Link}>My bag 0</Nav.Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar></>
    )
}

export default NavbarPanel