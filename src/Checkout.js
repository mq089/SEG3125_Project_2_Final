
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link , useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Checkout = () => {
    const history = useHistory();

    function generateBooking() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        
        var result = '';
        
        for (let k = 0; k < 3; k++) {
            const randomLetter = letters.charAt(Math.floor(Math.random() * letters.length));
            const randomNumber = numbers.charAt(Math.floor(Math.random() * numbers.length));
            
            result += randomLetter + randomNumber;
        }
        return result;
    }

    const [show, setShow] = useState(false);
    const [bookingNumber, setBookingNumber] = useState('');
    const handleClose = () => {
        setShow(false);
        history.push('/'); // Redirect to the homepage
    };
    const handleShow = () => {
        const booking = generateBooking();
        setBookingNumber(booking);
        localStorage.removeItem('bookingForm');
        setShow(true);
    };

    return (  
        
        <div className="rules">
            
            <Container fluid className='rules-container'> 
                <Row>   
                    <Col></Col>
                    <Col>
                        <form className='form'>
                            
                           <Link to="book" ><h1 className='rule-text'><FontAwesomeIcon icon={faArrowLeft} />&nbsp;CHECKOUT</h1></Link>

                            <div class="form-check">
  
                                <h5 className='rule-text'>Billing Address:</h5>
                                <textarea className="address" rows="1" cols="50">Street Address Line 1</textarea>
                                <br/>
                                <br/>
                                <input className='check-input-left' type="text"  id="city" name="city" placeholder="City"/>
                                <input className='check-input-right'type="text"  id="province" name="province" placeholder="Province"/>
                                <br/>
                                <br/>
                                <input className='check-input-left' type="text" id="postal" name="postal" placeholder="Postal Code"/>
                                <input className='check-input-right' type="text" id="country" name="country" placeholder="Country"/>
                                <br/>
                                <br/>
                                <h5 className='rule-text'>Payment Info</h5>
                                <textarea className="address" rows="1" cols="50">Credit Card Number</textarea>
                                <br/>
                                <br/>
                                <input className='check-input-left' type="text"  id="exp" name="exp" placeholder="EXP"/>
                                <input className='check-input-right'type="text"  id="cvv" name="cvv" placeholder="CVV"/>
                                <br/>
                                <br/>
                                <label className="label"><i className="label">Note: You must be 18 or older to make a booking.</i></label>
                                <br/>
                                <br/>
                                
                                <div className='book-btn'><Button onClick={handleShow} variant="danger" size='lg' ><h1>PAY</h1></Button> </div>
                                <br/>
                                               
                            </div>

                        </form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

            <Modal show={show} onHide={handleClose} fade={false} style={{opacity:1}} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Payment Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your order number is: {bookingNumber}.</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>

   
        </div>
    );
}
 
export default Checkout;