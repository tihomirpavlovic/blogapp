import React, { Component } from 'react';
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';
import BlogList from './BlogList';
import { postService } from '../../services/PostServices'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],

    }
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    postService.fetchPost()
      .then(postData => {
        this.setState({
          posts: postData.slice(0, 10)
        })
      })
  }

  

  render() {
    return (
      <div>
        <Header title="Blog" />
        <h4 className="center blue-grey-text text-darken-4">POSTS</h4>

        <BlogList items={this.state.posts} />

        <Footer />
      </div>
    );
  }
}

export default Home;