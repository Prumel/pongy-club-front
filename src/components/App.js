import React, { useState, useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { myContext } from '../index';

import WelcomeController from './controller/WelcomeController';
import RegistrationController from './controller/RegistrationController';
import ConnectionController from './controller/ConnectionController';
import AdminController from './controller/AdminController';

export default function App() {

 const [isAdmin, setIsAdmin] = useState(false);
 const [licensedMember, setLicensedMember] = useState(null);


    const contextValue = {
        isAdmin,
        setIsAdmin,
        licensedMember,
        setLicensedMember
    };

  return (

    <myContext.Provider value={contextValue}>
       <header className='my-3 d-flex justify-content-center align-items-center'>
         <h1>Pongy Club<i className='ms-3 me-3 fas fa-table-tennis'></i></h1>
       </header>

       <BrowserRouter>
            <Navbar
                className='mb-5'
                collapseOnSelect="true"
                style={{backgroundColor: '#D8572A'}}
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
                                <i className='fa fa-home me-1'></i>Accueil
                            </Nav.Link>
                            <Nav.Link as={Link} eventKey='2' to="/registration" hidden={licensedMember !== null}>
                                <i className='fa-solid fa-pen-to-square me-1'></i>
                                 S'inscrire au club
                            </Nav.Link>

                            <Nav.Link as={Link} eventKey='3' to="/connection"  hidden={licensedMember !== null}>
                                <i className='fa fa-key me-2'></i>
                                Connexion
                            </Nav.Link>

                            <Nav.Link as={Link} eventKey='4' to="/welcome" hidden={licensedMember === null} onClick={() => {setIsConnected(false);}}>
                                <i className='fa fa-unlock me-1'></i>
                                Déconnexion
                            </Nav.Link>

                            <Nav.Link as={Link} eventKey='5' to="/admin" hidden={!isAdmin}>
                                Admin
                            </Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <article>
                <Container>
                    <Routes>
                        <Route path='/' element={<WelcomeController />} />
                        <Route path='/welcome' element={<WelcomeController />} />
                        <Route path='/registration' element={<RegistrationController />} />
                        <Route path='/connection' element={<ConnectionController />} />
                        <Route path='/admin' element={<AdminController />} />
                    </Routes>
                </Container>
            </article>
       </BrowserRouter>


      <footer style={{backgroundColor: '#D8572A'}}>
        <Container>
            <div className="row">
            <div className="col-md-6 d-flex-column">
                <h4 style={{paddingTop: '20px'}} >Contactez-nous !</h4>
                <p> <a href="mailto:exemple@gmail.com" style={{color:"inherit"}}><i className="me-1 fa-solid fa-envelope" ></i></a> Email : <a href="mailto:exemple@gmail.com" style={{color:"inherit"}}>pongyclub@gmail.com</a></p>
                <p><i className="me-1 fa-solid fa-phone"></i> Téléphone : 01 23 45 67 89</p>
                <p><i className="me-1 fa-solid fa-map-marker"></i> Adresse : 9 rue du Fossé Mignard, 77700 Chessy</p>
                <p><a href="https://www.facebook.com/FFTTofficiel" target="_blank" style={{textDecoration:"none"}} style={{color:"inherit"}}> <i className="me-1 fa-solid fa-brands fa-facebook-f"></i>Suivez-nous sur Facebook</a> </p>
            </div>
                 <div className="col-md-6 d-flex justify-content-center align-items-center p-3">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9784984478433!2d2.7708389760003387!3d48.85862040069097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e61cd870b432b3:0x1d754b3187d4d77a!2s9%20Rue%20du%20Fossé%20Mignard,77700%20Chessy!5e0!3m2!1sfr!2sfr!4v1714134228047!5m2!1sfr!2sfr"
                        width="auto"
                        height="auto"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>

            <hr/>

            <div className="d-flex align-items-center justify-content-center">
                <p> Merci à nos partenaires, EQL et la région Ile-de-France !</p>
            </div>
        </Container>

      </footer>

    </myContext.Provider>
  );
}
