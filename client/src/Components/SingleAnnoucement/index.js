import React from 'react';
import './style.scss';

const SingleAnnoucement = props => {
  return (
    <div className="announcement__container">
      <div>
        <img className="annoucement__image" src={props.picture} alt={props.title} />
      </div>
      <div className="announcement__text">
        <strong>{props.title}</strong>
        <small>{props.description}</small>
        <small>
          <i>From: {props.creatorName}</i>
        </small>
        <h5>{props.timestamp}</h5>
      </div>
    </div>
  );
};

export default SingleAnnoucement;
