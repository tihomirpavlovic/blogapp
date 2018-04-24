import React, { Component } from 'react';
import AuthorInfo from "./AuthorsInfo";
import AuthorAddress from "./AuthorAddress";
import AuthorCompany from "./AuthorCompany";
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';
import { Link } from 'react-router-dom';
import { authorService } from '../../services/AuthorService'

class AuthorDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
          }
        }
        componentDidMount() {
          this.fetchAuthorSingle(this.props.match.params.id);
        }
      
        fetchAuthorSingle = (id) => {
          authorService.fetchSingleAuthor(id)
            .then(authorData => {
                console.log(authorData);
                this.setState({
                    singleAuthor: authorData
                })
                
            })
            
        }
      
    render() {
if(this.state.singleAuthor){

    return (
        <div>
            <Header />
            <div className="container">
                <br />
                <Link to="/authors" className="waves-effect orange darken-3 btn"><i className="material-icons left">chevron_left</i>Back</Link>
                <h3 className="center">Single Author</h3>
            </div>
            <AuthorInfo singleAuthor={this.state.singleAuthor} />
            <AuthorAddress singleAuthor={this.state.singleAuthor}/>
            <AuthorCompany singleAuthor={this.state.singleAuthor}/>
            <Footer />

        </div>

    )
}
else{
    return  <h1>Loading</h1>
}
    
}
}

export default AuthorDetails;