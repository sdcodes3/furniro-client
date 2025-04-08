import './shoppingCart.scss'
import addToCart from '../../assets/Icons/Add-to-cart.png'
import cross from '../../assets/Icons/remove-to-cart.png'
import img1 from '../../assets/Products_images/Sofa/Asgaard_sofa-full.png'
import sofa from '../../assets/Products_images/Sofa/Sofa_5.png'


function ShoppingCart() {
    return (
        <>
            <div className="shopping-cart">
                <div className="heading-icon">
                    <h4>Shopping Cart</h4>
                    <img src={addToCart} alt="" style={{ width: '10%', height: '10%' }} />
                </div>

                <div className="horizontal-line"></div>

                <div className="cart-items-container">

                    <div className="card-item">

                        <div className='imgs'>
                            <img src={img1} alt="" style={{ width: '100%', height: '100%' }} />
                        </div>

                        <div className="cart-item-info">
                            <h4>Asgaard sofa</h4>

                            <div className='qunatity-price'>
                                <span className="number-item">{1}</span>
                                <span>x</span>
                                <span className="price-item">{'Rs. 250,000.00'}</span>
                            </div>


                        </div>

                        <div className="icon-cross">
                            <img src={cross} alt="" />
                        </div>

                    </div>

                    <div className="card-item">

                        <div className='imgs'>
                            <img src={img1} alt="" style={{ width: '100%', height: '100%' }} />
                        </div>

                        <div className="cart-item-info">
                            <h4>Asgaard sofa</h4>

                            <div className='qunatity-price'>
                                <span className="number-item">{1}</span>
                                <span>x</span>
                                <span className="price-item">{'Rs. 250,000.00'}</span>
                            </div>


                        </div>

                        <div className="icon-cross">
                            <img src={cross} alt="" />
                        </div>

                    </div>


                </div>

                <div className="subtotal">
                    <div className="txt">Subtotal</div>
                    <div className="total">{'Rs. 520,000.00'}</div>
                </div>

                <div className="horizontal-line"></div>

                <div className="buttons">

                    <div className="cart">
                        <div>Cart</div>
                    </div>
                    
                    <div className="checkout">
                        Check Out
                    </div>
                    
                    <div className="comparison">
                        Comparison
                    </div>
                
                </div>

                
            </div>
        </>
    );
}

export default ShoppingCart;