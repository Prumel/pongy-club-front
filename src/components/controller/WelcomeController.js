import React, {useContext, useEffect} from "react";
import WelcomeView from "../view/WelcomeView";

export default function WelcomeController(props) {

const backUrl = window.location.origin + "/api/rest/welcome";

    function fetchTrainings() {

        const requestOption = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(backUrl, requestOption)
        .then(response => response.json())
        .then(json => props.setTrainings(json));
    }

    return (
        <WelcomeView fetchTrainings={() => fetchTrainings}/>
    )
}