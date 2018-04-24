import React from 'react';


const AuthorCompany = (props) => {
    return (
        <div className="container">
        <div className="collection">
        <div className="collection-item">
        <h5 className="title">Company</h5>
        <p>name: <b>{props.singleAuthor.company.name}</b> <br/>
           slogan: <b>{props.singleAuthor.company.slogan}</b>
        </p>
      </div>
      </div>
      </div>
    )}

export default AuthorCompany;