import React, { Component } from 'react';
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';
import {Link} from 'react-router-dom';
import {authorService} from '../../services/AuthorService'

class Author extends Component {
    constructor(props) {
		super(props);

		this.state = {
     authorList : [], 
      
    }
    }

    componentDidMount() {
        authorService.fetchAuthor()
        .then((authorList) => {
            this.setState({ authorList: authorList });
})
    }

    render() {
    return(
        <div>
        <Header/>
        <div className="row">
        <h3 className="center">Authors(10)</h3>
        <div className="col s12 m8 offset-m2">
            <div className="collection">
            {this.state.authorList.map((author, i) => {
                return <Link to={"/author/" + author.id} className="collection-item blue-grey-text text-darken-4" key={i}><i className="small material-icons orange-text text-darken-3 left">account_circle</i>{author.name}</Link>
                
})}
           
            
          </div>
               
      </div>
      </div>
      <Footer/>
      </div>
    )
}
}
export default Author;