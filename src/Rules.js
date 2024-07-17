
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const Rules = () => {

    return (  
        <div className="rules">
            
            <Container fluid className='rules-container'> 
                <Row>
                    <Col> 
                    </Col>
                    <Col className='rules-col'>
                        <h1 className='rule-text'>RULES AND SAFETY</h1>
                        <p className='rule-text'>Please read and understand these rules so all players can have fun. If you break our rules, we will kindly ask you to leave the arena.</p>
                        <p className='rule-text'>1. Always wear protective gear on the arena.</p>
                        <p className='rule-text'>2. No player may shoot outside of the playing arena.</p>
                        <p className='rule-text'>3. No player may shoot at any employees on the arena.</p>
                        <p className='rule-text'>4. Players must use Parliament Paintball's equipment and paintballs only.</p>
                        <p className='rule-text'>5. If something is wrong with your paintball gun, do not attempt to fix it. Staff will assist you.</p>
                        <p className='rule-text'>6. Do not look down the barrel of your paintball gun.</p>
                        <p className='rule-text'>7. No physical combat between players is permitted.</p>
                        <p className='rule-text'>8. No use of substances before or during play.</p>
                        <p className='rule-text'>9. Barrel covers must be used when not on the arena.</p>
                        <p className='rule-text'>10. No firearms or related items are permitted.</p>
                        <p className='rule-text'>11. Please remain aware that bruising is a common occurance during playing.</p>
                        <p><i className='rule-text'>A waiver must be red and signed on site before any players are allowed to participate.</i></p>
                    </Col>
                    <Col> </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default Rules;