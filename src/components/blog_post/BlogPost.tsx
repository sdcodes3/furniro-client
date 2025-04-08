import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faTag, faUser } from '@fortawesome/free-solid-svg-icons';
import './blogpost.scss';
import blogpsot from '../../assets/blogpost.jpeg';

const BlogPost = () => {
  return (
    <div className="container">
      <div className="card custom-card mb-4 mt-4">
        <img src={blogpsot} className="card-img-top" />
        <div className="card-body">
          <div className="d-flex gap-5 mb-3">
            <span>
              <FontAwesomeIcon icon={faUser} /> Admin
            </span>
            <span>
              <FontAwesomeIcon icon={faCalendar} /> 14 Oct 2022
            </span>
            <span>
              <FontAwesomeIcon icon={faTag} /> wood
            </span>
          </div>
          <h5 className="card-title">Exploring new ways of decorating</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer
            malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus
            risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis
            molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero.
            Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
            ornare aenean euismod elementum.
          </p>
          <p className="card-readMore">Read more</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
