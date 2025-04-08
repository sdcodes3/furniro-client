import trophy from '../../assets/Icons/Trophy.png'
import tick from '../../assets/Icons/Tick.png'
import support from '../../assets/Icons/Support.png'
import call from '../../assets/Icons/Call.png'
import './promise.scss'


function Promise() {
    return(
        <div className="promise">
        <div className="quality">
            <img src={trophy} alt="" style={{ width: '3rem', height: '3rem' }} />

            <div>
                <h3>High Quality</h3>
                <span>Crafted from top materials</span>
            </div>
        </div>

        <div className="quality">
            <img src={tick} alt="" style={{ width: '3rem', height: '3rem' }} />

            <div>
                <h3>Warranty Protection</h3>
                <span>Over 2 years</span>
            </div>
        </div>

        <div className="quality">
            <img src={support} alt="" style={{ width: '3rem', height: '3rem' }} />
            <div>

                <h3>Free Shipping</h3>
                <span>Order over 150 $</span>
            </div>
        </div>

        <div className="quality">
            <img src={call} alt="" style={{ width: '3rem', height: '3rem' }} />
            <div>

                <h3>24 / 7 Support</h3>
                <span>Dedicated support</span>
            </div>
        </div>
    </div>
    )
    
}

export default Promise;