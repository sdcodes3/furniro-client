
import './card.scss'; // Import your CSS file

function ProductCard() {
    return (
        <div className="product-card">
            <img src="https://via.placeholder.com/285x145" alt="Product Image" />
            <div className="product-details">
                <div className="left">
                    <button>Add to cart</button>
                </div>
                <div className="right icons">
                    <a href="#">&#x1F4E3;</a> {/* Share Icon */}
                    <a href="#">&#x1F50D;</a> {/* Compare Icon */}
                    <a href="#">&#x2661;</a> {/* Like Icon */}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
