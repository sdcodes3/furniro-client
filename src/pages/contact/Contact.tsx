import { Col, Form, Row } from 'react-bootstrap'
import Navbar from '../../components/navbar/navbar'
import './contact.scss'
import location from '../../assets/Icons/location.png'
import phone from '../../assets/Icons/phone.png'
import time from '../../assets/Icons/time.png'
import Promise from '../../components/our_promise/Promise'
import Footer from '../../components/footer/Footer'


const Contact = () => {
    return (
        <div className='contactMain'>

            <Navbar />

            <div className="contact-banner">
                <h1>Contact</h1>
                <h2>Home {'>'} Contact</h2>
            </div>

            <div className="getintouch">
                <h2>Get In Touch With Us</h2>
                <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>

            <div className='contactDetails'>
                <Row>
                    <Col md={6} className='basic-info'>
                        <div className='address'>
                            <div className="icon">
                                <img src={location} alt="" />
                            </div>
                            <div className="info">
                                <h3>Address</h3>
                                <p>236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                        </div>

                        <div className='phone'>
                            <div className="icon">
                                <img src={phone} alt="" />
                            </div>
                            <div className="info">
                                <h3>Phone</h3>
                                <p>Mobile: +(84) 546-6789
                                    Hotline: +(84) 456-6789</p>
                            </div>
                        </div>

                        <div className='time'>
                            <div className="icon">
                                <img src={time} alt="" />
                            </div>
                            <div className="info">
                                <h3>Working Time</h3>
                                <p>
                                Monday-Friday: 9:00 - 22:00
                                Saturday-Sunday: 9:00 - 21:00
                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col md={6} className='formDetails'>

                        <Form style={{ fontSize: '18px' }} >

                            <Form.Group className="mb-3" controlId="formGridFirstName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="abc" style={{ height: '50px', width: '35vmax' }} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type='email' placeholder="abc@def.com" style={{ height: '50px' }} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridEmail">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type='email' placeholder="This is Optional" style={{ height: '50px' }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAdditionalInfo">
                                <Form.Label>Message</Form.Label>
                                <Form.Control className='mb-5' placeholder="Hi! i’d like to ask about" style={{ height: '100px', }} />
                            </Form.Group>

                            <button className="btnfilled">Submit</button>

                        </Form>

                    </Col>



                </Row>
            </div>

            <Promise/>
            <Footer/>

        </div>
    )
}

export default Contact
