import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Book = () => {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        eventType: '',
        date: '',
        groupSize: '',
        packageType: '',
        notes: '',
    });

    const [errors, setErrors] = useState({});
    const history = useHistory();

    useEffect(() => {
        const savedData = localStorage.getItem('bookingForm');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const newFormData = { ...formData, [name]: value };
        setFormData(newFormData);
        localStorage.setItem('bookingForm', JSON.stringify(newFormData));
        setErrors({ ...errors, [name]: '' }); // Clear the error message when user starts typing
    };

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePhone = (phone) => {
        const re = /^\d{10}$/; // Simple validation for a 10-digit phone number
        return re.test(String(phone));
    };

    const validateForm = () => {
        const { email, firstName, lastName, phone, eventType, date, groupSize, packageType } = formData;
        const newErrors = {};

        if (!firstName) newErrors.firstName = 'First Name is required';
        if (!lastName) newErrors.lastName = 'Last Name is required';
        if (!email) newErrors.email = 'Email is required';
        else if (!validateEmail(email)) newErrors.email = 'Invalid email format';
        if (!phone) newErrors.phone = 'Phone Number is required';
        else if (!validatePhone(phone)) newErrors.phone = 'Invalid phone number';
        if (!eventType) newErrors.eventType = 'Event Type is required';
        if (!date) newErrors.date = 'Date is required';
        if (!groupSize) newErrors.groupSize = 'Group Size is required';
        if (!packageType) newErrors.packageType = 'Package Type is required';

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setErrors({});
            history.push('/checkout');
        }
    };

    return (
        <div className="rules">
            <Container fluid className='rules-container'>
                <Row>
                    <Col></Col>
                    <Col>
                        <form className='form' onSubmit={handleSubmit}>
                            <h1 className='rule-text'>BOOKING</h1>

                            <div className="form-check">
                                <label className="label">Schedule a time</label>
                                <label className="label-event">Event</label>
                                <br/>
                                <input className='check-input-right' type="datetime-local" id="indDate" name="date" value={formData.date} onChange={handleInputChange} />
                                

                                <select className='select' name="eventType" value={formData.eventType} onChange={handleInputChange}>
                                    <option className='select' value="" disabled hidden>Event Type</option>
                                    <option className='select' value="birthday">Birthday Party</option>
                                    <option className='select' value="company">Company Party</option>
                                    <option className='select' value="group">Group Event</option>
                                    <option className='select' value="individual">Individual Event</option>
                                </select>
                                <br/>
                                <label className="error-date">{errors.date}</label>
                                <label className="error-event">{errors.eventType}</label>
                              
                                <br />
                                <br />

                                <label className="label-group">Group Size:</label>
                                <select className='select-group' name="groupSize" value={formData.groupSize} onChange={handleInputChange}>
                                    <option className='select' value="" disabled hidden>--</option>
                                    {[...Array(10).keys()].map(num => (
                                        <option key={num + 1} className='select' value={num + 1}>{num + 1}</option>
                                    ))}
                                </select>
                                <br/>
                                <label className="error-group">{errors.groupSize}</label>
                                <br/>
                                <h4 className='rule-text'>Select Your Package Type</h4>
                                <input type="radio" value="bronze" id="bronze" name="packageType" checked={formData.packageType === 'bronze'} onChange={handleInputChange} />
                                <label className='bronze-label' htmlFor="bronze">Bronze</label>
                                <input type="radio" value="silver" id="silver" name="packageType" checked={formData.packageType === 'silver'} onChange={handleInputChange} />
                                <label className='silver-label' htmlFor="silver">Silver</label>
                                <br/>
                                <input type="radio" value="gold" id="gold" name="packageType" checked={formData.packageType === 'gold'} onChange={handleInputChange} />
                                <label className='gold-label' htmlFor="gold">Gold</label>
                                <input type="radio" value="diamond" id="diamond" name="packageType" checked={formData.packageType === 'diamond'} onChange={handleInputChange} />
                                <label className='diamond-label' htmlFor="diamond">Diamond</label>
                                <br/>
                                <label className="error-first">{errors.packageType}</label>
                                <br/>
                                <h4 className='rule-text'>Enter Your Details</h4>
                                <input className='book-input' type="text" id="fbox" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} />
                                <input className='check-input-right' type="text" id="lbox" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} />
                                <br/>
                                <label className="error-first">{errors.firstName}</label>
                                <label className="error-last">{errors.lastName}</label>
                                
                                <br/>
                                <br/>

                                <input className='book-input' type="text" id="emailbox" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} />
                                
                                <input className='check-input-right' type="text" id="phone" name="phone" placeholder="Tel: 0123456789" value={formData.phone} onChange={handleInputChange} />
                                <br/>
                                <label className="error-first">{errors.email}</label>
                                <label className="error-phone">{errors.phone}</label>
                                <br/>
                                <label className="label">Additional Notes (optional)</label>
                                <textarea className="label" rows="3" cols="50" name="notes" value={formData.notes} onChange={handleInputChange} placeholder="Please add your notes here"></textarea>
                                <br/>
                                <label className="label"><i className="label">Note: A waiver must be read and signed on site before any players are allowed to participate.</i></label>
                                <br/>
                                <br/>

                                <div className='book-btn'>
                                    <Button type="submit" variant="danger" size='lg'><h1>CHECKOUT</h1></Button>
                                </div>
                                <br/>
                            </div>
                        </form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Book;
