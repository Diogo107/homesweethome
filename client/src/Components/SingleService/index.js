import React from 'react';
import './style.scss';

const SingleService = props => {
  return (
    <div>
      <figure className="post__image">
        <img src={props.picture} alt={props.title} />
      </figure>
         <h1>{props.name}</h1>
         <h4>{props.workfield}</h4>
      </div>
        
      
    );
};

export default SingleService;
