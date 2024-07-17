
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import birthday from './images/birthday.jpg';
import company from './images/company.jpg';
import group from './images/group.jpg';
import individual from './images/individual.jpg';
import { Link  } from 'react-router-dom';
import { useLanguage } from './contexts/LanguageContext';

const Events = () => {
    
    const { language } = useLanguage();

    const english_title = "Events"
    const french_title = "Événements"
    const en_desc = "We serve a variety of events depending on your needs!"
    const fr_desc = "Nous servons une variété d'événements en fonction de vos besoins!"
    const english_button = "BOOK NOW!"
    const french_button = "RESERVE MAINTENANT!"
    const en_birthday = "Birthday Parties"
    const fr_birthday = "Fêtes d'anniversaire"
    const en_company = "Company Parties"
    const fr_company = "Fêtes d'entreprise"
    const en_group = "Group Events"
    const fr_group = "Événements de groupe"
    const en_ind = "Individual Events"
    const fr_ind = "Événements individuels"

    const title = language === 'english' ? english_title : french_title;
    const desc = language === 'english' ? en_desc: fr_desc;
    const btn = language === 'english' ? english_button : french_button;
    const birthday_txt = language === 'english' ? en_birthday : fr_birthday;
    const company_txt = language === 'english' ? en_company : fr_company;
    const group_txt = language === 'english' ? en_group : fr_group;
    const ind_txt = language === 'english' ? en_ind: fr_ind;

    return (  
        <div className="home">
            
            <Container fluid className='top-container'>
                <Row className='events-row'>
                    <Col> 
                        <h1 className='info-head'>{title}</h1>
                    </Col>
                </Row>

                <Row className='events-row'>
                <Col></Col>
                <Col className='info-col'> 
                    <h2 className='info-msg'>{desc}</h2>   
                </Col>
                <Col></Col>
                </Row>
                <Row className='events-row'>
                    <Col>
                        <Button as={Link} to= "book" variant="danger" size='lg'><h1>{btn}</h1></Button>{' '}
                    </Col>
                </Row>

            </Container>
            
            <Container fluid className='home-container'>
                <Row>
                    <Col>
                        <img src={birthday} alt="Birthdays" className="birthday" />
                        <h1 className='event-head'>{birthday_txt}</h1>
                    </Col>
                        
                    <Col>
                        <img src={company} alt="company" className="company"/>
                        <h1 className='event-head'>{company_txt}</h1>
                    </Col> 
                    <Col>
                        <img src={group} alt="group" className="group"/>
                        <h1 className='event-head'>{group_txt}</h1>
                    </Col>

                    <Col>
                        <img src={individual} alt="individual" className="individual"/>
                        <h1 className='event-head'>{ind_txt}</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default Events;