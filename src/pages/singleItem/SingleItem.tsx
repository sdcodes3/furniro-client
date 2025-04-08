import { Card, Col, Row } from "react-bootstrap"
import Navbar from "../../components/navbar/navbar"
import './singleItem.scss'
import { useState } from "react"

import Sofa_img1 from '../../assets/Products_images/Sofa/Sofa_1.png'
import Sofa_img2 from '../../assets/Products_images/Sofa/Sofa_2.png'
import Sofa_img3 from '../../assets/Products_images/Sofa/Sofa_3.png'
import Sofa_img4 from '../../assets/Products_images/Sofa/Sofa_4.png'
import Sofa_full from '../../assets/Products_images/Sofa/Asgaard_sofa-full.png'

import Ratings from '../../assets/Products_images/Sofa/Ratings.png'

import product1 from '../../assets/Products_images/Syltherine.png'
import product2 from '../../assets/Products_images/Lolito.png'
import product3 from '../../assets/Products_images/Respira.png'
import product4 from '../../assets/Products_images/Potty.png'

import facebook from '../../assets/Icons/facebook.png'
import linkedin from '../../assets/Icons/linkedin.png'
import x from '../../assets/Icons/twitter.png'

import desc_sofa1 from '../../assets/Products_images/Sofa/Description_Sofa1.png'
import desc_sofa2 from '../../assets/Products_images/Sofa/Description_Sofa2.png'
import Footer from "../../components/footer/Footer"
import Shoppingcart from "../../components/shoppingCart/ShoppingCart"


function SingleItem() {

    const [activeTab, setActiveTab] = useState("description")

    let [count, setCount] = useState(0);

    function incrementCount() {
        setCount(count + 1);
    }

    function decrementCount() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const handleAddToCart = () => {
        return (
        // <Shoppingcart />
        <h1></h1>
    );
    }

    return (
        <>

            <div className="singleItem">

                <Navbar />

                <div className="path-container">
                    <span>Home</span>
                    <p>{'>'}</p>
                    <span>Shop</span>
                    <p>{'>'}</p>
                    <div className="vertcline"></div>
                    <p>Asgaard sofa</p>
                </div>

                <div className="products-item">
                    <Row className="small-imgSet">
                        <Col xxl={1} md={1} sm={1}>
                            <div className="img-small">
                                <img src={Sofa_img1} alt="" />
                            </div>
                            <div className="img-small">
                                <img src={Sofa_img2} alt="" />
                            </div>
                            <div className="img-small">
                                <img src={Sofa_img3} alt="" />
                            </div>
                            <div className="img-small">
                                <img src={Sofa_img4} alt="" />
                            </div>
                        </Col>

                        <Col xxl={5} md={5} sm={5}>
                            <div className="img-main">
                                <img src={Sofa_full} alt="" />
                            </div>
                        </Col>

                        <Col xxl={6} md={6} sm={6} className="item-FullDetails">
                            <Row className="name-price" style={{ marginBottom: '1rem' }}>
                                <h1>Asgaard sofa</h1>
                                <h3 style={{ color: '#9F9F9F' }}>Rs. 250,000.00</h3>

                            </Row>

                            <Row className="ratings" style={{ marginBottom: '1.5rem' }}>

                                <div className="rating-container">
                                    <img src={Ratings} alt="Ratings" style={{ height: '25%', width: '25%' }} />
                                    <div className="rating-separator">
                                        <img src="" alt="" />
                                    </div>
                                    <span className="rating-text" style={{ color: '#9F9F9F', fontWeight: 500 }}>5 Customer Review</span>
                                </div>
                            </Row>

                            <Row className="item-details" style={{ marginBottom: '1.5rem' }}>
                                <span>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</span>
                            </Row>

                            <Row className="sizes" style={{ marginBottom: '1.5rem' }}>
                                <h3>Size</h3>

                                <div className="sizeAvailable" style={{ gap: '1rem', display: 'flex', alignItems: 'center' }}>

                                    <button className="size-L" style={{ backgroundColor: '#F9F1E7', height: '3rem', width: '3rem', border: 'none', borderRadius: '25%' }}>
                                        <span style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', marginTop: '2px', fontWeight: 500 }}>
                                            {'L'}
                                        </span>
                                    </button>

                                    <button className="size-XL" style={{ backgroundColor: '#F9F1E7', height: '3rem', width: '3rem', border: 'none', borderRadius: '25%' }}>
                                        <span style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', marginTop: '2px', fontWeight: 500 }}>
                                            {'XL'}
                                        </span>
                                    </button>

                                    <button className="size-XS" style={{ backgroundColor: '#F9F1E7', height: '3rem', width: '3rem', border: 'none', borderRadius: '25%' }}>
                                        <span style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', marginTop: '2px', fontWeight: 500 }}>
                                            {'XS'}
                                        </span>
                                    </button>

                                </div>
                            </Row>

                            <Row className="colors" style={{ marginBottom: '1.5rem' }}>
                                <h3>Color</h3>

                                <div className="sizeAvailable" style={{ gap: '1rem', display: 'flex', alignItems: 'center' }}>

                                    <button className="page-1" style={{ backgroundColor: '#816DFA', height: '3rem', width: '3rem', border: 'none', borderRadius: '50%' }}></button>

                                    <button className="page-2" style={{ backgroundColor: '#000000', height: '3rem', width: '3rem', border: 'none', borderRadius: '50%' }}></button>

                                    <button className="page-3" style={{ backgroundColor: '#B88E2F', height: '3rem', width: '3rem', border: 'none', borderRadius: '50%' }}></button>

                                </div>
                            </Row>

                            <Row className="addToCartButtons" style={{ marginBottom: '1.5rem' }}>
                                <div className="counter">
                                    <button className="counter-button" onClick={decrementCount}>-</button>
                                    <div className="counter-display">{count}</div>
                                    <button className="counter-button" onClick={incrementCount}>+</button>
                                </div>

                                <div className="add-to-cart" onClick={handleAddToCart}>
                                    Add to Cart
                                </div>

                                <div className="compare" onClick={handleAddToCart}>
                                    + Compare
                                </div>
                            </Row>

                            <Row>
                                <div className="horizontal-line">
                                    <img src="" alt="" />
                                </div>
                            </Row>

                            <Row className="extraLinks" style={{ marginBottom: '1.5rem' }}>
                                <div className="link-container" style={{ display: "flex" }}>
                                    <div className="title">SKU</div>
                                    <div>:</div>
                                    <span>SS001</span>
                                </div>

                                <div className="link-container" style={{ display: "flex" }}>
                                    <div className="title">Category</div>
                                    <div>:</div>
                                    <span>Sofas</span>
                                </div>

                                <div className="link-container" style={{ display: "flex" }}>
                                    <div className="title">Tags</div>
                                    <div>:</div>
                                    <span>Sofa, Chair, Home, Shop</span>
                                </div>

                                <div className="link-container" style={{ display: "flex" }}>
                                    <div className="title">Share</div>
                                    <div>:</div>
                                    <div>
                                        <img src={facebook} alt="" />
                                        <img src={linkedin} alt="" />
                                        <img src={x} alt="" />
                                    </div>
                                </div>

                            </Row>

                        </Col>

                    </Row>
                </div>

                <div className="horizontal-line"></div>

                <div className="menu-title">
                    <h4 className={activeTab === 'description' ? 'selected' : ''} onClick={() => setActiveTab('description')}>
                        Description
                    </h4>

                    <h4 className={activeTab === 'additional' ? 'selected' : ''} onClick={() => setActiveTab('additional')}>
                        Additional Information
                    </h4>

                    <h4 className={activeTab === 'reviews' ? 'selected' : ''} onClick={() => setActiveTab('reviews')}>
                        Reviews {'[5]'}
                    </h4>
                </div>

                <div className="item-description">

                    <div className="dec-para">
                        <div className="line">
                            <h6 style={{ marginTop: '4rem' }}>Embodying the raw, wayward spirit of rock {'‘n’'} roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</h6>
                            <h6 style={{ marginTop: '2rem' }}>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</h6>
                        </div>
                    </div>

                    <div className="desc_sofa">
                        <Row>
                            <Col md={6}>
                                <div className="Sofa1">
                                    <img src={desc_sofa1} alt="" />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="Sofa2">
                                    <img src={desc_sofa2} alt="" />
                                </div>

                            </Col>
                        </Row>
                    </div>

                </div>

                <div className="horizontal-line"></div>

                <div className="related-products-txt">
                    <h1>Related Products</h1>
                </div>

                <div className='Products'>
                    <Row className="mx-3 justify-content-center align-items-center">
                        <Col md={3} className="my-3 d-flex justify-content-center">
                            <Card className='border-0'>
                                <Card.Img className='card-img' src={product1} />
                                <Card.Body>
                                    <Card.Title>Syltherine</Card.Title>
                                    <Card.Text>Stylish cafe chair</Card.Text>
                                    <Card.Title>Rp 2.500.000</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={3} className="my-3 d-flex justify-content-center">
                            <Card className='border-0'>
                                <Card.Img className='card-img' src={product2} />
                                <Card.Body>
                                    <Card.Title>Leviosa</Card.Title>
                                    <Card.Text>Stylish cafe chair</Card.Text>
                                    <Card.Title>Rp 2.500.000</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={3} className="my-3 d-flex justify-content-center">
                            <Card className='border-0'>
                                <Card.Img className='card-img' src={product3} />
                                <Card.Body>
                                    <Card.Title>Lolito</Card.Title>
                                    <Card.Text>Luxury big sofa</Card.Text>
                                    <Card.Title>Rp 7.000.000</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={3} className="my-3 d-flex justify-content-center">
                            <Card className='border-0'>
                                <Card.Img className='card-img' src={product4} />
                                <Card.Body>
                                    <Card.Title>Respira</Card.Title>
                                    <Card.Text>Outbar Table and stoll</Card.Text>
                                    <Card.Title>Rp 500.000</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <div className="button-container">
                        <button className="showmorebtn">Show More!</button>
                    </div>
                </div>

                <div className="horizontal-line"></div>

                <Footer />

            </div>
        </>
    )
}

export default SingleItem;