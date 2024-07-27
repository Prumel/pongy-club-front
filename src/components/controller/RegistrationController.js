import RegistrationView from "../view/RegistrationView";
import React, { useState } from "react";
import axios from 'axios';

export default function RegistrationController(props) {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [birthDate, setBirthDate] = useState(null);
    const [isMinor, setIsMinor] = useState(false);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const backUrl = "http://localhost:8080/api/public/register/register";

    function handleDateChange(e) {
        const birthDate = new Date(e.target.value);
        setBirthDate(birthDate);
        const age = new Date().getFullYear() - birthDate.getFullYear();
        setIsMinor(age < 18);
    }

    function fetchCities(postalCode) {
        return axios.get(`https://api-adresse.data.gouv.fr/search/?q=${postalCode}&limit=5`)
            .then(response => {
                if (response.data && response.data.features) {
                    return response.data.features.map(feature => feature.properties.city);
                }
                return [];
            })
            .catch(error => {
                console.error(error);
                return [];
            });
    }

    function handlePostalCodeChange(e) {
        fetchCities(e.target.value)
            .then(fetchedCities => {
                setCities(fetchedCities);
                if (fetchedCities.length > 0) {
                    setSelectedCity(fetchedCities[0]);
                }
            });
    }

    function registerAdultLicensedMember(guardianName, firstName, lastName, username, password, phoneNumber, birthdate, address, selectedCity, zipCode, isChild, registrationDate, licenses) {
        const licensedMember = {
            guardianName: guardianName,
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password,
            phoneNumber: phoneNumber,
            birthdate: birthdate,
            address: address,
            city: selectedCity,
            zipCode: zipCode,
            isChild: isChild,
            registrationDate: registrationDate,
            licenses: licenses
        };
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(licensedMember)
        };
        fetch(`${backUrl}/adult`, requestOptions)
            .then(response => {
                if (response.ok) {
                    setRegistrationSuccess(true);
                } else {
                    throw new Error('Failed to register');
                }
                return response.json();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <RegistrationView
            handlePostalCodeChange={handlePostalCodeChange}
            handleDateChange={handleDateChange}
            cities={cities}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            isMinor={isMinor}
            registerAdultLicensedMember={registerAdultLicensedMember}
            registrationSuccess={registrationSuccess}
        />
    );
}