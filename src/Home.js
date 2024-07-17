import image from './images/home.jpg'
import image1 from './images/home1.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link  } from 'react-router-dom';

const Home = () => {

    const title = "OTTAWA'S PREMIER PAINTBALL ARENA "
    const body = "Serving Ottawa for over 15 years, Parliament Paintball has been Ottawa's premier paintball arena. Located in the heart of the capital, Parliament Paintball welcomes players of all ages and skill levels, all year round!"
    const btn = ""

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
                    <Col><p className='description'>Parliament Paintball serves a variety of events for individuals and groups. 
                        We provide you with top of the line paintballing equipment and have different packages depending on your needs. If you're ready for the arena, enlist now!</p>
                        <Button as={Link} to= "book" variant="danger" size='lg'><h1>BOOK NOW!</h1></Button>{' '}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default Home;