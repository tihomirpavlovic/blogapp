import React from 'react';


const AuthorAddress = (props) => {
  return (
    <div className="container">
      <div className="col s12 m7">
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
              <h5>Address</h5>
              <p>street: <b>{props.singleAuthor.address.street}</b> <br />
                city: <b>{props.singleAuthor.address.city}</b><br />
                zipcode: <b>{props.singleAuthor.address.zipcode}</b>
        </p>
            </div>

          </div>

          <iframe title="bgd" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d90579.07297736466!2d20.461977599999997!3d44.8094208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1521834298042"></iframe>

        </div>
      </div>
    </div>
  )
}

export default AuthorAddress;