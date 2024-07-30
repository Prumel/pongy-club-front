import React, { useState } from 'react';
import {Row, Container, ListGroup} from "react-bootstrap";

export default function AdminView(props) {

    return (
        <Container>

            <section className="p-3">
                <h3>Les licenciés inscrits</h3>
                <Row className="ps-3 pe-3">
                    <ListGroup>
                        {props.licensedMembers.map((licensedM, index) => (
                            <ListGroup.Item
                                key={licensedM.index}
                                style={{backgroundColor: index % 2 === 0 ? "#C5F8FF" : "#FFFFFF"}}
                            >
                                {licensedM.firstName} {licensedM.lastName} {licensedM.username} {licensedM.phoneNumber} {licensedM.birthdate}
                            </ListGroup.Item>
                    ))}
                </ListGroup>
                </Row>
            </section>

        </Container>
    )
}