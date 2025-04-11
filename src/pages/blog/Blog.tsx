// pages imports
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import BlogPost from '../../components/blog_post/BlogPost';
import Promise from '../../components/our_promise/Promise';

// boostrap imports
import { Row, Col } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

// image impots
import RecentPostImage from './../../assets/blog-search-recent-post.jpg';

// css imports
import './blog.scss';

const Blog = () => {
  return (
    <div className="blogMain">
      <Navbar />

      <div className="blog-banner">
        <h1>Blog</h1>
        <h2>Home {'>'} Blog</h2>
      </div>

      <div className="blog-general">
        <Row>
          <Col md={8}>
            <BlogPost />
            <BlogPost />
            <BlogPost />
          </Col>

          <Col md={4} className="second-col">
            <div className="category-search">
              <div className="search-box">
                <input type="text" placeholder="Search..." className="search-input" />
                <FaSearch className="search-icon" />
              </div>
              <h4 className="category-heading">Categories</h4>
              <table className="category-text">
                <tr>
                  <td className="left">Crafts</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td className="left">Design</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td className="left">Homemade</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td className="left">Interior</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td className="left">Wood</td>
                  <td>6</td>
                </tr>
              </table>
              <h4 className="recent-post">Recent Post</h4>
              <div className="recent-post-child">
                <img src={RecentPostImage} alt="book and pen" />
                <div className="recent-post-text">
                  <div className="recent-post-child-text">
                    Going all-in with millennial <br /> design
                  </div>
                  <div className="recent-post-child-date">03 Aug 2022</div>
                </div>
              </div>
              <div className="recent-post-child">
                <img src={RecentPostImage} alt="book and pen" />
                <div className="recent-post-text">
                  <div className="recent-post-child-text">
                    Going all-in with millennial <br /> design
                  </div>
                  <div className="recent-post-child-date">03 Aug 2022</div>
                </div>
              </div>
              <div className="recent-post-child">
                <img src={RecentPostImage} alt="book and pen" />
                <div className="recent-post-text">
                  <div className="recent-post-child-text">
                    Going all-in with millennial <br /> design
                  </div>
                  <div className="recent-post-child-date">03 Aug 2022</div>
                </div>
              </div>
              <div className="recent-post-child">
                <img src={RecentPostImage} alt="book and pen" />
                <div className="recent-post-text">
                  <div className="recent-post-child-text">
                    Going all-in with millennial <br /> design
                  </div>
                  <div className="recent-post-child-date">03 Aug 2022</div>
                </div>
              </div>
              <div className="recent-post-child">
                <img src={RecentPostImage} alt="book and pen" />
                <div className="recent-post-text">
                  <div className="recent-post-child-text">
                    Going all-in with millennial <br /> design
                  </div>
                  <div className="recent-post-child-date">03 Aug 2022</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div
        className="pagination"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '2rem',
          marginBottom: '4rem',
        }}
      >
        <button
          className="page-1"
          style={{
            backgroundColor: '#F9F1E7',
            height: '3rem',
            width: '3rem',
            border: 'none',
            borderRadius: '25%',
          }}
        >
          <span
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              marginTop: '4px',
            }}
          >
            {1}
          </span>
        </button>

        <button
          className="page-2"
          style={{
            backgroundColor: '#F9F1E7',
            height: '3rem',
            width: '3rem',
            border: 'none',
            borderRadius: '25%',
          }}
        >
          <span
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              marginTop: '4px',
            }}
          >
            {2}
          </span>
        </button>

        <button
          className="page-3"
          style={{
            backgroundColor: '#F9F1E7',
            height: '3rem',
            width: '3rem',
            border: 'none',
            borderRadius: '25%',
          }}
        >
          <span
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              marginTop: '4px',
            }}
          >
            {3}
          </span>
        </button>

        <button
          className="More"
          style={{
            backgroundColor: '#F9F1E7',
            height: '3rem',
            width: '3.5rem',
            border: 'none',
            borderRadius: '25%',
          }}
        >
          <span
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              marginTop: '4px',
            }}
          >
            {'More'}
          </span>
        </button>
      </div>
      <Promise />

      <Footer />
    </div>
  );
};

export default Blog;
