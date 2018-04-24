import React from 'react';


const AuthorInfo = (props) => {
    return (
        <div className="container">
            <div className="collection">
                <div className="collection-item row">
                    <div  className="col m3 offset-m1">
                        <i className=" large material-icons orange-text text-darken-3 ">account_circle</i>
                        
                    </div>
                    <div className="col m6">
                    <h5>{props.singleAuthor.name}</h5>
                        <p>username: <b>{props.singleAuthor.username}</b> <br />
                            email: <b>{props.singleAuthor.email}</b><br />
                            phone: <b>{props.singleAuthor.phone}</b>
                        </p></div>

                </div>
            </div>
        </div>
    )
}

export default AuthorInfo;