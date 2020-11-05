import React, { Component } from "react";
import axios from "axios";
import "./find.scss";

const Post = (props) => (
  <tr>
    <td>{props.post.documentType}</td>
    <td>{props.post.documentName}</td>
    <td>{props.post.location}</td>
    <td>{props.post.Name}</td>
  </tr>
);

class Find extends Component {
  constructor(props) {
    super(props);
    this.postList = this.postList.bind(this);
    this.getData = this.getData.bind(this);

    this.state = {
      posts: [],
    };
  }
  

  componentDidMount() {
    this.getData();
  }
  getData = () => {
    axios
      .get("http://localhost:8080/post")
      .then((response) => {
        const data = response.data;
        console.log(data);
        this.setState({
          posts: data,
        });
       

        console.log("Data has been received");
      })
      .catch(() => {
        console.log("error retrieving data");
      });
  };

  postList = () => {
    return this.state.posts.map((currentPost) => {
      return <Post post={currentPost} key={currentPost._id} />;
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <h4 className="display-8">Found documents.</h4>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>The type of the document.</th>
              <th>Name of the document.</th>
              <th>Location.</th>
              <th>Name of the document founder.</th>
            </tr>
          </thead>
          <tbody>{this.postList()}</tbody>
        </table>
        
      </div>
    );
  }
}

export default Find;
