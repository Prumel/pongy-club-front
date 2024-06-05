//import React from "react";
//import {Row, Col, Card, InputGroup, Nav, Form, Container, ListGroup, Button} from "react-bootstrap";
//
//export default function RegistrationView(props) {
//
//
//    return (
//
//        <Container>
//                <h2 className=" my-3 d-flex justify-content-center align-items-center"> S'inscrire au Pongy Club </h2>
//                <Button>S'inscrire au club</Button>
//                <Button>Inscrire son enfant au club</Button>
//
//
//        </Container>
//    )
//}

import React, { useState } from 'react';
import { Button, Alert, Container, Form } from 'react-bootstrap';
import {Row, Col, Card, InputGroup, Nav, ListGroup} from "react-bootstrap";

export default function RegistrationView(props) {
  const [form, setForm] = useState(null);
  const [fields, setFields] = useState({ firstName: "", lastName: "", birthdate:"", email:"", adress:"", city:"",zipCode:"" });


  function renderForm () {
    switch(form) {
      case 'club':
        return (
          <Form>
            <Form.Group className="mb-3">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" placeholder="Nom" required/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Prénom</Form.Label>
                <Form.Control type="text" placeholder="Prénom" required/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Adresse mail</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Adresse mail"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    onChange={(e) => {
                        e.target.reportValidity();

                    }}
                />
                <Form.Control.Feedback type="invalid">
                    Veuillez entrer une adresse mail valide.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Numéro de téléphone</Form.Label>
                <Form.Control type="tel" placeholder="Numéro de téléphone" required pattern="0[1-9][0-9]{8}"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Date de naissance</Form.Label>
                <Form.Control
                    type="date"
                    placeholder="Date de naissance"
                    required
                    onChange={(e) => {
                        props.handleDateChange(e);
                        setFields({...fields, birthdate: e.target.value});
                    }}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Numéro de voie</Form.Label>
                <Form.Control type="text" placeholder="Numéro et libellé de voie" required/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Code postal</Form.Label>
                <Form.Control type="number" placeholder="Code postal" required pattern="\d{5}"
                onChange={props.handlePostalCodeChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Ville</Form.Label>
                <Form.Select required value={props.selectedCity} onChange={(e) => props.setSelectedCity(e.target.value)}>
                    {props.cities.map((city, index) => (
                        <option key={index} value={city}>{city}</option>
                    ))}
                </Form.Select>
            </Form.Group>

          </Form>
        );
      case 'child':
        return (
          <Form>
            {/* Child registration form goes here */}

          </Form>
        );
      default:
        return null;
    }
  };

      return (
        <Container>
          <h2 className="my-3 d-flex justify-content-center align-items-center">S'inscrire au Pongy Club</h2>
          <div className="d-flex justify-content-center align-items-center p-3">
              <Button onClick={() => setForm('club')}>S'inscrire au club</Button>
          </div> <div className="d-flex justify-content-center align-items-center p-3">
              <Button onClick={() => setForm('child')}>Inscrire son enfant au club</Button>
          </div>
          {props.isMinor && <Alert variant="warning">Si vous êtes mineur, veuillez remplir l'autre
          formulaire avec votre responsable légal.</Alert>}
          {renderForm()}
        </Container>
      );
    }
