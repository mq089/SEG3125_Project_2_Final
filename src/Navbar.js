import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/NavDropdown';
import logo from './images/logo.png'
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LanguageSwitcher from './components/LanguageSwitcher'; 
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCakeCandles, faChartSimple, faCircleInfo, faCube, faGavel, faHouse, faInfo } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from './contexts/LanguageContext';


const Navigation = () => {
    const { language } = useLanguage();

    const en_home = "HOME";
    const fr_home = "ACCUEIL";
    const en_book = "BOOK";
    const fr_book = "RÉSERVER";
    const en_gen = "GENERAL INFORMATION";
    const fr_gen = "INFORMATIONS GÉNÉRALES";
    const en_rules = "RULES";
    const fr_rules = "RÈGLES";
    const en_event = "EVENTS";
    const fr_event = "ÉVÉNEMENTS";
    const en_pack = "PACKAGES";
    const fr_pack = "PAQUETS";
    const en_dash ="DASHBOARD";
    const fr_dash = "TABLEAU DE BORD";

    const home = language === 'english' ? en_home : fr_home;
    const book = language === 'english' ? en_book : fr_book;
    const gen = language === 'english' ? en_gen:fr_gen ;
    const rules = language === 'english' ? en_rules:fr_rules ;
    const event = language === 'english' ? en_event: fr_event;
    const pack = language === 'english' ? en_pack: fr_pack;
    const dash = language === 'english' ? en_dash:fr_dash ;

    return (  
        <Navbar expand="lg" className="navbar">
        
        <Container fluid className="nav-con">
                <Navbar.Collapse className="basic-navbar-nav">
                    <Nav>
                        <Row>  
                            <Col></Col>
                            <Col>
                            <img src={logo} alt="Parliament Paintball" className="logo"/>
                            </Col>
                            
                            <Col>
                                <div><Link to="/" id="info"><FontAwesomeIcon icon={faHouse} />&nbsp;{home}</Link></div>
                            </Col>
                            <Col>
                                <div><Link to="book" id="info"><FontAwesomeIcon icon={faBook} />&nbsp;{book}</Link></div>
                            </Col>
                            
                            <Col>
                                <div>
                                    <Dropdown id="info" title="INFO">
                                        <Dropdown.Item as={Link} to= "info" id="item"><FontAwesomeIcon icon={faCircleInfo}/> &nbsp;{gen}</Dropdown.Item>
                                        <Dropdown.Item as={Link} to= "rules" id="item"><FontAwesomeIcon icon={faGavel} />&nbsp;{rules}</Dropdown.Item>
                                    </Dropdown>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Dropdown title="PLAN" id="INFO">
                                        <Dropdown.Item as={Link} to= "events" id="item"><FontAwesomeIcon icon={faCakeCandles} />&nbsp;{event}</Dropdown.Item>
                                        <Dropdown.Item as={Link} to= "packages" id="item"><FontAwesomeIcon icon={faCube} />&nbsp;{pack}</Dropdown.Item>
                                    </Dropdown>
                                </div>
                            </Col>
                            <Col>
                                <div><Link to="dashboard" id="info"><FontAwesomeIcon icon={faChartSimple} />&nbsp;{dash}</Link></div>
                            </Col>
                            <Col>
                            
                            </Col>
                        </Row>
                    </Nav>
                </Navbar.Collapse>
        </Container>
        <LanguageSwitcher/>
      </Navbar>
    );
}
 

export default Navigation;