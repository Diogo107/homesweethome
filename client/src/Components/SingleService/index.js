import React from 'react';
import './style.scss';

const SingleService = props => {
  return (
    <div>
      <figure>
        <img src={props.picture} alt={props.title} />
      </figure>
         <h1>{props.name}</h1>
         <h4>{props.workField}</h4>
         <h4>{props.price}</h4>
         <h4>{props.phoneNumber}</h4>
      </div>
        
      
    );
};

export default SingleService;
