import React, { Component } from "react";
import axios from "axios";
import "./post.scss";

class Post extends Component {
  constructor(props) {
    super(props);
    this.onChangeDocumentName = this.onChangeDocumentName.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDocumentNumber = this.onChangeDocumentNumber.bind(this);
    this.onChangeDocumentType = this.onChangeDocumentType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      Name: "",
      documentName: "",
      documentNumber: 0,
      documentType: "",
    };
  }

  onChangeName(e) {
    this.setState({ Name: e.target.value });
  }
  onChangeDocumentName(e) {
    this.setState({
      documentName: e.target.value,
    });
  }
  onChangeDocumentNumber(e) {
    this.setState({ documentNumber: e.target.value });
  }
  onChangeDocumentType(e) {
    this.setState({ documentType: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const post = {
      Name: this.state.Name,
      documentName: this.state.documentName,
      documentNumber: this.state.documentNumber,
      documentType: this.state.documentType,
    };
    console.log(post);
    axios
      .post("http://localhost:8080/post/add", post)
      .then((res) => console.log(res.data));
  }
  render() {
    return (
      <div className="container">
        <h3>My-finder</h3>
        <p className="lead">Found a document? post it here</p>
        <p className="lead">
          Kindly leave your phone number for easier location.
        </p>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Enter your name:</label>
            <input
              placeholder="e.g Joshua King"
              type="text"
              className="form-control"
              onChange={this.onChangeName}
              value={this.state.Name}
            />
          </div>

          <div className="form-group">
            <label>Enter the document type:</label>
            <input
              placeholder="e.g ATM"
              type="text"
              className="form-control"
              onChange={this.onChangeDocumentType}
              value={this.state.documentType}
            />
          </div>
          <div className="form-group">
            <label>Enter the name on the document:</label>
            <input
              placeholder="e.g John Doe"
              type="text"
              className="form-control"
              onChange={this.onChangeDocumentName}
              value={this.state.documentName}
            />
          </div>
          <div className="form-group">
            <label>Enter the number on the document:</label>
            <input
              type="number"
              className="form-control"
              onChange={this.onChangeDocumentNumber}
              value={this.state.documentNumber}
            />
          </div>
          <div className="form-group">
            <button className="btn btn btn-primary btn-lg" type="submit">
              post
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Post;
