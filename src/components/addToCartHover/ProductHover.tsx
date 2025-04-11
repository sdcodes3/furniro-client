import './productHover.scss';
import share from '../../assets/Icons/share.png';
import compare from '../../assets/Icons/compare.png';
import like from '../../assets/Icons/like.png';

const ProductHover = () => {
  return (
    <div className="card">
      <div className="hoverContainer">
        <div className="hoverItems">
          <div className="atc_btn">
            <span>Add to cart</span>
          </div>

          <div className="likeShareCompare">
            <a className="share" href="">
              <img src={share} alt="" />
              <span>Share</span>
            </a>

            <a className="compare" href="">
              <img src={compare} alt="" />
              <span>Compare</span>
            </a>

            <a className="like" href="">
              <img src={like} alt="" />
              <span>Like</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHover;
