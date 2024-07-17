import image from './images/info.jpeg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import map from './images/map.png'
import Button from 'react-bootstrap/Button';
import { Link  } from 'react-router-dom';
import { useLanguage } from './contexts/LanguageContext';

const Info = () => {

    const { language } = useLanguage();

    const english_title = "General Information"
    const french_title = "Informations Générales"

    const english_body = "We're open all year round. Join us whenever you're ready."
    const french_body = "Nous sommes ouverts toute l'année. Rejoignez-nous dès que vous êtes prêt."

    const english_info_1 = "Operating hours:"
    const english_info_2 = "Monday - Friday: 10:00am -10:00pm"
    const english_info_3 = "Saturday - Sunday: 8:00am -11:00pm"
    const english_info_4 = "CLOSED ON MOST HOLIDAYS, PLEASE CALL US FOR AVAILABILITY."
   
    const french_info_1 = "Heures d'ouverture:"
    const french_info_2 = "Lundi - vendredi : 10h00 - 22h00"
    const french_info_3 = "Samedi - dimanche : 8h00 - 23h00"
    const french_info_4 = "FERMÉ LA PLUPART DES JOURS FÉRIÉS, VEUILLEZ NOUS APPELER POUR DISPONIBILITÉ."

    const english_button = "BOOK NOW!"
    const french_button = "RESERVE MAINTENANT!"

    const title = language === 'english' ? english_title : french_title;
    const body = language === 'english' ? english_body : french_body;
    const btn = language === 'english' ? english_button : french_button;
    
    const info_1 = language === 'english' ? english_info_1: french_info_1;
    const info_2 = language === 'english' ? english_info_2: french_info_2;
    const info_3 = language === 'english' ? english_info_3: french_info_3;
    const info_4 = language === 'english' ? english_info_4: french_info_4;

    return (  
        <div className="home">
            
            <Container fluid className='banner-container'>
                <Row>
                    <Col><img src={image} alt="Paintball" className="banner" /></Col>
                    <div className="overlay-text">
                        <h1 className='home-header'>{title} </h1>
                        <h2 className="home-text">{body}</h2>
                    </div>
                </Row>
                <Row className='info-row'>
                    <Col><Button as={Link} to= "book" variant="danger" size='lg'><h1>{btn}</h1></Button>{' '}</Col>
                </Row>
            </Container>


            <Container fluid className='home-container'>
                <Row>
                    <Col></Col>
                        <Col><img src={map} alt="map" className="map" /></Col> 
                        <Col className='infoCol'>
                        <h1 className='gen-head'>{info_1}</h1>
                        <p className='gen-desc'>{info_2}</p>
                        <p className='gen-desc'>{info_3}</p>
                        <p className='gen-desc'>{info_4}</p>
                        <h1 className='gen-head'>Parliament Paintball:</h1>
                        <p className='gen-desc'>1 Bank St E</p>
                        <p className='gen-desc'>Ottawa ON, K1N 6N5</p>
                        <p className='gen-desc'>(613) 092-1964</p>
                        <p className='gen-desc'>parliamentpaintball@gmail.com</p>
                        </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default Info;