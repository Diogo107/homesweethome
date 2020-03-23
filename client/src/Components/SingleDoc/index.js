import React from 'react';
import './style.scss'




const SingleDoc = props => {
  return (
    <div className="announcement__container">
      <div>
        <img className="annoucement__image" src={props.doc} alt={props.title} />
      </div>
      <div className="announcement__text">
        <strong>{props.title}</strong>
        <small>{props.description}</small>
        <small>{props.creator}</small>
      </div>
    </div>
        
      
    );
};

export default SingleDoc;