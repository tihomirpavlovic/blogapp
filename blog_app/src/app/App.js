import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About/About';
import Home from './Home/HomePage';
import Author from './Authors/AuthorsPage';
import Post from './PostPage/PostMain'
import CreatePost from './PostPage/CreatePost'
import AuthorDetails from './AuthorDetails/AuthorDetails';

const App = (props) => {

  return (

    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/authors' component={Author} />
      <Route path='/about' component={About} />
      <Route path='/author/:id' component={AuthorDetails} />
      <Route exact path='/post/new' component={CreatePost} />
      <Route path='/post/:id' component={Post} />
    </Switch>


  );
}


export default App;
