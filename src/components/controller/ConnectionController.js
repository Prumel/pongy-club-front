import React, { useContext, useState } from "react";
import { myContext } from "../..";
import ConnectionView from "../view/ConnectionView";

export default function ConnectionController() {
    const backUrl = "http://34.155.236.167:8080/api/auth/login";
    const { isAdmin, setIsAdmin, licensedMember, setLicensedMember } = useContext(myContext);

    const [isIncorrect, setIsIncorrect] = useState(false);

    function fetchLicensedMember(login, password) {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: login, password: password })
        };
        fetch(`${backUrl}`, requestOptions)
            .then(response => response.json())
            .then(json => {
                setLicensedMember({
                    token: json.accessToken,
                    role: json.role,
                });
                if (json.role === "ADMIN") {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
                setIsIncorrect(false);
            })
            .catch(error => {
                console.error('There was a problem with the login operation:', error);
                setIsIncorrect(true);
            });
    }

    return (
        <ConnectionView
            fetchLicensedMember={(login, password) => fetchLicensedMember(login, password)}
            isIncorrect={isIncorrect}
        />
    );
}
