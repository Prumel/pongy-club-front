import RegistrationView from "../view/RegistrationView";
import React, {useContext, useEffect, useState} from "react";
import axios from 'axios';

export default function RegistrationController(props) {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
      const [birthDate, setBirthDate] = useState(null);
      const [isMinor, setIsMinor] = useState(false);

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

    return (
        <RegistrationView
            handlePostalCodeChange={handlePostalCodeChange}
            handleDateChange={handleDateChange}
            cities={cities}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            isMinor={isMinor}
            registerAdultLicensedMember={registerAdultLicensedMember}
        />
    );
}
const backUrl = "http://localhost:8080/api/public/register";

function registerAdultLicensedMember(firstName, lastName, email, phoneNumber, birthdate, address, selectedCity, zipCode) {
    const licensedMember = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        birthdate: birthdate,
        address: address,
        city: selectedCity, // use selectedCity from parameters
        zipCode: zipCode
    };
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(licensedMember)
    }
    fetch(`${backUrl}/adult`, requestOptions)
        .then(response => response.json())
        .then(json => console.log(json));
}

