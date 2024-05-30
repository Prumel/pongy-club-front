import React from "react";
import raquetteBalleTable from 'public/raquette_balle_table.png';
import banniereFB from 'public/couv.png';

export default function Welcome(props) {

    return (
        <>
            <h2 className=" my-3 d-flex justify-content-center align-items-center">Bienvenue au Pongy Club</h2>
            <h3>Présentation du club</h3>

            <div className="row">
                <div className="col-md d-flex justify-content-center align-items-center p-3">
                    <img src={raquetteBalleTable} alt="Raquette, balle et table de ping-pong" />
                </div>
                <div className="col-md d-flex justify-content-center align-items-center p-3">
                    <p>Pongy Club est un club de tennis de table rattaché à la <a href="https://www.fftt.com/"> FFTT</a>
                    - Fédération Française de Tennis de Table et à la <a href="https://www.fnsmr.org/">FNSMR</a> -
                    Fédération Nationale Sport en Milieu Rural.
                    <br/>
                    Le club est ouvert à tous les publics, de 7 à 100 ans et plus,
                    et propose des entraînements libres pour les adultes et des entraînements supervisés pour
                    les enfants.</p>


                </div>
            </div>
            <h3>Découvrez nos partenaires</h3>
            <p>Le Pongy Club est soutenu par plusieurs partenaires qui nous permettent d'organiser des événements </p>
            - BTP -
            - Immobilier -
            <h3>Restez à la page !</h3>
                <img src={banniereFB} alt="Bannière suivez-nous sur facebook" />

        </>
    );
}

