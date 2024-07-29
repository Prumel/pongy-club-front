import React, { useState } from 'react';
import { Button, Alert, Container } from 'react-bootstrap';
import RegistrationFormView from "./RegistrationFormView";

export default function RegistrationView(props) {
    const [fields, setFields] = useState({
        guardianName: "",
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        phoneNumber: "",
        birthdate: "",
        address: "",
        selectedCity: "",
        zipCode: "",
        registrationDate: "",
        licenseTypeIds: [],
    });
    const [showForm, setShowForm] = useState(false);

    const renderForm = () => {
        if (showForm && !props.registrationSuccess) {
            return (
                <RegistrationFormView
                    fields={fields}
                    setFields={setFields}
                    registerAdultLicensedMember={props.registerAdultLicensedMember}
                    handleDateChange={props.handleDateChange}
                    handlePostalCodeChange={props.handlePostalCodeChange}
                    cities={props.cities}
                    licenseTypes={props.licenseTypes}
                />
            );
        }
        return null;
    };

    return (
        <Container>
            <h2 className="my-3 d-flex justify-content-center align-items-center">S'inscrire au Pongy Club</h2>
            {props.registrationSuccess ? (
                <Alert variant="success">
                    Vos informations ont bien été envoyées. Afin de finaliser votre inscription, veuillez vous rendre
                    au gymnase aux horaires des entraînements le réglement (espèces ou chèque).
                </Alert>
            ) : (
                <>
                    <div className="d-flex justify-content-center align-items-center p-3">
                        <Button onClick={() => {
                            setFields({ ...fields, isChild: false });
                            setShowForm(true);
                        }}>S'inscrire au club</Button>
                    </div>
                    <div className="d-flex justify-content-center align-items-center p-3">
                        <Button onClick={() => {
                            setFields({ ...fields, isChild: true });
                            setShowForm(true);
                        }}>Inscrire son enfant au club</Button>
                    </div>
                </>
            )}
            {props.isMinor && (
                <Alert variant="warning">
                    Si vous êtes mineur, veuillez remplir l'autre formulaire avec votre responsable légal.
                </Alert>
            )}
             {props.usernameTaken && (
                            <Alert variant="warning">
                                Le nom d'utilisateur est déjà pris. Veuillez en choisir un autre.
                            </Alert>
                        )}
            {renderForm()}
        </Container>
    );
}


