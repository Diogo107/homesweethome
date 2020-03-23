import React from 'react';



import './style.scss';

const SinglePost = props => {
  console.log('seeing the props', props)
  return (
      <div className="announcement__container">
         <div>
            <img className="annoucement__image" src={props.picture} alt={props.title} />
         </div>
         <div className="announcement__text">
            <strong>{props.title}</strong>
            <small>{props.description}</small>  
         </div>
      </div>
        
      
    );
};

export default SinglePost;
