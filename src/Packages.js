
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link  } from 'react-router-dom';

const Packages = () => {

    return (  
        <div className="home">
            
            <Container fluid className='top-container'>
                <Row className='info-row'>
                    <Col> 
                        <h1 className='info-head'>Packages </h1>
                    </Col>
                </Row>

                <Row className='info-row'>
                <Col></Col>
                <Col className='info-col'> 
                    <h2 className='package-head'>Equipment Includes:</h2>  
                    <p className='equipment'>Protective Face Mask</p>
                    <p className='equipment'>Paintball Gun</p>
                    <p className='equipment'>Coverall</p>
                </Col>
                <Col></Col>
                </Row>
                <Row className='info-row'>
                    <Col><Button as={Link} to= "book" variant="danger" size='lg'><h1>BOOK NOW!</h1></Button>{' '}</Col>
                </Row>

            </Container>
            
            <Container fluid className='home-container'>
                <Row>
                    <Col className='packCol'>
                        <h2 className='bronze-head'>BRONZE PACKAGE</h2>
                        <p className='pack-desc'>Equipment</p>
                        <p className='pack-desc'>Admission</p>
                        <p className='pack-desc'>100 Paintballs</p>
                        <p className='pack-desc'>One hour of arena time</p>
                        <p className='pack-desc'>$40/person</p>
                    </Col>

                    <Col className='packCol'>
                        <h2 className='silver-head'>SILVER PACKAGE</h2>
                        <p className='pack-desc'>Equipment</p>
                        <p className='pack-desc'>Admission</p>
                        <p className='pack-desc'>250 Paintballs</p>
                        <p className='pack-desc'>One hour of arena time</p>
                        <p className='pack-desc'>$70/person</p>
                    </Col>
                    
                    <Col className='packCol'>
                        <h2 className='gold-head'>GOLD PACKAGE</h2>
                        <p className='pack-desc'>Equipment</p>
                        <p className='pack-desc'>Admission</p>
                        <p className='pack-desc'>500 Paintballs</p>
                        <p className='pack-desc'>Two hours of arena time</p>
                        <p className='pack-desc'>$120/person</p>
                    </Col>
                  
                    <Col className='packCol'>
                        <h2 className='diamond-head'>DIAMOND PACKAGE</h2>
                        <p className='pack-desc'>Equipment</p>
                        <p className='pack-desc'>Admission</p>
                        <p className='pack-desc'>750 Paintballs</p>
                        <p className='pack-desc'>Two hours of arena time</p>
                        <p className='pack-desc'>$170/person</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default Packages;