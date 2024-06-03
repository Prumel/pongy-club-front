import RegistrationView from "../view/RegistrationView";
import React, {useContext, useEffect, useState} from "react";

export default function RegistrationController(props) {

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



    return (
    <RegistrationView/>
    )
}