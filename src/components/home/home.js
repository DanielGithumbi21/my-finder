import React from "react";
import coverImage from "./image1.jpg";
import "./home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={coverImage} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-md-block text-center">
                <p className="display-5">MY FINDER.</p>
                <p className="display-7">You lost it...We found it😉.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <p className="lead">
          My Finder is a national website that tries to deal with the issue of
          document loss. It's a simple webiste and with just a click,you can
          post a found lost document and also with a click you can find a posted
          lost document. Our aim is to connect the finder and the one who found
          the document.
        </p>

        <p className="lead">Click here to post.</p>
        <Link to="/post">
          <button className="btn btn-sm btn-warning" type="button">
            post
          </button>
        </Link>
        <p className="lead">Click here to find.</p>
        <Link to="/find">
          <button className="btn btn-sm btn-info" type="button">
            find
          </button>
        </Link>
      </div>
      <div className="container-fluid padding">
        <div className="row text-center padding">
          <div className="col-12">
            <h6 className="display-6">Connect</h6>
          </div>
          <div className="col-12 social padding">
            <a href="#">
              <i className="fab fa-facebook">heeeey</i>
            </a>
            <a href="#">
              <i className="fab fa-twitter">hello</i>
            </a>
            <a href="#">
              <i className="fab fa-google-plus-g">google</i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
