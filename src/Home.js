import React, { useState } from 'react';
import image from './images/home.jpg'
import image1 from './images/home1.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link  } from 'react-router-dom';
import { useLanguage } from './contexts/LanguageContext';

const Home = () => {

    const { language } = useLanguage();

    const french_title = "LA PREMIÈRE ARÉNA DE PAINTBALL D'OTTAWA"
    const english_title = "OTTAWA'S PREMIER PAINTBALL ARENA"

    const english_body = "Serving Ottawa for over 15 years, Parliament Paintball has been Ottawa's premier paintball arena. Located in the heart of the capital, Parliament Paintball welcomes players of all ages and skill levels, all year round!"
    const french_body = "Au service d'Ottawa depuis plus de 15 ans, Parliament Paintball est la principale arène de paintball d'Ottawa. Situé au cœur de la capitale, Parliament Paintball accueille les joueurs de tous âges et de tous niveaux, toute l’année!"
    
    const english_description = "Parliament Paintball serves a variety of events for individuals and groups. We provide you with top of the line paintballing equipment and have different packages depending on your needs. If you're ready for the arena, enlist now!"
    const french_description = "Parliament Paintball propose une variété d’événements pour les individus et les groupes. Nous mettons à votre disposition du matériel de paintball haut de gamme et proposons différents forfaits en fonction de vos besoins. Si vous êtes prêt pour l'arène, inscrivez-vous maintenant!"

    const english_button = "BOOK NOW!"
    const french_button = "RESERVE MAINTENANT!"

    const title = language === 'english' ? english_title : french_title;
    const body = language === 'english' ? english_body : french_body;
    const description = language === 'english' ? english_description : french_description;
    const btn = language === 'english' ? english_button : french_button;

    return (  
        <div className="home">
            
            <Container fluid className='banner-container'>
                <Row>
                    <Col><img src={image} alt="Paintball" className="banner" /></Col>
                    <div className="overlay-text">
                        <h1 className='home-header'>{title} </h1>
                        <p className="home-text">{body}</p>
                    </div>
                </Row>
            </Container>
            
            <Container fluid className='home-container'>
                <Row>
                    <Col><img src={image1} alt="Paintball" className="extra"/></Col>
                    <Col><p className='description'>{description}</p>
                        <Button as={Link} to= "book" variant="danger" size='lg'><h1>{btn}</h1></Button>{' '}
                    </Col>
                </Row>
            </Container>
            <div className="language-switcher">
        
        </div>
    </div>
    );
}
 
export default Home;