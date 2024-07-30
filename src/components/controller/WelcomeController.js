import React, {useContext, useEffect, useState} from "react";
import WelcomeView from "../view/WelcomeView";

export default function WelcomeController(props) {

    const backUrl = "http://34.155.236.167:8080/api/public/welcome";

    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        fetchTrainings();
    }, [])

    function fetchTrainings() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(`${backUrl}/training`, requestOptions)
            .then(response => response.json())
            .then(json => setTrainings(json));
    }

    return (
        <WelcomeView fetchTrainings={() => fetchTrainings()} trainings={trainings}/>
    )
}