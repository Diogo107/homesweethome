import React from 'react';



import './style.scss';

const SingleDoc = props => {
  return (
    <div>
      
  <h1>{props.title}</h1>
  <h4>{props.description}</h4>
  <figure className="doc">
        <img src={props.doc} alt={props.title} />
      </figure>
  <h5>{props.creator}</h5>
  <h5>{props.timestamp}</h5>
      </div>
        
      
    );
};

export default SingleDoc;