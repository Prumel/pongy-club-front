
import React, { useState } from 'react';
import { Button, Alert, Container, Form } from 'react-bootstrap';
import {Row, Col, Card, InputGroup, Nav, ListGroup} from "react-bootstrap";

export default function RegistrationView(props) {
  const [form, setForm] = useState(null);
  const [fields, setFields] = useState({ firstName: "", lastName: "", birthdate:"", email:"", phoneNumber :"",
   adress:"", selectedCity:"",zipCode:"" });
   const currentMonth = new Date().getMonth();


 function renderForm () {
    if (props.registrationSuccess) {
      return <Alert variant="success">
        Vos informations ont bien été envoyées. Afin de finaliser votre inscription, veuillez vous rendre au gymnase
        avec le formulaire dûment complété et le réglement.
      </Alert>;
    }
     if (currentMonth >= 6 && currentMonth <= 7) {
          return <Alert variant="warning">Les inscriptions sont fermées du mois de juillet au mois d'août. Revenez en septembre ! </Alert>;
     }
    switch(form) {
      case 'club':
        return (
            <Form onSubmit={(e) => {
                e.preventDefault();
                props.registerAdultLicensedMember(fields.firstName, fields.lastName, fields.email, fields.phoneNumber, fields.birthdate, fields.adress, fields.selectedCity, fields.zipCode);
            }}>

            <Form.Group className="mb-3">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" placeholder="Nom" required value={fields.lastName}
                onChange={form => setFields({...fields, lastName: form.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Prénom</Form.Label>
                <Form.Control type="text" placeholder="Prénom" required value={fields.firstName}
                onChange={form => setFields({...fields, firstName: form.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3">
    <Form.Label>Adresse mail</Form.Label>
    <Form.Control
        type="email"
        placeholder="Adresse mail"
        required
        pattern="[a-z0-9._%+\\-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
        value={fields.email}
        onChange={(e) => {
            e.target.reportValidity();
            setFields({...fields, email: e.target.value});
        }}
    />
    <Form.Control.Feedback type="invalid">
        Veuillez entrer une adresse mail valide.
    </Form.Control.Feedback>
</Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Numéro de téléphone</Form.Label>
                <Form.Control type="tel" placeholder="Numéro de téléphone" required pattern="0[1-9][0-9]{8}"
                    value={fields.phoneNumber}
                    onChange={e => setFields({...fields, phoneNumber: e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Date de naissance</Form.Label>
                <Form.Control
                    type="date"
                    placeholder="Date de naissance"
                    required
                    value={fields.birthdate}
                    onChange={(e) => {
                        props.handleDateChange(e);
                        setFields({...fields, birthdate: e.target.value});

                    }}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Numéro de voie</Form.Label>
                <Form.Control type="text" placeholder="Numéro et libellé de voie" required value={fields.adress}
                onChange={e => setFields({...fields, adress: e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Code postal</Form.Label>
                <Form.Control type="number" placeholder="Code postal" required pattern="\d{5}"
                value={fields.zipCode}
                onChange={e => {
                    props.handlePostalCodeChange(e);
                    setFields({...fields, zipCode: e.target.value});
                }}/>
            </Form.Group>


<Form.Group className="mb-3">
    <Form.Label>Ville</Form.Label>
    <Form.Select required value={fields.selectedCity} onChange={e => setFields({...fields, selectedCity: e.target.value})}>
        {props.cities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
        ))}
    </Form.Select>
</Form.Group>

<Button variant="primary" type="submit">
{//onClick={() => props.registerAdultLicensedMember(fields.firstName, fields.lastName, fields.email, fields.phoneNumber, fields.birthdate, fields.adress, fields.selectedCity, fields.zipCode)}
    }S'inscrire
</Button>

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

//      return (
//      <>
//        <Container>
//          <h2 className="my-3 d-flex justify-content-center align-items-center">S'inscrire au Pongy Club</h2>
//          <div className="d-flex justify-content-center align-items-center p-3">
//              <Button onClick={() => setForm('club')}>S'inscrire au club</Button>
//          </div> <div className="d-flex justify-content-center align-items-center p-3">
//              <Button onClick={() => setForm('child')}>Inscrire son enfant au club</Button>
//          </div>
//          {props.isMinor && <Alert variant="warning">Si vous êtes mineur, veuillez remplir l'autre
//          formulaire avec votre responsable légal.</Alert>}
//          {renderForm()}
//        </Container>
//        </>
//      );
//    }
//

  return (
    <>
      <Container>
        <h2 className="my-3 d-flex justify-content-center align-items-center">S'inscrire au Pongy Club</h2>
        {/* Only show the form selection buttons if registration was not successful */}
         {!props.registrationSuccess && !(currentMonth >= 4 && currentMonth <= 7) && (
          <>
            <div className="d-flex justify-content-center align-items-center p-3">
                <Button onClick={() => setForm('club')}>S'inscrire au club</Button>
            </div>
            <div className="d-flex justify-content-center align-items-center p-3">
                <Button onClick={() => setForm('child')}>Inscrire son enfant au club</Button>
            </div>
          </>
        )}
        {props.isMinor && <Alert variant="warning">Si vous êtes mineur, veuillez remplir l'autre
        formulaire avec votre responsable légal.</Alert>}
        {renderForm()}
      </Container>
    </>
  );
}