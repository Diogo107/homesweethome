import React from 'react';



import './style.scss';

const SinglePost = props => {
  return (
    <div>
      <figure className="post__image">
        <img src={props.picture} alt={props.title} />
      </figure>
  <h1>{props.title}</h1>
  <h4>{props.description}</h4>
  <h5>{props.creator}</h5>
  <h5>{props.timestamp}</h5>
      </div>
        
      
    );
};

export default SinglePost;