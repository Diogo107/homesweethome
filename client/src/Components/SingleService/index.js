import React from 'react';
import iconService from '../../asset/images/worker.png'
import './style.scss';

const SingleService = props => {
  return (
    <div className="announcement__container">
        <img className="annoucement__image" src={iconService} alt={props.title} />
        <div className="announcement__text">
         <strong>{props.workField}</strong>
         <small>{props.name}</small>
         <h6>{props.price} €</h6>
         <p>{props.phoneNumber}</p>
         </div>
      </div>
        
      
    );
};

export default SingleService;
