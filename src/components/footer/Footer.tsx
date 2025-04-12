import './footer.scss';

function Footer() {
  return (
    <footer className="bg-light text-muted pt-5">
      <div className="container">
        <div className="row text-start gy-4">
          {/* Brand */}
          <div className="col-12 col-md-3">
            <h5 className="fw-bold mb-3">Furino.</h5>
            <p className="mb-0" style={{ color: '#9F9F9F' }}>
              400 University Drive Suite 200 Coral Gables,
            </p>
            <p className="" style={{ color: '#9F9F9F' }}>
              FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div className="col-6 col-md-2">
            <h6 className="text-uppercase fw-normal mb-3 " style={{ color: '#9F9F9F' }}>
              Links
            </h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-dark text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="text-dark text-decoration-none">
                  Shop
                </a>
              </li>
              <li>
                <a href="/" className="text-dark text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-dark text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className="col-6 col-md-3">
            <h6 className="text-uppercase fw-normal mb-3" style={{ color: '#9F9F9F' }}>
              Help
            </h6>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Returns
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-12 col-md-4">
            <h6 className="text-uppercase fw-normal mb-3" style={{ color: '#9F9F9F' }}>
              Newsletter
            </h6>
            <form className="d-flex flex-column flex-md-row">
              <input
                type="email"
                className="form-control mb-2 mb-md-0 me-md-2"
                placeholder="Enter Your Email Address"
              />
              <button type="submit" className="btn btn-dark">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <hr className="my-4" />

        <div className="text-center text-md-start pb-4">2023 furino. All rights reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
