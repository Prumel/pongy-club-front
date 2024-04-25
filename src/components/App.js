import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function App() {

  return (
   <header className='d-flex justify-content-center align-items-center'>
     <h1>Pongy Club</h1>
   </header>

   <BrowserRouter>
        <Navbar
            className='mb-5'
            collapseOnSelect="true"
            bg='black'
            variant='dark'
            sticky='top'
            expand='md'
        >
            <Container>
                <Navbar.Brand href='/'>Pongy Club</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>

                    <Nav>
                        <Nav.Link as={Link} eventKey='1' to="/welcome">
                            <i className='fa fa-home me-2'></i>
                            Accueil
                        </Nav.Link>
                        <Nav.Link as={Link} eventKey='2' to="/connection">
                            <i className='fa fa-home me-2'></i>
                            Accueil
                        </Nav.Link>


   </BrowserRouter>
  );
}
