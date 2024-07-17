import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/NavDropdown';
import logo from './images/logo.png'
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Navigation = () => {
    return (  
        <Navbar expand="lg" className="navbar">
        <Container fluid className="nav-con">
            
                <Navbar.Collapse className="basic-navbar-nav">
                    <Nav className="mx-auto d-flex align-items-center">
                        
                        <Row>   
                        
                        <Col>
                       
                        </Col>
                        <Col>
                            <div><Link to="/" id="info">HOME</Link></div>
                        </Col>
                        
                        <Col>
                        <img src={logo} alt="Parliament Paintball" className="logo"/>
                        </Col>

                        <Col>
                        <div>
                        <Dropdown title="INFO" id="info">
                        <Dropdown.Item as={Link} to= "info" id="item">GENERAL INFORMATION</Dropdown.Item>
                        <Dropdown.Item as={Link} to= "rules" id="item">RULES</Dropdown.Item>
                        <Dropdown title="PLAN" id="item">
                            <Dropdown.Item as={Link} to= "events" id="item">EVENTS</Dropdown.Item>
                            <Dropdown.Item as={Link} to= "packages" id="item">PACKAGES</Dropdown.Item>
                        </Dropdown>
                    
                        </Dropdown>
                        </div>
                        </Col>

                        <Col>
                        <div>   
                        <Dropdown title="ACCOUNT" id="info">
                            <Dropdown.Item as={Link} to= "settings" id="item">SETTINGS</Dropdown.Item>
                            <Dropdown.Item as={Link} to= "dashboard" id="item">DASHBOARD</Dropdown.Item>
                        </Dropdown>
                        </div>
                        </Col>
                        </Row>
                    </Nav>
                </Navbar.Collapse>
           
          
        </Container>
      </Navbar>
    );
}
 

export default Navigation;