import React, { Component } from 'react';
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';
import { Link, Redirect } from 'react-router-dom';
import { addNewPost } from '../../services/AddPostService';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      lead: "",
      redirectToHome: false,
      errorMessage: ' '
    };
  }

  handleTitleChange = event => {
    this.setState({ title: event.target.value })
  }

  handleLeadChange = event => {
    this.setState({ lead: event.target.value })
  }

  handleCancel = event => {
    this.setState({ redirectToHome: true })
  }

  savePost = () => {
    const newPost = {
      title: this.state.title,
      body: this.state.lead
    }

    addNewPost.add(newPost);

    document.location.replace("http://localhost:3000/#/");
  }

  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <br />
          <br />
          <br />
          <h5 className="center blue-grey-text  text-darken-4">NEW POST</h5>
            <div className="row">
              <br />
              <div className="input-field col s8 offset-s2">
                <input onChange={this.handleTitleChange} value={this.state.title} id="first_name2" type="text" />
                <label className="active" >Title</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s8 offset-s2">
                <input value={this.state.lead} onChange={this.handleLeadChange} id="first_name2" type="text" />
                <label className="active" >Content</label>
              </div>
              <Link to="/" className="waves-effect orange darken-3 btn col s1 offset-s7" onClick={this.handleCancel}>Cancel</Link>
              <input type="button" value="Save" onClick={this.savePost} className="waves-effect orange darken-3 btn col s1 offset-s1" />
            </div>
          {this.state.redirectToHome && <Redirect to={"/"} />}
        </div>

        <br />
        <Footer />
      </div>
    )
  }
}

export default CreatePost;