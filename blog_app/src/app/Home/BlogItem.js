import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = (props) => {
  return (
    <div className="row">
      <div className="col s12 m8 offset-m2">
        <div className="card">
          <div className="card-content">
            <Link to={`/post/${props.post.idPost}`} className="card-title orange-text text-darken-3"><h5 className="truncate">{props.post.title}</h5></Link>
            <p>{props.post.lead}</p>
          </div>

        </div>
      </div>
    </div>
  )
}
export default BlogItem;
