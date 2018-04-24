import React from 'react';
import BlogItem from './BlogItem';

const BlogList = (props) => {
    return (
        <div className="row">
            {props.items.map((item, i) => <BlogItem key={i} post={item} />)}
        </div>
    )
}


export default BlogList; 