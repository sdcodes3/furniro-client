import { Col, Container, Dropdown, Row } from 'react-bootstrap'
import Navbar from '../../components/navbar/navbar'
import './comparison.scss'
import img1 from "../../assets/Products_images/Sofa/Sofa_2.png"
import Promise from '../../components/our_promise/Promise'
import Footer from '../../components/footer/Footer'

export default function Comparison() {
    return (
        <div className='comparison-main'>
            <Navbar />

            <div className="comparison-banner">
                <h1>Product Comparison</h1>
                <h2>Home {'>'} Comparison</h2>
            </div>


            <div className='selected-item-comparison'>

                <div className='text-viewMore'>
                    <div className='text'>
                        <h4>Go to Product page for more Products</h4>
                    </div>

                    <div className='vMore-link'>
                        <a href="#">View More</a>
                    </div>
                </div>

                <div className='item1'>
                    <div className='image'>
                        <img src={img1} alt="" />
                    </div>

                    <div className="product-details">
                        <div className="prod_name">
                            <p>Asgaard Sofa</p>
                        </div>
                        <div className="price">
                            <p>Rs. 250,000.00</p>
                        </div>
                        <div className="rating-review">
                            <p>4.7</p>
                            <img src="" alt="" />
                            <div className="vertical"></div>
                            <span>204 Review</span>
                        </div>
                    </div>

                </div>

                <div className='item2'>
                    <div className='image'>
                        <img src={img1} alt="" />
                    </div>

                    <div className='product-details'>

                    </div>
                </div>

                <div className='add-product'>
                    <h4>Add A Product</h4>

                    <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ border: 'none', backgroundColor: '#B88E2F', width: '13vmax', fontSize: '1vmax' }}>
                                Choose a Product
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{ width: '13vmax', fontSize: '1vmax' }}>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>

            </div>

            <div className="table-container">
                <div className="innerBlock1">
                    <table className='mt-5 General'>
                        <tr>
                            <th>General</th>
                        </tr>

                        <tr>
                            <td>Sales Package</td>
                            <td>Model Number</td>
                            <td>Secondary Material</td>
                            <td>Configuration</td>
                            <td>Upholstery Material</td>
                            <td>Upholstery Color</td>
                        </tr>
                    </table>

                    <table className='mt-5 Product'>
                        <tr>
                            <th>Product</th>
                        </tr>

                        <tr>
                            <td>Filling Material</td>
                            <td>Finish Type</td>
                            <td>Adjustable Headrest</td>
                            <td>Maximum Load Capacity</td>
                            <td>Origin of Manufacture</td>
                        </tr>
                    </table>

                    <table className='mt-5 Dimensions'>
                        <tr>
                            <th>Dimensions</th>
                        </tr>

                        <tr>
                            <td>Width</td>
                            <td>Height</td>
                            <td>Depth</td>
                            <td>Weight</td>
                            <td>Seat Height</td>
                            <td>Leg Height</td>
                        </tr>
                    </table>

                    <table className='mt-5 Warranty'>
                        <tr>
                            <th>Warranty</th>
                        </tr>

                        <tr>
                            <td>Warranty Summary</td>
                            <td>Warranty Service Type</td>
                            <td>Covered in Warranty</td>
                            <td>Not Covered in Warranty</td>
                            <td>Domestic Warranty</td>
                        </tr>
                    </table>


                </div>

                <div className="innerBlock2">
                    <table className='mt-5 General'>
                        <tr>
                            <th>&nbsp;</th>
                            
                        </tr>
                        <tr>
                            <td>1 sectional sofa</td>
                            <td>TFCBLIGRBL6SRHS</td>
                            <td>Solid Wood</td>
                            <td>L-shaped</td>
                            <td>Fabric + Cotton</td>
                            <td>Bright Grey & Lion</td>
                        </tr>
                    </table>

                    <table className='mt-5 Product'>
                        <tr>
                            <th>&nbsp;</th>
                        </tr>

                        <tr>
                            <td>Foam</td>
                            <td>Bright Grey & Lion</td>
                            <td>No</td>
                            <td>280 KG</td>
                            <td>India</td>
                        </tr>
                    </table>

                    <table className='mt-5 Dimensions'>
                        <tr>
                            <th>&nbsp;</th>
                        </tr>

                        <tr>
                            <td>265.32 cm</td>
                            <td>76 cm</td>
                            <td>167.76 cm</td>
                            <td>45 KG</td>
                            <td>41.52 cm</td>
                            <td>5.46 cm</td>
                        </tr>
                    </table>

                    <table className='mt-5 Warranty'>
                        <tr>
                            <th>&nbsp;</th>
                        </tr>

                        <tr>
                            <td>1 Year Manufacturing Warranty</td>
                            <td>For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</td>
                            <td>Warranty Against Manufacturing Defect</td>
                            <td>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</td>
                            <td>1 Year</td>
                            <td>
                                <button className='btn-ATC'>Add to Cart</button>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="innerBlock3">
                    <table className='mt-5 General'>
                        <tr>
                            <th>&nbsp;</th>
                        </tr>
                        <tr>
                            <td>1 Three Seater, 2 Single Seater</td>
                            <td>DTUBLIGRBL568</td>
                            <td>Solid Wood</td>
                            <td>L-shaped</td>
                            <td>Fabric + Cotton</td>
                            <td>Bright Grey & Lion</td>
                        </tr>
                    </table>

                    <table className='mt-5 Product'>
                        <tr>
                            <th>&nbsp;</th>
                        </tr>

                        <tr>
                            <td>Matte</td>
                            <td>Bright Grey & Lion</td>
                            <td>Yes</td>
                            <td>300 KG</td>
                            <td>India</td>
                        </tr>
                    </table>

                    <table className='mt-5 Dimensions'>
                        <tr>
                            <th>&nbsp;</th>
                        </tr>

                        <tr>
                            <td>265.32 cm</td>
                            <td>76 cm</td>
                            <td>167.76 cm</td>
                            <td>65 KG</td>
                            <td>41.52 cm</td>
                            <td>5.46 cm</td>
                        </tr>
                    </table>

                    <table className='mt-5 Warranty'>
                        <tr>
                            <th>&nbsp;</th>
                        </tr>

                        <tr>
                            <td>1.2 Year Manufacturing Warranty</td>
                            <td>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</td>
                            <td>Warranty of the product is limited to manufacturing defects only.</td>
                            <td>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</td>
                            <td>3 Months</td>
                            <td>
                                <button className='btn-ATC'>Add to Cart</button>
                            </td>
                        </tr>
                    </table>
                </div>

                {/* <div className="innerBlock4"></div> */}

            </div>

            <Promise />

            <Footer />
        </div>
    )
}