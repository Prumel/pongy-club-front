import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function RegistrationFormView({ fields, setFields, registerAdultLicensedMember, handleDateChange, handlePostalCodeChange, cities, licenseTypes }) {
    const formType = fields.isChild ? 'child' : 'adult';

    useEffect(() => {
        if (cities.length > 0 && !fields.selectedCity) {
            setFields(prevFields => ({ ...prevFields, selectedCity: cities[0] }));
        }
    }, [cities, fields.selectedCity, setFields]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFields({ ...fields, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const value = Number(e.target.value);
        const isChecked = e.target.checked;
        setFields(prevFields => {
            const updatedLicenseTypeIds = isChecked ? [...prevFields.licenseTypeIds, value]
             : prevFields.licenseTypeIds.filter(id => id !== value);
            return { ...prevFields, licenseTypeIds: updatedLicenseTypeIds };
        });
    };

    return (
        <Form onSubmit={(e) => {
            e.preventDefault();
            registerAdultLicensedMember(
                fields.isChild ? fields.guardianName : null,
                fields.firstName,
                fields.lastName,
                fields.username,
                fields.password,
                fields.phoneNumber,
                fields.birthdate,
                fields.address,
                fields.selectedCity,
                fields.zipCode,
                fields.isChild,
                new Date().toISOString(),
                fields.licenseTypeIds
            );
        }}>

            <Form.Group className="mb-3">
                <Form.Label>{formType === 'child' ? 'Nom de votre enfant' : 'Nom'}</Form.Label>
                <Form.Control
                    type="text"
                    placeholder={formType === 'child' ? 'Nom de votre enfant' : 'Nom'}
                    value={fields.lastName}
                    onChange={form => setFields({ ...fields, lastName: form.target.value })}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>{formType === 'child' ? 'Prénom de votre enfant' : 'Prénom'}</Form.Label>
                <Form.Control type="text"
                placeholder={formType === 'child' ? 'Prénom de votre enfant' : 'Prénom'}
                value={fields.firstName}
                onChange={form => setFields({ ...fields, firstName: form.target.value })}
                required
            />
            </Form.Group>

            {fields.isChild && (
                <Form.Group className="mb-3">
                    <Form.Label>Votre nom et prénom</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Votre nom et prénom"
                        value={fields.guardianName}
                        onChange={form => setFields({ ...fields, guardianName: form.target.value })}
                        required
                    />
                </Form.Group>
            )}

            <Form.Group className="mb-3">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Mot de passe"
                    value={fields.password}
                    onChange={form => setFields({ ...fields, password: form.target.value })}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>{formType === 'child' ? 'Votre adresse mail ' : 'Adresse mail'} </Form.Label>
                <Form.Control
                    type="email"
                    placeholder={formType === 'child' ? 'Votre adresse mail ' : 'Adresse mail'}
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}"
                    value={fields.username}
                    onChange={(e) => {
                        e.target.reportValidity();
                        setFields({ ...fields, username: e.target.value });
                    }}
                    required
                    />
                <Form.Control.Feedback type="invalid">
                    Veuillez entrer une adresse mail valide.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>{formType === 'child' ? 'Votre numéro de téléphone' : 'Numéro de téléphone'}</Form.Label>
                <Form.Control
                    type="tel"
                    placeholder={formType === 'child' ? 'Votre numéro de téléphone' : 'Numéro de téléphone'}
                    pattern="0[1-9][0-9]{8}"
                    value={fields.phoneNumber}
                    onChange={e => setFields({ ...fields, phoneNumber: e.target.value })}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>{formType === 'child' ? 'Date de naissance de votre enfant' : 'Date de naissance'}</Form.Label>
                <Form.Control
                    type="date"
                    value={fields.birthdate}
                    onChange={(e) => {
                        handleDateChange(e);
                        setFields({ ...fields, birthdate: e.target.value });
                    }}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Numéro et libellé de voie</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Numéro et libellé de voie"
                    value={fields.address}
                    onChange={e => setFields({ ...fields, address: e.target.value })}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Code postal</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Code postal"
                    pattern="\d{5}"
                    value={fields.zipCode}
                    onChange={e => {
                    handlePostalCodeChange(e);
                    setFields({ ...fields, zipCode: e.target.value });
                    }}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Ville</Form.Label>
                <Form.Select
                    value={fields.selectedCity}
                    onChange={e => setFields({ ...fields, selectedCity: e.target.value })}>
                    {cities.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                    ))}
                </Form.Select>
            </Form.Group>


            <Form.Group className="mb-3">
                <Form.Label>Licences</Form.Label>
                {licenseTypes && licenseTypes.map((licenseType, index) => (
                    <Form.Check
                        key={index}
                        type="checkbox"
                        label={`${licenseType.name} - ${licenseType.price}€ - ${licenseType.description}`}
                        value={licenseType.id}
                        checked={fields.licenseTypeIds.includes(licenseType.id)}
                        onChange={handleCheckboxChange}
                        required
                    />
                ))}
            </Form.Group>

            <Button variant="primary" type="submit">
                S'inscrire
            </Button>
        </Form>
        );
}

