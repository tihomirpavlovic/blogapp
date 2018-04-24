import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { authorService } from '../../services/AuthorService'

class AuthorName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authorData: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        authorService.fetchSingleAuthor(nextProps.userId)
            .then(authorData => {                
                this.setState({
                    authorData
                })
            })
    }

    render() {
        if(this.state.authorData){
        return (
            <div className="center">
                <Link to={`/author/${this.props.userId}`} className="blue-grey-text text-darken-4"><h6>{this.state.authorData.name}</h6></Link>
            </div>
        )
    } else {
        return  <h1>Loading</h1>
    }
    } 
}

export default AuthorName; 