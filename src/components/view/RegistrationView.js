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
import { Button, Container, Form } from 'react-bootstrap';

function RegistrationView() {
  const [form, setForm] = useState(null);

  const renderForm = () => {
    switch(form) {
      case 'club':
        return (
          <Form>
            {/* Club registration form goes here */}
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
      <Button onClick={() => setForm('club')}>S'inscrire au club</Button>
      <Button onClick={() => setForm('child')}>Inscrire son enfant au club</Button>
      {renderForm()}
    </Container>
  );
}

export default RegistrationView;