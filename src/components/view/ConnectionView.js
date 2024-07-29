import React, { useState } from "react";
import { Row, Col, Card, InputGroup, Nav, Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ConnectionView(props) {

    const [fields, setFields] = useState({ login: "", password: "" });

    return (
        <Row className="d-flex justify-content-center p-3 pt-5">

            <Card className="max-width-50-rem p-0">
                <Card.Header className="text-center">Se connecter</Card.Header>
                {props.isIncorrect && (
                    <Alert variant="warning">
                        Identifiant(s) incorrect(s).
                    </Alert>
                )}
                <Row className="pt-4 ps-3 pe-3">
                    <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                        <output>Adresse mail</output>
                    </Col>
                    <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inpLogin">
                                <i className="fa fa-user"></i>
                            </InputGroup.Text>
                            <Form.Control
                                type="text"
                                aria-describedby="inpLogin"
                                placeholder="Veuillez entrer votre adresse mail"
                                value={fields.login}
                                onChange={form => setFields({...fields, login: form.target.value})}
                            />
                        </InputGroup>
                    </Col>
                </Row>

                <Row className="ps-3 pe-3">
                    <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                        <output>Mot de passe</output>
                    </Col>
                    <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inpPassword">
                                <i className="fa fa-key"></i>
                            </InputGroup.Text>
                            <Form.Control
                                type="password"
                                aria-describedby="inpPassword"
                                placeholder="Veuillez entrer votre mot de passe"
                                value={fields.password}
                                onChange={form => setFields({...fields, password: form.target.value})}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="pb-3 ps-3 pe-3">
                   <Col sm={{ offset: 1, span: 10 }} lg={{ offset: 4, span: 4 }} className="p-1 d-flex justify-content-center">
                        <Nav.Link
                            className="btn bg-black w-100 text-white"
                            onClick={() => props.fetchLicensedMember(fields.login, fields.password)}
                        >
                            Connexion
                        </Nav.Link>
                    </Col>

                </Row>
            </Card>
        </Row>
    );
}