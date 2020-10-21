import React from "react";
import { Link } from "react-router-dom";
import "./about.scss";

const About = () => {
  return (
    <div className="container-fluid">
      <p className="lead">
        My Finder is a national website that tries to deal with the issue of
        document loss. It's a simple webiste and with just a click,you can post
        a found lost document and also with a click you can find a posted lost
        document. Our aim is to connect the finder and the one who found the
        document.
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
  );
};
export default About;
