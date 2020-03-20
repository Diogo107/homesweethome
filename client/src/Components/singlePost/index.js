import React from 'react';



import './style.scss';

const SingleService = props => {
  console.log('seeing the props', props)
  return (
    <div>
      {props.picture && <figure className="annoucement__image">
        <img src={props.picture} alt={props.title} />
      </figure>}
      
      <h1>{props.title}</h1>
  <h4>{props.description}</h4>
      </div>
        
      
    );
};

export default SingleService;
