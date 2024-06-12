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
                Votre compte a bien été créé. Vous pouvez maintenant vous connecter.
                    <Button href="/connection" variant="primary" className="ms-2">Se connecter</Button>
              </Alert>;
            }

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
                    }} />
                <Form.Control.Feedback type="invalid">
                    Veuillez entrer une adresse mail valide.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Mot de passe></Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Mot de passe"
                    required
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Doit contenir au moins un chiffre, une lettre majuscule, une lettre minuscule et au moins 8 caractères"
                    value={fields.password}
                    onChange={e => setFields({...fields, password: e.target.value})} />
                <Form.Control.Feedback type="invalid">
                    Doit contenir au moins un chiffre, une lettre majuscule, une lettre minuscule et au moins 8 caractères.
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
                Valider mes informations
            </Button>

        </Form>
    }

    return (
          <Container>
            <h2 className="my-3 d-flex justify-content-center align-items-center">Créer un compte</h2>
             {!props.registrationSuccess && !(currentMonth >= 4 && currentMonth <= 7) && (
            {renderForm()}
            )}
          </Container>
      );
    }


