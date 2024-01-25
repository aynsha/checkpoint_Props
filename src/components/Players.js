import React from "react";
import Card from 'react-bootstrap/Card';
import './style.css'

//Création d'une Card Bootstrap avec nos attributs passées en tant que propriétés props au composant Players
function Players({nom, equipe, nationalite, numMaillot, age, imageUrl}){
    return(
        <Card className="card" >
            <Card.Img variant="top" src={imageUrl}/>
            <Card.Body>
                <Card.Title>{nom}</Card.Title>
                <Card.Text>
                    <strong>Equipe: </strong>{equipe}<br/>
                    <strong>Nationnalité: </strong>{nationalite}<br/>
                    <strong>Numéro-Maillot: </strong>{numMaillot}<br/>
                    <strong>Age: </strong>{age}<br/>
                </Card.Text>
            </Card.Body>
        </Card> 
    );
};
export default Players;