import RegistrationView from "../view/RegistrationView";
import React, { useState, useEffect } from "react";


export default function RegistrationController(props) {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [birthDate, setBirthDate] = useState(null);
    const [isMinor, setIsMinor] = useState(false);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [licenseTypes, setLicenseTypes] = useState([]);

    useEffect(() => {
        fetchLicenseTypes();
    }, []);

    const backUrl = "http://localhost:8080/api/public/register";

    function handleDateChange(e) {
        const birthDate = new Date(e.target.value);
        setBirthDate(birthDate);
        const age = new Date().getFullYear() - birthDate.getFullYear();
        setIsMinor(age < 18);
    }

  function fetchCities(postalCode) {
    return fetch(`https://api-adresse.data.gouv.fr/search/?q=${postalCode}&limit=5`)
        .then(response => response.json())
        .then(data => {
            if (data && data.features) {
                return data.features.map(feature => feature.properties.city);
            }
            return [];
        })
        .catch(error => {
            console.error(error);
            return [];
        });
}
//        return axios.get(`https://api-adresse.data.gouv.fr/search/?q=${postalCode}&limit=5`)
//            .then(response => {
//                if (response.data && response.data.features) {
//                    return response.data.features.map(feature => feature.properties.city);
//                }
//                return [];
//            })
//            .catch(error => {
//                console.error(error);
//                return [];
//            });
//    }

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
            registrationDate: new Date().toISOString(),
            licenses: licenses
        };
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(licensedMember)
        };
        fetch(`${backUrl}/register`, requestOptions)
            .then(response => {
                if (response.ok) {
                    setRegistrationSuccess(true);
                    return response.json();
                } else {
                    throw new Error('Failed to register');
                }

            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
       function fetchLicenseTypes() {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            fetch(`${backUrl}/license-type`, requestOptions)
                .then(response => response.json())
                .then(json => setLicenseTypes(json));
                {console.log(licenseTypes)}
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
             fetchLicenseTypes={() => fetchLicenseTypes()} licenseTypes={licenseTypes}
        />
    );
}
