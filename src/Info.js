
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import map from './images/map.png'
import Button from 'react-bootstrap/Button';
import { Link  } from 'react-router-dom';

const Info = () => {

    return (  
        <div className="home">
            
            <Container fluid className='top-container'>
                <Row className='info-row'>
                    <Col> 
                        <h1 className='info-head'>General Information</h1>
                    </Col>
                </Row>

                <Row className='info-row'>
                <Col></Col>
                <Col className='info-col'> 
                    <h2 className='info-msg'>We're open all year round. Join us whenever you're ready.</h2>   
                </Col>
                <Col></Col>
                </Row>
                <Row className='info-row'>
                    <Col><Button as={Link} to= "book" variant="danger" size='lg'><h1>BOOK NOW!</h1></Button>{' '}</Col>
                </Row>

            </Container>
            
            <Container fluid className='home-container'>
                <Row>
                    <Col></Col>
                        <Col><img src={map} alt="map" className="map" /></Col> 
                        <Col className='infoCol'>
                        <h1 className='gen-head'>Operating hours:</h1>
                        <p className='gen-desc'>Monday - Friday: 10:00am -10:00pm</p>
                        <p className='gen-desc'>Saturday - Sunday: 8:00am -11:00pm</p>
                        <p className='gen-desc'>CLOSED ON MOST HOLIDAYS, PLEASE CALL US FOR AVAILABILITY</p>
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