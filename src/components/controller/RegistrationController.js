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
                    setSelectedCity(fetchedCities[0] || '');
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
        />
    );
}
const backUrl = "http://localhost:8080/api/public/";

//    function registerLicensedMember(firstName, lastName, email, phoneNumber, address) {
//        const licensedMember = {name: name, firstname: firstname, email: email, password: password, phone: phone, address: address, city: city, postalCode: postalCode};
//        const requestOptions = {
//            method: "POST",
//            headers: {"Content-Type": "application/json"},
//            body: JSON.stringify(licensedMember)
//        }
//        fetch(`${backUrl}/licensedMember`, requestOptions)
//            .then(response => response.json())
//            .then(json => console.log(json));
//    }


