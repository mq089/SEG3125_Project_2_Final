
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link  } from 'react-router-dom';

const Book = () => {

    return (  
        <div className="rules">
            
            <Container fluid className='rules-container'> 
                <Row>   
                    <Col></Col>
                    <Col>
                        <form className='form'>
                            <h1 className='rule-text'>BOOKING</h1>

                            <div class="form-check">
                                
                                <label className="label">Schedule a time</label>
                                <label className="label-event">Event</label>
                                <br/>
                                <input className='check-input-right' type="datetime-local" id="indDate" name="indDate"/>
                                
                                <select className='select'>
                                    <option className='select' value="default" selected disabled hidden>Event Type</option>
                                    <option className='select' value="birthday">Birthday Party</option>
                                    <option className='select' value="company">Company Party</option>
                                    <option className='select' value="group">Group Event</option>
                                    <option className='select' value="individual">Individual Event</option>
                                </select>
                                 
                                <br/>
                                <br/>
                                
                                <label className="label-group">Group Size:</label>
                                <select className='select-group'>
                                    <option className='select' value="default" selected disabled hidden>--</option>
                                    <option className='select' value="1">1</option>
                                    <option className='select' value="2">2</option>
                                    <option className='select' value="3">3</option>
                                    <option className='select' value="4">4</option>
                                    <option className='select' value="5">5</option>
                                    <option className='select' value="6">6</option>
                                    <option className='select' value="7">7</option>
                                    <option className='select' value="8">8</option>
                                    <option className='select' value="9">9</option>
                                    <option className='select' value="10">10</option>
                                </select>
                                <br/>
                                <br/>
                                <h4 className='rule-text'>Select Your Package Type</h4>
                                <input type="radio" value="bronze" id="bronze"/>
                                <label className='bronze-label' for="bronze">Bronze</label>
                                <input type="radio" value="silver" id="silver"/>
                                <label className='silver-label' for="silver">Silver</label>
                                <br/>
                                <input type="radio" value="gold" id="gold"/>
                                <label className='gold-label' for="gold">Gold</label>
                                <input type="radio" value="diamond" id="diamond"/>
                                <label className='diamond-label' for="diamond">Diamond</label>


                                <br/>
                                <br/>
                                <h4 className='rule-text'>Enter Your Details</h4>
                                <input className='book-input' type="text"  id="fbox" name="fname" placeholder="First Name"/>
                                <input className='check-input-right' type="text"  id="lbox" name="lname" placeholder="Last Name"/>
                                <br/>
                                <br/>
                                
                                <input className='book-input' type="text" id="emailbox" name="email" placeholder="Email Address"/>
                                <input  className='check-input-right' type="text" id="phone" name="phone" placeholder="Phone Number"/>
                                <br></br>
                                <br></br>

                                <label className="label">Additional Notes (optional)</label>
                                <textarea className="label" rows="3" cols="50">Please add your notes here</textarea>
                                <br/>
                                <label className="label"><i className="label">Note: A waiver must be red and signed on site before any players are allowed to participate.</i></label>
                                <br/>
                                <br/>
                                
                                <div className='book-btn'><Button as={Link} to= "checkout" variant="danger" size='lg' ><h1>CHECKOUT</h1></Button>{' '}   </div>
                                               <br/>
                                
                            </div>



                        </form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            
        </div>
    );
}
 
export default Book;