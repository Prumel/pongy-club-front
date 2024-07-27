import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function ClubRegistrationForm({ fields, setFields, registerAdultLicensedMember, handleDateChange, handlePostalCodeChange, cities }) {
  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      registerAdultLicensedMember(
        fields.guardianName,
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
        fields.registrationDate,
        fields.licenses
      );
    }}>
      <Form.Group className="mb-3">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="text" placeholder="Nom" required value={fields.lastName}
          onChange={form => setFields({ ...fields, lastName: form.target.value })} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Prénom</Form.Label>
        <Form.Control type="text" placeholder="Prénom" required value={fields.firstName}
          onChange={form => setFields({ ...fields, firstName: form.target.value })} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Nom du tuteur</Form.Label>
        <Form.Control type="text" placeholder="Nom du tuteur" value={fields.guardianName}
          onChange={form => setFields({ ...fields, guardianName: form.target.value })} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Nom d'utilisateur</Form.Label>
        <Form.Control type="text" placeholder="Nom d'utilisateur" required value={fields.username}
          onChange={form => setFields({ ...fields, username: form.target.value })} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control type="password" placeholder="Mot de passe" required value={fields.password}
          onChange={form => setFields({ ...fields, password: form.target.value })} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Adresse mail</Form.Label>
        <Form.Control
          type="email"
          placeholder="Adresse mail"
          required
          pattern="[a-z0-9._%+\-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          value={fields.email}
          onChange={(e) => {
            e.target.reportValidity();
            setFields({ ...fields, email: e.target.value });
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
          onChange={e => setFields({ ...fields, phoneNumber: e.target.value })} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Date de naissance</Form.Label>
        <Form.Control
          type="date"
          placeholder="Date de naissance"
          required
          value={fields.birthdate}
          onChange={(e) => {
            handleDateChange(e);
            setFields({ ...fields, birthdate: e.target.value });
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Numéro de voie</Form.Label>
        <Form.Control type="text" placeholder="Numéro et libellé de voie" required value={fields.address}
          onChange={e => setFields({ ...fields, address: e.target.value })} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Code postal</Form.Label>
        <Form.Control type="number" placeholder="Code postal" required pattern="\d{5}"
          value={fields.zipCode}
          onChange={e => {
            handlePostalCodeChange(e);
            setFields({ ...fields, zipCode: e.target.value });
          }} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Ville</Form.Label>
        <Form.Select required value={fields.selectedCity} onChange={e => setFields({ ...fields, selectedCity: e.target.value })}>
          {cities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Date d'inscription</Form.Label>
        <Form.Control type="date" placeholder="Date d'inscription" required value={fields.registrationDate}
          onChange={e => setFields({ ...fields, registrationDate: e.target.value })} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Licences</Form.Label>
        <Form.Control type="text" placeholder="Licences" value={fields.licenses}
          onChange={e => setFields({ ...fields, licenses: e.target.value.split(',') })} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Est un enfant" checked={fields.isChild}
          onChange={e => setFields({ ...fields, isChild: e.target.checked })} />
      </Form.Group>

      <Button variant="primary" type="submit">
        S'inscrire
      </Button>
    </Form>
  );
}