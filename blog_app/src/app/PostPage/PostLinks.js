import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class PostLinks extends Component {
   // constructor(props) {
     //   super(props);
        
   // }


    render() {

        return (
            <div className="card-action">
                <p><b>3 more posts from same author</b></p>
                <Link to='/post'>This is a link</Link>

            </div>
        )
    }
}

export default PostLinks; 