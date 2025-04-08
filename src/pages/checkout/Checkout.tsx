import './checkout.scss';
import Navbar from '../../components/navbar/navbar';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useState } from 'react';
import Promise from '../../components/our_promise/Promise';
import Footer from '../../components/footer/Footer';

const Checkout = () => {

    const [selectedOption, setSelectedOption] = useState('bankTransfer');

    // Descriptions for each payment method
    const descriptions = {
        bankTransfer:
            'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.',
        cashOnDelivery:
            'Pay with cash upon delivery. Please ensure you have the exact amount ready as the delivery agent may not have change.',
        creditCard:
            'Pay securely using your credit card through our online payment gateway.',
    };

    return (
        <div className="checkout_main">
            <Navbar />

            <div className="checkOut-banner">
                <h1>Checkout</h1>
                <h2>Home {'>'} Checkout</h2>
            </div>

            <div className='billingDetails'>
                <Row>
                    <Col md={6} className='formDetails'>


                        <Form style={{ fontSize: '18px' }} className='mt-5'>
                            <h3 style={{ fontSize: '38px', marginBottom: '50px' }}>Billing details</h3>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="" style={{ height: '50px', width: 'full' }} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="" style={{ height: '50px', width: 'full' }} />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridCompanyName">
                                <Form.Label>Company Name (Optional)</Form.Label>
                                <Form.Control type='text' placeholder="" style={{ height: '50px' }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridCountry_Region">
                                <Form.Label>Country / Region</Form.Label>
                                <Form.Select defaultValue="Sri Lanka" style={{ height: '50px' }}>
                                    <option>India</option>
                                    <option>USA</option>
                                    <option>UK</option>
                                    <option>Option 4</option>
                                    <option>Option 5</option>
                                </Form.Select>
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formGridStrtAdd">
                                <Form.Label>Street address</Form.Label>
                                <Form.Control type='text' placeholder="" style={{ height: '50px' }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridTwnCty">
                                <Form.Label>Town / City</Form.Label>
                                <Form.Control type='text' placeholder="" style={{ height: '50px' }} />
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formGridProvince">
                                <Form.Label>Province</Form.Label>
                                <Form.Select defaultValue="" style={{ height: '50px' }}>
                                    <option>Western Province</option>
                                    <option>Eastern Province</option>
                                    <option>Northern Province</option>
                                    <option>Southern Province</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridZip">
                                <Form.Label>ZIP code</Form.Label>
                                <Form.Control type='number' placeholder="" style={{ height: '50px' }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type='number' placeholder="" style={{ height: '50px' }} />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formGridEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type='email' placeholder="" style={{ height: '50px' }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAdditionalInfo">
                                <Form.Control className='mb-5' type='text' placeholder="Additional information" style={{ height: '50px' }} />
                            </Form.Group>


                        </Form>
                    </Col>

                    <Col md={6} className='productDetails mt-5'>
                        <div className="prodcontainer">
                            <div className='product-subttl mt-5'>
                                <div className="prdct">
                                    <h3 style={{ fontSize: '30px' }}>Product</h3>
                                    <p style={{ color: '#9F9F9F' }}>Asgaard sofa <span>x 1</span></p>
                                    <p>Subtotal</p>
                                    <p>Total</p>
                                </div>

                                <div className="subttl">
                                    <h3 style={{ fontSize: '30px' }}>Subtotal</h3>
                                    <p>Rs. 250,000.00</p>
                                    <p>Rs. 250,000.00</p>
                                    <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#B88E2F' }}>Rs. 250,000.00</p>
                                </div>
                            </div>

                        </div>

                        <div className="horizontalLine"></div>

                        <div className="payment-options">
                            <div className="radio-group">
                                <label>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="bankTransfer"
                                        checked={selectedOption === 'bankTransfer'}
                                        onChange={() => setSelectedOption('bankTransfer')}
                                    />
                                    Direct Bank Transfer
                                </label>

                                {/* Radio Button 2 */}
                                <label>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="cashOnDelivery"
                                        checked={selectedOption === 'cashOnDelivery'}
                                        onChange={() => setSelectedOption('cashOnDelivery')}
                                    />
                                    Cash On Delivery
                                </label>

                                {/* Radio Button 3 */}
                                <label>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="creditCard"
                                        checked={selectedOption === 'creditCard'}
                                        onChange={() => setSelectedOption('creditCard')}
                                    />
                                    Credit Card
                                </label>
                            </div>

                            {/* Display description based on selected option */}
                            {selectedOption && (
                                <div className="description">
                                    {descriptions[selectedOption as keyof typeof descriptions]}
                                </div>
                            )}

                            {/* Button for placing the order */}
                            <button className="place-order">Place order</button>
                        </div>


                    </Col>


                </Row>
            </div>

            <Promise />
            <Footer />


        </div>
    );
};

export default Checkout;