
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

const Events = () => {

    return (  
        <div className="home">
            
            <Container fluid className='top-container'>
                <Row className='info-row'>
                    <Col> 
                        <h1 className='info-head'>Events</h1>
                    </Col>
                </Row>

                <Row className='info-row'>
                <Col></Col>
                <Col className='info-col'> 
                    <h2 className='info-msg'>We serve a variety of events depending on your needs!</h2>   
                </Col>
                <Col></Col>
                </Row>
                <Row className='info-row'>
                    <Col>
                        <Button as={Link} to= "book" variant="danger" size='lg'><h1>BOOK NOW!</h1></Button>{' '}
                    </Col>
                </Row>

            </Container>
            
            <Container fluid className='home-container'>
                <Row>
                    <Col>
                        <img src={birthday} alt="Birthdays" className="birthday" />
                        <h1 className='event-head'>Birthday Parties</h1>
                    </Col>
                        
                    <Col>
                        <img src={company} alt="company" className="company"/>
                        <h1 className='event-head'>Company Parties</h1>
                    </Col> 
                    <Col>
                        <img src={group} alt="group" className="group"/>
                        <h1 className='event-head'>Group Events</h1>
                    </Col>

                    <Col>
                        <img src={individual} alt="individual" className="individual"/>
                        <h1 className='event-head'>Individual Events</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default Events;