import React from "react";
import { Link } from 'react-router-dom';
import tablesInGymnasium from 'public/tt-tables-in-gymnasium.png';
import facebookBanner from 'public/facebook-banner.png';
import logoEql from 'public/logo-eql.jpg';
import logoIDF from 'public/logo-IDF.jpg';
import {Row, Col, Card, InputGroup, Nav, Form, Container, ListGroup, Button} from "react-bootstrap";


export default function WelcomeView(props) {

    return (
        <Container>
            <h2 className=" my-3 d-flex justify-content-center align-items-center">Bienvenue au Pongy Club</h2>

            <section className="p-3">
                <h3>Présentation du club</h3>
                 <div className="row">
                    <div className="col-md d-flex justify-content-center align-items-center p-3">
                        <img src={tablesInGymnasium} alt="Raquette, balle et table de ping-pong" />
                    </div>
                    <div className="col-md d-flex justify-content-center align-items-center p-3">
                        <p>
                            <strong>Pongy Club</strong> est un club de <strong>tennis de table</strong> rattaché à la
                            <a href="https://www.fftt.com/" target="_blank"> FFTT</a> - Fédération Française de Tennis
                            de Table et à la <a href="https://www.fnsmr.org/" target="_blank"> FNSMR</a> -
                            Fédération Nationale Sport en Milieu Rural.
                            <br/>
                            <br/>
                            Le club est ouvert à tous les publics, de 7 à 100 ans et plus, et accueille les joueurs
                            de tous niveaux, du débutant au confirmé.
                        </p>
                    </div>
                 </div>
            </section>
            <hr />

            <section className="p-3">
                <h3>Les entraînements</h3>
                <p>Voici les entraînements proposés par le <strong>Pongy Club</strong> le mardi soir
                tout au long de la saison sportive, hors vacances scolaires :</p>
                <Row className="ps-3 pe-3">
                    <ListGroup>
                        {props.trainings.map((training, index) => (
                            <ListGroup.Item
                                key={training.id}

                                style={{backgroundColor: index % 2 === 0 ? "#C5F8FF" : "#FFFFFF"}}
                            >
                                {training.name.replace(/^./, training.name[0].toUpperCase())} : {training.schedule}
                            </ListGroup.Item>
                    ))}
                </ListGroup>
                </Row>
            </section>

            <hr />

             <section className="p-3">
                <h3>Nous rejoindre</h3>
                <p>
                    Vous souhaitez nous rejoindre et participer aux entraînements ? C'est très simple ! Créez un compte pour vous inscrire ou venez nous
                     rencontrer directement au gymnase aux hroaires des entraînements !
                </p>
             </section>

             <hr />

            <section className="p-3">
                <h3>Découvrez nos partenaires</h3>
                <p>
                    Le <strong>Pongy Club</strong> remercie infiniement ses partenaires, <a href="https://www.ecoleql.fr/">l'EQL
                    </a> et <a href="https://www.iledefrance.fr/" target="_blank">la région Ile-de-France</a>, qui le soutiennent financièrement
                     afin de pouvoir mettre en place de beaux projets tout au long de l'année comme :
                </p>
                <ul>
                    <li>l'organisation de tournois,</li>
                    <li>l'achat de matériel et de récompenses,</li>
                    <li>la participation aux compétitions,</li>
                    <li>et bien d'autres choses !</li>
                </ul>
                <p>
                     N'hésitez pas à visiter leur site internet pour en savoir plus sur leurs activités et pour les
                     soutenir !
                </p>
                <div className="row">
                    <div className="col-md d-flex align-items-center justify-content-center">
                        <a href="https://www.ecoleql.fr/" target="_blank"><img src={logoEql} alt="Logo de l'Ecole Qualité Logicielle (EQL), organisme de formation"/></a>
                    </div>
                    <div className="col-md d-flex align-items-center justify-content-center">
                        <a href="https://www.iledefrance.fr/" target="_blank"><img src={logoIDF} alt="Logo de la région Ile-de-France"/></a>
                    </div>
                </div>
            </section>

            <hr />

            <section className="p-3">
            <h3>Restez à la page !</h3>
                <div  className="d-flex justify-content-center align-items-center">
                    <a href="https://www.facebook.com/FFTTofficiel" target="_blank"><img src={facebookBanner} alt="Bannière suivez-nous sur facebook" /></a>
                </div>
            </section>

            <hr/>
        </Container>
    );
}

