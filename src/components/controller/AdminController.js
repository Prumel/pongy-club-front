import AdminView from "../view/AdminView";
import React, { useState, useEffect, useContext } from "react";
import { myContext } from "../..";

export default function AdminController(props) {
    const backUrl = "http://34.155.236.167:8080/api/public/admin/licensedmembers"

    const { licensedMember } = useContext(myContext);
    const [licensedMembers, setLicensedMembers] = useState([]);

    useEffect(() => {
        fetchLicensedMembers();
    }, [])



    function fetchLicensedMembers() {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${licensedMember.token}`
            }
        }
        fetch(`${backUrl}/all`, requestOptions)
            .then(response => response.json())
            .then(json => setLicensedMembers(json));
    }

    return (
        <AdminView fetchLicensedMembers={() => fetchLicensedMembers} licensedMembers={licensedMembers} />
    )


}