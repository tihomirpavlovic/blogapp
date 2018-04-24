import React, { Component } from 'react';
import { postService } from '../../services/PostServices';
import { Link } from 'react-router-dom';

import Header from '../Partials/Header';
import Footer from '../Partials/Footer';

import PostLinks from './PostLinks';
import AuthorName from './AuthorName';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
        singlePost: {}
      }
    }
    componentDidMount() {
      this.fetchPost(this.props.match.params.id);
    }
  
    fetchPost = (id) => {
      postService.fetchSinglePost(id)
        .then(postData => {
          this.setState({
            singlePost: postData
          })
        })
    }
  
  
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col s12 m12">
              <div className="card">
                <div className="card-content">
                  <Link to="/" className="waves-effect orange darken-3 btn"><i className="material-icons left">chevron_left</i>Back</Link>
                  <Link to="/post/new" className="waves-effect orange darken-3 btn right"><i className="material-icons left">create</i>New Post</Link>
                  <h1 className="card-title center truncate">{this.state.singlePost.title}</h1>
                 <AuthorName userId={this.state.singlePost.idPost} />
                  <p className="center">{this.state.singlePost.lead}</p>
                </div>
                <PostLinks/>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <Footer />
      </div>
    )
  }
}

export default Post;
