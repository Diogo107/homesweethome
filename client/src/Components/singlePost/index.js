import React from 'react';



import './style.scss';

const SingleService = props => {
  return (
    <div>
      
  <h1>{props.name}</h1>
  <h4>{props.workField}</h4>
  <h5>{props.price}</h5>
  <h5>{props.phoneNumber}</h5>
      </div>
        
      
    );
};

export default SingleService;
