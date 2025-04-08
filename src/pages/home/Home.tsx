import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// page imports
import '../home/home.scss';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import { useSignoutMutation } from '../../slices/user.api.slice';
import { signout } from '../../slices/auth.slice';

// bootstrap imports
import { Card, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

// image imports
import Dining from '../../assets/Browse_Dining.png';
import Living from '../../assets/Browse_Living.png';
import Bedroom from '../../assets/Browse_Bedroom.png';

import product1 from '../../assets/Products_images/Syltherine.png';
import product2 from '../../assets/Products_images/Lolito.png';
import product3 from '../../assets/Products_images/Respira.png';
import product4 from '../../assets/Products_images/Potty.png';
import product5 from '../../assets/Products_images/Pingky.png';
import product6 from '../../assets/Products_images/Muggo.png';

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  const [signoutApiCall, { isLoading, error }] = useSignoutMutation();

  useEffect(() => {
    if (!userInfo) {
      navigate('/signin');
    }
  }, [userInfo]);

  const onClickSignOut = async (event) => {
    event.preventDefault();

    try {
      await signoutApiCall().unwrap();
      dispatch(signout());
      navigate('/signin');
    } catch (err) {
      console.log('signout failed: ', err);
      alert(err?.data?.message || 'signout failed');
    }
  };

  return (
    <>
      <div className="img-navbar overflow-hidden">
        <Navbar />

        <div className="home-main">
          <div className="new-arrival">
            <span>New Arrival</span>
            <h1>Discover Our New Collection</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis.
            </p>
            <button className="btn">BUY NOW</button>
          </div>
        </div>
      </div>

      <div className="Browse txt">
        <h1>Browse The Range</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
      </div>

      <div className="Showcase">
        <Row className="mx-3 justify-content-center align-items-center">
          <Col md={4} className="d-flex justify-content-center">
            <Card className="border-0">
              <Card.Img className="card-img" src={Dining} />
              <Card.Body>
                <Card.Title className="text-center">Dining</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="d-flex justify-content-center">
            <Card className="border-0">
              <Card.Img className="card-img" src={Living} />
              <Card.Body>
                <Card.Title className="text-center">Living</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="d-flex justify-content-center">
            <Card className="border-0">
              <Card.Img className="card-img" src={Bedroom} />
              <Card.Body>
                <Card.Title className="text-center">Bedroom</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="Product txt">
        <h1>Our Products</h1>
      </div>

      <div className="Products">
        <Row className=" mx-3 justify-content-center align-items-center">
          <Col md={3} className="my-3 d-flex justify-content-center">
            <Card className="border-0">
              <Card.Img className="card-img" src={product1} />
              <Card.Body>
                <Card.Title>Syltherine</Card.Title>
                <Card.Text>Stylish cafe chair</Card.Text>
                <Card.Title>Rp 2.500.000</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="my-3 d-flex justify-content-center">
            <Card className="border-0">
              <Card.Img className="card-img" src={product2} />
              <Card.Body>
                <Card.Title>Leviosa</Card.Title>
                <Card.Text>Stylish cafe chair</Card.Text>
                <Card.Title>Rp 2.500.000</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="my-3 d-flex justify-content-center">
            <Card className="border-0">
              <Card.Img className="card-img" src={product3} />
              <Card.Body>
                <Card.Title>Lolito</Card.Title>
                <Card.Text>Luxury big sofa</Card.Text>
                <Card.Title>Rp 7.000.000</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="my-3 d-flex justify-content-center">
            <Card className="border-0">
              <Card.Img className="card-img" src={product4} />
              <Card.Body>
                <Card.Title>Respira</Card.Title>
                <Card.Text>Outbar Table and stoll</Card.Text>
                <Card.Title>Rp 500.000</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mx-3 justify-content-center align-items-center">
          <Col md={3} className="my-3 d-flex justify-content-center">
            <Card className="border-0">
              <Card.Img className="card-img" src={product5} />
              <Card.Body>
                <Card.Title>Syltherine</Card.Title>
                <Card.Text>Stylish cafe chair</Card.Text>
                <Card.Title>Rp 2.500.000</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="my-3 d-flex justify-content-center">
            <Card className="border-0">
              <Card.Img className="card-img" src={product6} />
              <Card.Body>
                <Card.Title>Leviosa</Card.Title>
                <Card.Text>Stylish cafe chair</Card.Text>
                <Card.Title>Rp 2.500.000</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="my-3 d-flex justify-content-center">
            <Card className="border-0">
              <Card.Img className="card-img" src={product1} />
              <Card.Body>
                <Card.Title>Lolito</Card.Title>
                <Card.Text>Luxury big sofa</Card.Text>
                <Card.Title>Rp 7.000.000</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="my-3 d-flex justify-content-center">
            <Card className="border-0">
              <Card.Img className="card-img" src={product2} />
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

      <div className="carousal-container">
        <Row>
          <Col md={5} className="my-3 d-flex justify-content-center">
            <div className="left-text">
              <h2 style={{ marginRight: 10 }}>50+ Beautiful rooms inspiration</h2>
              <span style={{ marginRight: 10 }}>
                Our designer already made a lot of beautiful prototipe of rooms that inspire you
              </span>

              <button className="btnfilled">Explore More</button>
            </div>
          </Col>

          <Col md={7} className="my-3 d-flex justify-content-center">
            <div className="slider-wrapper left">
              <div className="item item1"></div>
              <div className="item item2"></div>
              <div className="item item3"></div>
              <div className="item item4"></div>
              <div className="item item5"></div>
              <div className="item item6"></div>
              <div className="item item7"></div>
              <div className="item item8"></div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="tag">
        <h3>Share your setup with</h3>
        <h1>#FuniroFurniture</h1>
      </div>

      <div className="imageGallery"></div>

      <div className=" my-5 button-container">
        <button onClick={onClickSignOut} className="showmorebtn">
          SIGN OUT!
        </button>
      </div>

      <Footer />
    </>
  );
}

export default Home;
