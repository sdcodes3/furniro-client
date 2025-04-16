import { Col, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Navbar from '../../components/navbar/navbar';
import './cart.scss';
// import Remove from '../../assets/Icons/Bin.png'
// import sofa from '../../assets/Products_images/Sofa/fullSofaSmallSize.png'

import Remove from '../../assets/Icons/remove.png';
import sofa from '../../assets/Products_images/Sofa/Sofa_1.png';

import logo from '../../assets/logo.png';
import Promise from '../../components/our_promise/Promise';
import Footer from '../../components/footer/Footer';

function Cart() {
  return (
    <>
      <div className="cart-main">
        <Navbar />

        <div className="cart-banner">
          <img src={logo} width="50" height="32" alt="Logo" className="banner-logo" />

          <h1>Cart</h1>
          <h2>Home {'>'} Cart</h2>
        </div>

        <div className="bill-generate">
          <Row>
            <Col md={8}>
              <div className="cart-items">
                <div className="table-of-items">
                  <Table>
                    <thead className="headings">
                      <tr>
                        <th colSpan={2}>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody className="body">
                      <tr>
                        <td>
                          <div className="item-img">
                            <img src={sofa} alt="sofa" />
                          </div>
                        </td>
                        <td>Asgaard sofa</td>
                        <td>Rs. 250,000.00</td>
                        <td>
                          <input type="number" value="1" className="quantity-input" />
                        </td>
                        <td style={{ fontWeight: 'bold', color: 'black' }}>Rs. 250,000.00</td>
                        <td>
                          <img src={Remove} alt="bin" className="remove-icon" />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="item-img">
                            <img src={sofa} alt="sofa" />
                          </div>
                        </td>
                        <td>Asgaard sofa</td>
                        <td>Rs. 250,000.00</td>
                        <td>
                          <input type="number" value="1" className="quantity-input" />
                        </td>
                        <td style={{ fontWeight: 'bold', color: 'black' }}>Rs. 250,000.00</td>
                        <td>
                          <img src={Remove} alt="bin" className="remove-icon" />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="cart-totals">
                <h2>Cart Totals</h2>
                <div className="totals-details">
                  <div className="totals-row">
                    <span>Subtotal</span>
                    <span className="subtotal-amount">Rs. 250,000.00</span>
                  </div>
                  <div className="totals-row">
                    <span>Total</span>
                    <span className="total-amount">Rs. 250,000.00</span>
                  </div>
                  <button className="checkout-button">Check Out</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <Promise />

        <Footer />
      </div>
    </>
  );
}

export default Cart;
